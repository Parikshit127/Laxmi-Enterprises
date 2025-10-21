import React from 'react';
import { Link } from 'react-router-dom';
import PageWrapper from '../components/PageWrapper';

const NotFoundPage: React.FC = () => {
  return (
    <PageWrapper>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-6xl font-bold text-brand-primary">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="mt-2 text-gray-600">Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="mt-6 cta-button-primary">
          Go to Homepage
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFoundPage;
