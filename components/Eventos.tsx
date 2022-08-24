import ButtonCover from "./buttonCover";

const Eventos = () => {
  return (
    <>
      <div className="border border-complementary-purple h-[421px] w-[255px] rounded-lg">
        <div className="rounded-t-lg relative">
          <div className="absolute right-0 mr-[26px] rounded-full bg-white mt-[20px] h-[35px] w-[35px] mb-[35px] ">
            <a className="h-[16px] flex align-center justify-center mt-[10px]" href="#"><img src="https://cdn-icons-png.flaticon.com/512/2028/2028252.png" alt="" /></a>
          </div>
          <img className="rounded-t-lg h-[164px] w-[255px] object-cover" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" alt="" />
          <div className="absolute right-0 bottom-0 mr-[15px] w-[61px] h-[61px] mb-[19px] ">
            <div className=" bg-complementary-purple  rounded-t-lg text-secundare-gray text-[15px]  text-center uppercase flex align-center justify-center ">
              Mês
            </div>
            <div className="bg-white h-[35px] rounded-b-lg text-principal-black text-center font-bold text-[23px] flex align-center justify-center ">
              00
            </div>
          </div>
        </div>
        <div className="h60 pt-[12px] pb-[20px] px-[22px]">
          <h5 className="text-secundare-orange font-black text-[12px] w-[208px] h-[15px] leading-[15px] mb-[5px] uppercase">Demonstrações</h5>

          <p className="text-principal-black text-[18px] w-[211px] h-[66px] leading-[22px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        </div>
        <div>
          <div className="px-[22px]">
            <div className="flex align-center w-[105px] h-[19px] mb-[18px]">
              <img className="w-[14px] h-[16px]" src="https://img.freepik.com/free-icon/calendar-icon-black_318-9776.jpg?w=1060&t=st=1661352408~exp=1661353008~hmac=70c25ab124480c25bc87aff83d933bd4d2f754cdcdcf85d0f3e11b2715f30f1f" alt="" />
              <p className="font-bold text-[16px] ml-[8px] leading-[19px] text-principal-black mb-[11px]">00/00/2022</p>
            </div>

            <div className="flex align-center">
              <img className="w-[14px] h-[16px]" src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="" />
              <p className="font-bold text-[16px] ml-[8px] leading-[19px] text-principal-black mb-[18px]">10:00 às 11:00</p>
            </div>
          </div>
          <ButtonCover text="saiba mais" />
        </div>
      </div>
    </>
  );
};

export default Eventos;