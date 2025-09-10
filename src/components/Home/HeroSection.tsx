import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hygie-helm-hero.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-gradient-hero">
        <img 
          src={heroImage} 
          alt="Hygie Helm automated helmet cleaning kiosk in modern setting"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="space-y-6 fade-in-up">
            <h1 className="hero-title animate-fade-in-up">
              Next-Gen Helmet Hygiene, Made Simple
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up stagger-delay-1">
              Automated 4-Step Cleaning – Vacuum, UV Sterilisation, Anti-Bacterial Treatment & Air Drying
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up stagger-delay-2">
            <Button asChild className="btn-hero text-lg px-8 py-4">
              <Link to="/contact">Set Up or Purchase a Kiosk</Link>
            </Button>
            <Button asChild className="btn-outline text-lg px-8 py-4">
              <a href="#how-it-works">See How It Works</a>
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 pt-8 animate-fade-in-up stagger-delay-3">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4-Step</div>
              <div className="text-sm text-muted-foreground">Cleaning Process</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">UV</div>
              <div className="text-sm text-muted-foreground">Sterilisation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">60s</div>
              <div className="text-sm text-muted-foreground">Total Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Available</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;