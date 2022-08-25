interface Props {
  text: string
}

const LinkFooter = ({ text }: Props) => {
  return (
    <div className='text-white uppercase leading[22px]  w-full md:font-[14px] mb-[8px] max-w-[285px] font-bold transition-all duration-75 ease-linear '>
      <a href="#"><p className='px-[7px] hover:bg-secundare-orange rounded-[50px]'>{text}</p></a>
    </div>
  );
};

export default LinkFooter;