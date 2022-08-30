import "./App.css";

// Component
import Header from "./Components/Header/Header";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import BackDropVideo from "./Components/BackDropVideo/BackDropVideo"; 

// Container
import Home from "./Containers/Home/Home";
import Contact from "./Containers/Contact/Contact";
import Banner from "./Containers/Banner/Banner";
import Video from "./Containers/Video/Video";
import { useEffect } from "react";
import { useState } from "react";

function App() {

  const [scrollTop, setScrollTop] = useState(false);
  const [backDropVideo, setBackDropVideo] = useState({
    open:false,
    media:''
  });
  

  const handleScrollTotop = () => {
    window.scrollTo(0, 0);
  };
  useEffect(() => {
    const handleScroll = () => setScrollTop(window.scrollY >= 200);
    window.addEventListener("scroll", handleScroll);
    // Cleanup function:
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  function handleBackDropVideo (open,media) {
    setBackDropVideo((preState)=>{
      return {
        ...preState,
        open:open,
        media:media
      }
    })
  }


  return (
    <div className="App">
      <Header />

      <Home>
        <BackDropVideo
          backDropVideo={backDropVideo}
          handleBackDropVideo={handleBackDropVideo}
        />
      </Home>

      <Banner />

      <Video>
      <BackDropVideo
          backDropVideo={backDropVideo}
          handleBackDropVideo={handleBackDropVideo}
        />
      </Video>
      {/* <Contact/> */}
      {scrollTop && <ScrollToTop handleScrollTotop={handleScrollTotop} />}
    </div>
  );
}

export default App;
