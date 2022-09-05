import React from 'react'

import { FaCalendarAlt, FaRegClock } from 'react-icons/fa'

interface Props {
    img: string,
    imgMobile: string,
    title: string,
    desc: string,
    buttonInfo: string,
    buttonLink: string,
    calendar: boolean,
}

const Card = ({img, imgMobile, title, desc, buttonInfo, buttonLink, calendar}: Props) => {
    return (
        <div className="relative">
            <img className="w-full desk" alt={"banner"} src={img} />
            <img className="w-full mobile" alt={"banner"} src={imgMobile} />
            <div className="absolute top-0 left-0 w-full h-full mt-[15px] md:mt-0 px-[20px] md:px-0">
                <div className={'container h-5/6 flex wrap justify-center md:justify-between items-center text-white px-[20px] md:px-24 flex-col md:flex-row ' + (calendar ? 'pt-6' : 'pt-[110px] md:pt-0')}>
                    <div className={'wrap-title w-full ' + (calendar ? 'md:w-7/12' : 'md:w-2/3')}>
                        <h2 className="text-[30px] md:text-[55px] font-bold leading-[32px] lg:leading-[60px] text-center md:text-left">{title}</h2>
                        <div className={'text-boolean ' + (calendar ? 'hidden' : 'block')}>
                            <p className={'mb-[42px] mt-[20px] md:mt-[10px] text-[16px] md:text-[24px] leading-[20px] leading-[24px] ' + (calendar ? 'text-left' : 'text-center md:text-left')}>{desc}</p>
                            <a href={buttonLink} className={'bg-secundare-orange block border border-secundare-orange delay-100 ease font-normal hover:bg-white hover:text-secundare-orange leading-[19px] max-w-[210px] py-4 px-10 rounded-full text-[16px] text-center text-white transition uppercase font-extrabold ' + (calendar ? 'ml-0' : 'm-auto md:ml-0')}>
                                {buttonInfo}
                            </a>
                        </div>
                    </div>
                    <div className={"mt-5 wrap-info relative flex w-full md:w-5/12 " + (calendar ? 'block' : 'hidden')}>
                        <div className="order-2 md:order-1 mr-0 md:mr-[15px] w-[88px] h-[88px] md:w-[61px] md:h-[61px] mb-[19px] ml-[30px] md:ml-0">
                            <div className=" bg-complementary-purple rounded-t-lg text-secundare-gray text-[15px] text-center uppercase flex align-center justify-center ">Mês
                            </div>
                            <div className="bg-white h-[35px] rounded-b-lg text-principal-black text-center font-bold text-[23px] flex align-center justify-center ">00
                            </div>
                        </div>
                        <div className="order-1 md:order-2 info w-full md:w-1/2 leading-6">
                            <p className="text-secundare-orange">
                                WEBINARS
                            </p>
                            <h6 className="text-[22px] font-bold mb-5">
                                NOVIDADES DO RELEASE - TOTVS VAREJO SUPERMERCADOS
                            </h6>
                            <div className="text-secundare-gray md:color-white text-[12px] mb-0 data md:mb-2.5 flex items-center">
                                <FaCalendarAlt/>
                                <p className="ml-2">
                                    00/00/2022
                                </p>
                            </div>
                            <div className="text-secundare-gray md:color-white text-[12px] mb-0 hora mb-4 flex items-center">
                                <FaRegClock/>
                                <p className="ml-2">
                                    10:00 às 11:00
                                </p>
                            </div>
                            <div className="btn flex items-center justofy-between mt-5 md:mt-0">
                                <a href="" className="bg-secundare-orange block border border-secundare-orange delay-100 ease font-normal hover:bg-white hover:text-secundare-orange leading-[19px] max-w-[170px] py-2.5 px-4 rounded-full text-[16px] text-center text-white transition uppercase font-extrabold">
                                    Inscreva-se
                                </a>
                                <a className="rounded-full bg-white w-[35px] h-[35px] flex items-center justify-center ml-3" href="#">
                                    <img className="w-[16px] h-[16px]" src="https://cdn-icons-png.flaticon.com/512/2028/2028252.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="curve">
                <svg version="1.1" x="0px" y="0px" viewBox="0 0 505.7 70.1">
                    <path fill="#ffffff" d="M351,32.6c-55.9,30.1-71.4,32.7-98.2,32.7s-42.3-2.6-98.2-32.7S28,0,28,0H0v70.1h28h449.6h28.1V0h-28.1C477.6,0,407,2.5,351,32.6z"/>
                </svg>
            </div>
        </div>
    )
}

export default Card
