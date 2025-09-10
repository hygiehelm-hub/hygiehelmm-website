import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-soft">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src="/lovable-uploads/7d5627e5-4c31-4a6c-8d6a-69b70625ec4e.png" 
              alt="Hygie Helm Logo" 
              className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-200 hover:text-primary ${
                isActive('/') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Home
            </Link>
            
            <a 
              href="#how-it-works" 
              className="font-medium text-foreground hover:text-primary transition-colors duration-200"
            >
              How It Works
            </a>

            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-200 hover:text-primary ${
                isActive('/contact') ? 'text-primary' : 'text-foreground'
              }`}
            >
              Contact
            </Link>

            {/* Policies Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 font-medium text-foreground hover:text-primary transition-colors duration-200 focus:outline-none">
                <span>Policies</span>
                <ChevronDown size={16} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-popover border border-border shadow-medium">
                <DropdownMenuItem asChild>
                  <Link to="/shipping-policy" className="w-full">Shipping Policy</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/terms-conditions" className="w-full">Terms & Conditions</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/cancellation-refund" className="w-full">Cancellation & Refund</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/privacy-policy" className="w-full">Privacy Policy</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button asChild className="btn-hero">
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors duration-200"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              
              <a 
                href="#how-it-works" 
                className="font-medium text-foreground hover:text-primary transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                How It Works
              </a>

              <Link 
                to="/contact" 
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  isActive('/contact') ? 'text-primary' : 'text-foreground'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2 border-t border-border">
                <p className="text-sm font-medium text-muted-foreground mb-2">Policies</p>
                <div className="flex flex-col space-y-2 pl-4">
                  <Link 
                    to="/shipping-policy" 
                    className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Shipping Policy
                  </Link>
                  <Link 
                    to="/terms-conditions" 
                    className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Terms & Conditions
                  </Link>
                  <Link 
                    to="/cancellation-refund" 
                    className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancellation & Refund
                  </Link>
                  <Link 
                    to="/privacy-policy" 
                    className="text-sm text-foreground hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                </div>
              </div>

              <Button asChild className="btn-hero w-full mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;