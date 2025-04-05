
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import SymptomChecker from '@/components/SymptomChecker';
import ReportAnalysis from '@/components/ReportAnalysis';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <SymptomChecker />
        <ReportAnalysis />
        <ServiceSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
