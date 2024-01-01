import logo from "../../assets/logo.jpg";
function Footer() {
  return (
    <footer className="w-full h-[347px] bg-[#120B48] p-[98px 130px] flex items-center justify-center ">
      <section className="w-full max-w-[1200px] p-[10px] sm:p-[20px] md:p-0 lg:flex lg:items-center  lg:gap-[243px] ">
        <div className=" w-full md:w-[157px] h-[60px] md:flex md:p-[10px] md:items-start md:flex-col  gap-[10px]">
          <div className="md:w-[137px] sm:w-[137px] h-[40px] md:flex md:items-center md:gap-[8px] flex items-center gap-3 w-full mx-auto ">
            <img src={logo} alt="" />
            <p className="w-[89px] h-[19px] text-[16px] font-bold leading-normal font-Inter text-[#fff]">
              HelpMeOut
            </p>
          </div>
        </div>
      
        <div className="flex items-center justify-between  md:w-[780px] h-[158px] md:flex mditems-center md:gap-[100px] sm:w-[550px] sm:mx-auto sm:flex  md:items-center sm:justify-between ">
            <ul className="flex flex-col gap-[10px] md:flex md:flex-col md:gap-[20px] text-white">
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Menu</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Home</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Converter</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">How it Works</li>
            </ul>
            <ul className="flex flex-col gap-[10px] md:flex md:flex-col md:gap-[20px] text-white">
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">About us</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">About</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Contact Us</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Privacy Policy</li>
            </ul>
            <ul className="flex flex-col gap-[10px] md:flex md:flex-col md:gap-[20px] text-white">
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Screen Record</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Brower Window</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Desktop</li>
                <li className="md:text-[16px] md:font-[600] md:leading-normal text-[12px]">Application</li>
            </ul>
        </div>
        
      </section>
    </footer>
  );
}
export default Footer;
