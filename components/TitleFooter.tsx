interface Props {
  text: string
}

const TitleFooter = ({ text }: Props) => {
  return (
    <div className="font-bold text-secundare-orange uppercase text-[22px] leading[22px] mb-[8px]">
      <p className=' px-[15px]'>{text}</p>
    </div>
  );
};

export default TitleFooter;