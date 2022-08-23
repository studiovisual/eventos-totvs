
interface Props {
  text: string
}

const Filtros = ({ text }: Props) => {
  return (
    <div className="border-b-2 pb-3">
      <img src="" alt="" />
      <p className='pt-8 text-lg uppercase font-medium text-principal-black'>{text}</p>
    </div>
  );
};

export default Filtros;