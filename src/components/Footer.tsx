import React from 'react';
import { Link } from 'react-router-dom';
import { FOOTER_LINKS, WHATSAPP_LINK, CONTACT_INFO } from '../constants';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <h3 className="text-2xl font-bold">Laxmi Enterprises</h3>
            <p className="text-gray-300 text-sm">Your trusted partner in commercial financing.</p>
            <div className="space-y-2 text-sm">
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                    <Phone size={16} />
                    <span>{CONTACT_INFO.phone}</span>
                </a>
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center space-x-2 text-gray-300 hover:text-white">
                    <Mail size={16} />
                    <span>{CONTACT_INFO.email}</span>
                </a>
            </div>
          </div>
          {Object.entries(FOOTER_LINKS).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-lg mb-4">{title}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-semibold text-lg mb-4">Get a Loan Today</h4>
            <p className="text-gray-300 mb-4 text-sm">Ready to grow your business? Apply now for a quick and easy loan.</p>
            <Link to="/contact" className="cta-button-primary text-sm">
              Apply Now
            </Link>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-primary-dark/50 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Laxmi Enterprises. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
