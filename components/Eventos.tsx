import ButtonCover from "./buttonCover";

const Eventos = () => {
  return (
    <>
      <div className='border border-indigo-500 rounded-lg mb-8'>
        <div className='h-40 bg-black rounded-t-lg p-5 relative'>
          <div className="absolute right-0 mr-7 rounded-full bg-white h-10 w-10 "></div>
          <div className='absolute right-0 bottom-0 mr-5 mb-5'>
            <div className='h-6 w-14 bg-indigo-600 rounded-t-lg'>
              <p className='text-white text-center uppercase'>Mês</p>
            </div>
            <div className='h-8 w-14 bg-white rounded-b-lg'>
              <p className='text-back font-bold text-center text-2xl'>00</p>
            </div>
          </div>
        </div>
        <div className='h60 p-5'>
          <h5 className='text-[#FEAC0E] font-bold text-sm'>Demonstrações</h5>
          <p className='text-lg font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <div className="ml-9 mt-3">
            <p className='text-sm'>00/00/2022</p>
            <p className='text-sm'>10:00 às 11:00</p>
          </div>
          <div className='text-center flex items-center justify-center mb-8'>
            <ButtonCover text='saiba mais' />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventos;