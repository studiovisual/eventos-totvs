import ButtonCover from "./buttonCover";

const Eventos = () => {
  return (
    <>
      <div className='border border-indigo-500 rounded-lg mb-8'>
        <div className='h-40 rounded-t-lg relative'>
          <div className="absolute right-0 mr-7 rounded-full bg-white mt-5 h-10 w-10">
            <img className='z-10' src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn3.iconfinder.com%2Fdata%2Ficons%2Fvirtual-notebook%2F16%2Fbutton_share-512.png&imgrefurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F352893%2Fshare_icon&tbnid=TKLF77RVCy43NM&vet=12ahUKEwi8yoqbk935AhUcN7kGHUnGDH4QMygBegUIARDBAQ..i&docid=tVqf7G-2uw7_DM&w=512&h=512&q=icon%20share&client=opera-gx&ved=2ahUKEwi8yoqbk935AhUcN7kGHUnGDH4QMygBegUIARDBAQ" alt="" />
          </div>
          <img className="rounded-t-lg w-full h-full object-cover" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" alt="" />
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
          <h5 className='text-[#FEAC0E] font-bold text-sm uppercase'>Demonstrações</h5>
          <p className='text-lg font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <div className=" mt-3">
            <p className='ml-7 text-bold'>00/00/2022</p>
            <p className='ml-7 text-bold'>10:00 às 11:00</p>
            <div className='mx-7 text-center mb-8'>
              <ButtonCover text='saiba mais' />
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Eventos;