interface Props {
  text: string
}

const ButtonCover = ({ text }: Props) => {
  return (
    <div className="border bg-secundare-orange rounded-full mt-8 transition delay-100 ease hover:bg-white">
      <a href="#"><p className='text-lg text-white uppercase font-normal py-3 px-14 transition delay-100 ease hover:text-secundare-orange'>{text}</p></a>
    </div>
  );
};

export default ButtonCover;