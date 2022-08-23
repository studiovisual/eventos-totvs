import Head from 'next/head';

interface Props {
  title: string
  description: string
}

const Seo = ({ title, description }: Props) => {
  return (
    <Head>
      <title className='w-screen'>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
    </Head>
  )
}

export default Seo;