import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Star, ChevronRight, Check, Shield, Zap, ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/hero-bedroom.png';

export default function Hero() {
    const ref = useRef(null);

    // Scroll Parallax Elements
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const yImage = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse Parallax Logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring physics for mouse movement
    const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
    const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

    const xHead = useTransform(springX, [-0.5, 0.5], [-20, 20]);
    const xImageShift = useTransform(springX, [-0.5, 0.5], [15, -15]);
    const yImageShift = useTransform(springY, [-0.5, 0.5], [15, -15]);

    const xCard = useTransform(springX, [-0.5, 0.5], [-40, 40]);
    const yCard = useTransform(springY, [-0.5, 0.5], [-40, 40]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            // Normalize mouse position from -0.5 to 0.5
            const x = (e.clientX / window.innerWidth) - 0.5;
            const y = (e.clientY / window.innerHeight) - 0.5;

            mouseX.set(x);
            mouseY.set(y);
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            ref={ref}
            className="relative pt-24 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50"
            id="homes"
        >
            {/* Background Decor Elements - Adapted from Reference's "Floating Pixels" */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent" />

            {/* Dynamic Background Blobs */}
            <div className="absolute -z-10 top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], [20, -20]), y: useTransform(springY, [-0.5, 0.5], [20, -20]) }}
                    className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob"
                />
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], [-30, 30]), y: useTransform(springY, [-0.5, 0.5], [-30, 30]) }}
                    className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-200/40 rounded-full blur-[100px] mix-blend-multiply animate-blob animation-delay-2000"
                />
                <motion.div
                    style={{ x: useTransform(springX, [-0.5, 0.5], [10, -10]) }}
                    className="absolute top-[20%] right-[30%] w-[300px] h-[300px] bg-pink-200/40 rounded-full blur-[80px] mix-blend-multiply animate-blob animation-delay-4000"
                />

                {/* Floating Particles (Bubbles) inspired by reference */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-gradient-to-tr from-indigo-400/20 to-purple-400/20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            width: `${Math.random() * 30 + 10}px`,
                            height: `${Math.random() * 30 + 10}px`,
                            x: useTransform(springX, [-0.5, 0.5], [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * -100]),
                            y: useTransform(springY, [-0.5, 0.5], [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * -100])
                        }}
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0.3, 0.8, 0.3],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Hero Text */}
                    <motion.div
                        style={{ y: yText, opacity: opacityHero, x: xHead }}
                        className="max-w-3xl perspective-1000"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-white/60 shadow-sm text-indigo-700 text-sm font-bold mb-8 hover:bg-white/80 transition-colors cursor-default"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse"></span>
                            Premium Student Living
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-5xl lg:text-7xl font-black text-slate-900 tracking-tighter leading-[1.1] mb-6"
                        >
                            Elevate Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 animate-gradient-x inline-block">
                                Living Standard
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-xl text-gray-600 mb-10 leading-relaxed font-medium bg-white/30 backdrop-blur-sm p-4 rounded-2xl border border-white/40 max-w-lg shadow-sm"
                        >
                            Experience the perfect blend of luxury, safety, and community.
                            Thoughtfully designed spaces for the modern generation.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-wrap gap-4"
                        >
                            <Link to="/book-visit">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-lg shadow-2xl shadow-slate-900/20 hover:bg-slate-800 transition-all flex items-center gap-3"
                                >
                                    Book a Visit
                                    <div className="bg-white/20 p-1 rounded-full group-hover:bg-white/30 transition-colors">
                                        <ChevronRight size={18} />
                                    </div>
                                </motion.button>
                            </Link>
                            <motion.a
                                href="#pricing"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-8 py-4 bg-white/50 backdrop-blur-md text-slate-700 border border-white/60 rounded-2xl font-bold text-lg shadow-lg hover:bg-white/80 transition-all"
                            >
                                View Amenities
                            </motion.a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            className="mt-12 flex items-center gap-6 text-sm font-semibold text-gray-500"
                        >
                            <div className="flex items-center gap-2">
                                <Shield className="w-5 h-5 text-indigo-500" /> 24/7 Security
                            </div>
                            <div className="flex items-center gap-2">
                                <Zap className="w-5 h-5 text-purple-500" /> Power Backup
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-500" /> Premium Food
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Hero Image Section */}
                    <motion.div
                        style={{ y: yImage, x: xImageShift }}
                        className="relative hidden lg:block perspective-1000"
                    >
                        {/* Background Shapes responding to mouse */}
                        <motion.div
                            style={{ x: useTransform(springX, [-0.5, 0.5], [-20, 20]), rotate: 6 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-[3rem] opacity-20 transform translate-x-4 translate-y-4"
                        />
                        <motion.div
                            style={{ x: useTransform(springX, [-0.5, 0.5], [20, -20]), rotate: -3 }}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
                            className="absolute inset-0 bg-slate-900 rounded-[3rem] opacity-10 transform -translate-x-4 -translate-y-4"
                        />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-500/30 border-8 border-white"
                        >
                            <div className="aspect-[4/5] relative group">
                                <img
                                    src={heroImg}
                                    alt="Luxury Accommodation"
                                    className="w-full h-full object-cover transform scale-110 group-hover:scale-100 transition-transform duration-1000 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Floating Cards with significant mouse parallax */}
                            <motion.div
                                style={{ x: xCard, y: yCard }}
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.6, duration: 0.6 }}
                                className="absolute top-8 right-8 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-xl border border-white/50 z-20"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex -space-x-3">
                                        {[1, 2, 3].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-[10px] font-bold overflow-hidden">
                                                <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" />
                                            </div>
                                        ))}
                                    </div>
                                    <div className="text-xs font-bold text-slate-800">
                                        <span className="text-indigo-600">500+</span> Happy Students
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ x: useTransform(springX, [-0.5, 0.5], [30, -30]), y: useTransform(springY, [-0.5, 0.5], [30, -30]) }}
                                initial={{ y: 50, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8, duration: 0.6 }}
                                className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-xl p-4 pr-6 rounded-2xl shadow-xl border border-white/50 flex items-center gap-4 z-20"
                            >
                                <div className="w-12 h-12 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg shadow-green-500/30">
                                    <Check size={24} strokeWidth={3} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-1">Guaranteed</p>
                                    <p className="font-extrabold text-slate-900 text-lg">Best Rates</p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    style={{ opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0]) }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.8 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-indigo-400 z-20 pointer-events-none"
                >
                    <span className="text-xs font-bold uppercase tracking-widest opacity-70">Scroll</span>
                    <motion.div
                        animate={{ y: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        <ArrowDown size={20} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
