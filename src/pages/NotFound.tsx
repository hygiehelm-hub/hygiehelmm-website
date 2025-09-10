import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="max-w-lg mx-auto">
          {/* 404 Visual */}
          <div className="mb-8">
            <div className="text-8xl md:text-9xl font-bold text-gradient mb-4">404</div>
            <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          </div>
          
          {/* Content */}
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h1>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
          </p>
          
          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button asChild className="btn-hero">
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button asChild className="btn-outline">
              <Link to="/contact">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Contact Support
              </Link>
            </Button>
          </div>
          
          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">You might be looking for:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/" className="text-primary hover:text-primary-dark transition-colors duration-200">
                Home
              </Link>
              <Link to="/#how-it-works" className="text-primary hover:text-primary-dark transition-colors duration-200">
                How It Works
              </Link>
              <Link to="/contact" className="text-primary hover:text-primary-dark transition-colors duration-200">
                Contact Us
              </Link>
              <Link to="/shipping-policy" className="text-primary hover:text-primary-dark transition-colors duration-200">
                Shipping Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
