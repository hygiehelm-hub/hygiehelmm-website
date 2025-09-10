import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';

const CancellationRefund = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Cancellation & Refund Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            Information about order cancellations and refund procedures
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card-elevated prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Window</h2>
            <p className="text-muted-foreground mb-6">
              Orders can be cancelled within 48 hours of order confirmation without penalty, provided that manufacturing has not commenced. After the 48-hour window, cancellations may be subject to a cancellation fee based on the stage of production and customization completed.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Cancellation Fees</h2>
            <div className="space-y-4 mb-6">
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">Within 48 hours</span>
                <span className="text-success font-semibold">No fee</span>
              </div>
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">2-7 days</span>
                <span className="text-muted-foreground">10% of order value</span>
              </div>
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">After production starts</span>
                <span className="text-muted-foreground">25% of order value</span>
              </div>
              <div className="flex justify-between p-4 bg-surface-elevated rounded-lg">
                <span className="font-medium text-foreground">After shipping</span>
                <span className="text-destructive font-semibold">Non-refundable</span>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Eligibility</h2>
            <p className="text-muted-foreground mb-4">
              Refunds are available under the following conditions:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Order cancelled within the allowed cancellation window</li>
              <li>Defective equipment that cannot be repaired under warranty</li>
              <li>Non-delivery due to shipping or logistics issues on our part</li>
              <li>Significant delays exceeding 8 weeks beyond promised delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Process</h2>
            <p className="text-muted-foreground mb-6">
              Approved refunds will be processed within 10-15 business days using the original payment method. For large equipment returns, inspection may be required before refund approval. Custom or modified units may have different refund terms as specified in the purchase agreement.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Refund Timeline</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-surface-elevated rounded-lg border-l-4 border-primary">
                <div className="font-medium text-foreground">Credit Card Refunds</div>
                <div className="text-sm text-muted-foreground">5-7 business days</div>
              </div>
              <div className="p-4 bg-surface-elevated rounded-lg border-l-4 border-primary">
                <div className="font-medium text-foreground">Bank Transfer Refunds</div>
                <div className="text-sm text-muted-foreground">7-10 business days</div>
              </div>
              <div className="p-4 bg-surface-elevated rounded-lg border-l-4 border-primary">
                <div className="font-medium text-foreground">Financing Refunds</div>
                <div className="text-sm text-muted-foreground">10-15 business days</div>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Non-Refundable Items</h2>
            <p className="text-muted-foreground mb-4">
              The following items and services are generally non-refundable:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Installation and setup services already completed</li>
              <li>Training sessions already conducted</li>
              <li>Custom modifications or branding</li>
              <li>Consumable materials and supplies</li>
              <li>Extended warranty or service contracts</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">How to Request Cancellation or Refund</h2>
            <p className="text-muted-foreground mb-4">
              To request a cancellation or refund, please contact us immediately:
            </p>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p><strong>Email:</strong> orders@hygiehelm.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Include:</strong> Order number, reason for cancellation, and preferred refund method</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Exchange Policy</h2>
            <p className="text-muted-foreground">
              Equipment exchanges may be available for defective units or incorrect orders shipped due to our error. Exchange requests must be made within 30 days of delivery and are subject to inspection and approval by our technical team.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CancellationRefund;