import React, { useState } from 'react';
import { ArrowRight, Clock, CheckCircle, Shield } from 'lucide-react';
import emailjs from 'emailjs-com';

const Hero: React.FC = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    printerModel: '',
    issue: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  // Handle form submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email, // you should also add email to the form
      printer: formData.printerModel,
      issue: formData.issue,
      urgency: 'High',  // assuming 'urgency' field is static for now
      time: new Date().toLocaleString(),
    };

    // Sending email using EmailJS
    emailjs
      .send(
        'service_5480owf',
        'template_zkrr28w',
        templateParams,
        'GOWYWWDuIAR64j_gu'
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setSuccessMessage('Your request has been sent successfully! Our expert will get back to you shortly.');
        setErrorMessage('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        setErrorMessage('There was an issue sending your request. Please try again.');
        setSuccessMessage('');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

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
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label htmlFor="printer" className="block text-sm font-medium text-gray-700 mb-1">Printer Model (if known)</label>
                  <input
                    type="text"
                    id="printer"
                    value={formData.printerModel}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="HP LaserJet Pro MFP..."
                  />
                </div>
                <div>
                  <label htmlFor="issue" className="block text-sm font-medium text-gray-700 mb-1">Issue Description</label>
                  <textarea
                    id="issue"
                    value={formData.issue}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Please briefly describe the issue you're experiencing..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md shadow-sm transition-all transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Connect With Expert Now'}
                </button>
                {errorMessage && <p className="text-red-500 text-xs text-center mt-2">{errorMessage}</p>}
                {successMessage && <p className="text-green-500 text-xs text-center mt-2">{successMessage}</p>}
              </form>
              <p className="text-xs text-gray-500 text-center mt-4">
                By submitting this form, you agree to our <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and 
                <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a>
              </p>
              <div className="mt-6 text-center">
                <p className="flex items-center justify-center text-green-600 font-medium">
                  <Clock className="mr-2 h-5 w-5" />
                  <span>Typical response time: under 1 minute</span>
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
