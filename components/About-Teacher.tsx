// import { Briefcase, Book, PenTool, Users } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";

// interface Achievement {
//     icon: React.ReactNode;
//     title: string;
//     description: string;
// }

// const AboutTeacher = () => {
//     const achievements: Achievement[] = [
//         {
//             icon: <Briefcase className="w-8 h-8" />,
//             title: "Entrepreneur",
//             description:
//                 "warikoo has been an entrepreneur since 2008, was the founding CEO of Groupon India and cofounded nearbuy.com He is .",
//         },
//         {
//             icon: <Book className="w-8 h-8" />,
//             title: "Content Creator",
//             description:
//                 "warikoo has been creating content since 2005 and has over 14.5M+ followers across all popular social media platforms.",
//         },
//         {
//             icon: <PenTool className="w-8 h-8" />,
//             title: "Author",
//             description:
//                 "warikoo has written 3 books: DO EPIC SHIT, GET EPIC SHIT DONE, and MAKE EPIC MONEY, all of which were #1 bestsellers in ",
//         },
//         {
//             icon: <Users className="w-8 h-8" />,
//             title: "Investor",
//             description:
//                 "warikoo is an active angel investor in 30+ companies and loves to spend time with first-time entrepreneurs mentoring them.",
//         },
//     ];

//     return (
//         <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10 md:mt-20">
//             <div className="max-w-6xl mx-auto">
//                 <div className="text-center mb-12">
//                     <h1 className="text-4xl font-bold mb-4">ankur warikoo</h1>
//                     <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                         warikoo is an Internet Entrepreneur based out of India and is one of
//                         India's top content creators. He is also a bestselling author and
//                         conducts courses online as an educator. His aim through his content is
//                         to make sure all the choices you make in life come from a point of
//                         awareness and not ignorance.
//                     </p>
//                     <div className="mt-6">
//                         <img
//                             src="/api/placeholder/200/100"
//                             alt="Signature"
//                             className="h-12 mx-auto"
//                         />
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//                     {achievements.map((achievement) => (
//                         <Card key={achievement.title} className="overflow-hidden">
//                             <CardContent className="p-6">
//                                 <div className="flex max-md:flex-col max-md:justify-center max-md:items-center max-md:text-center md:items-start space-x-4">
//                                     <div className="flex-shrink-0 text-gray-600">
//                                         {achievement.icon}
//                                     </div>
//                                     <div>
//                                         <h3 className="text-xl font-semibold mb-2">
//                                             {achievement.title}
//                                         </h3>
//                                         <p className="text-gray-600 leading-relaxed">
//                                             {achievement.description}
//                                         </p>
//                                     </div>
//                                 </div>
//                             </CardContent>
//                         </Card>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default AboutTeacher;
"use client"

import { Briefcase, Book, PenTool, Users } from "lucide-react";
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
            icon: <Briefcase className="w-8 h-8" />,
            title: "Entrepreneur",
            description:
                "warikoo has been an entrepreneur since 2008, was the founding CEO of Groupon India and cofounded nearbuy.com.",
        },
        {
            icon: <Book className="w-8 h-8" />,
            title: "Content Creator",
            description:
                "warikoo has been creating content since 2005 and has over 14.5M+ followers across all popular social media platforms.",
        },
        {
            icon: <PenTool className="w-8 h-8" />,
            title: "Author",
            description:
                "warikoo has written 3 books: DO EPIC SHIT, GET EPIC SHIT DONE, and MAKE EPIC MONEY, all of which were #1 bestsellers.",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Investor",
            description:
                "warikoo is an active angel investor in 30+ companies and loves to spend time with first-time entrepreneurs mentoring them.",
        },
    ];

    return (
        <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-10 md:mt-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">ankur warikoo</h1>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        warikoo is an Internet Entrepreneur based out of India and is one of
                        India's top content creators. He is also a bestselling author and
                        conducts courses online as an educator. His aim through his content is
                        to make sure all the choices you make in life come from a point of
                        awareness and not ignorance.
                    </p>
                    <div className="mt-6">
                        <img
                            src="/api/placeholder/200/100"
                            alt="Signature"
                            className="h-12 mx-auto"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {achievements.map((achievement, index) => (
                        <motion.div
                            key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
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
