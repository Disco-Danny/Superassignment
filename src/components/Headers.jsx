export default function Header(){
    const navButtons = [
        {
            text: "Brief",
            url: "/Brief"
        },
        {
            text: "User",
            url: "/User"
        },
        {
            text: "Product",
            url: "/Product"
        },
        {
            text: "Market",
            url: "/Market"
        },
    ];
    return(
    
        <div className="flex justify-between items-center bg-[#ee8345] p-10 ">
            <div>
                {/*Logo*/}
                <img src="/superjoin logo.jpg" alt="Superjoin Logo"  width={60} height={60}/>
            </div>
            <div className=" flex text-3xl ">
                {/*Nav buttons*/}
                <div className="flex gap-10 text-white">
                {
                    navButtons.map((menuItems, idx)=> {
                        return(
                            <a key={idx} href={menuItems.url} className="cursor-pointer text-white p-2 hover:underline hover:text-yellow-300 transition-all duration-300 transform hover:scale-105">
                                {menuItems.text}
                            </a>
                        );
                    })
                }
                </div>
            </div>
            
        </div>
        
    );
}
