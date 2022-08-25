import type { NextPage } from 'next'
import Button from '../components/Button'
import Eventos from '../components/Eventos'
import Filter from '../components/Filter'
import Filtros from '../components/Filtros'
import LinkFooter from '../components/LinkFooter'
import Seo from '../components/Seo'
import Social from '../components/Social'
import TitleFooter from '../components/TitleFooter'
import styles from '../styles/Home.module.css'



const Home: NextPage = () => {
  return (
    <div>
      <Seo title='Evento TOTVS' description='É um eventos TOTVS' />
      <main className='container h-full mb-[198px]'>
        <section id='header-main'>
          <h1 className='text-center pt-8 mb-8 text-3xl uppercase font-bold text-principal-black'>Todos os <span className='text-complementary-purple'>Eventos</span></h1>
        </section>

        <div className='grid grid-cols-1 lg:grid-cols-[255px_1fr] gap-[30px]'>
          <section id='filter' className='mb-8 lg:w-64'>
            <div >
              <div className='flex items-center justify-start h-8 pt-8 mb-9 '>
                <Filter />
                <h2 className='text-3xl ml-3 uppercase font-bold text-principal-black'>Filtro</h2>
              </div>
              <div className='border border-complementary-purple rounded-lg p-2.5 mt-6 h-96'>
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
      <footer className='bg-principal-black'>
        <div className='container h-full p-[70px]'>
          <div className='content-main flex align-center justify-between'>
            <img className='logo-footer w-full max-w-[186px] h-[55px]' src="https://eventos.totvs.com/wp-content/uploads/2020/03/logo-1.png" alt="" />
            <div className=''>
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
            <div>
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
            <div className='text-end'>
              <TitleFooter text='Fale conosco' />
              <LinkFooter text='0800 70 98 100' />
              <div>
                <Social text='' />
              </div>
              <LinkFooter text='Assessoria de imprensa' />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home
