// src/components/Navbar.jsx
import React from 'react';

export default function Navbar() {
  return (
    <nav id="navbar" className="sticky top-0 bg-bgPrimary text-textPrimary p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-heading">Farmhouse Demo</div>
      <ul className="flex space-x-4">
        <li><a href="#hero" className="hover:underline">Discover</a></li>
        <li><a href="#estate-intro" className="hover:underline">Experiences</a></li>
        <li><a href="#gallery" className="hover:underline">Gallery</a></li>
        <li><a href="#booking" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  );
}
