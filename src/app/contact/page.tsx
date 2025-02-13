import Image from "next/image";


export default function contact() {
    return(
        <div>
            <div className="absolute w-[1440px] h-[1143px] left-[2377px] top-[-2187px] 12columns(70px) fill-[#FFFFFF]"></div>
            <div className="absolute w-[338hug] h-[128hug] left-[135px] top-[165px]">
                <h1 className="absolute w-[222hug] h-[64hug] text-[Roboto] text-Light text-[64px] leading-[64px] text-[#BDBDBD]">Contact</h1>
                <h1 className="absolute w-[338hug] h-[64hug] top-[64px] text-bold text-[64px] leading-[64px]
                text-[#Black]">Information</h1>
            </div>
            <div className="absolute w-[280px] h-[46px] left-[135px] top-[327px] text-[Roboto] text-bold fill-[#333333]">Company Name <br />
            1234 Sample Street Austin Texas 76401
            </div>
            <h5 className="absolute w-[114px] h-[21px] left-[135px] top-[417px] text-[Roboto] text-[18px] leading-auto fill-[#333333]">512.333.2222</h5>
             
            <div className="absolute h-[71px] w-[221.81px] left-[135px] top-[543px] bg-[#333333]">
                <button className="absolute h-[12px] w-[93px] left-[71px] top-[30px] text-[#FFFFFF] text-[Roboto] text-[12px] leading-[12px] spacing-[20%]"> CONTACT US
               
                </button>
                </div>
                   
            <Image 
            src="/loca.png" 
            alt="Location" 
            height={501}
            width={1319}
            className="absolute w-[1319px] h-[501px] left-[650px] top-[105px]"/>
            
        </div>
    )
}