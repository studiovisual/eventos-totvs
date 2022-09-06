import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
// @ts-ignore
import Slider from 'react-slick'

import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa'

import Card from './Card'

interface Props {
  items: Slider[]
}

interface Slider {
  img: string,
  imgMobile: string,
  title: string,
  desc: string,
  buttonInfo: string,
  buttonLink: string,
  calendar: boolean,
}

const SimpleSlider = ({items}: any) => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <FaChevronCircleLeft />,
    nextArrow: <FaChevronCircleRight />
  }

  return (
    <Slider {...settings}>
      {items.rows.length > 0 && items.rows.map((item: any, i: number) => (
        <Card
          key={i}
          img={item.Media.url}
          imgMobile={item.Media.url}
          title={item.title}
          desc={item.subtitle}
          // buttonInfo={item.buttonInfo}
          // buttonLink={item.buttonLink}
          // calendar={item.calendar}
          event={item.EventSite}
        />
      ))}
    </Slider>
  )
}

export default SimpleSlider
