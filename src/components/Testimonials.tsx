import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  role: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({ content, author, role, rating }) => {
  return (
    <div className="bg-white rounded-xl p-6 md:p-8 shadow-md transition-all hover:shadow-xl border border-gray-100 h-full flex flex-col">
      <div className="flex items-center mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            className={`h-5 w-5 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
          />
        ))}
      </div>
      
      <div className="relative mb-4 flex-grow">
        <Quote className="absolute -top-2 -left-2 h-8 w-8 text-blue-100" />
        <p className="text-gray-700 italic relative z-10 pl-4">"{content}"</p>
      </div>
      
      <div className="mt-4">
        <p className="font-semibold text-gray-900">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "I was in the middle of printing important documents when my printer stopped working. The technician responded within minutes and had my printer working again in no time. Exceptional service!",
      author: "Sarah Johnson",
      role: "Small Business Owner",
      rating: 5
    },
    {
      content: "After struggling with printer connectivity issues for days, I reached out for help. The technician was patient, knowledgeable, and solved my problem in less than 10 minutes. Highly recommend!",
      author: "David Thompson",
      role: "Remote Worker",
      rating: 5
    },
    {
      content: "Our office printer was causing delays in our workflow. The support team responded quickly and not only fixed the issue but also showed us how to prevent it in the future. Great experience!",
      author: "Michael Rodriguez",
      role: "Office Manager",
      rating: 4
    },
    {
      content: "I was frustrated with constant paper jams. The technician diagnosed the problem immediately and walked me through a simple fix. Saved me from buying a new printer!",
      author: "Jennifer Williams",
      role: "Teacher",
      rating: 5
    },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - see what our satisfied customers have to say
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Testimonial 
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              role={testimonial.role}
              rating={testimonial.rating}
            />
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-center bg-white p-8 rounded-xl shadow-md">
          <div className="flex items-center mb-4 md:mb-0 md:mr-8">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <div className="ml-2">
              <span className="font-bold text-xl">4.9/5</span>
            </div>
          </div>
          <p className="text-gray-700 text-center md:text-left">
            <span className="font-semibold">Over 10,000 satisfied customers</span> and counting. We take pride in our 98% customer satisfaction rate.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;