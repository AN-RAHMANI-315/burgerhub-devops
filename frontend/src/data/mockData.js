// Mock data for burger restaurant website
export const restaurantInfo = {
  name: "Burger Palace",
  tagline: "Where Every Bite is Royal",
  description: "Established in 1995, Burger Palace has been serving the finest gourmet burgers in the city. Our commitment to quality ingredients and exceptional taste has made us a local favorite for over 25 years.",
  address: "123 Main Street, Downtown District",
  city: "New York, NY 10001",
  phone: "(555) 123-4567",
  email: "info@burgerpalace.com",
  hours: {
    monday: "11:00 AM - 10:00 PM",
    tuesday: "11:00 AM - 10:00 PM", 
    wednesday: "11:00 AM - 10:00 PM",
    thursday: "11:00 AM - 10:00 PM",
    friday: "11:00 AM - 11:00 PM",
    saturday: "10:00 AM - 11:00 PM",
    sunday: "10:00 AM - 9:00 PM"
  }
};

export const menuItems = [
  {
    id: 1,
    name: "Classic Cheeseburger",
    description: "Juicy beef patty, melted cheddar cheese, lettuce, tomato, pickles, and our signature sauce",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxidXJnZXJ8ZW58MHx8fHwxNzUyNTk0MjAxfDA&ixlib=rb-4.1.0&q=85",
    category: "burgers",
    popular: true
  },
  {
    id: 2,
    name: "BBQ Bacon Deluxe",
    description: "Double beef patty, crispy bacon, BBQ sauce, onion rings, and melted cheese",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwyfHxidXJnZXJ8ZW58MHx8fHwxNzUyNTk0MjAxfDA&ixlib=rb-4.1.0&q=85",
    category: "burgers",
    popular: true
  },
  {
    id: 3,
    name: "Mushroom Swiss",
    description: "Beef patty topped with sautéed mushrooms, Swiss cheese, and garlic aioli",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwzfHxidXJnZXJ8ZW58MHx8fHwxNzUyNTk0MjAxfDA&ixlib=rb-4.1.0&q=85",
    category: "burgers",
    popular: false
  },
  {
    id: 4,
    name: "Veggie Delight",
    description: "House-made black bean patty, avocado, sprouts, tomato, and herb mayo",
    price: 11.99,
    image: "https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg",
    category: "burgers",
    popular: false
  },
  {
    id: 5,
    name: "Spicy Jalapeño",
    description: "Beef patty with jalapeños, pepper jack cheese, spicy mayo, and lettuce",
    price: 14.99,
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg",
    category: "burgers",
    popular: true
  },
  {
    id: 6,
    name: "Crispy Chicken Sandwich",
    description: "Breaded chicken breast, pickles, coleslaw, and buffalo sauce",
    price: 12.99,
    image: "https://images.pexels.com/photos/6671778/pexels-photo-6671778.jpeg",
    category: "chicken",
    popular: false
  }
];

export const sides = [
  {
    id: 11,
    name: "Classic Fries",
    description: "Golden crispy fries with sea salt",
    price: 4.99,
    category: "sides"
  },
  {
    id: 12,
    name: "Sweet Potato Fries",
    description: "Crispy sweet potato fries with cinnamon sugar",
    price: 5.99,
    category: "sides"
  },
  {
    id: 13,
    name: "Onion Rings",
    description: "Beer-battered onion rings with ranch dip",
    price: 6.99,
    category: "sides"
  },
  {
    id: 14,
    name: "Loaded Nachos",
    description: "Tortilla chips with cheese, jalapeños, and sour cream",
    price: 8.99,
    category: "sides"
  }
];

export const drinks = [
  {
    id: 21,
    name: "Craft Soda",
    description: "Cola, Root Beer, or Orange",
    price: 2.99,
    category: "drinks"
  },
  {
    id: 22,
    name: "Fresh Lemonade",
    description: "House-made lemonade with fresh lemons",
    price: 3.99,
    category: "drinks"
  },
  {
    id: 23,
    name: "Milkshake",
    description: "Vanilla, Chocolate, or Strawberry",
    price: 5.99,
    category: "drinks"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Best burgers in town! The BBQ Bacon Deluxe is absolutely incredible. Service is always friendly and fast.",
    date: "2 days ago"
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "I've been coming here for 5 years and it never disappoints. The quality is consistent and the atmosphere is perfect.",
    date: "1 week ago"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 5,
    comment: "The veggie burger is amazing! Finally found a place that does vegetarian options right. Highly recommend!",
    date: "2 weeks ago"
  }
];

export const heroImage = "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwwfHx8fDE3NTI2NTM5Njh8MA&ixlib=rb-4.1.0&q=85";

export const aboutImage = "https://images.unsplash.com/photo-1651440204227-a9a5b9d19712?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwyfHxyZXN0YXVyYW50JTIwZm9vZHxlbnwwfHx8fDE3NTI2NTM5Njh8MA&ixlib=rb-4.1.0&q=85";