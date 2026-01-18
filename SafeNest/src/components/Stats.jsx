import React from 'react';
import { motion } from 'framer-motion';
import { Users, Shield, Coffee, Wifi, Zap, Star } from 'lucide-react';

export default function Stats() {
    return (
        <section className="bg-slate-900 py-6 overflow-hidden border-y border-slate-800">
            <div className="flex">
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0 gap-16 px-8"
                >
                    {[
                        { icon: <Users className="w-8 h-8 text-indigo-400" />, label: '100+ Residents', sub: 'Happy Community' },
                        { icon: <Shield className="w-8 h-8 text-indigo-400" />, label: '24/7 Security', sub: 'CCTV & Guards' },
                        { icon: <Coffee className="w-8 h-8 text-indigo-400" />, label: 'Nutritious Meals', sub: '4 Times a Day' },
                        { icon: <Wifi className="w-8 h-8 text-indigo-400" />, label: 'High-Speed Wifi', sub: '100 Mbps Fiber' },
                        { icon: <Zap className="w-8 h-8 text-indigo-400" />, label: 'Power Backup', sub: '24/7 Supply' },
                        { icon: <Star className="w-8 h-8 text-indigo-400" />, label: 'Daily Housekeeping', sub: 'Hygienic Rooms' },
                        { icon: <Users className="w-8 h-8 text-indigo-400" />, label: '100+ Residents', sub: 'Happy Community' },
                        { icon: <Shield className="w-8 h-8 text-indigo-400" />, label: '24/7 Security', sub: 'CCTV & Guards' },
                        { icon: <Coffee className="w-8 h-8 text-indigo-400" />, label: 'Nutritious Meals', sub: '4 Times a Day' },
                        { icon: <Wifi className="w-8 h-8 text-indigo-400" />, label: 'High-Speed Wifi', sub: '100 Mbps Fiber' },
                        { icon: <Zap className="w-8 h-8 text-indigo-400" />, label: 'Power Backup', sub: '24/7 Supply' },
                        { icon: <Star className="w-8 h-8 text-indigo-400" />, label: 'Daily Housekeeping', sub: 'Hygienic Rooms' },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4 whitespace-nowrap">
                            <div className="p-3 bg-slate-800 rounded-2xl shadow-inner shadow-slate-950/50 border border-slate-700/50">
                                {stat.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-lg leading-tight">{stat.label}</h3>
                                <p className="text-slate-400 text-sm font-medium">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="flex flex-shrink-0 gap-16 px-8"
                >
                    {[
                        { icon: <Users className="w-8 h-8 text-indigo-400" />, label: '100+ Residents', sub: 'Happy Community' },
                        { icon: <Shield className="w-8 h-8 text-indigo-400" />, label: '24/7 Security', sub: 'CCTV & Guards' },
                        { icon: <Coffee className="w-8 h-8 text-indigo-400" />, label: 'Nutritious Meals', sub: '4 Times a Day' },
                        { icon: <Wifi className="w-8 h-8 text-indigo-400" />, label: 'High-Speed Wifi', sub: '100 Mbps Fiber' },
                        { icon: <Zap className="w-8 h-8 text-indigo-400" />, label: 'Power Backup', sub: '24/7 Supply' },
                        { icon: <Star className="w-8 h-8 text-indigo-400" />, label: 'Daily Housekeeping', sub: 'Hygienic Rooms' },
                        { icon: <Users className="w-8 h-8 text-indigo-400" />, label: '100+ Residents', sub: 'Happy Community' },
                        { icon: <Shield className="w-8 h-8 text-indigo-400" />, label: '24/7 Security', sub: 'CCTV & Guards' },
                        { icon: <Coffee className="w-8 h-8 text-indigo-400" />, label: 'Nutritious Meals', sub: '4 Times a Day' },
                        { icon: <Wifi className="w-8 h-8 text-indigo-400" />, label: 'High-Speed Wifi', sub: '100 Mbps Fiber' },
                        { icon: <Zap className="w-8 h-8 text-indigo-400" />, label: 'Power Backup', sub: '24/7 Supply' },
                        { icon: <Star className="w-8 h-8 text-indigo-400" />, label: 'Daily Housekeeping', sub: 'Hygienic Rooms' },
                    ].map((stat, idx) => (
                        <div key={idx} className="flex items-center gap-4 whitespace-nowrap">
                            <div className="p-3 bg-slate-800 rounded-2xl shadow-inner shadow-slate-950/50 border border-slate-700/50">
                                {stat.icon}
                            </div>
                            <div className="flex flex-col">
                                <h3 className="text-white font-bold text-lg leading-tight">{stat.label}</h3>
                                <p className="text-slate-400 text-sm font-medium">{stat.sub}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
