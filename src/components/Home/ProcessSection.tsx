import React from 'react';
import { Trash2, Zap, Shield, Wind } from 'lucide-react';

const ProcessSection = () => {
  const steps = [
    {
      number: 1,
      icon: <Trash2 className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      title: "Vacuum Cleaning",
      description: "Powerful vacuum system removes dust, debris, and loose particles from your helmet's interior and exterior surfaces."
    },
    {
      number: 2,
      icon: <Zap className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      title: "UV Sterilisation",
      description: "Advanced UV-C light technology eliminates 99.9% of germs, bacteria, and viruses for complete sanitisation."
    },
    {
      number: 3,
      icon: <Shield className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      title: "Anti-Bacterial Treatment",
      description: "Safe, eco-friendly antibacterial mist provides deep hygienic treatment and lasting protection."
    },
    {
      number: 4,
      icon: <Wind className="w-8 h-8 text-primary group-hover:text-secondary transition-colors duration-300" />,
      title: "Air Drying",
      description: "Gentle air circulation system ensures your helmet is completely dry and fresh, ready to wear immediately."
    }
  ];

  return (
    <section id="how-it-works" className="section-padding bg-gradient-subtle">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="section-title">How Hygie Helm Works</h2>
          <p className="section-subtitle">
            Our automated 4-step process delivers professional-grade helmet cleaning in just 60 seconds
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number} 
              className={`process-card animate-fade-in-up stagger-delay-${index + 1}`}
            >
              <div className="process-number">{step.number}</div>
              
              <div className="flex flex-col items-center text-center space-y-4 pt-4">
                <div className="w-16 h-16 bg-surface-elevated rounded-full flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connecting line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-secondary opacity-30" />
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-6">
            Complete cleaning cycle in under 60 seconds
          </p>
          <div className="flex justify-center">
            <div className="bg-card border border-border rounded-xl p-6 shadow-soft">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">⏱️</span>
                </div>
                <div className="text-left">
                  <div className="text-2xl font-bold text-primary">60 Seconds</div>
                  <div className="text-sm text-muted-foreground">Total Process Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;