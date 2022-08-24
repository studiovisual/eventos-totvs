import ButtonCover from "./buttonCover";

const Eventos = () => {
  return (
    <>
      <div className="border border-complementary-purple h-[421px] w-[255px] rounded-lg">
        <div className="rounded-t-lg relative">
          <div className="absolute right-0 mr-[26px] rounded-full bg-white mt-5 h-[35px] w-[35px] mb-[35px] flex align-center justify-center pt-[5px]">
            <a href="#"><img className="object-cover h-[16px] w-[14px] m-1" src="https://cdn3.iconfinder.com/data/icons/virtual-notebook/16/button_share-512.png" alt="" /></a>
          </div>
          <img className="rounded-t-lg h-[164px] w-[255px] object-cover" src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg" alt="" />
          <div className="absolute right-0 bottom-0 mr-[15px] mb-[27px]">
            <div className="h-[26px] w-[61px] bg-complementary-purple  rounded-t-lg">
              <p className="text-secundare-gray text[15px] text-center uppercase">Mês</p>
            </div>
            <div className="h-[37px] w-[61px] bg-white rounded-b-lg">
              <p className="text-principal-black m-auto font-bold text-center text-[27px]">00</p>
            </div>
          </div>
        </div>
        <div className="h60 pt-[12px] pb-[20px] px-[22px]">
          <h5 className="text-secundare-orange font-bold text-[12px] leading-[15px] mb-[5px] uppercase">Demonstrações</h5>

          <p className="text-principal-black text-[18px] leading-[22px] mb-[12px] font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting</p>

          <div>
            <div >
              <div className="flex align-center mb-[18px]">
                <img className="w-[14px] h-[16px]" src="https://img.freepik.com/free-icon/calendar-icon-black_318-9776.jpg?w=1060&t=st=1661352408~exp=1661353008~hmac=70c25ab124480c25bc87aff83d933bd4d2f754cdcdcf85d0f3e11b2715f30f1f" alt="" />
                <p className="text-bold text-[16px] ml-[8px] leading-[19px] text-principal-black mb-[11px] mb-[10px]">00/00/2022</p>
              </div>

              <div className="flex align-center">
                <img className="w-[14px] h-[16px]" src="https://cdn-icons-png.flaticon.com/512/2088/2088617.png" alt="" />
                <p className="text-bold text-[16px] ml-[8px] leading-[19px] text-principal-black mb-[18px]">10:00 às 11:00</p>
              </div>
            </div>

            <ButtonCover text="saiba mais" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Eventos;