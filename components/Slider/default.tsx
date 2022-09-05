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

const SimpleSlider = ({items}: Props) => {
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
            {items.length > 0 && items.map((item, i) => (
                <Card
                    key={i}
                    img={item.img}
                    imgMobile={item.imgMobile}
                    title={item.title}
                    desc={item.desc}
                    buttonInfo={item.buttonInfo}
                    buttonLink={item.buttonLink}
                    calendar={item.calendar}
                />
            ))}
        </Slider>
    )
}

export default SimpleSlider
