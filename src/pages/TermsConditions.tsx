import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Terms & Conditions
          </h1>
          <p className="text-xl text-muted-foreground">
            Legal terms governing the use of our services and products
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card-elevated prose max-w-none">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ownership of Content</h2>
            <p className="text-muted-foreground mb-6">
              All content, including but not limited to text, images, logos, software, and technical specifications related to Hygie Helm kiosks, remains the exclusive property of Hygie Helm Inc. Unauthorized reproduction or distribution is strictly prohibited.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Scope of Services</h2>
            <p className="text-muted-foreground mb-4">
              Hygie Helm provides automated helmet cleaning kiosk solutions including:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Manufacturing and delivery of cleaning kiosks</li>
              <li>Professional installation and setup services</li>
              <li>Initial training and operational support</li>
              <li>Warranty coverage as specified in purchase agreements</li>
              <li>Optional maintenance and service contracts</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
            <p className="text-muted-foreground mb-4">
              Purchasers and operators of Hygie Helm kiosks are responsible for:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Providing suitable installation location with required utilities</li>
              <li>Obtaining necessary permits and approvals for operation</li>
              <li>Regular maintenance according to provided schedules</li>
              <li>Safe operation and supervision of the equipment</li>
              <li>Compliance with local health and safety regulations</li>
              <li>Proper disposal of consumables and waste materials</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Liability Limitations</h2>
            <p className="text-muted-foreground mb-6">
              Hygie Helm's liability is limited to the repair or replacement of defective equipment during the warranty period. We are not responsible for indirect damages, lost profits, or consequential losses arising from the use or inability to use our products. Maximum liability shall not exceed the purchase price of the equipment.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Warranty Terms</h2>
            <p className="text-muted-foreground mb-6">
              All Hygie Helm kiosks come with a standard 2-year manufacturer warranty covering defects in materials and workmanship. The warranty does not cover damage due to misuse, normal wear and tear, or modifications made by unauthorized personnel.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Payment Terms</h2>
            <p className="text-muted-foreground mb-6">
              Payment is required as per the agreed schedule in the purchase contract. Orders are typically processed with a deposit upon order confirmation, with the balance due prior to installation. Payment methods include wire transfer, certified check, or approved financing options.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
            <p className="text-muted-foreground mb-6">
              These terms and conditions are governed by the laws of the State of Delaware, United States. Any disputes arising from these terms or the use of our products shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Modifications</h2>
            <p className="text-muted-foreground">
              Hygie Helm reserves the right to modify these terms and conditions at any time. Customers will be notified of significant changes via email or through our website. Continued use of our services after modifications constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsConditions;