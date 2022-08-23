import ButtonCover from "./buttonCover";

const Eventos = () => {
  return (
    <>
      <div className='border border-complementary-purple rounded-lg mb-8'>
        <div className='h-40 rounded-t-lg relative'>
          <div className="absolute right-0 mr-7 rounded-full bg-white mt-5 h-10 w-10 transition delay-75 ease">
            <a href="#"><img className="object-cover h-8 w-7 m-1 hover:m-0.5" src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_share-512.png" alt="" /></a>
          </div>
          <img className="rounded-t-lg w-full h-full object-cover" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" alt="" />
          <div className='absolute right-0 bottom-0 mr-5 mb-5'>
            <div className='h-6 w-14 bg-complementary-purple rounded-t-lg'>
              <p className='text-secundare-gray text-center uppercase'>Mês</p>
            </div>
            <div className='h-8 w-14 bg-white rounded-b-lg'>
              <p className='text-principal-black font-bold text-center text-2xl'>00</p>
            </div>
          </div>
        </div>
        <div className='h60 p-5'>
          <h5 className='text-secundare-orange font-bold text-sm uppercase'>Demonstrações</h5>
          <p className='text-principal-black text-lg font-bold'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
          <div className=" mt-3">
            <p className='ml-7 text-bold text-principal-black'>00/00/2022</p>
            <p className='ml-7 text-bold text-principal-black'>10:00 às 11:00</p>
            <div className='text-center sm-8 mx-7 xl:m-0'>
              <ButtonCover text='saiba mais' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventos;