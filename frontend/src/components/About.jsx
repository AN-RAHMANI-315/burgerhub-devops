import React from 'react';
import { Card, CardContent } from './ui/card';
import { restaurantInfo, aboutImage, testimonials } from '../data/mockData';

const About = () => {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            About Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our story, passion, and commitment to excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Our Story
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {restaurantInfo.description}
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              What started as a small family business has grown into a beloved local institution. 
              We source our ingredients from local farms and use only the finest beef, freshly baked buns, 
              and house-made sauces to create unforgettable dining experiences.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                <div className="text-gray-600 font-medium">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-600 mb-2">10K+</div>
                <div className="text-gray-600 font-medium">Happy Customers</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={aboutImage} 
              alt="Restaurant interior"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">
            What Our Customers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(testimonial => (
              <Card key={testimonial.id} className="bg-white border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <span className="text-orange-500 text-lg">
                      {renderStars(testimonial.rating)}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="text-sm text-gray-500">{testimonial.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;