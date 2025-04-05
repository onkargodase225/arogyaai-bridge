
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full py-4 bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="/" className="flex items-center">
          <Heart className="w-6 h-6 text-arogya-secondary mr-2" />
          <span className="text-xl font-bold text-arogya-dark">ArogyaAI<span className="text-arogya-secondary">+</span></span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#symptom-checker" className="text-arogya-dark hover:text-arogya-primary transition-colors">
            Symptom Checker
          </a>
          <a href="#report-analysis" className="text-arogya-dark hover:text-arogya-primary transition-colors">
            Report Analysis
          </a>
          <a href="#about" className="text-arogya-dark hover:text-arogya-primary transition-colors">
            About Us
          </a>
          <Button className="bg-arogya-primary hover:bg-arogya-primary/90 text-white">
            Get Started
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-arogya-dark focus:outline-none"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 absolute w-full shadow-md">
          <div className="flex flex-col space-y-4">
            <a 
              href="#symptom-checker" 
              className="text-arogya-dark hover:text-arogya-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Symptom Checker
            </a>
            <a 
              href="#report-analysis" 
              className="text-arogya-dark hover:text-arogya-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Report Analysis
            </a>
            <a 
              href="#about" 
              className="text-arogya-dark hover:text-arogya-primary transition-colors px-2 py-1"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </a>
            <Button className="bg-arogya-primary hover:bg-arogya-primary/90 text-white w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
