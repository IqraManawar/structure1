import Image from "next/image";

export default function Hero() {
    return (
      <div className="max-w-[100%] overflow-hidden">
      <div className="hero">
        <h1 className="absolute w-[277.76px] h-[64px] left-[135px] top-[438px] text-[#BDBDBD] font-['Roboto'] not-italic font-light text-[64px] leading-[64px]">PROJECT</h1>
        <h2 className="absolute w-[186px] h-[64px] left-[135px] top-[502px] text-[#333333] font-['Roboto'] not-italic font-bold text-[64px] leading-[64px]">Lorum</h2>
        </div>
        <div>
        <Image
        src="/rec6.png" 
        alt="Building Image" 
        className="absolute w-[770px] h-[826px] left-[535px] top-[105px]" 
        width={770}
        height={826}/>
        <div className="absolute left-[534.66px] top-[863px] w-[221.81px] h-[71px] bg-[#FFFFFF] pl-7 pt-7">
          <button className="flex  h-[12px]  text-center items-center text-[#333333] font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase">
            View Project
          </button>
        </div>
        </div>
      </div>
    );
  };
  