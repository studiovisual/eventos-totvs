interface Props {
  text: string
}

const LinkFooter = ({ text }: Props) => {
  return (
    <div className=' text-white uppercase font-[14px] mb-[3px] leading[22px] font-bold w-full max-w-[285px] transition-all duration-75 ease-linear hover:bg-secundare-orange rounded-[50px] '>
      <a href="#"><p className='px-[15px]'>{text}</p></a>
    </div>
  );
};

export default LinkFooter;