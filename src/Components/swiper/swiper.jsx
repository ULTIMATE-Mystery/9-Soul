import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const SimpleSwiperWithParams = (props) => {
  const { isMobile } = props;
  return (
    <div>
      {isMobile ? (
        <Swiper
          className="mt-5 h-[420px]"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={200}
          slidesPerView={1}
          autoplay={{ delay: 1000 }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px] ">
                <img src="https://i.imgur.com/4s74ube.png" alt="mentor1" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-5">
                  Phạm Minh Hoàng
                </p>
                <p className="font-head text-20 font-medium">Visual Artist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px]">
                <img src="https://i.imgur.com/vyb77Ts.png" alt="mentor2" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-5">
                  Nguyễn Minh Chính
                </p>
                <p className="font-head text-20 font-medium">Coach & Account</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px]">
                <img src="https://i.imgur.com/TJEojk3.png" alt="mentor3" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold  mt-5">
                  Nguyễn Đình Giang
                </p>
                <p className="font-head text-20 font-medium">Manager</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex justify-center">
            <div>
              <div className="flex justify-center h-[300px] w-[271px]">
                <img src="https://i.imgur.com/2FHblST.png" alt="mentor4" />
              </div>
              <div className="flex flex-col items-center">
                <p className="font-head text-20 font-semibold mt-5">
                  Phạm Hoàng Long
                </p>
                <p className="font-head text-20 font-medium">
                  Account & Creator
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      ) : (
        <div className="flex justify-center gap-x-[50px]">
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px] ">
              <div className="relative z-10 ">
                <span class="ml-[180px] mt-[200px] absolute w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
                <span class="ml-[180px] mt-[200px] absolute animate-ping w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
              </div>
              <div className="flex flex-col items-center z-50">
                <p className="font-hand text-[30px] -mb-[30px] -mr-[160px] ml-[150px]">
                  Xem thêm <br /> Thông tin
                </p>
                <img
                  className="ml-[250px] mt-[20px] -mr-[50px] w-1/3 h-1/3"
                  src="https://i.imgur.com/8MsEwKY.png"
                  alt="arrow"
                />
              </div>
              <img
                className="z-0 -ml-[250px]"
                src="https://i.imgur.com/4s74ube.png"
                alt="mentor1"
              />
            </div>

            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold mt-10">
                Phạm Minh Hoàng
              </p>
              <p className="font-head text-20 font-medium">Visual Artist</p>
            </div>
          </div>
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px]">
              <div className="relative z-50 ">
                <span class="ml-[180px] mt-[200px] absolute w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
                <span class="ml-[180px] mt-[200px] absolute animate-ping w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
              </div>
              <img src="https://i.imgur.com/vyb77Ts.png" alt="mentor2" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold mt-10">
                Nguyễn Minh Chính
              </p>
              <p className="font-head text-20 font-medium">Coach & Account</p>
            </div>
          </div>
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px]">
              <div className="relative z-50 ">
                <span class="ml-[180px] mt-[200px] absolute w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
                <span class="ml-[180px] mt-[200px] absolute animate-ping w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
              </div>
              <img src="https://i.imgur.com/TJEojk3.png" alt="mentor3" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold  mt-10">
                Nguyễn Đình Giang
              </p>
              <p className="font-head text-20 font-medium">Manager</p>
            </div>
          </div>
          <div>
            <div className="transition ease-in-out delay-150 lg:hover:scale-110 flex justify-center h-[300px] w-[271px]">
              <div className="relative z-50 ">
                <span class="ml-[180px] mt-[200px] absolute w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
                <span class="ml-[180px] mt-[200px] absolute animate-ping w-[27px] h-[27px] inline-flex rounded-full bg-yellow-main " />
              </div>
              <img src="https://i.imgur.com/2FHblST.png" alt="mentor4" />
            </div>
            <div className="flex flex-col items-center">
              <p className="font-head text-20 font-semibold mt-10">
                Phạm Hoàng Long
              </p>
              <p className="font-head text-20 font-medium">Account & Creator</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleSwiperWithParams;
