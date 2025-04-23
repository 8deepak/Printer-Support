import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-600" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What printer brands do you support?",
      answer: "We provide support for all major printer brands including HP, Canon, Epson, Brother, Lexmark, Xerox, and many more. Our technicians are certified and experienced with a wide range of printer models."
    },
    {
      question: "How quickly will someone contact me after I submit my information?",
      answer: "Our average response time is under 5 minutes during business hours and under 15 minutes during nights and weekends. We prioritize urgent issues and work to connect you with a technician as quickly as possible."
    },
    {
      question: "Can you help with wireless printer connectivity issues?",
      answer: "Yes, we specialize in resolving wireless connectivity problems. Our technicians can help troubleshoot connection issues, network configuration, driver installation, and ensure your printer communicates properly with all your devices."
    },
    {
      question: "Do you offer on-site support or only remote assistance?",
      answer: "We primarily offer remote support, which resolves about 95% of printer issues. For complex hardware problems that cannot be solved remotely, we can arrange for on-site support in select areas for an additional fee."
    },
    {
      question: "What are your support hours?",
      answer: "Our support team is available 24/7, including weekends and holidays. We understand that printer issues can occur at any time, especially when you need to print important documents urgently."
    },
    {
      question: "Is there a fee for your printer support service?",
      answer: "We offer tiered support options. Basic troubleshooting consultation is complimentary, while more advanced technical support and guided repairs may have a fee. We always provide clear pricing information before proceeding with any paid service."
    },
    {
      question: "Can you help with printer error codes?",
      answer: "Yes, our technicians are trained to interpret and resolve error codes for all major printer brands. We maintain an extensive database of error codes and their solutions to quickly address these issues."
    },
    {
      question: "Do you offer support for business/commercial printers?",
      answer: "Absolutely. We provide support for both home and business printers, including commercial-grade multifunction devices, large format printers, and specialized printing equipment."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find quick answers to common questions about our printer support services
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem 
              key={index} 
              question={faq.question} 
              answer={faq.answer} 
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Don't see your question here?</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;