import type { NextPage } from 'next'
import Button from '../components/Button'
import Eventos from '../components/Eventos'
import Filter from '../components/Filter'
import Filtros from '../components/Filtros'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'

{/* Importação de icons */ }
import { FiFilter } from "react-icons/fi";



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <main className='container h-full mb-[198px]'>
        <section id='header-main'>
          <h1 className='text-center pt-8 mb-8 text-3xl uppercase font-bold text-principal-black'>Todos os <span className='text-complementary-purple'>Eventos</span></h1>
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
    </div>
  )
}

export default Home
