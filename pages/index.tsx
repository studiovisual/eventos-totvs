import React, { useState, useEffect } from "react"
import Footer from '../components/Footer'
import type { NextPage } from 'next'
import Seo from '../components/Seo'
import Header from '../components/Header'
import SimpleSlider from '../components/Slider/default'
import GroupFilters from '../components/GroupFilters'
import Button from '../components/Button'
import Card from '../components/Card'

{/* Importação de icons */ }
import { FaCaretDown, FaWindows } from 'react-icons/fa'
import { FiFilter } from "react-icons/fi";
import Title from "../components/Title"

const Home: NextPage = ({ data_events, data_filters, data_banners } : any) => {
  const [events, setEvents] = useState(data_events.result);
  const filters = data_filters.result;

  const handleSubmit = (event: any) => {
    event.preventDefault()
    
    const subGroup: any = [];
    const inputs: any = event.target;

    for (let index = 0; index < inputs.length; index++) {
      const element = inputs[index];
      
      if (element.checked) {
        subGroup.push(Number(element.value))
      }
    }

    if (subGroup.length === 0) {
      setEvents(data_events.result)
    }

    if (subGroup.length > 0) {
      fetch('https://ticket.dev.store.totvs.com/api/ticket/page/siteEvent?subgroup=[' + subGroup + ']')
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.result)
      })
    }
  }

  return (
    <>
      <div>
        <Seo title="Evento TOTVS" description="É um eventos TOTVS" />

        <Header />

        <section className="relative">
          <SimpleSlider items={data_banners} />

          <a href="#main">
            <FaCaretDown className="svg-banner absolute text-white text-[50px] bottom-[0] bottom-[20px]"/>
          </a>
        </section>

        <main id="main" className="container w-full h-full mb-[198px]">
          <section id="header-main max-w-[345px]">
            <Title />
          </section>

          <div className="grid grid-cols-1 md:grid-cols-[255px_1fr] gap-[30px]">
            <section id="filter" className="mb-8 md:w-64">
              <div>
                <div className="flex items-center justify-start mb-[26px] text-[25px]">
                  <FiFilter />
                  
                  <h2 className="text-[26px] ml-[9px] leading-[32px] uppercase font-bold text-principal-black">Filtro</h2>
                </div>
                
                <form onSubmit={handleSubmit} className="border border-complementary-purple  rounded-lg p-2.5 h-full w-full max-w-full md:max-w-[255px]">
                  <div className="mb-[38px]">
                    {filters.map((filter: any, index: number) => (
                      <GroupFilters key={index} text={filter.groupName} list={filter.subgroups} />
                    ))}
                  </div>

                  <div className="text-center mx-7 mb-[38px]">
                    <Button text="Filtrar" />
                  </div>
                </form>
              </div>
            </section>

            <section id="eventos">
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[30px] gap-y-[48px] 2xl:grid-cols-3 gap-x-[30px] gap-y-[48px]">
                {events?.map((event: any, index: number) => (
                  <Card key={index} data={event} />
                ))}

                {!events && (
                  <h3 className="text-center">Nenhum evento encontrado</h3>
                )}
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  )
}

// This gets called on every request
export async function getStaticProps() {
  // Fetch data from external API
  const banners = await fetch(`https://ticket.dev.store.totvs.com/api/ticket/page/siteEvent/banners?includeAllChildren=1`)
  const events = await fetch(`https://ticket.dev.store.totvs.com/api/ticket/page/siteEvent`)
  const filters = await fetch(`https://ticket.dev.store.totvs.com/api/ticket/page/siteEvent/groups`)
  const data_banners = await banners.json()
  const data_events = await events.json()
  const data_filters = await filters.json()

  // Pass data to the page via props
  return { props: { data_events, data_filters, data_banners } }
}

export default Home
