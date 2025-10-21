import React from 'react';
import { WHY_US_POINTS } from '../../constants';
import { motion } from 'framer-motion';

const WhyUsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-gray-light">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary-dark">Why Choose Laxmi Enterprises?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
            We are committed to your success with a transparent and efficient process.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {WHY_US_POINTS.map((point, index) => (
            <motion.div 
              key={point.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-start space-x-4"
            >
              <div className="flex-shrink-0 bg-brand-secondary text-white p-3 rounded-full">
                <point.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-brand-primary-dark">{point.title}</h3>
                <p className="mt-1 text-brand-gray">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
