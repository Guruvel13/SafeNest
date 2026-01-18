import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Video, Fingerprint, Battery, ChevronLeft, ChevronRight, User, Shield } from 'lucide-react';
import securityImg from '../assets/security-illustration.png'
// import securityVideo from '../assets/sample.mp4';

export default function Security() {
    const [activeCamera, setActiveCamera] = useState(0);

    return (
        <section className="py-24 bg-slate-950 relative overflow-hidden" id="safety">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full border border-pink-500/20 text-pink-500 text-xs font-bold uppercase tracking-widest mb-10 bg-pink-500/5">
                            <Shield className="w-4 h-4" />
                            SAFEZONE CERTIFIED
                        </div>

                        <h2 className="text-4xl lg:text-6xl font-extrabold text-white mb-12 leading-tight tracking-tight">
                            Uncompromising <br />
                            Security Protocols
                        </h2>

                        <div className="space-y-6">
                            {[
                                { title: 'CCTV Powered Security', desc: '360-degree surveillance in all common areas and building entry points with 30-day cloud backup.', icon: Video },
                                { title: 'Biometric Entry', desc: 'Smart face & fingerprint recognition for entry. No unauthorized visitors without prior approval.', icon: Fingerprint },
                                { title: 'Female-Only Staff', desc: 'All in-house wardens, kitchen staff, and management are females for maximum comfort.', icon: User },
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.02 }}
                                    className="group flex gap-6 p-6 rounded-3xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all duration-300"
                                >
                                    <div className="w-16 h-16 rounded-2xl border border-slate-700 bg-slate-800/50 flex items-center justify-center flex-shrink-0 text-pink-500">
                                        <item.icon className="w-7 h-7 stroke-[1.5]" />
                                    </div>
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-white font-bold text-xl mb-2">{item.title}</h4>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, type: "spring" }}
                        className="relative flex justify-center perspective-1000"
                    >
                        {/* Phone Mockup Container */}
                        <div className="relative w-[300px] sm:w-[340px] rounded-[3.5rem] border-[8px] border-slate-800 bg-slate-900 shadow-2xl shadow-black/50 overflow-hidden z-10 ring-1 ring-white/10">
                            {/* Dynamic Island / Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-7 bg-black rounded-b-2xl z-20 flex items-center justify-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full bg-slate-800/50"></div>
                                <div className="w-12 h-1.5 rounded-full bg-gray-900/50"></div>
                            </div>

                            {/* Screen Content */}
                            <div className="relative h-[650px] w-full bg-slate-950 flex flex-col overflow-hidden">

                                {/* Video Feed Area */}
                                <div className="relative flex-1 bg-black">
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={activeCamera}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                            className="w-full h-full relative"
                                        >
                                            {/* Simulated Content */}
                                            <div className={`w-full h-full ${activeCamera === 0 ? 'bg-indigo-950' : activeCamera === 1 ? 'bg-slate-900' : 'bg-purple-950'} flex flex-col items-center justify-center`}>

                                                {activeCamera === 0 ? (
                                                    <img src={securityImg} className="w-full h-full object-cover" alt="Security Feed" />
                                                ) : (
                                                    <div className="flex flex-col items-center opacity-40">
                                                        <div className="w-20 h-20 rounded-full border-2 border-white/20 border-t-white/80 animate-spin mb-4"></div>
                                                        <p className="font-mono text-xs tracking-widest text-indigo-300">CONNECTING TO SAT...</p>
                                                    </div>
                                                )}

                                                {/* Scan lines/Noise overlay */}
                                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light pointer-events-none"></div>
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-500/5 to-transparent animate-scan pointer-events-none"></div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>

                                    {/* Camera Info Overlay */}
                                    <div className="absolute top-10 left-5 right-5 flex justify-between items-start z-20">
                                        <div className="bg-black/40 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
                                            <div className="flex items-center gap-2 mb-0.5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse box-shadow-red"></div>
                                                <span className="text-red-500 text-[10px] font-bold tracking-widest uppercase">LIVE • REC</span>
                                            </div>
                                            <h3 className="text-white font-mono text-xs opacity-90">
                                                {['CAM 01 - ENTRANCE', 'CAM 02 - LOBBY', 'CAM 03 - CORRIDOR'][activeCamera]}
                                            </h3>
                                        </div>
                                        <div className="flex gap-1.5">
                                            <div className="w-8 h-1 bg-green-500/80 rounded-full"></div>
                                            <div className="w-1 h-1 bg-green-500/80 rounded-full"></div>
                                            <Battery className="text-white w-4 h-4 ml-1 opacity-80" />
                                        </div>
                                    </div>

                                    {/* Bottom Controls */}
                                    <div className="absolute bottom-6 left-5 right-5 z-20">
                                        <div className="bg-white/10 backdrop-blur-md p-4 rounded-3xl border border-white/10 shadow-xl">
                                            <div className="flex justify-between items-center mb-4">
                                                <div>
                                                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-bold">Status</p>
                                                    <p className="text-white font-semibold text-sm">System Armed</p>
                                                </div>
                                                <div className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded font-bold border border-green-500/30">SECURE</div>
                                            </div>

                                            <div className="flex items-center justify-between gap-2">
                                                <button onClick={() => setActiveCamera((prev) => (prev - 1 + 3) % 3)} className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"><ChevronLeft size={18} /></button>

                                                <div className="flex gap-2">
                                                    {[0, 1, 2].map((i) => (
                                                        <button key={i} onClick={() => setActiveCamera(i)} className={`h-1.5 rounded-full transition-all duration-300 ${activeCamera === i ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/50'}`} />
                                                    ))}
                                                </div>

                                                <button onClick={() => setActiveCamera((prev) => (prev + 1) % 3)} className="w-10 h-10 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition"><ChevronRight size={18} /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge - Updated Design */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: -20, opacity: 1 }}
                            transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                            className="absolute top-[15%] -right-0 lg:-right-12 z-30"
                        >
                            <div className="relative bg-gradient-to-br from-pink-500 to-rose-600 text-white p-6 rounded-2xl shadow-2xl shadow-pink-600/30 transform lg:rotate-6 border border-white/20 overflow-hidden group hover:rotate-0 transition-transform duration-300 cursor-default">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full blur-xl -mr-10 -mt-10 pointer-events-none"></div>

                                <div className="flex flex-col items-center relative z-10">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-black leading-none drop-shadow-sm">24</span>
                                        <span className="text-2xl font-bold opacity-80">/</span>
                                        <span className="text-4xl font-black leading-none drop-shadow-sm">7</span>
                                    </div>
                                    <div className="h-0.5 w-full bg-white/30 my-2 rounded-full"></div>
                                    <span className="text-[0.7rem] font-bold uppercase tracking-[0.2em]">Live Monitor</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/20 filter blur-[120px] rounded-full -z-10 animate-pulse-slow"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
