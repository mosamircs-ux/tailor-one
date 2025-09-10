
import React from 'react';
import Navbar from '../components/Navbar';
import LandingHero from '../components/LandingHero';
import FeatureSection from '../components/FeatureSection';
import PortalLinks from '../components/PortalLinks';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <LandingHero />
        <FeatureSection />
        <PortalLinks />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
