import { Auth } from "./pages/Auth";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import { Home } from "./pages/Home";
import { Video } from "./pages/video_rep";
import { NavBar } from "./components/Navbar";
import { Footer } from "./components/Footer";

function App() {
  const Layout = () => {
    return (
      <>
        <NavBar />
        <Outlet />
        <Footer />
      </>
    );
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>
          <Route path="auth/" element={<Auth />} />
          <Route path="videoRep/" element={<Video />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
