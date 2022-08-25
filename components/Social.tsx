interface Props {
  text: string
}

const Social = ({ text }: Props) => {
  return (
    <div >
      <p className=''>{text}</p>
    </div>
  );
};

export default Social;