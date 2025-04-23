import React from 'react';
import { ArrowRight, Clock, CheckCircle, Shield } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-blue-800 bg-blue-100 rounded-full mb-6 animate-fade-in">
              <Clock className="inline-block w-4 h-4 mr-1" /> 24/7 Expert Printer Support
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Expert Printer Support <span className="text-blue-600">When You Need It Most</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Professional printer troubleshooting and support from certified technicians. 
              Get your printer working again in minutes, not days.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Get Immediate Help <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              
              <a 
                href="#services" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-blue-600 bg-white border border-blue-200 hover:border-blue-600 transition-all"
              >
                Explore Services
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>5-Minute Response</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                <span>100% Satisfaction</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-green-500 mr-2" />
                <span>Certified Experts</span>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl transform lg:translate-y-4 transition-all hover:shadow-2xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get Printer Support Now</h2>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="printer" className="block text-sm font-medium text-gray-700 mb-1">Printer Model (if known)</label>
                  <input
                    type="text"
                    id="printer"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="HP LaserJet Pro MFP..."
                  />
                </div>
                
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
                  <textarea
                    id="issue"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please briefly describe the issue you're experiencing..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-all transform hover:scale-105"
                >
                  Connect With Expert Now
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-4">
                  By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and 
                  <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a>
                </p>
              </div>
              
              <div className="mt-6 text-center">
                <p className="flex items-center justify-center text-green-600 font-medium">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Typical response time: under 5 minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;