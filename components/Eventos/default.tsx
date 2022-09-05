import React from 'react'

import Filters from '../GroupFilters'
import Title from '../Title'
import Card from '../Card'

const Eventos = (filters: any, events: any) => {
    console.log(events);

    return (
        <main className='container w-full h-full mb-[198px]'>
            <section id='header-main max-w-[345px]'>
                <Title />
            </section>
            <div className='grid grid-cols-1 md:grid-cols-[255px_1fr] gap-[30px]'>
                <Filters text="" list={filters} />

                <section id='eventos'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[48px] 2xl:grid-cols-3 gap-x-[30px] gap-y-[48px]'>
                        {/* {events.map((event) => (
                            <Card data={event} />
                        ))} */}
                    </div>
                </section>
            </div>
        </main>
    )
}

export default Eventos
