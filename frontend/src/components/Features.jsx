import circle from "../assets/record-circle.svg";
import send from "../assets/send.svg";
import refresh from "../assets/refresh.svg";
import videoR from "../assets/VideoR.png";
import { Wrapper } from "./Wrapper";

export function Features() {
  const features = [
    {
      icon: circle,
      title: "Simple Screen Recording",
      description:
        "Effortless screen recording for everyone. Record with ease, no tech expertise required.",
    },
    {
      icon: send,
      title: "Easy-to-Share URL",
      description:
        "Share your recordings instantly with a single link. No attachments, no downloads.",
    },
    {
      icon: refresh,
      title: "Revisit Recordings",
      description:
        "Access and review your past content effortlessly. Your recordings, always at your fingertips.",
    },
  ];

  return (
    <section id="features">
      <Wrapper>
        <div className="text-center pt-12">
          <h1 className="font-bold text-[#141414] text-3xl">Features</h1>
          <p className="py-2 text-[#616163]">
            {" "}
            Key Highlights of Our Extension{" "}
          </p>
        </div>

        <div className="md:flex">
          <ul className="">
            {features.map(({ icon, title, description }, index) => (
              <Li
                icon={icon}
                title={title}
                description={description}
                key={index}
              />
            ))}
          </ul>

          <div className="py-8">
            <img
              src={videoR}
              className="object-cover h-full rounded-md shadow-md"
              alt="video"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

const Li = ({ icon, title, description }) => {
  return (
    <li className="flex gap-2 mt-2 md:gap-4">
      <img
        src={icon}
        className="bg-[#120B48] rounded-full p-1 h-8 w-8 mt-1"
        alt=""
      />

      <div className="">
        <h1 className="font-[600] text-lg">{title}</h1>
        <p className="">{description}</p>
      </div>
    </li>
  );
};
