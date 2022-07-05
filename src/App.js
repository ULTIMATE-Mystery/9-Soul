import "./App.css";
import { useEffect, useState } from "react";
import HomeVideo from "./Components/homeVideo/homeVideo"
import Introduce from "./Components/Introduce/introduce";
import Problems from "./Components/Problems/problems";
import Special from "./Components/Special/special";
import StepCard from "./Components/Card/StepCard";
import SimpleSwiperWithParams from "./Components/swiper/swiper";
import Sponsor from "./Components/sponsor/sponsor";
import Finance from "./Components/finance/finance";
import Form from "./Components/form/form";
import Job from "./Components/job/job";
import Navbar from "./Components/navbar/navbar";
import Footer from "./Components/footer/footer";
import BackToTopButton from "./Components/BackToTopButton/BackToTopButton"
import SocialSidebar from "./Components/socialSidebar/SocialSidebar"

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  useEffect(() => {
    if (windowSize.width < 500) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [windowSize]);

  return (
    <div className="h-screen ">
      <SocialSidebar/>
      <div>
        <Navbar />
      </div>
      <div className="">
        <div>
          <HomeVideo isMobile={isMobile} />
        </div>
        <div className="px-4 mt-10">
          <Problems isMobile={isMobile} />
        </div>
        <div className="mt-16">
          <Introduce />
        </div>
        <div className="px-4">
          <Special />
        </div>

        <div className="mt-20 px-3 lg:px-[180px] md:px-[50px]">
          <div className="flex justify-center font-head font-semibold text-16 lg:text-24">
            Hành trình phát triển
          </div>
          <div className="mt-10  grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-x-[15px] lg:gap-y-[15px] ">
            <StepCard />
          </div>

          <div
            className="mt-[50px] flex flex-col
        items-center"
          >
            <div className="flex justify-center font-head font-semibold text-16  lg:text-24">
              Mentor dẫn dắt
            </div>
            <div className="font-body text-[11px] lg:text-[16px]">
              Mỗi chương trình sẽ có bộ 3 Mentors đồng hành cùng bạn
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10">
        <SimpleSwiperWithParams isMobile={isMobile} />
      </div>

      <div className="mt-20">
        <Sponsor isMobile={isMobile} />
      </div>
      <div className="mt-20">
        <Finance />
      </div>
      <div className="mb-[120px]">
        <Form isMobile={isMobile} />
      </div>
      <div className="-mt-20 lg:px-[80px]">
        <div
          className="mt-[10px]0 flex flex-col
        items-center"
        >
          <div className="flex justify-center font-head font-semibold text-16 lg:text-24 ">
            Đối tác tuyển dụng
          </div>
        </div>
        <Job isMobile={isMobile} />
      </div>
      <Footer isMobile={isMobile} />
      <BackToTopButton/>
    </div>
  );
}
export default App;
