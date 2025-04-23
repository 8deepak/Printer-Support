import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "PrinterCare - Expert Printer Support 24/7";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;