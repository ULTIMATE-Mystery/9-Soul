import {IoIosArrowUp} from "react-icons/io";

function BackToTopButton () {

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }
 
  return (
    <div className="fixed bottom-[7.5%] right-[3.3%] z-50">
    <button onClick = {scrollUp}>
      <IoIosArrowUp className="hover:fill-orange-main scale-[4]" color="gray-900"/>
    </button>
    </div>
);  

};

export default BackToTopButton;