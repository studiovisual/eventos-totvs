import type { NextPage } from 'next'
import Button from '../components/Button'
import Eventos from '../components/Eventos'
import Filtros from '../components/Filtros'
import LinkFooter from '../components/LinkFooter'
import Seo from '../components/Seo'
import Social from '../components/Social'
import TitleFooter from '../components/TitleFooter'
import Header from '../components/Header'


{/* Importação de icons */ }
import { FiFilter } from "react-icons/fi";




const Home: NextPage = () => {
  return (
    <div>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <Header />
      <main className='container w-full h-full mb-[198px]'>
        <section id='header-main max-w-[345px]'>
          <h1 className='text-center text-[20px] pt-8 mb-8 uppercase font-bold text-principal-black  w-full  md:text-[32px] leading-[60px] '>Todos os <span className='text-complementary-purple'>Eventos</span></h1>
        </section>
        <div className='grid grid-cols-1 lg:grid-cols-[255px_1fr] gap-[30px]'>
          <section id='filter' className='mb-8 lg:w-64'>
            <div >
              <div className='flex items-center justify-start mb-[26px] text-[25px]'>
                <FiFilter />
                <h2 className='text-[26px] ml-[9px] leading-[32px] uppercase font-bold text-principal-black'>Filtro</h2>
              </div>
              <div className='border border-complementary-purple  rounded-lg p-2.5 h-full w-full max-w-[255px]'>
                <div className='mb-[38px]'>
                  <Filtros text='Demonstração' />
                  <Filtros text='Segmento' />
                  <Filtros text='Produto' />
                </div>
                <div className='text-center mx-7 mb-[38px]'>
                  <Button text='Filtrar' />
                </div>
              </div>
            </div>
          </section>
          <section id='eventos'>
            <div className='grid sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[48px] 2xl:grid-cols-3 gap-x-[30px] gap-y-[48px]'>
              <Eventos />
              <Eventos />
              <Eventos />
              <Eventos />
              <Eventos />
              <Eventos />
            </div>
          </section>
        </div>
      </main>
      <footer className='bg-principal-black '>
        <div className='container h-full py-[70px] flex align-center justify-center max-w-[1140px]'>
          <div className='content-main grid grid-cols-1  md:grid-cols-4 gap-5 text-start'>
            <img className='firt-content logo-footer w-full md:max-w-[186px] h-[55px] mb-[30px]' src="https://eventos.totvs.com/wp-content/uploads/2020/03/logo-1.png" alt="" />
            <div className='second-content mb-[30px] text-center md:text-start  max-w-[285px]'>
              <TitleFooter text='Sobre a Totvs' />
              <LinkFooter text='Trabalhe Conosco' />
              <LinkFooter text='Relações com investidores' />
              <LinkFooter text='Eventos' />
              <LinkFooter text='Manifesto Produtividade' />
              <LinkFooter text='Treinamentos' />
              <LinkFooter text='Encontre a Totvs' />
              <LinkFooter text='Canais' />
              <LinkFooter text='Certificações' />
              <LinkFooter text='Ios' />
              <LinkFooter text='Formação de talentos' />
              <LinkFooter text='Idexo' />
              <LinkFooter text='Politica de privacidade' />
            </div>
            <div className='third-content mb-[30px] text-center md:text-start max-w-[285px]'>
              <TitleFooter text='Links úteis' />
              <LinkFooter text='Blog de Totvs' />
              <LinkFooter text='Portal de produtos' />
              <LinkFooter text='cases' />
              <LinkFooter text='Totvs de store' />
              <LinkFooter text='marcar' />
              <LinkFooter text='Canal de ética' />
              <LinkFooter text='Suporte' />
              <LinkFooter text='TDN' />
              <LinkFooter text='Seja um parceiro' />
            </div>
            <div className='fourth-content text-center md:text-end max-w-[285px]'>
              <div className='mb-[24px]'>
                <TitleFooter text='Fale conosco' />
                <span className='text-white font-bold text-[23px] leading-[22px] px-[7px]'>0800 70 98 100</span>
              </div>
              <Social />
              <LinkFooter text='assessoria de imprensa' />
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

export default Home
