import Link from 'next/link'
import ImageSlider from './ImageSlider';


const slides = [
  { url: 'https://106fls2rgkkyhcqs83jfq8ey-wpengine.netdna-ssl.com/wp-content/uploads/2020/07/banner-demos-v2.jpg', title: 'Imagem carrossel Totvz' },
  { url: 'https://106fls2rgkkyhcqs83jfq8ey-wpengine.netdna-ssl.com/wp-content/uploads/2022/07/shutterstock_1237494658_H.png', title: 'Imagem carrossel Totvz' }
]

export default function Header() {
  return (
    <>
      <nav>
        <div className='bg-black h-[107px] flex items-center'>
          <div className='container w-full flex item-center justify-between md:h-[51px] max-w-[1106px]'>
            <img className='w-full max-w-[160px] h-[48px]' src="https://eventos.totvs.com/wp-content/uploads/2020/03/logo-1.png" alt="" />
            <div className='flex justify-between '>
              <ul className='flex items-center justify-center gap-5 w-full text-white font-[15px] font-normal uppercase leading-[22px]'>
                <li>
                  <Link href="/"><a >Demostrações</a></Link>
                </li>
                <li>
                  <Link href="#"><a >Eventos de mercado</a></Link>
                </li>
                <li>
                  <Link href="#"><a >Eventos Totvs</a></Link>
                </li>
                <li>
                  <Link href="#"><a >Webinars</a></Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav >
      <section className=''>
        <div className='w-full h-[678px] m-0-auto'>
          <ImageSlider slides={slides} />
        </div>
      </section>
    </>
  )
}