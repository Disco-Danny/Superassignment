import { useState, useEffect } from 'react';

export default function Product() {
    // Define your use cases data
    const useCases = [
        {
            useCase: "Reporting",
            description: "Streamline the reporting process to eliminate manual tasks, reduce errors, and provide timely insights.",
            benefit: "Enhances operational efficiency and decision-making by delivering accurate reports, allowing teams to focus on strategic initiatives",
        },
        {
            useCase: "Product Management",
            description: "Integrate user data from analytics tools(Google Analytics), and feedback forms into Google Sheets. It centralizes all data in one place for easier analysis and feature planning",
            benefit: "Provides product teams with data-backed insights that help in decision making, leading to faster feature development and a more user-driven product roadmap.",
        },
        {
            useCase: "Bulk Data Operations",
            description: "Handle and process large volumes of data within Google Sheets, automating repetitive tasks like data imports, updates, and calculations.",
            benefit: "Streamlines bulk data management, saving time and reducing manual effort while maintaining accuracy in large datasets.",
        },
        {
            useCase: "Early-Stage Startups",
            description: "Superjoin allows early-stage startups to integrate their essential business tools directly into Google Sheets without complex setups or coding, making it easier to manage data across various platforms. ",
            benefit: "Reduces operational costs by providing a simple, no-code solution for data integration, allowing startups to focus on growth and scaling without investing in expensive or time-consuming tools. No need for additions data-warehouses, do everything in Google Sheets",
        },
        {
            useCase: "Business Operations",
            description: "Streamline and increase collaborations between SalesOps, RevOps, and MarkOps departments.",
            benefit: "Cross-functional team that can present holistic reports. Helps in reducing manual errors",
        },
        {
            useCase: "Designers",
            description: "Create a content calendar or a list of content ideas with the help of SuperGPT.",
            benefit: "No more switching tabs for organizing data, fill-in missing elements.Speed up the creative process",
        },
    ];

    // Image slideshow logic
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
         // replace with actual image paths
        '/Producthunt Reviews.png',
        '/Pathfnder review.png',
        '/wayleadr review.png'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="px-12 py-4 text-xl">
            <h1 className="flex justify-center items-center mt-24">
                What do &nbsp;<span className="text-orange-500">Users </span>&nbsp;Think?
            </h1>
            <h2 className="flex justify-center items-center mt-6">
                Let us see what Superjoin looks like from the users' perspective
            </h2>

            {/* Table for Use Cases */}
            <div className="mt-10 overflow-x-auto">
                <table className="min-w-full bg-white rounded-lg shadow-lg">
                    <thead>
                        <tr className="bg-orange-500 text-white">
                            <th className="py-3 px-4 text-left">Use Case</th>
                            <th className="py-3 px-4 text-left">Description</th>
                            <th className="py-3 px-4 text-left">Benefit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {useCases.map((useCase, index) => (
                            <tr key={index} className="hover:bg-orange-100">
                                <td className="border-b py-2 px-4 font-bold">{useCase.useCase}</td>
                                <td className="border-b py-2 px-4">{useCase.description}</td>
                                <td className="border-b py-2 px-4">{useCase.benefit}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between mt-20">
                {/* Left section for text */}
                <div className="w-1/2 pr-4">
                    <h1 className='mb-20'>Reviews</h1>
                    <p>
                        According to 2000+ customers and my own "investigation", <span className='text-orange-500 font-semibold' >Superjoin </span>(Previously Stackit) is well loved by professionals from a lot of different industries.
                    </p>
                    <p className="mt-4">
                        Features like SuperGPT, Automated Reports, One-Click Connections are brought up the most. 
                    </p>
                    <p className="mt-4">
                        With a customer base that seems to love the product and all of its features, <span className='text-orange-500 font-semibold' >Superjoin</span> is set to make waves in the Data Integration and Automation Industry
                    </p>
                </div>

                {/* Right section for image slideshow */}
                <div className="w-1/2">
                    <div className="rounded-lg overflow-hidden">
                        <img
                            src={images[currentImageIndex]}
                            alt="Customer Review Image"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
