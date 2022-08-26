import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Social = () => {
  return (
    <div className='flex items-center md:items-center justify-end px-[7px]'>
      <ul className='grid grid-cols-4 gap-3 mb-[30px]'>
        <a href=""><li className='iconSocial bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-[20px] hover:text-secundare-orange '>< FaLinkedinIn /></li></a>
        <a href=""><li className='iconSocial bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-[20px] hover:text-secundare-orange '>< FaInstagram /></li></a>
        <a href=""><li className='iconSocial bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-[20px] hover:text-secundare-orange '>< FaYoutube /></li></a>
        <a href=""><li className='iconSocial bg-white w-[30px] h-[30px] rounded-full flex items-center justify-center text-[20px] hover:text-secundare-orange '>< FaTwitter /></li></a>
      </ul>
    </div>
  );
};

export default Social;