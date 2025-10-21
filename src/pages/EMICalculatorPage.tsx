import React from 'react';
import PageWrapper from '../components/PageWrapper';
import EMICalculator from '../components/EMICalculator';
import { Link } from 'react-router-dom';

const EMICalculatorPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-brand-primary-dark">EMI Calculator</h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
              Plan your finances with ease. Use our simple calculator to estimate the Equated Monthly Installment (EMI) for your loan.
            </p>
          </div>

          <div className="mt-16">
            <EMICalculator />
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-brand-primary-dark">Ready to Apply?</h2>
            <p className="mt-3 max-w-xl mx-auto text-brand-gray">
              Now that you have an estimate, take the next step towards securing your loan. Our application process is quick and straightforward.
            </p>
            <div className="mt-6">
              <Link to="/contact" className="cta-button-primary">
                Apply for a Loan Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EMICalculatorPage;
