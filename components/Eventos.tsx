import ButtonCover from "./buttonCover";
import * as dayjs from "dayjs";

interface Props {
  data: any
}

const Eventos = ({ data }: Props) => {
  const months = [
    'JAN', 'FEV', 'MAR', 'ABR', 'MAI', 'JUN',
    'JUL', 'AGO', 'SET', 'OUT', 'NOV', 'DEZ',
  ]

  return (
    <>
      <div className="border border-complementary-purple w-full h-full lg:h-[421px] max-w-full md:max-w-[255px] rounded-lg">
        <div className="rounded-t-lg relative">
          <div className="absolute right-0 mr-[26px] rounded-full bg-white mt-[20px] h-[35px] w-[35px] mb-[35px]">
            <a className="h-[16px] flex align-center justify-center mt-[10px]" href="#">
              <img src="https://cdn-icons-png.flaticon.com/512/2028/2028252.png" alt="" />
            </a>
          </div>
          
          <img className="rounded-t-lg h-[164px] w-full md:w-[255px] object-cover" src={data.media.url} alt={data.title} />

          <div className="absolute right-0 bottom-0 mr-[15px] w-[61px] h-[61px] mb-[19px]">
            <div className=" bg-complementary-purple  rounded-t-lg text-secundare-gray text-[15px]  text-center uppercase flex align-center justify-center">
              {/* {months[dayjs(data.start_date).format('M')]} */}
            </div>
            <div className="bg-white h-[35px] rounded-b-lg text-principal-black text-center font-bold text-[23px] flex align-center justify-center">
              {/* {dayjs(data.start_date).format('DD')} */}
            </div>
          </div>
        </div>
        <div className="h60 pt-[12px] pb-[20px] px-[22px]">
          <h5 className="text-secundare-orange font-black text-[12px] w-full lg:w-[208px] h-[15px] leading-[15px] mb-[5px] uppercase">
            {data.subgroups[0].subgroup_name}
          </h5>

          <p className="text-principal-black text-[18px] w-full lg:w-[211px] h-full lg:h-[66px] leading-[22px] font-bold">
            {data.title}
          </p>
        </div>
        <div className="pb-5 lg:pb-0">
          <div className="px-[22px]">
            <div className="flex align-center h-[19px] mb-[18px]">
              <img className="w-[14px] h-[16px]" src="https://img.freepik.com/free-icon/calendar-icon-black_318-9776.jpg?w=1060&t=st=1661352408~exp=1661353008~hmac=70c25ab124480c25bc87aff83d933bd4d2f754cdcdcf85d0f3e11b2715f30f1f" alt="" />
              <p className="font-bold text-[16px] ml-[8px] leading-[19px] text-principal-black mb-[11px]">
                {/* {dayjs(data.start_date).format('DD/MM/YY')} */}
              </p>
            </div>

            <div className="flex align-center">
              <img className="w-[14px] h-[16px]" src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="" />

              <p className="font-bold text-[16px] ml-[8px] leading-[19px] text-principal-black mb-[18px]">
                {data.start_time} às {data.end_time}
              </p>
            </div>
          </div>
          <ButtonCover text="saiba mais" />
        </div>
      </div>
    </>
  );
};

export default Eventos;