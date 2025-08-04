import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HealthCheck from "./components/HealthCheck";
import { Toaster } from "./components/ui/toaster";

function App() {
  // Simple routing based on pathname
  const currentPath = window.location.pathname;
  
  // Health check endpoint for load balancer
  if (currentPath === '/health') {
    return <HealthCheck />;
  }
  
  return (
    <div className="App">
      <Header />
      <Hero />
      <Menu />
      <About />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;