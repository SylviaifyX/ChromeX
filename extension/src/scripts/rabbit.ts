type Queue = [string, string, Buffer];
import amqp, {
  Connection,
  ConfirmChannel,
  ConsumeMessage,
  Channel,
} from "amqplib";
let amqpConn: Connection | null = null;
let pubChannel: ConfirmChannel | null = null;
let offlinePubQueue: Queue[] = [];
let count = 0;
const queue = "chi";

async function start(): Promise<any> {
  try {
    const connection = await amqp.connect("amqp://localhost:5676");
    connection.on("error", function (err: Error) {
      if (err.message !== "Connection closing") {
        console.error("[AMQP] conn error", err.message);
      }
    });
    connection.on("close", function () {
      console.error("[AMQP] reconnecting");
      return setTimeout(start, 1000);
    });
    amqpConn = connection;
    whenConnected();
    console.log("[AMQP] connected");
  } catch (err: any) {
    console.error("[AMQP]", err.message);
    return setTimeout(start, 1000);
  }
}

function whenConnected() {
  startPublisher();
  startWorker();
}

async function startPublisher() {
  try {
    if (amqpConn) {
      const channel = await amqpConn.createConfirmChannel();
      channel.on("error", function (err) {
        console.error("[AMQP] channel error", err.message);
      });
      channel.on("close", function () {
        console.log("[AMQP] channel closed");
      });
      pubChannel = channel;
      while (offlinePubQueue.length > 0) {
        let queue = offlinePubQueue.shift();
        if (queue && queue.length === 3) {
          const [exchange, routingKey, content] = queue;
          publish(exchange, routingKey, content);
        }
      }
    }
  } catch (err: any) {
    if (closeOnErr(err)) return;
  }
}

async function publish(exchange: string, routingKey: string, content: Buffer) {
  try {
    if (pubChannel) {
      pubChannel.publish(
        exchange,
        routingKey,
        content,
        { persistent: true },
        function (err, ok) {
          if (err) {
            console.error("[AMQP] publish", err);
            offlinePubQueue.push([exchange, routingKey, content]);
            pubChannel && pubChannel.connection.close();
          }
        }
      );
    }
  } catch (err: any) {
    console.error("[AMQP] publish", err.message);
    offlinePubQueue.push([exchange, routingKey, content]);
  }
}

async function startWorker() {
  try {
    if (amqpConn) {
      const channel = await amqpConn.createChannel();

      channel.on("error", function (err) {
        console.error("[AMQP] chaannechannelnnel error", err.message);
      });
      channel.on("close", function () {
        console.log("[AMQP] channel closed");
      });

      channel.prefetch(10);

      await channel.assertQueue(queue, { durable: true });
      channel.consume(queue, processMsg, { noAck: false });

      function processMsg(msg: ConsumeMessage | null) {
        msg &&
          work(
            msg,
            function (msg: ConsumeMessage) {
              try {
                console.log(msg.content.toString());
                return true;
              } catch (e: any) {
                closeOnErr(e);
              }
            },
            channel
          );
      }
    }
  } catch (err: any) {
    if (closeOnErr(err)) return;
  }
}

function work(msg: ConsumeMessage, cb: Function, channel: Channel) {
  const success: boolean = cb(msg);
  success ? channel.ack(msg) : channel.reject(msg, true);
}

function closeOnErr(err: any) {
  if (!err) return false;
  console.error("[AMQP] error", err);
  amqpConn && amqpConn.close();
  return true;
}

setInterval(function () {
  publish("", queue, Buffer.from("Chisom " + count++));
}, 2000);

start();
