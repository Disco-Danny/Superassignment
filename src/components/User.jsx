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
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 mb-20">
                {/* Center Card */}
                <div className="bg-[#ee8345] rounded-lg p-6 text-center shadow-lg z-10 hover:scale-110 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white ">Pulling Live Data</h3>
                    <p className="text-sm text-white font-semibold text-justify">
                        Superjoin allows you to pull live data into Google Sheets from a variety of popular sources like Hubspot, Stripe, Chargebee, PostgreSQL, and many more, with ONE-CLICK.
                        With features like chatGPT integration, automatic-refreshes, two-way sync, bundled in a little window on your google sheets, Superjoin is a jack of many trades (and a master of them too).
                    </p>
                </div>

                {/* Left Top Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300 text-justify">
                    <h3 className="text-lg font-semibold mb-3">
                        <span className="text-orange-500">Super</span>GPT - What's That?
                    </h3>
                    <p className="text-sm mb-2">
                        ChatGPT in Google Sheets. It allows you to:
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold mb-2">Create tailored content instantly</li>
                        <li className="font-bold mb-2">Gather crucial information quickly</li>
                        <li className="font-bold mb-2">Fill missing data automatically</li>
                        <li className="font-bold">Summarize complex information</li>
                    </ul>
                </div>

                {/* Right Top Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300 text-justify">
                    <h3 className="text-lg font-semibold mb-5">Ease of Use</h3>
                    <p className="text-sm mb-2">Superjoin is also SuperEasy.</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold mb-2">Do everything in Google Sheets' familiar interface.</li>
                        <li className="font-bold mb-2">No coding required for any integration.</li>
                        <li className="font-bold">Two-way sync ensures your source is also updated when you make any changes in your sheet.</li>
                    </ul>
                </div>

                {/* Bottom Left Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300 text-justify">
                    <h3 className="text-lg font-semibold mb-4">RevOps Holy Grail</h3>
                    <p className="text-sm  mb-2">Perfect tool for RevOps pros, here is why:</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold mb-2">One click integration with popular tools like HubSpot</li>
                        <li className="font-bold mb-2">Automate customized reports</li>
                        <li className="font-bold mb-2">Custom API integration</li>
                        <li className="font-bold">Formula Fill Down - ensures you don't have to manually enter formulas for new rows</li>
                    </ul>
                </div>

                {/* Bottom Right Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300 text-justify">
                    <h3 className="text-lg font-semibold  mb-2">
                        Marketing made <span className="text-orange-500">Manageable</span>
                    </h3>
                    <p className="text-sm mb-2">Superjoin makes it easier for marketing ops to:</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold mb-2">Break large data silos</li>
                        <li className="font-bold mb-2">Ask questions to their data (thanks to SuperGPT)</li>
                        <li className="font-bold">See performance reports from different channels in one place</li>
                    </ul>
                </div>
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300 text-justify">
                    <h3 className="text-lg font-semibold  mb-2">
                        Enterprise  <span className="text-orange-500">Solutions</span>
                    </h3>
                    <p className="text-sm mb-2">Handle data in Bulk, perfectly suitable for fragmented data</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold mb-2">Pull and manage vast amounts of data from multiple sources without slowing down workflows.</li>
                        <li className="font-bold mb-2">Integrate data from various sources - unify it all in a single view in Google Sheets</li>
                        <li className="font-bold">Perform bulk data operations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
