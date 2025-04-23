import React, { useState, useEffect } from 'react';
import { Menu, X, Printer } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Printer className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">PrinterCare</span>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-600 hover:text-blue-600 transition-colors">Services</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors">How It Works</a>
            <a href="#testimonials" className="text-gray-600 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="#faq" className="text-gray-600 hover:text-blue-600 transition-colors">FAQ</a>
          </nav>
          
          <div className="hidden md:block">
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Support
            </a>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Services</a>
            <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">How It Works</a>
            <a href="#testimonials" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">Testimonials</a>
            <a href="#faq" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50">FAQ</a>
            <a 
              href="#contact" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Get Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;