import logo from "../assets/logo.jpg";

export const Logo = ({ isDark }) => {
  return (
    <a href="/" className="flex items-center gap-2">
      <img src={logo} className="w-10 h-[40px]" alt="logo" />
      <span
        className={`text-lg font-bold leading-normal font-Inter ${
          isDark ? "text-white" : "text-[#100A42]"
        }`}
      >
        HelpMeOut
      </span>
    </a>
  );
};
