import React from 'react';
import PageWrapper from '../components/PageWrapper';
import Hero from '../components/home/Hero';
import BankLogoCarousel from '../components/home/BankLogoCarousel';
import ServicesSection from '../components/home/ServicesSection';
import WhyUsSection from '../components/home/WhyUsSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <PageWrapper>
      <Hero />
      <BankLogoCarousel />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
    </PageWrapper>
  );
};

export default HomePage;
