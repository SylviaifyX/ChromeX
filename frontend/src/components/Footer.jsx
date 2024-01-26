import { Logo } from "./Logo";
import { Wrapper } from "./Wrapper";

const menu = [
  {
    description: "Home",
    to: "/",
  },
  {
    description: "Converter",
    to: "#",
  },
  {
    description: "How it Works",
    to: "/#how-it-works",
  },
];

const aboutUs = [
  {
    description: "About",
    to: "#",
  },
  {
    description: "Contact Us",
    to: "#",
  },
  {
    description: "Privacy Policy",
    to: "#",
  },
];

const screenRecord = [
  {
    description: "Browser Window",
    to: "#",
  },
  {
    description: "Desktop",
    to: "#",
  },
  {
    description: "Application",
    to: "#",
  },
];

const Li = ({ description, to }) => {
  return (
    <li>
      <a href={to} className="pt-1 inline-block">
        {description}
      </a>
    </li>
  );
};

const Ul = ({ list, heading }) => {
  return (
    <div className="text-white">
      <h3 className="font-semibold pb-1">{heading}</h3>
      <ul>
        {list.map(({ description, to }, index) => (
          <Li description={description} to={to} key={index} />
        ))}
      </ul>
    </div>
  );
};

export function Footer() {
  return (
    <footer className="w-full bg-[#120B48] py-6">
      <Wrapper className="md:flex md:items-start md:justify-between">
        <Logo isDark />

        <div className="flex flex-col gap-y-7 mt-9 sm:flex-row gap-x-20 justify-between md:m-0">
          <Ul list={menu} heading={"Menu"} />
          <Ul list={aboutUs} heading={"About Us"} />
          <Ul list={screenRecord} heading={"Screen Record"} />
        </div>
      </Wrapper>
    </footer>
  );
}
