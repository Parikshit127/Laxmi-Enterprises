import React from 'react';
import PageWrapper from '../components/PageWrapper';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="bg-white py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="prose lg:prose-lg mx-auto">
            <h1 className="text-4xl font-extrabold text-brand-primary-dark">Privacy Policy</h1>
            <p className="text-lg text-gray-500">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <p>Laxmi Enterprises ("us", "we", or "our") operates the Laxmi Enterprises website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>
            
            <h2>Information Collection and Use</h2>
            <p>We collect several different types of information for various purposes to provide and improve our Service to you. This includes information you provide directly to us when you fill out a contact or application form, such as your name, email address, phone number, and city.</p>

            <h2>Use of Data</h2>
            <p>Laxmi Enterprises uses the collected data for various purposes:</p>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To process your loan application and contact you regarding it</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
            </ul>

            <h2>Security of Data</h2>
            <p>The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.</p>

            <h2>Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us by email at <a href="mailto:sales@laxmienterprises.com">sales@laxmienterprises.com</a>.</p>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicyPage;
