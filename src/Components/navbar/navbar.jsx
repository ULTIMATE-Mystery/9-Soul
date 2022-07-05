const Navbar = () => {
  return (
    <nav className="flex items-center bg-dark-gray h-[64px] gap-10">
      <div className="flex items-center justify-center ml-[5%]">
        <a href="Home">
          <img
            className=""
            href=""
            src="https://i.imgur.com/5TnrJeD.png"
            alt="logo"
          />
        </a>
      </div>
      <div class="flex items-center justify-center ml-[18%]">
  <a class="text-[15px] font-head text-White transition duration-150 border-b-2 border-transparent hover:border-red" href="#">
    Trang chủ
  </a>
</div>
<div class="flex items-center justify-center">
  <a class="text-[15px] font-head text-White transition duration-150 border-b-2 border-transparent hover:border-red" href="#">
  Storytelling
  </a>
</div>
<div class="flex items-center justify-center">
  <a class="text-[15px] font-head text-White transition duration-150 border-b-2 border-transparent hover:border-red" href="#">
  Gifting
  </a>
</div>
<div class="flex items-center justify-center">
  <a class="text-[15px] font-head text-White transition duration-150 border-b-2 border-transparent hover:border-red" href="#">
    Coaching 
  </a>
</div>
<div class="flex items-center justify-center">
  <a class="text-[15px] font-head text-White transition duration-150 border-b-2 border-transparent hover:border-red" href="#">
 Blog
  </a>
</div>
<div className="flex items-center justify-center ml-[18%]">
        <button>
          <img
            className=""
            href=""
            src="https://i.imgur.com/nKS21o5.png"
            alt="logo"
          />
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button>
          <img
            className=""
            href=""
            src="https://i.imgur.com/sLs4Bbc.png"
            alt="logo"
          />
        </button>
      </div>
      <div className="flex items-center justify-center mr-[5%]">
      
      <button>
          <img
            className=""
            href=""
            src="https://i.imgur.com/G6vNEXt.png"
            alt="logo"
          />
        </button>
        
      </div>
    </nav>
  );
};

export default Navbar;
