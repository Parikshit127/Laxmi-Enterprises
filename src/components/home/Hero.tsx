import React from 'react';
import { Link } from 'react-router-dom';
import { WHATSAPP_LINK } from '../../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-brand-primary-dark pt-20 pb-24 sm:pt-28 sm:pb-32 lg:pt-32 lg:pb-40">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1580252172424-b551858883b9?q=80&w=2070&auto=format&fit=crop"
          alt="Commercial trucks on a highway"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-primary-dark via-brand-primary-dark/80 to-transparent"></div>
      </div>
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight"
        >
          Fast, Flexible Loans for Your
          <br />
          <span className="text-brand-secondary-light">Commercial Vehicles & Equipment</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-2xl mx-auto text-lg lg:text-xl text-gray-300"
        >
          Partner with India's top banks and get the financing you need to drive your business forward. Quick approvals, competitive rates.
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/contact" className="cta-button-primary w-full sm:w-auto">
            Apply Now
          </Link>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="cta-button-secondary bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white hover:text-brand-primary-dark w-full sm:w-auto">
            Talk on WhatsApp
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
