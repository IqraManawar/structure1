import Image from "next/image";


export default function gallery() {
    return(
        <div>
            <div>
            <h1 className="absolute w-[277.76hug] h-[64hug] left-[135px] top-[165px] font-[Roboto] non-itallic font-Light text-[64px] leading-[64px] text-[#Gray 1]">Photo Gallery</h1>
            <Image 
            src="/rec7.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[135px] top-[354px] "/>
            <Image
            src="/rec8.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[375px] top-[354px] "/>
            <Image
            src="/rec9.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[615px] top-[354px] "/>
            <Image
            src="/rec10.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[855px] top-[354px] "/>
            <Image
            src="/rec11.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[1095px] top-[354px] "/>
            <Image
            src="/rec12.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[135px] top-[644px] "/>
            <Image
            src="/rec13.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[375px] top-[644px] "/>
            <Image
            src="/rec14.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[615px] top-[644px] "/>
            <Image
            src="/rec15.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[855px] top-[644px] "/>
            <Image
            src="/rec16.png" 
            alt="Image" 
            width={210}
            height={260}
            className="absolute h-[260px] w-[210px] left-[1095px] top-[645px] "/>
            </div>
        </div>
    )
}