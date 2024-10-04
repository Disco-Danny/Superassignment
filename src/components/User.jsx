export default function User() {
    return (
        <div className="px-12 py-4 text-xl">
            <h1 className="flex items-center justify-center mt-24">
                What is&nbsp;<span className="text-orange-500">Superjoin?</span>
            </h1>
            <h2 className="flex items-center justify-center mt-5">
                Pulling live data, is that it?
            </h2>
            
            {/* Product Section */}
        
            <div className="relative flex justify-center items-center h-screen mt-10">
                {/* Center Card */}
                
                <div className="absolute bg-[#ee8345] rounded-lg p-6 w-64 text-center shadow-lg z-10 hover:scale-110 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white">Pulling Live Data</h3>
                    <p className="text-sm text-white font-semibold">Superjoin allows you to pull live data into Google Sheets from a variety of popular sources with ONE-CLICK. They include but are not limited to - Hubspot, Stripe, Chargebee, PostgreSQL, and many more.
                    With features like chatGPT integration, automatic-refreshes, two-way sync, bundled in a little window on your google sheets, Superjoin is a jack of many trades(and a master of them too).
                    </p>
                </div>
                
                {/* Corner Cards */}
                <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 m-2 hover:scale-110 transition-transform duration-30">
                <div className="bg-[#ee8345]/30 rounded-lg p-2 w-48 text-left shadow-lg">
    <h3 className="text-lg font-semibold mb-1 p-2">
        <span className="text-orange-500">Super</span>GPT - What's That?
    </h3>
    <p className="text-sm p-2">
        ChatGPT in Google Sheets. It allows you to:
        <ul className="list-disc pl-5">
            <li className="font-bold">Create tailored content instantly</li>
            <li className="font-bold">Gather crucial information quickly</li>
            <li className="font-bold">Fill missing data automatically</li>
            <li className="font-bold">Summarize complex information</li>
        </ul>
    </p>
</div>

                </div>

                <div className="absolute top-1/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 m-2 hover:scale-110 transition-transform duration-30 ">
                    <div className="bg-[#ee8345]/30 rounded-lg p-2 w-48 text-center shadow-lg">
                        <h3 className="text-lg font-semibold mb-1">Ease of Use</h3>
                        <p className="text-sm">Features aplenty but operation is easy.<br />
                        <div className="text-left">
        <ul className="list-disc list-inside">
        <li className="font-bold">Little to no learning curve as all of the work is done in a Google Sheet.</li>
        <li className="font-bold">No coding required for any integration.</li>
        <li className="font-bold">Superjoin : data experts :: Scratch : programmers</li>
        <li className="font-bold">Two-way sync ensures your source is also updated when you make any changes in your sheet.</li>
    </ul>
</div>


                        </p>
                    </div>
                </div>

                <div className="absolute bottom-1/4 left-1/4 transform -translate-x-1/2 translate-y-1/2 m-2 hover:scale-110 transition-transform duration-30">
                    <div className="bg-[#ee8345]/30 rounded-lg p-2 w-48 text-left shadow-lg">
    <h3 className="text-lg font-semibold mb-4">RevOps Holy Grail</h3>
    <p className="text-sm">Perfect tool for RevOps pros, here is why:</p>
    <ul className="list-disc pl-5 text-sm">
        <li className="font-bold">One click integration with popular tools like HubSpot</li>
        <li className="font-bold">Automate customized reports</li>
        <li className="font-bold">Custom API integration</li>
        <li className="font-bold">Formula Fill Down - ensures you don't have to manually enter formulas for new rows</li>
    </ul>
</div>

                </div>

                <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 m-2 hover:scale-110 transition-transform duration-30">
                <div className="bg-[#ee8345]/30 rounded-lg p-2 w-48 text-left shadow-lg">
    <h3 className="text-lg font-semibold mb-1">
        Marketing made <span className="text-orange-500">Manageable</span>
    </h3>
    <p className="text-sm">
        Catering to a field that is constantly expanding, Superjoin makes it easier for marketing ops to:
    </p>
    <ul className="list-disc pl-5 text-sm">
        <li className="font-bold">Break large data silos</li>
        <li className="font-bold">Ask questions to their data (quite literally, thanks to SuperGPT)</li>
        <li className="font-bold">See performance reports from different channels in one place - provides holistic insights and data-driven decisions</li>
    </ul>
</div>

                </div>
            </div>
        </div>
    );
}


