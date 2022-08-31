import { useState } from "react";

{/* Importação de icons */ }
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

interface Props {
  text: string,
  list: string[]
}

const Filtros = ({ text, list }: Props) => {
  const [aberto, setAberto] = useState(false);

  return (
    <div className="flex flex-wrap items-center justify-start text-[15px] mx-[10px]">
      <FaPlus style={{ display: aberto ? 'none' : 'block' }}/>
      <FaMinus style={{ display: aberto ? 'block' : 'none' }}/>

      <p onClick={() => setAberto(!aberto)} className='grow text-[18px] p-[12px] leading-[22px] uppercase font-medium text-principal-black'>{text}</p>

      <ul style={{ display: aberto ? 'block' : 'none' }} className="my-2 py-4 w-full border-b-2 border-t-2">
        {list.length > 0 && list.map((item, i) => (
          <li className="py-1" key={i}>
            <label className="flex items-center relative">
              <input type="checkbox" name={item}/>
              <span className="border border-black absolute top-1 left-0 h-[15px] w-[15px] bg-white borde-radius-[2px]"></span>
              <p className="ml-4 font-light">{item}</p>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Filtros;