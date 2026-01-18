import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-slate-900">Resident Stories</h2>
                    <p className="text-gray-600 mt-4">Don't take our word for it. Hear from our happy residents.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        { name: 'Priya Sharma', role: 'Medical Student', text: '"The security here is phenomenal. As someone working late shifts, I never have to worry about safety. The food feels just like home!"' },
                        { name: 'Ananya Roy', role: 'Software Engineer', text: '"Best place for working professionals. The high-speed wifi and power backup have never failed me during my WFH days."' },
                        { name: 'Sneha Reddy', role: 'CA Student', text: '"Maintenance is quick, and the staff is super friendly. I made great friends here. The community events are a bonus!"' }
                    ].map((story, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.2 }}
                            className="bg-gray-50 p-8 rounded-2xl relative"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white font-bold text-xl">
                                    {story.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{story.name}</h4>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{story.role}</p>
                                </div>
                            </div>
                            <p className="text-gray-600 italic leading-relaxed">{story.text}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
