import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, MessageCircle, Phone } from 'lucide-react';
import mapImg from '../assets/map-location.png';

export default function Visit() {
    return (
        <section className="py-24 bg-gray-50 relative overflow-hidden" id="visit">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-[2.5rem] shadow-2xl shadow-indigo-100 overflow-hidden flex flex-col lg:flex-row min-h-[500px]"
                >
                    {/* Content Side */}
                    <div className="lg:w-1/2 p-10 lg:p-16 flex flex-col justify-center">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">Visit Our Nest</h2>
                        <p className="text-gray-600 text-lg mb-10 leading-relaxed border-l-4 border-indigo-100 pl-4">
                            Located in the heart of the educational and tech hub, close to public transport and shopping centers.
                        </p>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Main Campus Address</h4>
                                    <p className="text-slate-500 mt-1">Plot 45, Residency Heights, Near IT Park, Bangalore - 560066</p>
                                </div>
                            </div>

                            <div className="flex gap-5 group">
                                <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center flex-shrink-0 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 text-lg">Email Us</h4>
                                    <p className="text-slate-500 mt-1">stay@safenest.in</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 py-4 px-6 bg-[#22c55e] text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#16a34a] transition-colors shadow-lg shadow-green-200"
                            >
                                <MessageCircle size={20} className="fill-current" /> WhatsApp Now
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex-1 py-4 px-6 bg-indigo-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200"
                            >
                                <Phone size={20} className="fill-current" /> Call Warden
                            </motion.button>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="lg:w-1/2 bg-slate-200 relative min-h-[300px] lg:min-h-full overflow-hidden group">
                        <img
                            src={mapImg}
                            alt="Location Map"
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-indigo-900/10 group-hover:bg-indigo-900/0 transition-colors duration-500"></div>

                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <p className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-1">Get Directions</p>
                                <p className="text-slate-900 font-semibold text-sm">Click to view on Google Maps</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
