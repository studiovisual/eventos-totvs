import React from 'react'
import Footer from '../components/Footer'
import type { NextPage } from 'next'

import Seo from '../components/Seo'
import Header from '../components/Header'
import SimpleSlider from '../components/Slider/default'
import Eventos from '../components/Eventos/default'

import { FaCaretDown } from 'react-icons/fa'

const Home: NextPage = () => {
  const banner = [
    {
      img: './hero-banner-home.png',
      imgMobile: './hero-banner-home-mobile.png',
      title: 'PARTICIPE DAS NOSSAS DEMONSTRAÇÕES',
      desc: 'Conheça nossos produtos e tire suas dúvidas com nossos especialistas.',
      buttonInfo: 'Saiba mais',
      buttonLink: '',
      calendar: false,
    },
    {
      img: './hero-banner-home-roxo.png',
      imgMobile: './hero-banner-home-roxo-mobile.png',
      title: 'CONHEÇA AS INOVAÇÕES DO NOVO RELEASE',
      desc: '',
      buttonInfo: '',
      buttonLink: '',
      calendar: true,
    }]

  return (
    <div>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <Header />

      <section className='relative mt-[105px]'>
        <SimpleSlider items={banner} />
        <FaCaretDown className="svg-banner absolute text-white text-[50px] bottom-[0] bottom-[20px]"/>
      </section>
      
      <Eventos />
      <Footer />
    </div >
  )
}

export default Home
