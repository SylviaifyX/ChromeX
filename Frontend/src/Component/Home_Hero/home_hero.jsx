import arrowRight from "../../assets/arrow-right.svg";
import adobe from "../../assets/Adobe.png";
import tutor from "../../assets/tutors.png";
import women from "../../assets/woman.png";
import grid from "../../assets/grid.png"
function Home_Hero() {
  return (
    <section className="md:flex md:items-center md:h-[777px] md:gap-10 sm:flex sm:items-center sm:justify-between bg-white sm:p-6">
      <div className="md:w-1/2  max-w-[1200px] sm:w-full">
        <div className="h-[371px]  md:w-[548px]  md:mx-auto sm:mx-auto sm:w-full">
          <h1 className="md:text-[#141414] md:text-[64px] md:w-[468px] md:h-[128px] md:font-bold md:leading-[64px] sm:text-[35px] sm:w-[300px] sm:h-[128px] sm:font-bold sm:leading-[64px]">
            Show Them Don’t Just Tell
          </h1>
          <p className="md:w-[548px] h-[56px] md:font-[400] md:text-[black] md:text-Inter md:text-[20px] md:leading-[28px] md:mt-5 sm:text-[10px] sm:w-[300px]">
            Help your friends and loved ones by creating and sending videos on
            how to get things done on a website.
          </p>

          <button
            className="md:w-[239px] md:h-[65px] md:rounded-[8px] md:bg-[#120B48] md:p-[22px] md:flex md:gap-[10px] md:items-center md:mt-24 md:justify-center"
            type="button"
          >
            <p className="md:w-[159px] md:h-[21px] md:text-[18px] md:font-[500] md:text-white md:leading-normal">
              Install HelpMeOut
            </p>
            <img
              src={arrowRight}
              className="md:w-[20px] md:h-[20px] md:flex md:items-center md:justify-center"
              alt=""
            />
          </button>
        </div>
      </div>
      <div className="md:w-1/2   sm:w-full ">
        <div className=" md:grid md:grid-cols-2 md:gap-5 md:z-[999] md:relative  sm:grid sm:grid-cols-2 sm:gap-3 sm:z-[999] sm:relative sm:w-full">
          <div className=" md:w-[311px] md:h-[221px] md:flex md:items-center md:justify-center  sm:h-[214px] sm:flex sm:items-center sm:justify-center">
            <img src={adobe} className="md:rounded-[8px]" alt="" />
          </div>
          <div className=" md:row-span-2  ">
            <img src={women} className="md:rounded-[8px] object-cover md:h-full" alt="" />
          </div>
          <div className=" md:w-[311px] md:h-[218px] md:flex md:items-center md:justify-center">
            <img src={tutor} className="md:rounded-[8px]" alt="" />
          </div>
        </div>
        <div className="md:w-[280px] md:h-[313px] md:absolute md:top-[190px]  md:right-3 z-0">
            <img src={grid} className="w-full object-contai h-full" alt="" />
        </div>
        <div className="md:w-[280px] md:h-[313px] md:absolute md:bottom-[-130px] md:right-[440px] z-0">
            <img src={grid} className="w-full object-contai h-full" alt="" />
        </div>
      </div>
    </section>
  );
}
export default Home_Hero;
