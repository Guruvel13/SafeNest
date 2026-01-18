import React from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronRight, Check } from 'lucide-react';
import heroImg from '../assets/hero-bedroom.png';

export default function Hero() {
    return (
        <section className="pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden" id="homes">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Hero Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="max-w-2xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold mb-6">
                            <Star className="w-4 h-4 fill-current" />
                            <span>Premium Girls Accomodation</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                            Your Safe & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">Comfortable Future</span> <br />
                            Starts Here
                        </h1>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
                            Experience luxury living with uncompromising safety. Designed primarily for modern students and professionals seeking peace of mind.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-600/30 hover:bg-indigo-700 transition-all flex items-center gap-2"
                            >
                                Book a Visit <ChevronRight size={20} />
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(243, 244, 246, 1)" }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white text-slate-700 border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-indigo-200 transition-all"
                            >
                                View Pricing
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 aspect-[4/3] group">
                            <img
                                src={heroImg}
                                alt="Modern Bedroom"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-2xl shadow-lg border border-white/50 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                                    <Check size={20} strokeWidth={3} />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Property Status</p>
                                    <p className="font-bold text-slate-900">Fully Managed</p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Decorative elements behind */}
                        <div className="absolute -z-10 top-[-20px] right-[-20px] w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                        <div className="absolute -z-10 bottom-[-20px] left-[-20px] w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
