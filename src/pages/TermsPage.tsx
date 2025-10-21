import React from 'react';
import PageWrapper from '../components/PageWrapper';

const TermsPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose lg:prose-lg mx-auto">
            <h1 className="text-4xl font-extrabold text-brand-primary-dark">Terms of Service</h1>
            <p className="text-lg text-gray-500">Last updated: {new Date().toLocaleDate(new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }))}</p>

            <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Laxmi Enterprises website (the "Service") operated by Laxmi Enterprises ("us", "we", or "our").</p>
            
            <p>Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms. These Terms apply to all visitors, users, and others who access or use the Service.</p>

            <h2>Loan Brokerage Service</h2>
            <p>Laxmi Enterprises acts as a finance broker. We are not a lender. We facilitate loan applications between you (the applicant) and our network of banking and financial partners. Any loan agreement entered into is strictly between you and the lender.</p>

            <h2>Intellectual Property</h2>
            <p>The Service and its original content, features, and functionality are and will remain the exclusive property of Laxmi Enterprises and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>

            <h2>Limitation of Liability</h2>
            <p>In no event shall Laxmi Enterprises, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

            <h2>Governing Law</h2>
            <p>These Terms shall be governed and construed in accordance with the laws of Rajasthan, India, without regard to its conflict of law provisions.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms, please contact us at <a href="mailto:sales@laxmienterprises.com">sales@laxmienterprises.com</a>.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default TermsPage;
