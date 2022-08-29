import Link from 'next/link'

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
      <section className='Header-pagination'>
        <div className='bg-black h-full w-full h-[608px]'>
          <div id="default-carousel" className="relative" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
              {/* Item 1 */}
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                data-carousel-item=""
              >
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">
                </span>
                <img
                  src=""
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 2 */}
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                data-carousel-item=""
              >
                <img
                  src=""
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 3 */}
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                data-carousel-item=""
              >
                <img
                  src=""
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* Slider indicators */}
            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-white dark:bg-gray-800"
                aria-current="true"
                aria-label="Slide 1"
                data-carousel-slide-to={0}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                aria-current="false"
                aria-label="Slide 2"
                data-carousel-slide-to={1}
              />
              <button
                type="button"
                className="w-3 h-3 rounded-full bg-white/50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800"
                aria-current="false"
                aria-label="Slide 3"
                data-carousel-slide-to={2}
              />
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev=""
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only"></span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next=""
            >
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only"></span>
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  )
}