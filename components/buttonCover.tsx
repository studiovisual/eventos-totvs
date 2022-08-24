interface Props {
  text: string
}

const ButtonCover = ({ text }: Props) => {
  return (
    <a href="#" className="bg-secundare-orange block border border-secundare-orange delay-100 ease font-normal hover:bg-white hover:text-secundare-orange leading-[19px] max-w-[170px] mx-auto p-2.5 rounded-full text-[16px] text-center text-white transition uppercase">
      {text}
    </a>
  );
};

export default ButtonCover;