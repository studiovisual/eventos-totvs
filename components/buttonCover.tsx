interface Props {
  text: string
}

const ButtonCover = ({ text }: Props) => {
  return (
    <div className="border bg-orange-400 rounded-full mt-8">
      <a href="#"><p className='text-lg text-white uppercase font-normal py-3 px-14'>{text}</p></a>
    </div>
  );
};

export default ButtonCover;