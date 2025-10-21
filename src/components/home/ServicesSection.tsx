import React from 'react';
import { SERVICES } from '../../constants';
import { motion } from 'framer-motion';

const ServicesSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-primary-dark">Our Loan Services</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-gray">
            We specialize in providing tailored financial solutions to meet your business needs.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-gray-light p-8 rounded-xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="bg-brand-primary text-white p-4 rounded-full">
                  <service.icon size={32} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-brand-primary-dark">{service.title}</h3>
              <p className="mt-2 text-brand-gray">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
