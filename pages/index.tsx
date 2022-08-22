import type { NextPage } from 'next'
import Filtros from '../components/Filtros'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <div className='container'>
        <section id='header-main'>
          <h1 className='text-center pt-8 text-3xl uppercase font-bold'>Todos os <span className='text-[#6B48FF]'>Eventos</span></h1>
        </section>
      </div>
      <div className='w-64'>
        <div>
          <img src='' alt='' />
          <h2 className='pt-8 text-3xl uppercase font-bold'>Filtro</h2>
        </div>
        <div className='border border-indigo-500 rounded-lg h-60 p-2.5 mt-6'>
          <Filtros text='Demonstração' />
          <Filtros text='Segmento' />
          <Filtros text='Produto' />
        </div>
      </div>

    </div>
  )
}

export default Home
