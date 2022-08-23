interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <div className="border border-secundare-orange rounded-full mt-8 transition delay-100 ease hover:bg-secundare-orange">
      <a href="#"><p className='text-lg text-secundare-orange uppercase font-normal py-3 px-14 transition delay-100 ease hover:text-white' >{text}</p></a>
    </div>
  );
};

export default Button;