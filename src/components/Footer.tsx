import React from 'react';
import { Printer, Mail, Phone, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Printer className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">PrinterCare</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional printer support services by certified technicians. Available 24/7 for all your printer needs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#services" className="text-gray-400 hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#how-it-works" className="text-gray-400 hover:text-blue-400 transition-colors">How It Works</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-blue-400 transition-colors">Testimonials</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-blue-400 transition-colors">FAQ</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Emergency Repairs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Troubleshooting</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Setup & Installation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Maintenance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Remote Support</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Support Hotline</p>
                  <a href="tel:1-800-PRINTER" className="text-gray-400 hover:text-blue-400 transition-colors">1-800-PRINTER</a>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:support@printercare.com" className="text-gray-400 hover:text-blue-400 transition-colors">support@printercare.com</a>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <address className="text-gray-400 not-italic">
                    123 Printer Lane<br />
                    Tech City, CA 90210
                  </address>
                </div>
              </li>
              <li className="flex items-start">
                <Clock className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Hours</p>
                  <p className="text-gray-400">24/7 Support Available</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} PrinterCare. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;