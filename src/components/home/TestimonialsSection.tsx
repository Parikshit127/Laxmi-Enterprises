import React from 'react';
import { TESTIMONIALS } from '../../constants';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 bg-brand-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-300">
            We take pride in helping businesses achieve their goals.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-brand-primary-dark/50 p-8 rounded-xl shadow-lg flex flex-col"
            >
              <div className="flex text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
              </div>
              <blockquote className="text-gray-200 flex-grow">"{testimonial.quote}"</blockquote>
              <footer className="mt-6">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-brand-secondary-light">{testimonial.company}</p>
              </footer>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
