import { useState } from "react";

const Finance = () => {
  const [showDiscount50, setShowDiscount50] = useState(false);
  const [showDiscount20, setShowDiscount20] = useState(false);

  return (
    <section className="">
      <div className=" first-line:font-head lg:text-[30px] text-[16px] text-center font-semibold mt-5">
        Đừng để vấn đề về tài chính <br /> cản bước bạn?
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-center bg-White">
        <div className="font-body font-medium text-[9.5px]  lg:text-16 mt-10">
          <p className="leading-6 px-5 lg:px-10 lg:-ml-20 lg:leading-7 ">
            Chúng tôi hiểu và đồng cảm với những trăn trở về tài chính của bạn
            vào lúc này…
            <br /> <br />
            “Sớm đầu tư từ hôm nay, đường sự nghiệp thẳng tiến…”
            <br /> <br />
            Vì bạn xứng đáng được đầu tư từ ngày hôm nay, Creative Univ <br />{" "}
            đồng hành cùng bạn với Chính sách học bổng lên đến 50% và <br />
            đặc biệt 100% portfolio ứng tuyển học bổng sẽ được các mentor <br />{" "}
            đánh giá, góp ý với những nhận xét chân thành và thực tế nhất.
          </p>
        </div>
        <div className="font-body text-10 font-medium mt-10 ml-7 mr-2 flex flex-col ">
          <div className="flex justify-center gap-5">
            <div className="font-head lg:text-16 mt-2">Học phí</div>
            {showDiscount50 ? (
              <div className="flex lg:justify-center font-head lg:text-24 text-20 font-semibold lg:mt-[2px] lg:ml-10 text-center">
                4.250.000 VND
              </div>
            ) : (
              <div className="flex lg:justify-center font-head lg:text-24 text-20 font-semibold lg:mt-[2px] lg:ml-10 text-center">
                8.500.000 VND
              </div>
            ) && showDiscount20 ? (
              <div className="flex lg:justify-center font-head lg:text-24 text-20 font-semibold lg:mt-[2px] lg:ml-10 text-center">
                6.250.000 VND
              </div>
            ) : (
              <div className="flex lg:justify-center font-head lg:text-24 text-20 font-semibold lg:mt-[2px] lg:ml-10 text-center">
                8.500.000 VND
              </div>
            )}

            

          </div>
          <div className="grid grid-cols-2 gap-4 place-items-center justify-center">
            <div
              onMouseEnter={() => {
                setShowDiscount50(true);
              }}
              onMouseLeave={() => {
                setShowDiscount50(false);
              }}
              className="transition ease-in-out delay-170 bg-gray-300 lg:hover:bg-orange-main w-full lg:w-[220px] h-[52px] font-head text-[30px] font-semibold mt-5 text-center"
            >
              50%
            </div>
            <div
              onMouseEnter={() => {
                setShowDiscount20(true);
              }}
              onMouseLeave={() => {
                setShowDiscount20(false);
              }}
              className="transition ease-in-out delay-170 bg-gray-300 lg:hover:bg-orange-main w-full h-[52px] font-head text-[30px] font-semibold mt-5 text-center"
            >
              20%
            </div>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-col -ml-10">
              <div className="font-head text-10 font-medium flex flex-col w-[110px] h-[50px] mt-5 ml-[15px]">
                <img src="https://i.imgur.com/cyZGdLe.png" alt="light" />
              </div>
              <p className="mt-8 -ml-[45px] text-[25px] font-hand">
                {" "}
                Xem chi tiết
              </p>
            </div>

            <button  onClick={() => {
                    window.open("https://drive.google.com/file/d/1bshp5CDcuv8go1nUtsKIttJZ3Uz5p5EO/view?usp=sharing", "_blank");
                  }} className="relative mt-[35px] ml-[15px]">
              <span class="absolute w-[22px] h-[22px] inline-flex rounded-full bg-yellow-main " />
              <span class="asolute animate-ping w-[22px] h-[22px] inline-flex rounded-full bg-yellow-main " />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Finance;
