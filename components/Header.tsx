import Link from 'next/link'
import { HiMenu } from 'react-icons/hi'
import { useState } from "react";

import SimpleSlider from './SimpleSlider';

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <>
      <nav>
        <div className='h-[107px] absolute w-full z-20 bg-principal-black flex items-center justify-around top-0 left-0 border-b-2'>
          <div className='container w-full flex item-center justify-between md:h-[51px] max-w-[1106px] relative'>
            <img className='w-full max-w-[160px] h-[48px]' src="https://eventos.totvs.com/wp-content/uploads/2020/03/logo-1.png" alt="" />
            <div className='flex justify-between '>
              <HiMenu className='text-[50px] text-white md:hidden' onClick={() => setAberto(!aberto)} />
              <ul style={{ display: aberto ? 'block' : 'none' }} className='menu absolute md:relative top-full md:top-0 left-0 py-7 px-5 md:p-0 z-10 bg-principal-black hidden md:flex items-center justify-center gap-5 w-full text-white font-[15px] font-normal uppercase leading-[22px]'>
                <li className="p-2.5">
                  <Link href="/"><a >Demostrações</a></Link>
                </li>
                <li className="p-2.5">
                  <Link href="#"><a >Eventos de mercado</a></Link>
                </li>
                <li className="p-2.5">
                  <Link href="#"><a >Eventos Totvs</a></Link>
                </li>
                <li className="p-2.5">
                  <Link href="#"><a >Webinars</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
      <section className=''>
        <SimpleSlider />
      </section>
    </>
  )
}