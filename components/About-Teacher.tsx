"use client"

import { PenTool, CandlestickChart, Video, School } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface Achievement {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const AboutTeacher = () => {
    const achievements: Achievement[] = [
        {
            icon: <CandlestickChart className="w-8 h-8" />,
            title: "Trader",
            description:
                "Aseem, with 8+ years in options trading and algo strategies, has worked at JPMorgan Chase and Deutsche Bank, specializing in systematic trading.",
        },
        {
            icon: <Video className="w-8 h-8" />,
            title: "Content Creator",
            description:
                "Aseem shares insights on algo trading, Python, and price action through courses, webinars, and social media, helping thousands of traders.",
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "Author",
            description:
                "Aseem, a bestselling author, writes on systematic trading, algo strategies, and risk management to guide traders.",
        },
        {
            icon: <School className="w-8 h-8" />,
            title: "Teacher",
            description:
                "Aseem has trained 3,000+ students in algorithmic trading, specializing in Python automation and backtesting. He has also taught at Chitkara University.",
        },
    ];

    return (
        <div className="py-12 px-4 sm:px-6 lg:px-8  mt-6" id="about">
            <div className="max-w-6xl mx-auto">
                <img
                    src="/aseem-light.png"
                    alt="Signature"
                    className="h-32 mx-auto mb-4"
                />
                <div className="text-center mb-12">
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Aseem Singhal is an algorithmic trader, bestselling author, and educator based in India.
                        With a background in computer engineering and an MBA in Finance, he has worked with top investment banks like JPMorgan Chase and Deutsche Bank.
                        He specializes in options trading and systematic strategies, helping thousands of traders master Python for algorithmic trading.
                        Through his content and courses, he aims to empower individuals with data-driven decision-making in trading.
                    </p>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="flex"
                        >
                            <Card className="overflow-hidden shadow-lg flex flex-col w-full h-full">
                                <CardContent className="p-6 flex flex-col flex-grow">
                                    <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                                        <div className="text-gray-600">{achievement.icon}</div>
                                        <h3 className="text-xl font-semibold">{achievement.title}</h3>
                                        <p className="text-gray-600 leading-relaxed flex-grow">
                                            {achievement.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutTeacher;
