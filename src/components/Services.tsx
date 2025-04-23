import React from 'react';
import { Zap, Wrench, FileText, RefreshCw, Printer, HelpCircle, CheckCircle, PenTool } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md transition-all hover:shadow-xl border border-gray-100 group hover:border-blue-100">
      <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Emergency Repairs",
      description: "Urgent printer issues resolved quickly by our expert technicians, minimizing your downtime."
    },
    {
      icon: <Wrench className="h-6 w-6" />,
      title: "Troubleshooting",
      description: "Comprehensive diagnostics and solutions for any printer problem, from connectivity to print quality."
    },
    {
      icon: <Printer className="h-6 w-6" />,
      title: "Setup & Installation",
      description: "Professional setup of new printers, including network configuration and driver installation."
    },
    {
      icon: <RefreshCw className="h-6 w-6" />,
      title: "Maintenance",
      description: "Regular maintenance services to keep your printers running smoothly and extend their lifespan."
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Software Support",
      description: "Expert assistance with printer software, driver updates, and compatibility issues."
    },
    {
      icon: <HelpCircle className="h-6 w-6" />,
      title: "Remote Support",
      description: "Instant remote assistance for software-related printer problems, no waiting for a technician."
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and calibration to ensure optimal print quality and performance."
    },
    {
      icon: <PenTool className="h-6 w-6" />,
      title: "Custom Solutions",
      description: "Tailored support services for your specific printer models and business requirements."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comprehensive Printer Support Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our expert technicians provide fast, reliable solutions for all your printer needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Get Expert Help Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;