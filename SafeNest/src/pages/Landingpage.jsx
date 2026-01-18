import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, Shield, Wifi, User, Coffee, Lock, Star, ChevronRight,
    Menu, X, Instagram, Facebook, Twitter, MapPin, Mail, Phone,
    Zap, Heart, Home, Users, MessageCircle, Map
} from 'lucide-react';
import heroImg from '../assets/hero-bedroom.png';
import securityImg from '../assets/security-illustration.png';

const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                <Home className="text-white w-5 h-5" />
                            </div>
                            <span className="font-bold text-2xl tracking-tight text-slate-900">SafeNest</span>
                        </div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            {['Homes', 'Amenities', 'Safety', 'Policies', 'Support'].map((link) => (
                                <a key={link} href={`#${link.toLowerCase()}`} className="text-gray-600 hover:text-indigo-600 font-medium transition-colors">
                                    {link}
                                </a>
                            ))}
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-6 py-2.5 bg-indigo-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-600/20 hover:bg-indigo-700 transition-all"
                            >
                                Book a Visit
                            </motion.button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-indigo-600 p-2">
                                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="md:hidden overflow-hidden bg-white border-b border-gray-100"
                        >
                            <div className="pt-2 pb-4 space-y-1 px-4">
                                {['Homes', 'Amenities', 'Safety', 'Policies', 'Support'].map((link) => (
                                    <a key={link} href={`#${link.toLowerCase()}`} className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md">
                                        {link}
                                    </a>
                                ))}
                                <div className="mt-4 pt-4 border-t border-gray-100">
                                    <button className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                        Book a Visit
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>

            {/* Hero Section */}
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

            {/* Stats Bar Marquee */}
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

            {/* Sharing Options */}
            <section className="py-24 bg-gray-50" id="pricing">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div {...fadeIn} className="text-center mb-16">
                        <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Pricing Plans</h2>
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Flexible Sharing Options</h3>
                        <p className="text-gray-600 max-w-2xl mx-auto">Choose a space that fits your lifestyle and budget. All plans include full amenities.</p>
                    </motion.div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-50px" }}
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {[
                            {
                                type: 'Single',
                                price: '18,000',
                                deposit: '25,000',
                                badge: 'PRIVATE',
                                features: ['Private Balcony', 'Attached Bath', 'Smart TV'],
                                popular: false
                            },
                            {
                                type: 'Double',
                                price: '12,000',
                                deposit: '15,000',
                                badge: 'STANDARD',
                                features: ['Personal Closet', 'Study Corner', 'Shared Balcony'],
                                popular: true
                            },
                            {
                                type: 'Triple',
                                price: '9,500',
                                deposit: '10,000',
                                badge: 'ECONOMY',
                                features: ['Spacious Room', 'Shared Utilities', 'Housekeeping'],
                                popular: false
                            },
                            {
                                type: '4-Sharing',
                                price: '7,500',
                                deposit: '8,000',
                                badge: 'BUDGET',
                                features: ['Personal Lockers', 'Daily Meals', 'RO Water'],
                                popular: false
                            },
                        ].map((plan, idx) => (
                            <motion.div
                                key={idx}
                                variants={itemAnim}
                                whileHover={{ y: -10 }}
                                className={`relative bg-white rounded-3xl p-6 shadow-xl border-2 transition-all duration-300 group
                                    ${plan.popular
                                        ? 'border-indigo-600 shadow-indigo-600/10'
                                        : 'border-transparent hover:border-indigo-600 hover:shadow-indigo-600/10'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-600/20">
                                        Most Popular
                                    </div>
                                )}

                                <div className="flex justify-between items-start mb-6">
                                    <h4 className="text-xl font-bold text-slate-900">{plan.type}</h4>
                                    <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${plan.popular ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-500'
                                        }`}>
                                        {plan.badge}
                                    </span>
                                </div>

                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-4xl font-bold text-slate-900">₹{plan.price}</span>
                                        <span className="text-gray-500 text-sm">/mo</span>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-2 font-medium">Security Deposit: ₹{plan.deposit}</p>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feat, i) => (
                                        <li key={i} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                                            <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${plan.popular ? 'text-indigo-600 bg-indigo-50' : 'text-green-500 bg-green-50 group-hover:text-indigo-600 group-hover:bg-indigo-50'
                                                }`}>
                                                <Check className="w-3.5 h-3.5 stroke-[3px]" />
                                            </div>
                                            {feat}
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full py-3.5 rounded-xl font-bold transition-all duration-300 ${plan.popular
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 hover:bg-indigo-700'
                                        : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-lg hover:shadow-indigo-600/30'
                                    }`}>
                                    Inquire Now
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Amenities */}
            <section className="py-24" id="amenities">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div {...fadeIn}>
                            <h2 className="text-indigo-600 font-bold tracking-wide uppercase text-sm mb-3">Comfort First</h2>
                            <h3 className="text-4xl font-bold text-slate-900 mb-6">Everything you need for a hassle-free life.</h3>
                            <p className="text-gray-600 text-lg mb-8">We handle the chores so you can focus on your career and studies. Experience hospitality at its best.</p>

                            <div className="flex gap-3">
                                <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-700 font-semibold text-sm">MasterChefs</button>
                                <button className="px-5 py-2 bg-slate-100 rounded-lg text-slate-700 font-semibold text-sm">Worstation PG</button>
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

            {/* Security Section */}
            <section className="py-24 bg-slate-900 overflow-hidden" id="safety">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-semibold mb-6 border border-pink-500/30">
                                <Shield className="w-4 h-4" />
                                <span>Safety Log You Can Trust</span>
                            </div>
                            <h2 className="text-4xl font-bold text-white mb-8">Uncompromising <br /> Security Protocols</h2>

                            <div className="space-y-6">
                                {[
                                    { title: 'AI-Powered CCTV', desc: '360-degree surveillance with facial recognition and activity logs for public safety.', color: 'bg-indigo-500' },
                                    { title: 'Biometric Entry', desc: 'Ensure only residents enter the premises. No unauthorized visitors without prior approval.', color: 'bg-purple-500' },
                                    { title: 'Female-Only Staff', desc: 'All critical operations staff and management are female for maximum comfort.', color: 'bg-pink-500' },
                                ].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700 hover:border-slate-600 transition-colors"
                                    >
                                        <div className={`w-12 h-12 rounded-lg ${item.color} bg-opacity-20 flex items-center justify-center text-white flex-shrink-0`}>
                                            <Shield className="w-6 h-6 opacity-80" />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-[2rem] transform rotate-3 blur-sm opacity-50"></div>
                            <div className="relative rounded-[2rem] overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl">
                                <img
                                    src={securityImg}
                                    alt="Security Guard"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute top-6 right-6">
                                    <div className="bg-pink-500 text-white px-4 py-2 rounded-lg font-bold shadow-lg transform rotate-3 flex flex-col items-center">
                                        <span className="text-xl">24/7</span>
                                        <span className="text-xs uppercase opacity-80">Protection</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Community Rules */}
            <section className="py-24 bg-gray-50" id="policies">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900">Resident Community Rules</h2>
                        <p className="text-gray-600 mt-4">We ensure a peaceful and disciplined environment for everyone.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { title: 'Curfew Policy', rules: ['Main gate closes at 10:30 PM everyday.', 'Inform prior regarding late entry.', 'Overnight stay requires warden permission.'], icon: <Lock /> },
                            { title: 'Visitor Policy', rules: ['Male visitors strictly not allowed inside rooms.', 'Parents can meet in common areas till 7 PM.', 'ID verification required for all guests.'], icon: <Users /> },
                            { title: 'Maintenance', rules: ['24-hour turnaround for all repair requests.', 'Do not use prohibited electrical equipment.', 'No loud music after 10:00 PM.'], icon: <Zap /> },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                            >
                                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-4">{card.title}</h3>
                                <ul className="space-y-3">
                                    {card.rules.map((rule, rIdx) => (
                                        <li key={rIdx} className="flex gap-3 text-sm text-gray-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 flex-shrink-0"></div>
                                            {rule}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials / Stories */}
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

            {/* Visit Our Nest Section */}
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
                        <div className="lg:w-1/2 bg-slate-200 relative flex items-center justify-center min-h-[300px] lg:min-h-full overflow-hidden group cursor-pointer">
                            {/* Overlay gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300"></div>

                            <div className="relative z-10 text-center text-slate-400 group-hover:scale-105 transition-transform duration-500">
                                <div className="w-20 h-20 mx-auto mb-4 opacity-50">
                                    <Map size={80} strokeWidth={1.5} />
                                </div>
                                <p className="font-bold tracking-[0.2em] text-xs uppercase opacity-70">Interactive Map Loading...</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-12">
                        <div className="col-span-1 md:col-span-1">
                            <div className="flex items-center gap-2 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                                    <Home className="text-white w-5 h-5" />
                                </div>
                                <span className="font-bold text-2xl text-white">SafeNest</span>
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                Building a community of ambitious, successful women by providing safe, comfortable, and nurturing living spaces.
                            </p>
                            <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"><Facebook size={16} /></div>
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"><Twitter size={16} /></div>
                                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:bg-indigo-600 transition-colors cursor-pointer"><Instagram size={16} /></div>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Living Options</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Single Room</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Double Sharing</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Student Special</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Corporates</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Useful Links</h4>
                            <ul className="space-y-3 text-sm">
                                <li><a href="#" className="hover:text-white transition-colors">Visit Guidelines</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Guest Policies</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-colors">Join Our Team</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-6">Contact</h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex gap-3">
                                    <MapPin className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                    <span>Block B, Tech Park Road, Near IT Hub, Bangalore - 560066</span>
                                </li>
                                <li className="flex gap-3">
                                    <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                    <span>hello@safenest.in</span>
                                </li>
                                <li className="flex gap-3">
                                    <Phone className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                    <span>+91 98765 43210</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                        <p>&copy; 2026 SafeNest Accommodations. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-white">Privacy</a>
                            <a href="#" className="hover:text-white">Terms</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
