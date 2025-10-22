import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { WHY_US_POINTS } from '../constants';

const AboutPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-brand-primary-dark text-white py-24 sm:py-32">
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/scott-graham-5fNmWej4tAA-unsplash.jpg"
                    alt="Business meeting"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark via-brand-primary-dark/80 to-transparent"></div>
            </div>
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">About Laxmi Enterprises</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                    Your trusted financial partner, dedicated to fueling the growth of your business with fast, reliable, and transparent loan solutions.
                </p>
            </div>
        </div>

        {/* Mission and Vision Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-primary-dark">Our Mission</h2>
              <p className="mt-4 text-lg text-brand-gray">
                To empower businesses across India by providing accessible and seamless financing for commercial vehicles and equipment. We strive to simplify the loan process, ensuring our clients receive the capital they need to grow and succeed, backed by expert guidance and a commitment to their long-term success.
              </p>
              <h2 className="mt-8 text-3xl font-extrabold text-brand-primary-dark">Our Vision</h2>
              <p className="mt-4 text-lg text-brand-gray">
                To be the most trusted and sought-after finance brokerage in the commercial sector, renowned for our integrity, efficiency, and unwavering dedication to client satisfaction. We envision a future where every business has the opportunity to thrive with the right financial support.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl">
              <img src="/dylan-gillis-KdeqA3aTnBY-unsplash.jpg" alt="Team collaborating" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-brand-gray-light py-20 sm:py-24">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary-dark">Why Choose Us?</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
                        We are committed to your success with a transparent and efficient process.
                    </p>
                </div>
                <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
                    {WHY_US_POINTS.map((point) => (
                        <div key={point.title} className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="bg-brand-secondary text-white p-4 rounded-full">
                                    <point.icon size={28} />
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-brand-primary-dark">{point.title}</h3>
                            <p className="mt-1 text-brand-gray">{point.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default AboutPage;
