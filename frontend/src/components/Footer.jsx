import React from 'react';
import { restaurantInfo } from '../data/mockData';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Restaurant Info */}
          <div>
            <h3 className="text-2xl font-bold text-orange-600 mb-4">
              {restaurantInfo.name}
            </h3>
            <p className="text-gray-300 mb-4">
              {restaurantInfo.tagline}
            </p>
            <p className="text-gray-400 text-sm">
              Serving the finest gourmet burgers since 1995
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-600 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-600 transition-colors"
                >
                  Menu
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-600 transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-orange-600 transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>{restaurantInfo.address}</p>
              <p>{restaurantInfo.city}</p>
              <p>
                <a href={`tel:${restaurantInfo.phone}`} className="hover:text-orange-600 transition-colors">
                  {restaurantInfo.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${restaurantInfo.email}`} className="hover:text-orange-600 transition-colors">
                  {restaurantInfo.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 {restaurantInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;