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
        
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                {/* Center Card */}
                <div className="bg-[#ee8345] rounded-lg p-6 text-center shadow-lg z-10 hover:scale-110 transition-transform duration-300">
                    <h3 className="text-xl font-semibold mb-2 text-white ">Pulling Live Data</h3>
                    <p className="text-sm text-white font-semibold text-justify">
                        Superjoin allows you to pull live data into Google Sheets from a variety of popular sources with ONE-CLICK. They include but are not limited to - Hubspot, Stripe, Chargebee, PostgreSQL, and many more.
                        With features like chatGPT integration, automatic-refreshes, two-way sync, bundled in a little window on your google sheets, Superjoin is a jack of many trades (and a master of them too).
                    </p>
                </div>

                {/* Left Top Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">
                        <span className="text-orange-500">Super</span>GPT - What's That?
                    </h3>
                    <p className="text-sm">
                        ChatGPT in Google Sheets. It allows you to:
                    </p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold">Create tailored content instantly</li>
                        <li className="font-bold">Gather crucial information quickly</li>
                        <li className="font-bold">Fill missing data automatically</li>
                        <li className="font-bold">Summarize complex information</li>
                    </ul>
                </div>

                {/* Right Top Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">Ease of Use</h3>
                    <p className="text-sm">Features aplenty but operation is easy.</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold">Little to no learning curve as all of the work is done in a Google Sheet.</li>
                        <li className="font-bold">No coding required for any integration.</li>
                        <li className="font-bold">Two-way sync ensures your source is also updated when you make any changes in your sheet.</li>
                    </ul>
                </div>

                {/* Bottom Left Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-4">RevOps Holy Grail</h3>
                    <p className="text-sm">Perfect tool for RevOps pros, here is why:</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold">One click integration with popular tools like HubSpot</li>
                        <li className="font-bold">Automate customized reports</li>
                        <li className="font-bold">Custom API integration</li>
                        <li className="font-bold">Formula Fill Down - ensures you don't have to manually enter formulas for new rows</li>
                    </ul>
                </div>

                {/* Bottom Right Card */}
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">
                        Marketing made <span className="text-orange-500">Manageable</span>
                    </h3>
                    <p className="text-sm">Superjoin makes it easier for marketing ops to:</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold">Break large data silos</li>
                        <li className="font-bold">Ask questions to their data (thanks to SuperGPT)</li>
                        <li className="font-bold">See performance reports from different channels in one place</li>
                    </ul>
                </div>
                <div className="bg-[#ee8345]/30 rounded-lg p-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <h3 className="text-lg font-semibold mb-1">
                        Enterprise  <span className="text-orange-500">Solutions</span>
                    </h3>
                    <p className="text-sm">Handle data in Bulk, perfectly suitable for fragmented data</p>
                    <ul className="list-disc pl-5 text-sm">
                        <li className="font-bold">Pull and manage vast amounts of data from multiple sources without slowing down workflows.</li>
                        <li className="font-bold">Integrate data from various sources - unify it all in a single view in Google Sheets</li>
                        <li className="font-bold">Perform bulk data operations</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
