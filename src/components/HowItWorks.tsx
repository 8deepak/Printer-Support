import React from 'react';
import { PhoneCall, CheckCircle, Video, Printer } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <PhoneCall className="h-8 w-8 text-blue-600" />,
      title: "Request Support",
      description: "Fill out our simple form with your contact information and printer issue details."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-blue-600" />,
      title: "Get Connected",
      description: "A certified printer technician will contact you within minutes to begin troubleshooting."
    },
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: "Remote Diagnosis",
      description: "Our expert will remotely diagnose the issue and guide you through the solution step by step."
    },
    {
      icon: <Printer className="h-8 w-8 text-blue-600" />,
      title: "Problem Solved",
      description: "Your printer is back up and running, with additional tips to prevent future issues."
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How Our Support Works</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fast, efficient printer support in four simple steps
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-100 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-xl border border-gray-100 z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mt-6 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 bg-blue-50 p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Need urgent printer support?</h3>
              <p className="text-gray-600">
                Our team of certified technicians is available 24/7 to solve your printer issues.
              </p>
            </div>
            <div>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-lg"
              >
                Contact Us Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;