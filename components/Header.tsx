import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <nav className='bg-black'>
      <div>
        <Image src={"https://eventos.totvs.com/wp-content/uploads/2020/03/logo-1.png"} width="30" height="30" alt='Image Totvz main' />
        <ul>
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
    </nav>
  )
}