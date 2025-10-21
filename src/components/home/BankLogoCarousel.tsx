import React from 'react';
import { BANK_PARTNERS } from '../../constants';

const BankLogoCarousel: React.FC = () => {
  const extendedPartners = [...BANK_PARTNERS, ...BANK_PARTNERS];

  return (
    <div className="bg-brand-gray-light py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-sm font-semibold text-brand-gray uppercase tracking-wider">
          Our Trusted Banking Partners
        </h2>
        <div
          className="mt-8 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
        >
          <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
            {extendedPartners.map((partner, index) => (
              <li key={`${partner.name}-${index}`}>
                <img src={partner.logo} alt={partner.name} className="h-10 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BankLogoCarousel;
