export default function Hero() {
    return (
        <div className="flex flex-col md:flex-row mt-20 items-center md:ml-20">
            <div className="md:w-1/2">
                {/* Left section*/}
                <h1 className="text-5xl uppercase font-bold max-w-xl">
                    Hi, Let's Talk <span className="text-orange-500">Superjoin!</span>
                </h1>
                <div className="flex flex-col gap-3 mt-4">
                    <div className="text-3xl font-semibold max-w-lg">
                        What is Superjoin - A tool? A Service?
                    </div>
                    <div className="max-w-lg text-lg text-gray-500">
                        A Data connector that is ranked NO. 1 on Product Hunt. Let's find out more about this versatile tool hiding under the guise of an innocent Google Workspace extension.
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end md:mr-20">
                {/* Right section */}
                <img
                    className="h-auto max-w-full object-contain rounded-lg"
                    src="/superjoin hoem.png"
                    alt="superjoin home"
                />
            </div>
        </div>
    );
}
