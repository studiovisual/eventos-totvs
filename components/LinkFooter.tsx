interface Props {
  text: string
}

const LinkFooter = ({ text }: Props) => {
  return (
    <div className="">
      <a href="#"><p className=''>{text}</p></a>
    </div>
  );
};

export default LinkFooter;