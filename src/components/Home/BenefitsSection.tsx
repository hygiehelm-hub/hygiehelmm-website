import React from 'react';
import { Clock, Shield, Zap, MapPin, Users, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Convenience & Time-Saving",
      description: "Quick 60-second cleaning process fits seamlessly into your daily routine. No waiting, no hassle."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Hygienic & Rider-Friendly",
      description: "Professional-grade sanitisation eliminates germs and bacteria for a healthy riding experience."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Compact, Plug-and-Play",
      description: "Easy installation with minimal space requirements. Just plug in and start serving customers."
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Perfect for High-Traffic Areas",
      description: "Ideal placement opportunities in malls, petrol pumps, campuses, and corporate parks."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Multiple Revenue Streams",
      description: "Generate income through usage fees, maintenance contracts, and premium service options."
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Low Maintenance Operation",
      description: "Robust design with self-diagnostic features ensures minimal downtime and operational costs."
    }
  ];

  const locations = [
    "Shopping Malls & Retail Centers",
    "Petrol Pumps & Gas Stations", 
    "Corporate Office Parks",
    "University & College Campuses",
    "Transportation Hubs",
    "Residential Complexes"
  ];

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">Why Choose Hygie Helm?</h2>
          <p className="section-subtitle">
            The smart solution for modern helmet hygiene needs with proven business benefits
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className={`card-feature animate-fade-in-up stagger-delay-${(index % 3) + 1}`}
            >
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 group-hover:shadow-brand transition-all duration-300">
                <div className="text-white">
                  {benefit.icon}
                </div>
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {benefit.title}
              </h3>
              
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Ideal Locations */}
        <div className="bg-gradient-subtle rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Ideal Installation Locations
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic placement in high-traffic areas maximizes usage and return on investment
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {locations.map((location, index) => (
              <div 
                key={location}
                className={`bg-card border border-border rounded-lg p-4 text-center shadow-soft hover:shadow-medium hover:border-primary/30 transition-all duration-300 animate-fade-in-up stagger-delay-${(index % 3) + 1}`}
              >
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-sm font-medium text-foreground">{location}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-6">
              Ready to bring next-gen helmet hygiene to your location?
            </p>
            <Button asChild className="btn-hero">
              <Link to="/contact">Contact Us to Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;