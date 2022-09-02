import React from 'react'
import TitleFooter from './TitleFooter'
import LinkFooter from './LinkFooter'
import Social from './Social'

const Footer = () => {
    return (
        <footer className='bg-principal-black '>
            <div className='container h-full py-[70px] flex align-center justify-center max-w-[1140px]'>
                <div className='content-main grid grid-cols-1  md:grid-cols-4 gap-5 text-start'>
                    <img className='firt-content logo-footer w-full md:max-w-[186px] h-[55px] mb-[30px]' src="https://eventos.totvs.com/wp-content/uploads/2020/03/logo-1.png" alt="" />
                    <div className='second-content mb-[30px] text-center md:text-start  max-w-[285px]'>
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
                    <div className='third-content mb-[30px] text-center md:text-start max-w-[285px]'>
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
                    <div className='fourth-content text-center md:text-end max-w-[285px]'>
                        <div className='mb-[24px]'>
                            <TitleFooter text='Fale conosco' />
                            <span className='text-white font-bold text-[23px] leading-[22px] px-[7px]'>0800 70 98 100</span>
                        </div>
                        <Social />
                        <LinkFooter text='assessoria de imprensa' />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
