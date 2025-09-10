import React from 'react';
import Navigation from '@/components/Layout/Navigation';
import Footer from '@/components/Layout/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-muted-foreground">
            How we collect, use, and protect your personal information
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <div className="card-elevated prose max-w-none">
            <p className="text-muted-foreground mb-6 italic">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Fill out our contact form or request information</li>
              <li>Purchase or inquire about our kiosk products</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Communicate with us via phone, email, or chat</li>
              <li>Attend trade shows or events where we collect business cards</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Types of Data Collected</h2>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-surface-elevated rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Personal Information</h4>
                <p className="text-sm text-muted-foreground">Name, email address, phone number, business address, company information</p>
              </div>
              <div className="p-4 bg-surface-elevated rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Technical Information</h4>
                <p className="text-sm text-muted-foreground">IP address, browser type, device information, website usage analytics</p>
              </div>
              <div className="p-4 bg-surface-elevated rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Business Information</h4>
                <p className="text-sm text-muted-foreground">Industry type, business size, location requirements, budget considerations</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Respond to your inquiries and provide customer support</li>
              <li>Process orders, installations, and service requests</li>
              <li>Send you information about our products and services</li>
              <li>Improve our website, products, and customer experience</li>
              <li>Comply with legal obligations and protect our business</li>
              <li>Conduct market research and business analytics</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
            <p className="text-muted-foreground mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist in operating our business, such as installation contractors, shipping companies, and technical support providers, but only when necessary and under strict confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
            <p className="text-muted-foreground mb-6">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, access controls, and regular security audits. However, no method of internet transmission is 100% secure.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Data Retention</h2>
            <p className="text-muted-foreground mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, comply with legal obligations, resolve disputes, and enforce our agreements. Generally, we keep contact information for active prospects for 3 years and customer information for 7 years after the last interaction.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-6">
              <li>Access and receive a copy of your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Data portability (receive your data in a structured format)</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mb-4">Cookies and Analytics</h2>
            <p className="text-muted-foreground mb-6">
              Our website uses cookies and similar technologies to enhance user experience, analyze website traffic, and understand visitor behavior. You can control cookie preferences through your browser settings. We use Google Analytics and similar services to gather website usage statistics while respecting user privacy.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Marketing Communications</h2>
            <p className="text-muted-foreground mb-6">
              With your consent, we may send you marketing emails about our products, services, and industry insights. You can opt out at any time by clicking the unsubscribe link in our emails or contacting us directly. We respect your communication preferences and will not share your information for third-party marketing purposes.
            </p>

            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              If you have questions about this Privacy Policy or want to exercise your privacy rights, please contact us:
            </p>
            <div className="space-y-2 text-muted-foreground mb-6">
              <p><strong>Email:</strong> privacy@hygiehelm.com</p>
              <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p><strong>Address:</strong> Hygie Helm Inc., Privacy Department</p>
            </div>

            <h2 className="text-2xl font-bold text-foreground mb-4">Policy Updates</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website and, for significant changes, by sending you an email notification if we have your contact information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;