import { BarChart, Building, Car, Cog, Handshake, ShieldCheck } from 'lucide-react';

export const CONTACT_INFO = {
    phone: '+91 8818004778',
    phone_raw: '918818004778',
    email: 'LaxmiEnterprise@gmail.com',
    address: 'Near D-Park, Rothak, Haryana, 124001, India',
    whatsapp: '918818004778',
};

export const WHATSAPP_LINK = `https://wa.me/${CONTACT_INFO.phone_raw}?text=Hello%20Laxmi%20Enterprises%2C%20I%20want%20a%20commercial%20vehicle%20loan.`;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/emi-calculator', label: 'EMI Calculator' },
  { href: '/contact', label: 'Contact Us' },
];

export const BANK_PARTNERS = [
  { name: 'Axis Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1a/Axis_Bank_logo.svg' },
  { name: 'HDFC Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg' },
  { name: 'ICICI Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/12/ICICI_Bank_Logo.svg' },
  { name: 'Federal Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Federal-Bank-Logo_SVG.svg' },
  { name: 'AU Small Finance Bank', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/28/Aubank.svg' },
  { name: 'Kotak Mahindra Bank', logo: 'https://upload.wikimedia.org/wikipedia/en/3/39/Kotak_Mahindra_Group_logo.svg' },
];

export const BANK_OPTIONS = [
    "Axis Bank",
    "HDFC Bank",
    "ICICI Bank",
    "Federal Bank",
    "AU Small Finance Bank",
    "Kotak Mahindra Bank",
    "Any / Not Sure"
];

export const LOAN_TYPES = [
    "Commercial Vehicle Loan",
    "Construction Equipment Loan",
    "Commercial Equipment Loan",
    "Other"
];

export const SERVICES = [
    {
        icon: Car,
        title: 'Commercial Vehicle Loans',
        description: 'Get financing for new and used commercial vehicles, including trucks, buses, and light commercial vehicles.'
    },
    {
        icon: Building,
        title: 'Construction Equipment Loans',
        description: 'Secure loans for essential construction machinery like excavators, cranes, and loaders to fuel your projects.'
    },
    {
        icon: Cog,
        title: 'Commercial Equipment Loans',
        description: 'Finance a wide range of commercial and industrial equipment to upgrade your business operations.'
    }
];

export const WHY_US_POINTS = [
    {
        icon: ShieldCheck,
        title: 'Quick Approval',
        description: 'Streamlined process for faster loan approvals to get your business moving without delays.'
    },
    {
        icon: BarChart,
        title: 'Competitive Rates',
        description: 'We negotiate with our banking partners to bring you the most competitive interest rates in the market.'
    },
    {
        icon: Handshake,
        title: 'Expert Guidance',
        description: 'Our experienced team provides personalized support throughout the entire loan application process.'
    }
];

export const TESTIMONIALS = [
    {
        quote: "Laxmi Enterprises made the entire loan process incredibly smooth and transparent. Their team was professional and secured a great rate for our new fleet of trucks.",
        name: 'Rohan Sharma',
        company: 'Sharma Transports'
    },
    {
        quote: "I was struggling to get a loan for my construction equipment. Laxmi Enterprises guided me through everything and got it approved with HDFC Bank in record time. Highly recommended!",
        name: 'Priya Singh',
        company: 'Singh Constructions'
    },
    {
        quote: "Anil Kumar and his team are the best in the business. Their transparency and dedication is unmatched.",
        name: 'Anil Kumar',
        company: 'Kumar Logistics'
    }
];

export const FOOTER_LINKS = {
    'Company': [
        { href: '/about', label: 'About Us' },
        { href: '/services', label: 'Services' },
        { href: '/emi-calculator', label: 'EMI Calculator' },
        { href: '/contact', label: 'Contact Us' },
    ],
    'Legal': [
        { href: '/privacy-policy', label: 'Privacy Policy' },
        { href: '/terms-of-service', label: 'Terms of Service' },
    ]
};
