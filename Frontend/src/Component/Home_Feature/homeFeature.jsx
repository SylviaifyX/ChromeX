import circle from "../../assets/record-circle.svg";
import send from "../../assets/send.svg";
import refresh from "../../assets/refresh.svg";
import videoR from "../../assets/videoR.png"
function Home_Feature() {
  return (
    <section className="md:w-full md:h-[766px] md:bg-white md:mt-10 relative md:flex md:flex-col md:p-5">
      <div className="md:w-[800px] md:flex md:items-center md:justify-center md:flex-col md:gap-[8px] md:mx-auto absolute md:top-10 md:left-0 md:right-0 md:pb-2">
        <h1 className="md:text-[40px] md:font-bold md:leading-normal md:text-[#141414]">
          Features
        </h1>
        <p className="md:text-[20px] md:font-[400] md:text-[#616163]">
          Key Highlights of Our Extension
        </p>
      </div>
      <div className="md:flex md:items-center md:mt-[200px] md:gap-[56px] md:h-[402px] m-4">
        <div className="md:w-1/2  md:h-[402px] md:flex md:flex-col md:gap-[48px]">
          <div className="  md:gap-[16px] md:flex md:h-[102px]">
            <img src={circle} className="bg-[#120B48] md:rounded-full md:mt-2   md:p-1 md:h-[32px] md:w-[32px]" alt="circle" />
         
            <div className="">
              <h1 className="md:text-[28px] md:font-[600] h-[34px] md:text-Inter md:leading-normal">
                Simple Screen Recording
              </h1>
              <p className="md:h-[60px] md:text-[20px] md:font-normal md:leading-[30.26px] md:mt-2 ">
                Effortless screen recording for everyone. Record with ease, no
                tech expertise required.
              </p>
            </div>
          </div>

          <div className="  md:gap-[16px] md:flex md:h-[102px]">
            <img src={send} className="bg-[#120B48] md:rounded-full md:mt-2   md:p-1 md:h-[32px] md:w-[32px]" alt="circle" />
         
            <div className="">
              <h1 className="md:text-[28px] md:font-[600] h-[34px] md:text-Inter md:leading-normal">
              Easy-to-Share URL
              </h1>
              <p className="md:h-[60px] md:text-[20px] md:font-normal md:leading-[30.26px] md:mt-2 ">
                Share your recordings instantly with a single link. No
                attachments, no downloads.
              </p>
            </div>
          </div>

          <div className="  md:gap-[16px] md:flex md:h-[102px]">
            <img src={refresh} className="bg-[#120B48] md:rounded-full md:mt-2   md:p-1 md:h-[32px] md:w-[32px]" alt="circle" />
         
            <div className="">
              <h1 className="md:text-[28px] md:font-[600] h-[34px] md:text-Inter md:leading-normal">
                    Revisit Recordings
              </h1>
              <p className="md:h-[60px] md:text-[20px] md:font-normal md:leading-[30.26px] md:mt-2 ">
                 Access and review your past content effortlessly. Your
                recordings, always at your fingertips.
              </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 md:h-[454px] md:rounded-[8px]">
            <img src={videoR} className="object-cover h-full md:rounded-[8px]" alt="video" />
        </div>
      </div>
    </section>
  );
}
export default Home_Feature;
