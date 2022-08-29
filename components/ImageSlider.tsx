import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentUser] = useState(0);

  return (
    <div className="h-full relative" >
      <div className="leftArrow absolute  font-[45px] text-black z-10 cursor-pointer"><BsArrowLeftCircle /></div>
      <div className="rightArrow absolute  font-[45px] text-black z-10 cursor-pointer"><BsArrowRightCircle /></div>
      <div className="w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
    </div>
  )
}

export default ImageSlider;