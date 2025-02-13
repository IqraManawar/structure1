"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";


export default function Project() {
    const router = useRouter();
    return(
        <div>
        <div className="absolute w-[1440px] h-[2428px] left-[-721px] top-[-2187px] fill-[#FFFFFF]"></div>
            <h1 className="absolute w-[277.76hug] h-[128hug] left-[135px] top-[165px] text-[Roboto] text-Light text-[64px] leading-[64px]">Our <br/>Projects</h1>

            <div className="absolute h-[435px] w-[1170px] left-[138px] top-[353px] bg-[#FBFBFB] "></div>
            <div>
                <Image 
                src="/sim1.png" 
                alt="Sample Project" 
                height={435}
                width={670}
                className="absolute h-[435px] w-[670px] top-[353px] left-[138px]"/>

                <h1 className="absolute h-[47px] w-[440px] left-[838px] top-[383px] text-[Roboto] text-Light text-[40px] leading-auto text-[#Gray 1]">Sample Project</h1>
                <p className="absolute w-[400px] h-[120px] left-[838px] top-[503px] text-[Roboto] text-Light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, eligendi cumque voluptas libero magnam aliquid recusandae architecto, et qui impedit id aut, officiis ipsa maiores quidem quaerat commodi cum illo!</p>
                <div className="absolute h-[71px] w-[222px] left-[835px] top-[687px] bg-[#FFFFFF] pl-7 pt-7">
                <button className="absolute h-[24px] w-[128px] left-[42px] top-[24px] text-[#333333]" onClick={()=>router.push("/sam")}> VIEW MORE 
               
                </button>
                </div>
                
               
            </div>
            <div className="absolute h-[435px] w-[1170px] left-[135px] top-[848px] bg-[#FBFBFB]"></div>
            <div>
                <h1 className="absolute h-[47px] w-[440px] left-[835px] top-[878px] text-[Roboto] text-Light text-[40px] leading-auto">Sample Project 2</h1>
                <Image
                    src="/sim2.png" 
                    alt="Sample Project 2" 
                    height={435}
                    width={670}
                    className="absolute w-[670px] h-[435px] left-[135px] top-[848px]"/>
                <p className="absolute w-[400px] h-[120px] left-[835px] top-[998px] text-[Roboto] text-Light text-16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga in suscipit temporibus, sequi dicta commodi inventore facilis molestias, vero quasi. Sed, suscipit unde? Rerum esse laboriosam ipsa! Sapiente, illum?</p>
                <div className="absolute h-[71px] w-[222px] left-[835px] top-[1182px] bg-[#FFFFFF] pl-7 pt-7">
                <button className="absolute h-[24px] w-[118px] left-[52px] top-[24px] text-[#333333]"> VIEW MORE 
               
                </button>
                </div>
                   
                
            </div>
            <div className="absolute w-[1170px] h-[435px] left-[135px] top-[1343px] bg-[#FBFBFB]"></div>
              <div>
                <Image
                src="/sim3.png" 
                alt="Sample Project 3" 
                height={435}
                width={670}
                className="absolute h-[435px] w-[670px] left-[135px] top-[1343px]"/>
                <h1 className="absolute h-[47px] w-[440px] left-[835px] top-[1373px] text-[Roboto] txt-Light text-[40px] leading-auto text-[#Gray 4]">Sample Project 3</h1>
                <p className="absolute w-[400px] h-[120px] left-[835px] top-[1493px] text-[Roboto] text-Light text-16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem fuga in suscipit temporibus, sequi dicta commodi inventore facilis molestias, vero quasi. Sed, suscipit unde? Rerum esse laboriosam ipsa! Sapiente, illum?</p>
                <div className="absolute h-[71px] w-[222px] left-[835px] top-[1677px] bg-[#FFFFFF]">
                <button className="absolute h-[24px] w-[118px] left-[52px] top-[24px] text-[#333333]"> VIEW MORE 
               
                </button>
                </div>
              </div>
        </div>
    )
}
