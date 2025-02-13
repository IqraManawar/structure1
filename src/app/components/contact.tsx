import Image from "next/image";

export default function Contact() {
    return (
      <div>
        <h1 className="absolute w-[312px] h-[64px] left-[135px] top-[2912px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">ContactUs</h1>
        <input type="text" placeholder="Name" className="absolute w-[391px] h-[46px] left-[135px] top-[2998px] bg-[#F3F3F3] text-[#8D8D8D] p-2"/>
        <input type="Phone Number" placeholder="Phone Number*" className="absolute w-[391px] h-[45px] left-[135px] top-[3054px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
        <input type="email" placeholder="E-mail*" className="absolute w-[391px] h-[46px] left-[135px] top-[3109px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
        <input type="text" placeholder="Interested In" className="absolute w-[391px] h-[45px] left-[135px] top-[3165px] bg-[#F3F3F3] text-[#8D8D8D] p-2" />
        <textarea name="message box" placeholder="Message" className="absolute w-[391px] h-[147px] left-[135px] top-[3220px] bg-[#F3F3F3] text-[#8D8D8D] p-2"></textarea>
        <Image 
        src="/hero.png" 
        alt="Contact Image" 
        width={749}
        height={369}
        className="absolute w-[749px] h-[369px] left-[556px] top-[2998px]"/>
        <button className="absolute w-[221.81px] h-[71px] left-[135px] top-[3444px] bg-[#333333] text-[#ffffff] flex justify-center items-center">
          Send Email
        </button>
        
      </div>
     
    );
  }
  