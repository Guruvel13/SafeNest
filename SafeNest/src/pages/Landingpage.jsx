import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Pricing from '../components/Pricing';
import Amenities from '../components/Amenities';
import Security from '../components/Security';
import CommunityRules from '../components/CommunityRules';
import Testimonials from '../components/Testimonials';
import Visit from '../components/Visit';
import Footer from '../components/Footer';

export default function LandingPage() {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
            <Navbar />
            <Hero />
            <Stats />
            <Amenities />
            <Security />
            <CommunityRules />
            <Pricing />
            <Testimonials />
            <Visit />
            <Footer />
        </div>
    );
}
