import React from 'react';
import { motion } from 'framer-motion';
import { Lock, Users, Zap } from 'lucide-react';

export default function CommunityRules() {
    return (
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
    );
}
