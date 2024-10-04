export default function Hero(){
    return (
        <div className="flex mt-20 items-center ml-20">
            <div>
                {/* Left section*/}
                <h1 className="text-5xl uppercase font-bold max-w-xl">
                    Hi, Let's Talk <span className="text-orange-500">Superjoin!</span>
                </h1>
                <div className="flex flex-col gap-3  mt-4">
                    
                    <div className="text-3xl font-semibold max-w-lg " >
                        What is Superjoin - A tool? A Service?
                    </div>
                    
                    <div className="max-w-lg text-lg  text-gray-500">
                        A Data connector that is ranked NO. 1 on Product Hunt. Let's find out more about this versatile tool hinding under the guise of an innocent google workspace extension.
                    </div>
                </div>
            </div>
            <div>
                {/* Right section */}
                <img className= " h-90 w-90 object-contain rounded-lg ml-80"src="/superjoin hoem.png" alt="superjoin home" />
            </div>
        </div>
    );
}