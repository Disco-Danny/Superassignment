export default function Header(){
  
    return(
    
        <div className="flex justify-between items-center bg-[#ee8345] p-10 ">
            <div>
                {/*Logo*/}
                <img src="/superjoin logo.jpg" alt="Superjoin Logo"  width={60} height={60}/>
            </div>
            <div className=" flex text-3xl ">
               
               <div className="text-white text-5xl font-bold">
                SuperAssignment
               </div>
                
                </div>
           
            
        </div>
        
    );
}
