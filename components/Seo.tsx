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
      <link rel="icon" href="/favicon.png" />
      <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap" rel="stylesheet"></link>
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
      <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
    </Head>
  )
}

export default Seo;