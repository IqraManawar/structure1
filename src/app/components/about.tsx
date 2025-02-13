import Image from "next/image";

export default function About() {
    return (
      <div>
        <div className="absolute w-[1170px] h-[435px] left-[135px] top-[1054px] bg-[#FBFBFB]"></div>
          <Image
          src="/rec1.png" 
          alt="Image" 
          width={270}
          height={265}
          className="absolute w-[270px] h-[265px] left-[195px] top-[1084px]"/>
          <Image
          src="/rec2.png" 
          alt="Image" 
          width={270}
          height={345}
          className="absolute w-[270px] h-[345px] left-[535px] top-[1114px]"/>
          <Image
          src="/rec3.png" 
          alt="Image" 
          width={270}
          height={140}
          className="absolute w-[270px] h-[140px] left-[235px] top-[1379px]"/>
          <h1 className="absolute w-[168px] h-[64px] left-[835px] top-[1084px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">About</h1>
          <p className="absolute w-[400px] h-[200px] left-[835px] top-[1168px] font-['Roboto'] not-italic font-light text-[16px] leading-[25px] text-[#000000]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
          <div className="absolute w-[222px] h-[71px] left-[835px] top-[1388px] bg-[#FFFFFF] pl-7 pt-7">
            <button className="flex  h-[12px]  text-center items-center text-[#333333] font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase">
              Read More
            </button>
          </div>
      </div>
      
    );
  }
  