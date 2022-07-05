import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Job = (props) => {
  const { isMobile } = props;
  return (
    <section>
      {isMobile ? (
        <section className="mt-20 mr-3 ml-3">
          <Swiper
            className="mt-[50px] h-[250px]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={20}
            slidesPerView={2}
            autoplay={{ delay: 1000 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide className="flex justify-center">
              <div className="bg-gray-300 h-[190px] w-[190px] ">
                <div className="h-[90px]">
                  <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
                </div>
                <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
                  <p className="mt-3 font-head text-[14px] font-medium">
                    {" "}
                    Argency
                  </p>
                  <p className="mt-0.5 font-body text-10">
                    Junior Graphic Design
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="bg-gray-300 h-[190px] w-[190px] ">
                <div className="h-[90px]">
                  <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
                </div>
                <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
                  <p className="mt-3 font-head text-[14px] font-medium">
                    {" "}
                    Argency
                  </p>
                  <p className="mt-0.5 font-body text-10">
                    Junior Graphic Design
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="flex justify-center">
              <div className="bg-gray-300 h-[190px] w-[190px] ">
                <div className="h-[90px]">
                  <img src="https://i.imgur.com/timpSoQ.jpg" alt="img" />
                </div>
                <div className="bg-yellow-main h-[90px] mt-2 flex slanted-div flex-col items-center">
                  <p className="mt-3 font-head text-[14px] font-medium">
                    {" "}
                    Argency
                  </p>
                  <p className="mt-0.5 font-body text-10">
                    Junior Graphic Design
                  </p>
                </div>
              </div>
            </SwiperSlide>
            
          </Swiper>
        </section>
      ) : (
        <section className="mt-20 mr-3 ml-3">
          <Swiper
            className="mt-[50px] h-[470px]"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={1}
            slidesPerView={3}
            autoplay={{ delay: 100 }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >

            
            <SwiperSlide  className="flex justify-center ">
             <button  onClick={() => {
                    window.open("https://www.careerlink.vn/tim-viec-lam/chuyen-vien-chinh-sua-hinh-anh-va-video-fpt-play-ha-noi/2317225", "_blank");
                  }}> <div className=" bg-gray-300 h-[368px] w-[368px] ">
                <div className="h-[100px]">
                  <img className="" src="https://i.imgur.com/fXeN91d.png" alt="img" />
                </div>
                <div className="bg-yellow-main h-[150px] mt-[127px] flex slanted-div flex-col items-center">
                  <p className="mt-5 font-head text-[24px] font-medium">
                  FPT PLAY HÀ NỘI
                  </p>
                  <p className="mt-3 font-body text-[16px]">
                    Junior Graphic Design
                  </p>
                </div>
              </div>
              </button>
             
            </SwiperSlide>

            <SwiperSlide className="flex justify-center ">
              <button onClick={() => {
                    window.open("https://www.careerlink.vn/tim-viec-lam/chuyen-vien-thiet-ke-do-hoa/2314009", "_blank");
                  }}><div className=" bg-gray-300 h-[368px] w-[368px] ">
                <div className="h-[90px]">
                  <img src="https://i.imgur.com/78Ujd4r.png" alt="img" />
                </div>
                <div className="bg-yellow-main h-[150px] mt-[127px] flex slanted-div flex-col items-center">
                  <p className="mt-5 font-head text-[24px] font-medium">
                  Apax English
                  </p>
                  <p className="mt-3 font-body text-[16px]">
                    Junior Graphic Design
                  </p>
                </div>
              </div></button>
              
            </SwiperSlide>

            <SwiperSlide className="flex justify-center ">
              <button onClick={() => {
                    window.open("https://careers.garena.com/vn/careers/845", "_blank");
                  }}>
              <div className="bg-gray-300 h-[368px] w-[368px] ">
                <div className="h-[90px]">
                  <img src="https://i.imgur.com/NYxLa0p.png" alt="img" />
                </div>
                <div className="bg-yellow-main h-[150px] mt-[127px] flex slanted-div flex-col items-center">
                  <p className="mt-5 font-head text-[24px] font-medium">
                  Garena
                  </p>
                  <p className="mt-3 font-body text-[16px]">
                  Associate Graphic Design
                  </p>
                </div>
              </div>
              </button>
            </SwiperSlide>
          </Swiper>
        </section>
      )}
    </section>
  );
};

export default Job;
