import Image from "next/image";


export default function project() {
    return(
        <div className="flex flex-cool min-h-screen">
            <div className="absolute w-[1440px] h-[2248px] left-[-721px] top-[291px]"></div>
             <h1 className="absolute w-[387px] h-[64px] top-[165px] left-[135px] text-[Roboto] text-[64px] leading-[64px] text-[#Gray 4]">Sample</h1>
             <h1 className="absolute w-[259px] h-[64px] left-[135px] top-[229px] text-[Roboto] text-bold text-[64px] leading-[64px] text-[#Gray 1]">Projects</h1> 
             <Image 
             src="/com.png" 
             alt="Image" 
             height={435}
             width={1170}
             className="absolute w-[1170px] h-[435px] left-[135px] top-[353px]"/> 
             <Image
             src="/desk.png" 
             alt="Image" 
             height={428}
             width={419}
             className="absolute w-[419px] h-[428px] left-[135px] top-[818px]"/>  
             <p className="absolute w-[721px] h-[428px] left-[584px] top-[818px] text-[Roboto] text-Light text-[16px] leading-[25px] text-[#000000]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, minus. Facere distinctio, enim expedita adipisci ducimus iure optio nihil accusamus beatae illo tenetur nisi fugit dolor aperiam molestias, explicabo omnis iste? Nihil blanditiis quidem doloribus veniam fuga, distinctio libero odit deserunt non necessitatibus voluptatibus, consequatur autem ipsam? Sint placeat quis ab aliquam atque, labore ullam quibusdam necessitatibus quisquam culpa tempore provident itaque repellendus iste eos, reiciendis quia porro? Blanditiis aliquam fugiat saepe perspiciatis quibusdam asperiores itaque maxime maiores incidunt excepturi delectus natus eius officia tempora impedit possimus, ullam tenetur sequi sapiente deleniti provident ipsa magni! Vero nihil at delectus illum non nam doloremque error provident. Eum molestiae, consequatur quis deserunt tempore nihil recusandae inventore aut totam, ad sed nobis minima nostrum eligendi? Adipisci molestiae omnis numquam sed vitae fuga unde magnam ex, laboriosam quas corporis rerum, possimus reiciendis. Delectus unde hic repudiandae sapiente reiciendis est ad nemo beatae non neque? </p>
             <Image
             src="/drag.png" 
             alt="Image" 
             height={435}
             width={1170}
             className="absolute w-[1170px] h-[435px] left-[135px] top-[1276px]"/>
        </div>

    )
}