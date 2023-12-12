import logo from "../../assets/logo.jpg";
import google from "../../assets/Google.jpg";
import facebook from "../../assets/Facebook.svg";

function Auth() {
  return (
    <div className="w-full h-screen bg-white flex items-center justify-center flex-col relative">
      <div className="absolute top-[30px] left-[50px] w-[137px] h-[40px] flex items-center gap-1">
        <div className="w-[40px] h-[40px]">
          <img className="object-cover w-full" src={logo} alt="" />
        </div>

        <p className="text-[#100A42] text-[16px] leading-normal font-Inter w-[89px] h-[19px] font-bold">
          HelpMeOut
        </p>
      </div>

      <form
        className="w-full max-w-[445px] h-[550px] mt-5 flex flex-col items-center gap-[30px] "
        action="#"
      >
        <div className="w-[321px] h-[99px] flex items-center flex-col gap-[8px] text-center mx-auto">
          <h1 className="w-[265px] h-[48px] text-[#0f0c0c] font-Inter text-[32px] font-bold leading-[48px] tracking-[0.32px] text-center">
            Log in or Sign up
          </h1>
          <p className="w-[321px] h-[43px] text-[14px] font-[300] text-center leading-[21px] tracking-[0.14px]">
            Join millions of others in sharing successful moves on.
            <span>HelpMeOut</span>
          </p>
        </div>
        <div className="w-[445px] h-[48px] p-[3px 123px 3px 133px] border border-[#141414] rounded-[12px]">
          <div className="w-[291px] h-[42px] bg-white flex items-center justify-center mx-auto gap-[16px] p-[9px 10px;]">
            <img className="w-[24px] h-[24px]" src={google} alt="" />
            <p className="text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#141414]">
              Continue with Google
            </p>
          </div>
        </div>
        <div className="w-[445px] h-[48px] p-[3px 123px 3px 133px] border border-[#141414] rounded-[12px]">
          <div className="w-[250px] h-[42px] bg-white flex items-center justify-center mx-auto gap-[16px] p-[9px 10px;]">
            <img className="w-[24px] h-[24px]" src={facebook} alt="" />
            <p className="text-[16px] font-[500] leading-[24px] tracking-[0.16px] text-[#141414]">
              Continue with Facebook
            </p>
          </div>
        </div>
        <div className="w-[445px]  h-[150px] flex flex-col gap-[16px]">
          <div className="flex flex-col items-start gap-[8px]">
            <label htmlFor="">Email</label>
            <input className="w-full p-[10px] rounded-[12px] border border-[#B6B3C6]" type="text" />
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <label htmlFor="">Password</label>
            <input className="w-full p-[10px] rounded-[12px] border border-[#B6B3C6]" type="text" />
          </div>
        </div>
        <button className="w-full p-[16px 20px] h-[53px] bg-[#120B48] flex items-center justify-center text-white rounded-[8px] mt-4">Sign Up</button>
      </form>
    </div>
  );
}
export default Auth;
