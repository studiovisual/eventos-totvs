import React from 'react'
import {FiFilter} from 'react-icons/fi'
import Button from '../Button'
import Filtro from '../GroupFilters'

const Filtros = () => {
    const list01 = ['Demonstrações2', 'Demonstrações3'];
    const list02 = ['Demonstrações4', 'Demonstrações5'];
    const list03 = ['Demonstrações6', 'Demonstrações7'];

    return (
        <section id='filter' className='mb-8 md:w-64'>
            <div >
                <div className='flex items-center justify-start mb-[26px] text-[25px]'>
                    <FiFilter />
                    <h2 className='text-[26px] ml-[9px] leading-[32px] uppercase font-bold text-principal-black'>Filtro</h2>
                </div>
                <div className='border border-complementary-purple  rounded-lg p-2.5 h-full w-full max-w-full md:max-w-[255px]'>
                    <div className='mb-[38px]'>
                        <Filtro text='Demonstração' list={list01} />
                        <Filtro text='Segmento' list={list02} />
                        <Filtro text='Produto' list={list03} />
                    </div>
                    <div className='text-center mx-7 mb-[38px]'>
                        <Button text='Filtrar' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Filtros
