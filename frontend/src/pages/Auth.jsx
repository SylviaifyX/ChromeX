import google from "../assets/Google.jpg";
import facebook from "../assets/Facebook.svg";
import { Wrapper } from "../components/Wrapper";
import { Logo } from "../components/Logo";
import { Link } from "react-router-dom";

export function Auth() {
  return (
    <Wrapper>
      <header className="pt-6">
        <Logo />
      </header>

      <main className="max-w-lg mx-auto pb-4">
        <div className="max-w-sm mx-auto text-center py-8">
          <h1 className="text-lg font-bold">Log in or Sign up</h1>
          <p>
            {" "}
            Join millions of others in sharing successful moves on HelpMeOut.{" "}
          </p>
        </div>

        <div className="flex flex-wrap gap-y-8">
          <Button text={"Continue with Google"} icon={google} />
          <Button text={"Continue with Facebook"} icon={facebook} />
        </div>
        <Divider />

        <form>
          <Input
            label="Email"
            placeholder="Enter your email address"
            type="email"
          />
          <Input
            label="Password"
            placeholder="Enter your Password"
            type="password"
          />
          <button className="w-full bg-[#141414] rounded-lg text-white py-2 mt-6">
            Login
          </button>
        </form>
        <p className="pt-4">
          <span>Dont have an account?</span>
          <Link to="/signup" className="ml-2 text-blue-400">
            Register here
          </Link>
        </p>
      </main>
    </Wrapper>
  );
}

const Button = ({ text, onClick, icon, className }) => {
  return (
    <button
      className={`w-full border border-[#141414] rounded-xl bg-white flex flex-nowrap items-center gap-4 justify-center py-2 ${
        className ? className : ""
      } `}
      onClick={onClick}
      type="button"
    >
      <img className="w-6 h-6" src={icon} alt="" />
      <p className="text-[16px] font-[500] text-[#141414]">{text}</p>
    </button>
  );
};

const Input = ({ label, placeholder, type }) => {
  return (
    <div className="mt-5">
      <label className="text-[#141414]">{label}</label>
      <input
        className="w-full rounded-lg border border-[#B6B3C6] outline-none py-2 px-4 mt-2"
        type={type || "text"}
        placeholder={placeholder}
      />
    </div>
  );
};

const Divider = () => (
  <div className="relative mt-8">
    <p className="text-center text-[#acacac] before:absolute before:h-[2px] before:bg-[#cfcfcf] before:w-[calc(50%-2rem)] before:top-1/2 before:right-[calc(50%+1.5rem)] after:absolute after:h-[2px] after:bg-[#cfcfcf] after:w-[calc(50%-2rem)] after:top-1/2 after:left-[calc(50%+1.5rem)]">
      or
    </p>
  </div>
);
