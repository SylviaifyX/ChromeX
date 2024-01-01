import Rec from "../../assets/rec.png"
import icon from "../../assets/Icon.png"
import iconA from "../../assets/IconA.png"
import iconB from "../../assets/IconB.png"

function Home_Works() {
  return (
    <section className="md:h-[889px] bg-white  md:mt-10 relative ">
      <div className="md:w-[271px] md:flex md:items-center md:justify-center md:mx-auto absolute md:top-10 md:left-0 md:right-0">
        <h1 className="md:text-[40px] md:font-bold md:leading-normal md:text-[#141414]">
          How it works
        </h1>
      </div>

      <div className="md:mt-[130px] md:w-[1240px] md:h-[567px]  md:mx-auto md:left-0 md:right-0 absolute md:inline-flex gap-[89px] md:items-end  bg-yellow-500">
        <div className="md:h-[567px] md:w-[358px] md:flex md:flex-col md:gap-[32px] md:items-center ">
          <div className="md:h-[269px] md:w-full md:flex md:flex-col md:gap-[10px] md:mb-9">
            <img src={icon} className="w-[68px] h-[68px] md:mx-auto md:mt-3 md:mb-3 " alt="" />
            <h1 className="md:text-[28px] md:text-[#1B233D] md:font-[600] md:leading-normal md:font-[Inter] md:w-[198px] md:h-[34px] md:text-center md:mx-auto">Record Screen</h1>
            <p className="md:h-[120px] md:text-center md:text-[20px] md:font-[400] md:leading-[38.26px] md:text-[#616163] ">Click the "Start Recording" button in our extension. choose which part of your screen to capture and who you want to send it to.</p>
          </div>

          <div className="md:w-[356.784px]  md:h-[250.388px]">
            <img src={Rec} alt="record" />
          </div>
        </div>
        <div className="md:h-[567px] md:w-[358px] md:flex md:flex-col md:gap-[32px] md:items-center">
          <div className="md:h-[269px] md:w-full md:flex md:flex-col md:gap-[10px] md:mb-9">
            <img src={iconA} className="w-[68px] h-[68px] md:mx-auto md:mt-3 md:mb-3 " alt="" />
            <h1 className="md:text-[28px] md:text-[#1B233D] md:font-[600] md:leading-normal md:font-[Inter] md:w-[293px] md:h-[34px] md:text-center md:mx-auto">Share Your Recording</h1>
            <p className="md:h-[120px] md:text-center md:text-[20px] md:font-[400] md:leading-[38.26px] md:text-[#616163]">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
          </div>

          <div className="md:w-[356.784px]  md:h-[250.388px]">
            <img src={Rec} alt="record" />
          </div>
        </div>
        <div className="md:h-[567px] md:w-[358px] md:flex md:flex-col md:gap-[32px] md:items-center">
          <div className="md:h-[269px] md:w-full md:flex md:flex-col md:gap-[10px] md:mb-9">
            <img src={iconB} className="w-[68px] h-[68px] md:mx-auto md:mt-3 md:mb-3 " alt="" />
            <h1 className="md:text-[28px] md:text-[#1B233D] md:font-[600] md:leading-normal md:font-[Inter] md:w-[240px] md:h-[34px] md:text-center md:mx-auto">Learn Effortlessly</h1>
            <p className="md:h-[120px] md:text-center md:text-[20px] md:font-[400] md:leading-[38.26px] md:text-[#616163]">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
          </div>

          <div className="md:w-[356.784px]  md:h-[250.388px]">
            <img src={Rec} alt="record" />
          </div>
        </div>
        </div>
    </section>
  );
}

export default Home_Works;
