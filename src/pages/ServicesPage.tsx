import React from 'react';
import PageWrapper from '../components/PageWrapper';
import { SERVICES } from '../constants';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const serviceDetails = {
    'Commercial Vehicle Loans': {
        image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?q=80&w=1887&auto=format&fit=crop',
        points: [
            'Financing for new and used trucks, buses, tankers, and trailers.',
            'Flexible repayment options tailored to your business cycle.',
            'Quick processing and minimal documentation.',
            'Competitive interest rates from leading banks.'
        ]
    },
    'Construction Equipment Loans': {
        image: 'https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&w=2070&auto=format&fit=crop',
        points: [
            'Loans for excavators, backhoe loaders, cranes, and more.',
            'Support for project-based financing needs.',
            'High loan-to-value ratio.',
            'Expert advice on choosing the right equipment financing.'
        ]
    },
    'Commercial Equipment Loans': {
        image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1887&auto=format=fit=crop',
        points: [
            'Financing for manufacturing machinery, medical equipment, and IT hardware.',
            'Upgrade your technology and boost productivity.',
            'Structured repayment plans.',
            'Lease financing options available.'
        ]
    }
}

const ServicesPage: React.FC = () => {
  return (
    <PageWrapper>
        <div className="bg-brand-primary-dark text-white py-24 sm:py-32">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Our Loan Services</h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-300">
                    Tailored financial solutions designed to power your business ambitions. We provide specialized loans for a wide range of commercial assets.
                </p>
            </div>
        </div>

        <div className="py-20 sm:py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
                {SERVICES.map((service, index) => {
                    const details = serviceDetails[service.title as keyof typeof serviceDetails];
                    const isReversed = index % 2 !== 0;

                    return (
                        <div key={service.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center`}>
                            <div className={`rounded-lg overflow-hidden shadow-2xl ${isReversed ? 'lg:order-last' : ''}`}>
                                <img src={details.image} alt={service.title} className="w-full h-80 object-cover" />
                            </div>
                            <div className={`${isReversed ? 'lg:order-first' : ''}`}>
                                <div className="flex items-center space-x-3">
                                    <div className="bg-brand-primary text-white p-2 rounded-full">
                                        <service.icon size={24} />
                                    </div>
                                    <h2 className="text-3xl font-extrabold text-brand-primary-dark">{service.title}</h2>
                                </div>
                                <p className="mt-4 text-lg text-brand-gray">{service.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {details.points.map(point => (
                                        <li key={point} className="flex items-start">
                                            <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                                            <span className="text-brand-gray">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        
        <div className="bg-brand-gray-light">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h2 className="text-3xl font-bold text-brand-primary-dark">Ready to Get Started?</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
                    Let us help you find the perfect loan for your business. Our application process is simple and fast.
                </p>
                <div className="mt-8">
                    <Link to="/contact" className="cta-button-primary">
                        Apply for a Loan
                    </Link>
                </div>
            </div>
        </div>
    </PageWrapper>
  );
};

export default ServicesPage;
