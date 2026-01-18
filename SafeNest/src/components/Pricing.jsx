import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { fadeIn, staggerContainer, itemAnim } from './animations';

export default function Pricing() {
    return (
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
                            badgeColor: 'bg-orange-100 text-orange-700',
                            features: ['Private Balcony', 'Attached Bath', 'Smart TV'],
                            popular: false
                        },
                        {
                            type: 'Double',
                            price: '12,000',
                            deposit: '15,000',
                            badge: 'STANDARD',
                            badgeColor: 'bg-indigo-100 text-indigo-700',
                            features: ['Personal Closet', 'Study Corner', 'Shared Balcony'],
                            popular: true
                        },
                        {
                            type: 'Triple',
                            price: '9,500',
                            deposit: '10,000',
                            badge: 'ECONOMY',
                            badgeColor: 'bg-green-100 text-green-700',
                            features: ['Spacious Room', 'Shared Utilities', 'Housekeeping'],
                            popular: false
                        },
                        {
                            type: '4-Sharing',
                            price: '7,500',
                            deposit: '8,000',
                            badge: 'BUDGET',
                            badgeColor: 'bg-yellow-100 text-yellow-700',
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
                                <span className={`text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider ${plan.badgeColor}`}>
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
    );
}
