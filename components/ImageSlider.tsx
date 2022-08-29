import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go"
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }
  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }
  const goToSlide = slideIndex => {
    setCurrentIndex(slideIndex)
  }
  return (
    <div className="h-full relative" >
      <div onClick={goToPrevious} className="leftArrow absolute text-white z-10 cursor-pointer top-3/4 left-[30px] md:top-1/2 text-[30px] left-[100px]  "><BsArrowLeftCircle /></div>
      <div onClick={goToNext} className="rightArrow absolute text-white z-10 cursor-pointer top-3/4 right-[30px] md:top-1/2 text-[30px] right-[100px]  "><BsArrowRightCircle /></div>
      <div className="w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
      ></div>
      <div className="flex items-center justify-center absolute z-10 top-[90%] left-[50%]">
        {slides.map((slide, slideIndex) =>
          <div onClick={() => goToSlide(slideIndex)} className=" flex justify-center cursor-pointer my-[3px] text-[20px] text-white" key={slideIndex}><GoPrimitiveDot /> </div>
        )}
      </div>
    </div>
  )
}
export default ImageSlider;