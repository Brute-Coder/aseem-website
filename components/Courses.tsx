'use client'


import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { useDialog } from "@/hooks/useDialog";
import { motion } from "framer-motion";

const Courses = () => {
    const curriculum = [
        { week: "Class 1", title: "Basics Of Options", content: "Learn All About Options Right From Scratch." },
        { week: "Class 2", title: "Options Greeks", content: "Explore Delta, Theta, Gamma, Vega In Details." },
        { week: "Class 3", title: "Basics Of Python", content: "Get Hands On With Basics Of Python. Designed For Beginner." },
        { week: "Class 4", title: "Login Data", content: "Retrieve Login Data For Your Own Broker And Get Started." },
        { week: "Class 5", title: "Backtested Strategies", content: "Get Access To 5 Back Tested Options Strategies." },
        { week: "Class 6", title: "Python Options : Part 1", content: "Automate Option Strategies Using Python." },
        { week: "Class 7", title: "Python Options : Part 2", content: "Automate Option Strategies Using Python." },
        { week: "Class 8", title: "Python Indicators", content: "Automate Indicator Based Strategies Using Python." },
        { week: "Class 9", title: "Python Levels", content: "Automate Level Based Strategies Using Python." },
        { week: "Class 10", title: "Advanced Python", content: "Unlock The True Power Of Algo Trading." },

    ];

    const { onOpen } = useDialog()

    const handleOnClick = () => {
        onOpen("lead-form")
    };


    /*
     key={achievement.title}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }} */
    return (
        <section className="py-12 px-6" id="course">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Bootcamp Curriculum</h2>
                <p className="text-lg text-gray-600 mb-8">Learn from an expert with hands-on strategies and real-world market insights.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible>
                    {curriculum.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                        >
                            <AccordionItem value={`week-${index}`} className="mb-4 shadow-none">
                                <Card>
                                    <CardHeader>
                                        <CardTitle>{item.week}: {item.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p>{item.content}</p>
                                    </CardContent>
                                </Card>
                            </AccordionItem>
                        </motion.div>
                    ))}
                </Accordion>
            </div>
            <div className="flex justify-center mt-8">
                <Button
                    className="px-12 py-6 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700"
                    onClick={handleOnClick}>
                    Enroll Now
                </Button>
            </div>
        </section>
    );
};

export default Courses;
