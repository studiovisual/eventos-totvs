import React from 'react'

import { FaCalendarAlt, FaRegClock } from 'react-icons/fa'

interface Props {
    img: string,
    title: string,
    desc: string,
    buttonInfo: string,
    buttonLink: string,
    calendar: boolean,
}

const Card = ({img, title, desc, buttonInfo, buttonLink, calendar}: Props) => {
    console.log('Card')
    return (
        <div className="relative">
            <img alt={"banner"} src={img} />
            <div className="absolute top-0 left-0 w-full h-full">
                <div className="container h-5/6 flex wrap justify-between items-center text-white px-24">
                    <div className="wrap-title w-7/12 grow">
                        <h2 className="text-[55px] font-bold leading-[60px]">{title}</h2>
                        <div className={'text-boolean ' + (calendar ? 'hidden' : 'block')}>
                            <p className="mb-[42px] mt-[10px] text-[24px] leading-[24px]">{desc}</p>
                            <a href={buttonLink} className="bg-secundare-orange block border border-secundare-orange delay-100 ease font-normal hover:bg-white hover:text-secundare-orange leading-[19px] max-w-[210px] py-4 px-10 rounded-full text-[16px] text-center text-white transition uppercase font-extrabold">
                                {buttonInfo}
                            </a>
                        </div>
                    </div>
                    <div className={"wrap-info relative flex w-5/12 " + (calendar ? 'block' : 'hidden')}>
                        <div className="mr-[15px] w-[61px] h-[61px] mb-[19px] ">
                            <div className=" bg-complementary-purple rounded-t-lg text-secundare-gray text-[15px] text-center uppercase flex align-center justify-center ">Mês
                            </div>
                            <div className="bg-white h-[35px] rounded-b-lg text-principal-black text-center font-bold text-[23px] flex align-center justify-center ">00
                            </div>
                        </div>
                        <div className="info w-1/2 leading-6">
                            <p className="text-secundare-orange">
                                WEBINARS
                            </p>
                            <h6 className="text-[22px] font-bold mb-5">
                                NOVIDADES DO RELEASE - TOTVS VAREJO SUPERMERCADOS
                            </h6>
                            <div className="data mb-2.5 flex items-center">
                                <FaCalendarAlt/>
                                <p className="ml-2">
                                    00/00/2022
                                </p>
                            </div>
                            <div className="hora mb-4 flex items-center">
                                <FaRegClock/>
                                <p className="ml-2">
                                    10:00 às 11:00
                                </p>
                            </div>
                            <div className="btn flex items-center justofy-between">
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
        </div>
    )
}

export default Card
