import React from 'react'

import Filtros from './Filtros'
import Title from './Title'
import Card from './Card'

const Eventos = () => {
    return (
        <main className='container w-full h-full mb-[198px]'>
            <section id='header-main max-w-[345px]'>
                <Title />
            </section>
            <div className='grid grid-cols-1 md:grid-cols-[255px_1fr] gap-[30px]'>
                <Filtros />
                <section id='eventos'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[48px] 2xl:grid-cols-3 gap-x-[30px] gap-y-[48px]'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Eventos
