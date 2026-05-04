// components/SummerCareTips.jsx
import { Card } from "@heroui/react";
import { FiSun, FiDroplet, FiWind, FiShield } from "react-icons/fi";

const tips = [
    {
        id: 1,
        icon: <FiSun size={22} className="text-yellow-500" />,
        title: "Use SPF Daily",
        description: "Apply sunscreen with at least SPF 30 every morning, even on cloudy days.",
    },
    {
        id: 2,
        icon: <FiDroplet size={22} className="text-blue-500" />,
        title: "Stay Hydrated",
        description: "Drink at least 8 glasses of water daily to keep your skin glowing and fresh.",
    },
    {
        id: 3,
        icon: <FiWind size={22} className="text-cyan-500" />,
        title: "Light Clothing",
        description: "Wear breathable fabrics like cotton and linen to stay cool in the heat.",
    },
    {
        id: 4,
        icon: <FiShield size={22} className="text-green-500" />,
        title: "After-Sun Care",
        description: "Use aloe vera or moisturizing lotion after sun exposure to soothe your skin.",
    },
];

const SummerCareTips = () => {
    return (
        <section
            className="w-full py-16"
            style={{
                backgroundImage: "url('/wave-bg.svg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-2xl sm:text-3xl font-bold text-black">Summer Care Tips</h2>
                    <p className="text-sm text-gray-500 mt-2 max-w-md mx-auto">
                        Stay fresh, protected, and glowing all summer long with these simple tips.
                    </p>
                </div>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {tips.map((tip) => (
                        <Card key={tip.id} className="p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-300 bg-white/80 backdrop-blur-sm">
                            <div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center">
                                {tip.icon}
                            </div>
                            <h3 className="text-sm font-semibold text-black">{tip.title}</h3>
                            <p className="text-xs text-gray-500 leading-relaxed">{tip.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SummerCareTips;