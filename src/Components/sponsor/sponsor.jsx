
const Sponsor = (props) => {
  const { isMobile } = props;
    return (
      <section>
      {isMobile ? (
        <section className="bg-gray-300 -mt-5">
        <div className="justify-center items-center">
        <br/>
        <div className="font-head font-semibold text-[16px] text-center lg:text-[24px]">
          <p>Đơn vị đồng hành</p>
          </div>
          <div className="font-body font-medium text-[10px] text-center mt-1 lg:text-[16px]">
          <p>Danh sách công ty bảo trợ thực tập</p>
          </div>
          <div className="ml-5 mr-5">

          <div className="grid grid-cols-2 gap-1.5 place-items-center">
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold  mt-5">
          <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/rOGkMCb.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold  mt-5">
        <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/YFS1IL3.png" alt="light"/>
        </div>
        </div>

        <div className="grid grid-cols-2 gap-1.5 place-items-center">
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold  mt-1.5">
          <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/4NPlb4C.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold mt-1.5">
        <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/QZarebj.png" alt="light"/>
        </div>
        </div>

        <div className="grid grid-cols-3 gap-1 place-items-center">
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold  mt-1.5 mb-6">
          <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/YzJSOAp.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold mt-1.5 mb-6">
        <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/BBlh3vT.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[39px] font-head text-[30px] font-semibold mt-1.5 mb-6">
        <img className="w-[130px] h-[35px] mx-auto" src="https://i.imgur.com/bMbrkfy.png" alt="light"/>
        </div>
        </div>

          </div>
        </div>
      </section>
      ) : (
        <section className="bg-gray-300 -mt-5">
        <div className="justify-center items-center">
        <br/>
        <div className="font-head font-semibold text-[24px] text-center lg:text-[24px]">
          <p>Đơn vị đồng hành</p>
          </div>
          <div className="font-body font-medium text-[16px] text-center mt-1 lg:text-[16px]">
          <p>Danh sách công ty bảo trợ thực tập</p>
          </div>
          <div className="ml-[7%] mr-[7%]">

          <div className="grid grid-cols-4 gap-2 place-items-center">
        <div className="bg-White w-full h-[92px] font-head text-[30px] font-semibold  mt-5">
          <img className="w-full h-full mx-auto" src="https://i.imgur.com/rOGkMCb.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[92px] font-head text-[30px] font-semibold  mt-5">
        <img className="w-full h-full mx-auto" src="https://i.imgur.com/YFS1IL3.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[92px] font-head text-[30px] font-semibold  mt-5">
        <img className="w-full h-full mx-auto" src="https://i.imgur.com/4NPlb4C.png" alt="light"/>
        </div>
        <div className="bg-White w-full h-[92px] font-head text-[30px] font-semibold  mt-5">
        <img className="w-full h-full mx-auto" src="https://i.imgur.com/QZarebj.png" alt="light"/>
        </div>
        </div>

        <div className="flex flex-row justify-center gap-2">
        <div className="bg-White w-[277px] h-[92px] font-head text-[30px] font-semibold  mt-2 mb-[50px]">
          <img className="w-full h-full mx-auto" src="https://i.imgur.com/YzJSOAp.png" alt="light"/>
        </div>
        <div className="bg-White w-[277px] h-[92px] font-head text-[30px] font-semibold mt-2 mb-[50px]">
        <img className="w-full h-full mx-auto" src="https://i.imgur.com/BBlh3vT.png" alt="light"/>
        </div>
        <div className="bg-White w-[277px] h-[92px] font-head text-[30px] font-semibold mt-2 mb-[50px]">
        <img className="w-full h-full mx-auto" src="https://i.imgur.com/bMbrkfy.png" alt="light"/>
        </div>
        </div>

          </div>
        </div>
      </section>
      )}
      </section>
    );
  };
  
  export default Sponsor;
  