import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Filtro from './components/filtro'
import Eventos from './components/eventos'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eventos Totvs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <h1>Todos os Eventos</h1>
      <Filtro />
      <Eventos />

    </div>
  )
}

export default Home
