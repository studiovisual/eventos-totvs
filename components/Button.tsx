interface Props {
  text: string
}

const Button = ({ text }: Props) => {
  return (
    <div className="border border-orange-300 rounded-full mt-8">
      <a href="#"><p className='text-lg text-orange-300 uppercase font-normal py-3 px-14'>{text}</p></a>
    </div>
  );
};

export default Button;