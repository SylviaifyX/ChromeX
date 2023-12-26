import logo from "../../assets/logo.jpg";
function Nav_Bar() {
  return (
    <header className="w-full p-[12px] border-b-2 border-[#F4F6F8] ">
      <div className=" bg-white  w-full max-w-[1200px] flex items-center justify-between lg:gap-[200px] mx-auto">
        <div className="w-[137px] h-[40px] flex items-center justify-center gap-[8px]">
          <img src={logo} className="w-[40px] h-[40px]" alt="logo" />
          <p className="w-[89px] h-[19px] text-[16px] font-bold leading-normal font-Inter text-[#100A42]">
            HelpMeOut
          </p>
        </div>
        <div className="md:flex w-[235px] h-[39px] items-center justify-center p-[10px 21px 10px 20px] gap-[39px] hidden ">
          <p className="w-[68px] h-[19px] font-[500] text-[16px] leading-normal text-[#141414]">
            Features
          </p>
          <p className="w-[105px] h-[19px] font-[500] text-[16px] leading-normal text-[#141414]">How It Works</p>
        </div>
        <div className="w-[128px] h-[47px] md:flex items-center flex-col justify-center gap-[10px] p-[12px] hidden ">
          <p className="w-[103px] h-[23px] items-center text-[18px] font-[600] leading-normal text-[#120B48]">Get Started</p>
        </div>
      </div>
    </header>
  );
}
export default Nav_Bar;
