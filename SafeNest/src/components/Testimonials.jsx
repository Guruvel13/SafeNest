import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: "Priya Sharma",
        role: "Software Engineer at Google",
        // Using a reliable avatar service to match the illustrative style
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Priya&backgroundColor=c0aede",
        text: "\"The security here is phenomenal. As someone working late shifts, I never have to worry about safety. The food feels just like home!\""
    },
    {
        name: "Ananya Deshpande",
        role: "Medical Student",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ananya&backgroundColor=b6e3f4",
        text: "\"Finding a quiet place to study was hard until I moved here. The study area and high-speed WiFi are game changers for my exams.\""
    },
    {
        name: "Sneha Reddy",
        role: "Senior Architect",
        image: "https://api.dicebear.com/9.x/avataaars/svg?seed=Sneha&backgroundColor=ffdfbf",
        text: "\"Best PG experience so far. The female staff is very supportive, and the housekeeping keeps everything sparkling clean daily.\""
    }
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements can go here if needed */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight"
                    >
                        Resident Stories
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-gray-500 mt-4 font-medium"
                    >
                        Don't just take our word for it. Hear from our happy nestlings.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
                    {testimonials.map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15, duration: 0.5 }}
                            whileHover={{ y: -5 }}
                            className="bg-slate-50 p-8 rounded-3xl relative hover:shadow-xl transition-all duration-300 border border-slate-100"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="relative">
                                    <div className="w-16 h-16 rounded-full p-1 border-2 border-indigo-500">
                                        <img
                                            src={story.image}
                                            alt={story.name}
                                            className="w-full h-full rounded-full object-cover bg-white"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-slate-900 leading-tight">{story.name}</h4>
                                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mt-1">{story.role}</p>
                                </div>
                            </div>
                            <p className="text-slate-600 italic leading-relaxed text-[15px]">
                                {story.text}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
