import React from 'react';
import { Button } from './ui/button';
import { restaurantInfo, heroImage } from '../data/mockData';

const Hero = () => {
  const scrollToMenu = () => {
    const menuElement = document.getElementById('menu');
    if (menuElement) {
      menuElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          {restaurantInfo.name}
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light animate-fade-in-delay">
          {restaurantInfo.tagline}
        </p>
        <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90 animate-fade-in-delay-2">
          Experience the finest gourmet burgers crafted with premium ingredients and served with passion since 1995.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
          <Button 
            size="lg" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={scrollToMenu}
          >
            View Menu
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white text-white hover:bg-white hover:text-black px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            onClick={() => window.location.href = `tel:${restaurantInfo.phone}`}
          >
            Order Now
          </Button>
        </div>
      </div>

      {/* Floating elements for visual interest */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;