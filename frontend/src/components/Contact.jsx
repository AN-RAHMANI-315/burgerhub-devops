import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { restaurantInfo } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thanks for contacting us. We'll get back to you soon!",
      duration: 3000,
    });
    
    setFormData({ name: '', email: '', message: '' });
  };

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Contact Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-orange-600 mr-3">📍</span>
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg">
                  {restaurantInfo.address}
                </p>
                <p className="text-gray-600 text-lg">
                  {restaurantInfo.city}
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-orange-600 mr-3">📞</span>
                  Contact Info
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-lg mb-2">
                  Phone: <a href={`tel:${restaurantInfo.phone}`} className="text-orange-600 hover:underline">{restaurantInfo.phone}</a>
                </p>
                <p className="text-gray-600 text-lg">
                  Email: <a href={`mailto:${restaurantInfo.email}`} className="text-orange-600 hover:underline">{restaurantInfo.email}</a>
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800 flex items-center">
                  <span className="text-orange-600 mr-3">🕐</span>
                  Hours
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {daysOfWeek.map(day => (
                    <div key={day} className="flex justify-between items-center">
                      <span className="text-gray-600 font-medium">{day}:</span>
                      <span className="text-gray-800">
                        {restaurantInfo.hours[day.toLowerCase()]}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us how we can help you..."
                    rows={5}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;