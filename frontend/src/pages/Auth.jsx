import backArrow from "../assets/arrowleft.jpg";
import logo from "../assets/logo.jpg";
import google from "../assets/Google.jpg";
import facebook from "../assets/Facebook.svg";

export function Auth() {
  return (
    <div
      className="h-[800px] p-[8px] md:p-0  md:flex md:items-center 
      md:justify-center md:flex-col md:relative md:h-[800px] 
      sm:flex sm:items-center sm:justify-center 
      sm:flex-col sm:relative sm:h-[800px]"
    >
      <div className=" h-[42px] md:w-[137px] md:h-[40px] md:absolute md:top-[30px] md:left-[50px] sm:w-[137px] sm:h-[40px] sm:absolute sm:top-[30px] sm:left-[50px]">
        <img
          src={backArrow}
          className="w-[24px] ml-4 mt-3 h-[24px] md:hidden block sm:hidden"
          alt="back-arrow"
        />
        <div className=" md:flex sm:flex sm:items-center sm:gap-[8px]  md:items-center md:gap-[8px] hidden ">
          <img src={logo} className="w-[40pxpx] h-[40px]" alt="logo" />
          <p className="text-[#100A42] text-[16px] leading-normal font-Inter w-[89px] h-[19px] font-bold">
            HelpMeOut
          </p>
        </div>
      </div>

      <form
        className="w-[300px]  mx-auto md:mx-auto-0 
      gap-[32px] flex  flex-col
      md:flex md:flex-col sm:flex sm:flex-col
      sm:mx-auto-0 h-[590px] md:w-full 
      sm:w-full md:max-w-[445px] 
      md:gap-[32px] sm:gap-[32px] 
      md:h-[600px] sm:max-w-[480px]
      "
      >
        <div className="w-full h-[88px]  md:w-[321px] md:h-[99px]  mx-auto">
          <h1
            className="flex  text-[32px] ml-[10px] 
            font-Inter font-[700] 
            leading-[48px] tracking-[0.32px] 
            md:hidden sm:hidden
          "
          >
            Create an account
          </h1>
          <h1
            className="hidden sm:flex md:flex md:text-center md:ml-[25px]  
            md:text-[32px] md:text-[#141414] md:leading-[48px] md:tracking-[0.32px] md:font-[700]
            sm:text-[32px] sm:text-[#141414] sm:leading-[48px] sm:tracking-[0.32px] sm:font-[700]
            sm:ml-[20%]
            
          "
          >
            Log in or Sign up
          </h1>
          <p
            className="w-full h-[32px] md:w-[321px] md:h-[43px] 
           sm:w-[321px] sm:h-[43px] text-[#434343] text-center  
           text-[14px] md:font-[400] sm:font-[400] md:leading-normal 
           sm:mx-auto
           "
          >
            Join millions of others in sharing successful moves on HelpMeOut.
          </p>
        </div>
        <div
          className="w-full h-[25px]
         border border-[#141414] 
         rounded-[12px] p-[20px]
         bg-white flex
          items-center gap-[16px]"
        >
          <div
            className="flex items gap-[16px] md:flex 
           md:items-center md:mx-auto md:gap-[16px]
            sm:flex  sm:items-center sm:mx-auto sm:gap-[16px] cursor-pointer"
          >
            <img className="w-[24px] h-[24px]" src={google} alt="" />
            <p className="text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#141414] md">
              Continue with Google
            </p>
          </div>
        </div>
        <div className="w-full h-[25px] border border-[#141414] rounded-[12px] p-[20px] bg-white flex items-center gap-[16px] cursor-pointer">
          <div className="flex items gap-[16px] md:flex  md:items-center md:mx-auto md:gap-[16px] sm:flex  sm:items-center sm:mx-auto sm:gap-[16px]">
            <img className="w-[24px] h-[24px]" src={facebook} alt="" />
            <p className="text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#141414]">
              Continue with Facebook
            </p>
          </div>
        </div>

        <div className="flex items-center w-full md:w-[435px] h-[25px] gap-[2px] mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1"
            viewBox="0 0 201 1"
            fill="none"
            className="stroke-1 w-[172px] md:w-[200px] sm:w-[200px]"
          >
            <path
              d="M0.5 0.5L200.5 0.500017"
              stroke="#B9C2C8"
              stroke-linecap="round"
            />
          </svg>
          <div className="w-[34px] h-[25px] flex p-[2px 10px] items-center justify-center flex-col gap-[10px]">
            <p className="text-[#B9C2C8] text-[14px] font-[500] tracking-[0.14px] leading-[21px] font-Inter">
              or
            </p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 201 1"
            fill="none"
            className="stroke-1 w-[172px] md:w-[200px] sm:w-[250px]"
          >
            <path
              d="M0.5 0.5L200.5 0.500017"
              stroke="#B9C2C8"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="md:w-[445px]  md:h-[150px] flex flex-col gap-[16px]">
          <div className="flex flex-col items-start gap-[8px]">
            <label className="text-[#141414] font-[500] leading-normal">
              Email
            </label>
            <input
              className="w-full p-[10px] rounded-[12px] border border-[#B6B3C6] outline-none"
              type="text"
              placeholder="Enter your email address"
            />
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <label className="text-[#141414] font-[500] leading-normal">
              Password
            </label>
            <input
              className="w-full p-[10px] rounded-[12px] border border-[#B6B3C6] outline-none "
              type="text"
              placeholder="Enter your Password"
            />
          </div>
        </div>
        <button className="w-full p-[16px] h-[51px] bg-[#120B48] flex items-center justify-center text-white rounded-[12px] mt-4 md:hidden sm:hidden">
          Create Account
        </button>
        <button className="w-full p-[16px 20px] h-[53px] bg-[#120B48] items-center justify-center text-white rounded-[8px] mt-4 hidden md:flex sm:flex">
          Sign Up
        </button>
      </form>

      <div className="w-[179px] h-[21px] mx-auto flex sm:hidden md:hidden mt-16">
        <p className="text-[#08051E] font-[500] text-[18px] leading-normal underline">
          Continue as a Guest
        </p>
      </div>
    </div>
  );
}
