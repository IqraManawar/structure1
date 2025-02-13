import Image from "next/image";


export default function Projects() {
    return (
      <div>
        <h1 className="absolute w-[346px] h-[64px] left-[135px] top-[2027px] font-['Roboto'] not-italic font-light text-[64px] leading-[64px] text-[#BDBDBD]">OurProjects</h1>
          <Image
          src="/project1.png" 
          alt="ProjectImage-1" 
          height={255}
          width={570}
          className="absolute w-[570px] h-[255px] left-[135px] top-[2151px]"/>
          <span className="absolute w-[570px] h-[255px] left-[135px] top-[2151px] bg-[#333333] opacity-80"></span>
          <h2 className="absolute w-[233px] h-[128px] left-[214px] top-[2199px] font-['Roboto'] not-italic font-bold text-[64px] leading-[64px] text-[#FFFFFF]">Sample Project</h2>
          <button className="absolute w-[129px] h-[24px] left-[214px] top-[2335px] flex text-[#FFFFFF]">
            View More
          </button>
          <Image 
          src="/project2.png" 
          alt="Project Image" 
          width={570}
          height={255}
          className="absolute w-[570px] h-[255px] left-[735px] top-[2151px]"/>
          <Image
          src="/project3.png" 
          alt="Project Image" 
          width={270}
          height={255}
          className="absolute w-[270px] h-[255px] left-[135px] top-[2436px]"/>
          <Image
          src="/project4.png" 
          alt="Project Image" 
           width={470}
           height={255}
           className="absolute w-[470px] h-[255px] left-[435px] top-[2436px]"/>
           <Image 
          src="/project5.png" 
          alt="Project Image" 
           width={370}
           height={255}
           className="absolute w-[370px] h-[255px] left-[935px] top-[2436px]"/>
           <button className="absolute w-[221.81px] h-[71px] left-[1083px] top-[2721px] bg-[#333333] text-[#ffffff] flex justify-center items-center">
            All Projects
           </button>
      </div>
    );
  }
  