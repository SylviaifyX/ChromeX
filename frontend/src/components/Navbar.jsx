import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { Wrapper } from "./Wrapper";

export function NavBar() {
  return (
    <header className="w-full border-b-2 border-[#F4F6F8] py-6">
      <Wrapper className="flex items-center justify-between">
        <Logo />

        <nav className="md:flex w-[235px] h-[39px] items-center justify-center p-[10px 21px 10px 20px] gap-[39px] hidden ">
          <a
            href="#features"
            className="font-medium text-[#141414] hover:text-[#777785]"
          >
            Features
          </a>
          <a
            href="#how-it-works"
            className="font-medium text-[#141414] hover:text-[#777785]"
          >
            How It Works
          </a>
        </nav>

        <Link
          to={"/auth"}
          className="items-center text-md font-semibold text-[#120B48] md:hover:bg-[#c7c1ff86] py-2 px-4 rounded-md"
        >
          Get Started
        </Link>
      </Wrapper>
    </header>
  );
}
