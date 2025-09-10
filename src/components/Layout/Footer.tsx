import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-subtle border-t border-border">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img 
                src="/lovable-uploads/7d5627e5-4c31-4a6c-8d6a-69b70625ec4e.png" 
                alt="Hygie Helm Logo" 
                className="h-16 w-auto" 
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Next-generation automated helmet cleaning technology for a hygienic, convenient experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Home
              </Link>
              <a href="#how-it-works" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                How It Works
              </a>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Policies</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/shipping-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Shipping Policy
              </Link>
              <Link to="/terms-conditions" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Terms & Conditions
              </Link>
              <Link to="/cancellation-refund" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Cancellation & Refund
              </Link>
              <Link to="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                Privacy Policy
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get In Touch</h4>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail size={16} className="text-primary" />
                <span>hygiehelm@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone size={16} className="text-primary" />
                <span>+91 6364680456</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <span className="font-medium text-foreground">Contact:</span>
                <span>Tejas H R</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin size={16} className="text-primary" />
                <span>Available Nationwide</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Hygie Helm. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            Making helmet hygiene simple and accessible.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;