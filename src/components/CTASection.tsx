import React from 'react';
import { ArrowRight, Clock, CheckCircle, Shield } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Solve Your Printer Problems?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our printer experts are standing by to help you get back to printing quickly.
              No long waits, no complicated processes.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-200 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold">Quick Response Time</h3>
                  <p className="text-blue-100">Connect with a technician in minutes, not hours or days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-blue-200 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold">Experienced Technicians</h3>
                  <p className="text-blue-100">Our experts have solved thousands of printer issues</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Shield className="h-6 w-6 text-blue-200 mr-3 mt-0.5" />
                <div>
                  <h3 className="text-white font-semibold">Satisfaction Guarantee</h3>
                  <p className="text-blue-100">If we can't fix your issue, you don't pay</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg inline-block">
              <p className="text-white">
                <span className="font-bold">24/7 Support Hotline:</span> <a href="tel:1-800-PRINTER" className="underline hover:text-blue-200">1-800-PRINTER</a>
              </p>
            </div>
          </div>
          
          <div className="lg:w-1/2 lg:pl-12">
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Support Now</h3>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="name-cta" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name-cta"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone-cta" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone-cta"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                
                <div>
                  <label htmlFor="email-cta" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email-cta"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="issue-cta" className="block text-sm font-medium text-gray-700 mb-1">Describe Your Printer Issue</label>
                  <textarea
                    id="issue-cta"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please briefly describe what's happening with your printer..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Support Urgency</label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="urgent"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Urgent (ASAP)</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="today"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Today</span>
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="urgency"
                        value="anytime"
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-sm text-gray-700">Anytime</span>
                    </label>
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Get Expert Help Now <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                
                <p className="text-xs text-gray-500 text-center mt-2">
                  Our average response time is under 5 minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;