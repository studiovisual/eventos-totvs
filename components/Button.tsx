interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <a href="#" className="bg-white text-secundare-orange block border border-secundare-orange delay-100 ease font-normal hover:bg-secundare-orange hover:text-white leading-[19px] max-w-[170px] mx-auto p-2.5 rounded-full text-[16px] text-center text-white transition uppercase">
      {text}
    </a>
  );
};

export default Button;