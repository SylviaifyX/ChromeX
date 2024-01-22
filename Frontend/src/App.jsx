import Auth from "./Layout/Auth/auth";
import { BrowserRouter, Route, Routes, Outlet} from "react-router-dom";
import Home_Page from "./Layout/Home_Page/home_page";
import Nav_Bar from "./Component/Nav_Bar/navbar";
import Footer from "./Component/Footer/footer";
import Video_Rep from "./Layout/Video_Rep/video_rep";
import Video_S from "./Layout/Video_S/videoSing";
function App() {
  const  Layout = () =>{
      return(
        <>
          <Nav_Bar/>
          <Outlet/>
          <Footer/>
        </>
      )
  } 
  return (
    <>
     
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home_Page/>}></Route>
          </Route>
          <Route path="auth/" element={<Auth />}></Route>
          <Route path="videoRep/"element={<Video_Rep/>}></Route>
          <Route path="videoSingle/"element={<Video_S/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
