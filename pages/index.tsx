import type { NextPage } from 'next'
import Button from '../components/Button'
import Eventos from '../components/Eventos'
import Filter from '../components/Filter'
import Filtros from '../components/Filtros'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <main className='h-full'>
        <div className='container'>
          <section id='header-main'>
            <h1 className='text-center pt-8 mb-8 text-3xl uppercase font-bold text-principal-black'>Todos os <span className='text-complementary-purple'>Eventos</span></h1>
          </section>
        </div>
        <div className='md:flex gap-4'>
          <section id='filter' className='mb-8 lg:w-64'>
            <div >
              <div className='flex items-center justify-start h-8 pt-8 mb-9 '>
                <Filter />
                <h2 className='text-3xl ml-3 uppercase font-bold text-principal-black'>Filtro</h2>
              </div>
              <div className='border border-indigo-500 rounded-lg p-2.5 mt-6 h-96'>
                <Filtros text='+ Demonstração' />
                <Filtros text='+ Segmento' />
                <Filtros text='+ Produto' />
                <div className='text-center mx-7'>
                  <Button text='Filtrar' />
                </div>
              </div>
            </div>
          </section>
          <section id='eventos'>
            <div className='mb-8 grid sm:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4'>
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
