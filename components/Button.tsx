interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <button className="bg-white text-secundare-orange block border border-secundare-orange delay-100 ease font-normal hover:bg-secundare-orange hover:text-white leading-[19px] w-full max-w-[170px] mx-auto p-2.5 rounded-full text-[16px] text-center  transition uppercase">
      {text}
    </button>
  );
};

export default Button;