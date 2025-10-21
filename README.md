# Laxmi Enterprises Website

This repository contains the frontend code for the Laxmi Enterprises website, a platform for marketing commercial vehicle and equipment loans. It's built with React, TypeScript, and Tailwind CSS, using Vite as the build tool.

## Overview

The website serves as a lead generation tool for Laxmi Enterprises. It provides information about their services, showcases their banking partners, and allows potential customers to apply for loans through a contact form.

## Tech Stack

- **Framework:** React (with Vite)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router DOM
- **Forms:** React Hook Form
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (v18 or newer)
- Yarn package manager

### Installation

1.  Clone the repository to your local machine.
2.  Navigate to the project directory:
    ```sh
    cd laxmi-enterprises-website
    ```
3.  Install the required dependencies using Yarn:
    ```sh
    yarn install
    ```

### Running the Development Server

To start the local development server, run the following command:

```sh
yarn dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is in use). The server supports hot-reloading, so changes you make to the code will be reflected in the browser instantly.

---

## How to Customize the Website

Most of the website's content and configuration can be easily changed by editing a few key files.

### 1. Core Information (Contact, Links, Banks)

All primary business information is centralized in one file for easy updates.

**File to Edit:** `src/constants/index.ts`

-   **Contact Details:** Modify the `CONTACT_INFO` object to change the phone number, email address, and physical address used across the site.
    ```typescript
    export const CONTACT_INFO = {
        phone: '+91 98765 43210',
        phone_raw: '919876543210', // No symbols, for WhatsApp link
        email: 'sales@laxmienterprises.com',
        address: '123 Finance Street, Jaipur, RJ, 302001',
    };
    ```

-   **Navigation Links:** Edit the `NAV_LINKS` array to change the items in the main header navigation.
    ```typescript
    export const NAV_LINKS = [
      { href: '/', label: 'Home' },
      // ... more links
    ];
    ```

-   **Bank Partners:** Update the `BANK_PARTNERS` array to change the logos displayed in the scrolling carousel on the homepage. Replace the placeholder logo URLs with real ones.
    ```typescript
    export const BANK_PARTNERS = [
      { name: 'Axis Bank', logo: 'https://.../axis-logo.png' },
      // ... more banks
    ];
    ```

### 2. Website Content (Services, Testimonials)

The content for major sections like Services, Why Us, and Testimonials is also located in the constants file.

**File to Edit:** `src/constants/index.ts`

-   **Services:** Edit the `SERVICES` array.
-   **Why Us Points:** Edit the `WHY_US_POINTS` array.
-   **Testimonials:** Edit the `TESTIMONIALS` array.

### 3. Branding (Colors & Fonts)

The visual identity of the website can be customized through the Tailwind CSS configuration.

**File to Edit:** `tailwind.config.js`

-   **Colors:** Modify the `colors` object under `theme.extend` to change the brand's primary, secondary, and gray color palettes.
    ```javascript
    theme: {
      extend: {
        colors: {
          'brand-primary': {
            DEFAULT: '#0284c7',
            'dark': '#0c4a6e',
          },
          // ... more colors
        },
      },
    },
    ```

-   **Fonts:** Change the `fontFamily` to use a different font. Make sure to import the font in `src/index.css` or `index.html`.
    ```javascript
    fontFamily: {
      sans: ['"Inter"', 'sans-serif'],
    },
    ```

### 4. SEO & Metadata

Basic SEO information like the site title, description, and social media card details are set in the main HTML file.

**File to Edit:** `index.html`

-   Update the `<title>` and `<meta>` tags in the `<head>` section.
-   **Important:** The Structured Data (`<script type="application/ld+json">`) also contains business information (name, address, phone). You should update this manually to match the details in `src/constants/index.ts` to ensure consistency for search engines.

---

## Project Structure

```
/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components (Header, Footer, etc.)
│   │   └── home/         # Components specific to the HomePage
│   ├── constants/        # Centralized data (links, text content, etc.)
│   ├── layouts/          # Main layout structures (e.g., MainLayout)
│   ├── pages/            # Page components for each route
│   ├── App.tsx           # Main application component with routing
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles and Tailwind directives
├── index.html            # Main HTML template
├── tailwind.config.js    # Tailwind CSS configuration
├── vite.config.ts        # Vite configuration
└── README.md             # This file
```

## Backend Integration

The contact form in `src/pages/ContactPage.tsx` currently uses a mock submission function. To make it functional, you need to:

1.  Locate the `onSubmit` function inside `ContactPage.tsx`.
2.  Replace the `// TODO:` section and the mock `setTimeout` with an actual API call (e.g., using `fetch` or `axios`) to your backend endpoint.
3.  Your backend should be responsible for saving the lead to a database (like MongoDB) and sending an email notification (e.g., via SendGrid).

## Deployment

To create a production-ready build of the application, run:

```sh
yarn build
```

This will generate a `dist/` directory containing the optimized static files. You can deploy this directory to any static hosting provider like Vercel, Netlify, or GitHub Pages.
