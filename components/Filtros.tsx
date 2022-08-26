{/* Importação de icons */ }
import { FaPlus } from "react-icons/fa";

interface Props {
  text: string
}

const Filtros = ({ text }: Props) => {
  return (
    <div className="flex items-center justify-start border-b-2  text-[15px] mx-[10px]">
      <FaPlus />
      <p className='text-[18px] p-[12px] leading-[22px] uppercase font-medium text-principal-black'>{text}</p>
    </div>
  );
};

export default Filtros;