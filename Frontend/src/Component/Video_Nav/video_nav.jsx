
import logo from "../../assets/logo.jpg"
import profile from "../../assets/profile.png"
import downArrow from "../../assets/arrow-down.png"
function Video_Nav(){
    return(
        <nav className="w-full lg:w-full  md:p-[8px] p-4">
            <div className=" flex items-center justify-between w-full md:max-w-[1200px] md:mx-auto md:flex md:items-center md:justify-between md:p-[8px]">
                <div className="flex items-center justify-center gap-3 md:w-[137px] md:h-[40px] md:flex md:items-center md:justify-center md:gap-[8px] sm:w-[137px] sm:h-[40px] sm:flex sm:items-center sm:justify-center sm:gap-[8px]">
                   <img src={logo} className=" w-[30px] h-[30px] md:w-[40px] md:h-[40px]  sm:w-[40px] sm:h-[40px]" alt="logo" />
                   <p className="md:w-[89px] md:h-[19px] md:text-[16px]  sm:h-[19px] sm:text-[16px]  text-[15px] text-[#100A42] font-bold font-Inter leading-normal">HelpMeOut</p>
                </div>
                <div className=" flex items-center justify-center gap-[3px] md:w-[163px] md:h-[40px] md:flex md:items-center md:justify-center md:gap-[8px] sm:w-[163px] sm:h-[40px] sm:flex sm:items-center sm:justify-center sm:gap-[8px]">
                    <img src={profile} className="w-[30px] h-[30px] md:w-[40px] md:h-[40px] sm:w-[40px] sm:h-[40px]" alt="profile" />
                    <p className="md:w-[83px] md:h-[19px]  sm:w-[83px] sm:h-[19px] font-[400] text-[13px] md:text-[16px] leading-normal text-[#141414]">John Mark</p>
                    <img src={downArrow} className="md:w-[24px] md:h-[24px] sm:w-[24px] sm:h-[24px] w-[20px] h-[20px] md:flex md:items-center md:justify-center"  alt="down-arrow" />
                </div>
            </div>
        </nav>
    )
}

export default Video_Nav;