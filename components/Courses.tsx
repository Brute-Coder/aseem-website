'use client'


import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionItem } from "@/components/ui/accordion";

const Courses = () => {
    const curriculum = [
        { week: "Week 1", title: "Introduction to Gann Theory", content: "Basics of financial markets and Gann’s principles." },
        { week: "Week 2", title: "Time Cycle Techniques", content: "Understanding key market cycles and predicting trends." },
        { week: "Week 3", title: "Advanced Trading Strategies", content: "Using Gann’s methods for better trade execution." },
        { week: "Week 4", title: "Live Market Analysis", content: "Applying theories to real-time market conditions." },
    ];

    return (
        <section className="py-12 px-6 bg-gray-100">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-6">Masterclass Curriculum</h2>
                <p className="text-lg text-gray-600 mb-8">Learn from an expert with hands-on strategies and real-world market insights.</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <Accordion type="single" collapsible>
                    {curriculum.map((item, index) => (
                        <AccordionItem key={index} value={`week-${index}`}>
                            <Card>
                                <CardHeader>
                                    <CardTitle>{item.week}: {item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p>{item.content}</p>
                                </CardContent>
                            </Card>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
            <div className="flex justify-center mt-8">
                <Button className="px-6 py-3 text-lg font-semibold bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700">
                    Enroll Now
                </Button>
            </div>
        </section>
    );
};

export default Courses;
