import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-lg sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center space-x-2">
            <img
            src="/logolmx.png"
            alt="Laxmi Enterprises Logo"
            className="h-10 w-auto"
            />
            <span className="text-2xl font-extrabold text-brand-primary-dark">Laxmi Enterprises</span>
          </Link>

          {/* Desktop Navigation & CTAs */}
          <div className="hidden md:flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  className={({ isActive }) =>
                    `text-base font-medium transition-colors duration-300 border-b-2 pb-1 ${
                      isActive
                        ? 'border-brand-primary text-brand-primary-dark'
                        : 'border-transparent text-brand-gray-dark hover:text-brand-primary'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
                <Phone size={16} />
                <span>Talk on WhatsApp</span>
              </a>
              <Link to="/contact" className="cta-button-primary text-sm px-5 py-2.5">
                Apply Now
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-brand-primary-dark">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-white shadow-lg absolute top-20 left-0 w-full"
        >
          <div className="px-4 pt-2 pb-8 space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block text-lg font-medium text-brand-gray-dark hover:text-brand-primary transition-colors duration-300 ${isActive ? 'text-brand-primary' : ''}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="border-t border-gray-200 pt-6 space-y-4">
                <Link to="/contact" onClick={() => setIsOpen(false)} className="w-full text-center cta-button-primary block">
                Apply Now
                </Link>
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="w-full text-center cta-button-secondary block border-green-600 text-green-600 hover:bg-green-600 hover:text-white">
                Talk on WhatsApp
                </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;
