import type { NextPage } from 'next'
import Button from '../components/Button'
import Filter from '../components/Filter'
import Filtros from '../components/Filtros'
import Seo from '../components/Seo'
import styles from '../styles/Home.module.css'




const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <main>
        <div className='container'>
          <section id='header-main'>
            <h1 className='text-center pt-8 mb-8 text-3xl uppercase font-bold'>Todos os <span className='text-[#6B48FF]'>Eventos</span></h1>
          </section>
        </div>
        <section id='filter'>
          <div >
            <div className='flex items-center justify-start h-8 pt-8 mb-9'>
              <Filter />
              <h2 className='text-3xl ml-3 uppercase font-bold'>Filtro</h2>
            </div>
            <div className='border border-indigo-500 rounded-lg p-2.5 mt-6 h-96'>
              <Filtros text='Demonstração' />
              <Filtros text='Segmento' />
              <Filtros text='Produto' />
              <div className='text-center flex items-center justify-center'>
                <Button text='Filtrar' />
              </div>
            </div>
          </div>
        </section>
        <section id='eventos'>
          <div className='pt-8 border border-indigo-500 rounded-lg p-2.5 mt-6 h-96'>
            <div className=''>
              <img src="" alt="" />
            </div>
            <div>
              <h5>Demonstrações</h5>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
              <p>00/00/2022</p>
              <p>10:00 às 11:00</p>
            </div>
            <div className='text-center flex items-center justify-center'>
              <Button text='Saiba Mais' />
            </div>
          </div>
        </section>
      </main>

    </div>
  )
}

export default Home
