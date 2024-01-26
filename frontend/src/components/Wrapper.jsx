export const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`w-11/12 mx-auto max-w-screen-lg ${
        className && typeof className === "string" ? className : ""
      }`}
    >
      {children}
    </div>
  );
};
