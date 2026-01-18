import React from 'react';
import { Home, Facebook, Twitter, Instagram, MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
    return (
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
                                <span className="text-slate-400">Block B, Tech Park Road, Near IT Hub, Bangalore - 560066</span>
                            </li>
                            <li className="flex gap-3">
                                <Mail className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <span className="text-slate-400">hello@safenest.in</span>
                            </li>
                            <li className="flex gap-3">
                                <Phone className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                                <span className="text-slate-400">+91 98765 43210</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
