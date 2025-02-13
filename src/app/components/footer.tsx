import Image from "next/image";

export default function Footer(){
  return(
      <div className="absolute w-[100%] h-[417px] left-0 top-[3635px] bg-[#2C2C2C]">
          <div className="flex justify-center md:justify-start">
              <Image 
              src="/logo2.png" 
              alt="logo" 
              width={145} 
              height={94} 
              className="absolute w-[145px] h-[94px] left-[116px] top-[58px]"/>
          </div>
          <div className="absolute left-1/4 right-[67.85%] top-[13.91%] bottom-[81.29%] text-white text-center md:text-left">
               <ul className="font-['Roboto'] not-italic font-bold text-[16px] leading-[19px] flex flex-col gap-3">
                  <li className="mb-4">Information</li>
                  <a href="main"><li className="font-medium text-[14px] leading-[24px]">Main</li></a>
                  <a href="gallery"><li className="font-medium text-[14px] leading-[24px]">Gallery</li></a>
                  <a href="project"><li className="font-medium text-[14px] leading-[24px]">Projects</li></a>
                  <a href="certification"><li className="font-medium text-[14px] leading-[24px]">Certifications</li></a>
                  <a href="contact"><li className="font-medium text-[14px] leading-[24px]">Contact</li></a>
               </ul>
               
          </div>
          <div className="absolute left-[43.06%] top-[13.91%] bottom-[81.29%] font-['Roboto'] not-italic text-white text-center md:text-left space-y-6 flex flex-col gap-5">
              <div>
                  <h3 className="font-bold mb-5">Contacts</h3>
                  <div className="mt-2 flex justify-center md:justify-start">
                      <Image 
                      src="/location.png" alt=""
                      className="w-[11] h-[16] viewBox-[0 0 11 16] fill-none mr-2"
                      width={11}
                      height={16}/>
                      <p>1234 Sample Street,<br/>Austin Texas 78704</p>
                  </div><br/>
              
                  <div className="flex item-center justify-center md:justify-start">
                      <Image
                      src="/phone.png" alt="" width={11} height={16}
                      className="w-[11] h-[16] viewBox-[0 0 11 16] fill-none mr-2"/>
                      
                      <p>512.333.2222</p>
                  </div><br/>
                  <div className="flex item-center justify-center md:justify-start">
                      <Image
                      src="/email.png" alt="" width={11} height={16} 
                      className="w-[11] h-[16] viewBox-[0 0 11 16] fill-none mr-2"/><p>sampleemail.com</p>
                  </div>
                      
              </div>
          </div>    
          <div className="absolute w-[193px] h-[64px] right-[212px] top-[58px]">
              <h1 className="absolute w-[93px] h-[19px] left-px top-px font-['Roboto'] not-italic font-bold text-[16px] leading-[19px] items-end text-[#FFFFFF]">Social Media</h1>
              <div className="w-[186] h-[21] viewBox-[0 0 186 21] fill-[none] absolute left-0 top-[80%] gap-5 flex">
                  <a href="#">
                    <Image src="/twi.png" 
                    alt="twitter"
                    width={186}
                    height={21}
                    />
                    </a>
                  <a href="#">
                    <Image src="/icons.png" 
                    alt="facebook"
                    width={186}
                    height={21}
                    />
                    </a>
                  <a href="#">
                    <Image 
                    src="/iconsi.png" 
                    alt="linkin"
                    width={186}
                    height={21}
                    />
                    </a>
                  <a href="#">
                    <Image
                    src="/pini.png" 
                    alt="pininterest"
                    width={186}
                    height={21}
                    /></a>
              </div>
          </div>
          <div className="flex text-center items-center justify-center" >
              <hr className="absolute w-[100%] h-0 left-0 bottom-[70px] mix-blend-normal opacity-10 border-[1px] border-[solid] border-[white]"></hr>
              <p className="absolute w-[150px] h-[22px] bottom-[24px] font-['open_Sana'] not-italic font-normal text-[12px] leading-[22px] text-center text-[white]">© 2021 All Rights Reserved</p>
          </div>
      </div> 

  );
}