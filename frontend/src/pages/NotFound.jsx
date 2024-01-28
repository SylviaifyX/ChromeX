import { useRouteError } from "react-router-dom";
import { NavBar } from "../components/Navbar";
import { Wrapper } from "../components/Wrapper";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <NavBar />
      <Wrapper className="pt-8">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Wrapper>
    </div>
  );
};
