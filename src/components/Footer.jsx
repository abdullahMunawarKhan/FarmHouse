// src/components/Footer.jsx
import React from 'react';
import { content } from '../data/propertyContent';

export default function Footer() {
  const { footer } = content;
  return (
    <footer className="bg-bgPrimary text-textPrimary py-8">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-xl font-heading mb-2" id="footer-brand">{footer.businessName}</h3>
        <p>{footer.address}</p>
        <p>{footer.phone} | <a href={`mailto:${footer.email}`} className="underline hover:text-accent">{footer.email}</a></p>

        <p className="mt-4 text-sm">© {new Date().getFullYear()} {footer.businessName}. All rights reserved.</p>
      </div>
    </footer>
  );
}
