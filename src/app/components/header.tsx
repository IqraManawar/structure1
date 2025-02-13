import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="header">
            <div className="absolute h-[4052px] w-[1440px] left-[-3819px] top-[-2187px] fill-[#FFFFFF] Layout Grid-[12-columns(70px)
            ] columns-[#333333]"></div>
            <div className="w-[1440px] h-[102px]">
                <Image 
                src="/logo.png" 
                alt="logo"
                className="absolute w-[70px] h-[43.71px] left-[135px] top-[29.14px] space-[-67]"
                width={70}
                height={43.71}
                />
            </div>
            <div className="absolute w-[40%] left-[38.12%] top-[44.69px]">
               <ul className="flex justify-between font-['Roboto'] not-italic font-normal text-[12px] leading-[12px] uppercase text-[#333333] ">
                   <Link href={"/"}>
                   <li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">MAIN</li>
                   </Link>
                   <Link href={"gallery"}>
                    <li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">GALLERY</li>
                    </Link>
                    <Link href={"project"}>
                    <li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">PROJECTS</li>
                    </Link>
                    <Link href={"certificate"}>
                    <li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">CERTIFICATIONS</li>
                    </Link>
                    <Link href={"contact"}>
                    <li className="border-t-2 border-b-2 border-transparent hover:border-[#333333] p-1">CONTACTS</li> 
                    </Link>
                </ul>
            </div>
        </div>
    );
};
