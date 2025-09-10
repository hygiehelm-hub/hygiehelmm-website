import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Shipping Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Information about our shipping and delivery processes
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card-elevated prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">Processing Time</h2>
            <p className="text-muted-foreground mb-6">
              Orders for Hygie Helm kiosks are processed within 3-5 business days after order confirmation and payment verification. Custom installations may require additional processing time based on specific requirements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Delivery Windows</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">Standard Installation</span>
                <span className="text-muted-foreground">2-4 weeks</span>
              </div>
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">Express Installation</span>
                <span className="text-muted-foreground">1-2 weeks</span>
              </div>
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">Bulk Orders (5+ units)</span>
                <span className="text-muted-foreground">4-6 weeks</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Shipping Regions</h2>
            <p className="text-muted-foreground mb-6">
              We currently provide shipping and installation services across the United States. International shipping may be available upon request with additional terms and conditions.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Installation & Setup</h2>
            <p className="text-muted-foreground mb-6">
              All Hygie Helm kiosk orders include professional installation and setup by our certified technicians. The installation process typically takes 2-4 hours and includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Site preparation and safety assessment</li>
              <li>Kiosk installation and electrical connection</li>
              <li>System calibration and testing</li>
              <li>Staff training and operational demonstration</li>
              <li>30-day post-installation support</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Tracking & Updates</h2>
            <p className="text-muted-foreground mb-6">
              Once your order is confirmed, you will receive a tracking number and regular updates on the manufacturing and shipping progress. Our customer service team will coordinate with you to schedule the installation at your convenience.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Shipping Costs</h2>
            <p className="text-muted-foreground">
              Shipping and installation costs are included in the total purchase price for orders within the continental United States. Additional charges may apply for remote locations, expedited shipping, or special installation requirements.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;