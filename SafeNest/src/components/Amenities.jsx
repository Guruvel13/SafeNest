import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, User, Coffee, Star, Heart } from 'lucide-react';
import { fadeIn, staggerContainer, itemAnim } from './animations';

export default function Amenities() {
    return (
        <section className="py-24" id="amenities">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div {...fadeIn}>
                        <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Comfort First</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-6">Everything you need for a hassle free life.</h3>
                        <p className="text-gray-600 text-lg mb-8">We handle the chores so you can focus on your career and studies. Experience hospitality at its best.</p>

                        <div className="flex gap-3">
                            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-700 font-semibold text-sm">MasterChefs</button>
                            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-700 font-semibold text-sm">Workstation PG</button>
                            <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-700 font-semibold text-sm">Well-Being</button>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                    >
                        {[
                            { icon: Wifi, label: 'Hi-Speed WiFi' },
                            { icon: Zap, label: 'Power Backup' },
                            { icon: User, label: 'Housekeeping' },
                            { icon: Coffee, label: 'Premium Meals' },
                            { icon: Star, label: 'Air Conditioned' },
                            { icon: Heart, label: 'Laundry' },
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemAnim}
                                className="p-6 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center gap-3 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                    <item.icon size={24} />
                                </div>
                                <span className="font-semibold text-slate-900 text-sm">{item.label}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
