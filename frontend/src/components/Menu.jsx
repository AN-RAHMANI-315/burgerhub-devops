import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { menuItems, sides, drinks } from '../data/mockData';
import { useToast } from '../hooks/use-toast';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const { toast } = useToast();

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'burgers', name: 'Burgers' },
    { id: 'chicken', name: 'Chicken' },
    { id: 'sides', name: 'Sides' },
    { id: 'drinks', name: 'Drinks' }
  ];

  const allItems = [...menuItems, ...sides, ...drinks];

  const filteredItems = selectedCategory === 'all' 
    ? allItems 
    : allItems.filter(item => item.category === selectedCategory);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    toast({
      title: "Added to Cart",
      description: `${item.name} has been added to your cart.`,
      duration: 2000,
    });
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <section id="menu" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800">
            Our Menu
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully crafted selection of gourmet burgers, sides, and drinks
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 transition-all duration-300 ${
                selectedCategory === category.id 
                  ? 'bg-orange-600 hover:bg-orange-700 text-white' 
                  : 'hover:bg-orange-50 hover:text-orange-600'
              }`}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Cart Summary */}
        {cart.length > 0 && (
          <div className="bg-orange-600 text-white p-4 rounded-lg mb-8 text-center">
            <p className="text-lg font-semibold">
              Cart: {getTotalItems()} items - ${getTotalPrice()}
            </p>
            <Button 
              variant="outline" 
              className="mt-2 bg-white text-orange-600 hover:bg-gray-100"
              onClick={() => {
                toast({
                  title: "Order Placed!",
                  description: "Your order has been received. We'll call you soon!",
                  duration: 3000,
                });
                setCart([]);
              }}
            >
              Place Order
            </Button>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map(item => (
            <Card key={item.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              {item.image && (
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {item.popular && (
                    <Badge className="absolute top-4 right-4 bg-orange-600 text-white">
                      Popular
                    </Badge>
                  )}
                </div>
              )}
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    {item.name}
                  </CardTitle>
                  <span className="text-2xl font-bold text-orange-600">
                    ${item.price}
                  </span>
                </div>
                <CardDescription className="text-gray-600 mt-2">
                  {item.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <Button 
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 transition-all duration-300 transform hover:scale-105"
                  onClick={() => addToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;