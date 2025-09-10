import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';
import HeroSection from '@/components/Home/HeroSection';
import ProcessSection from '@/components/Home/ProcessSection';
import BenefitsSection from '@/components/Home/BenefitsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProcessSection />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
