
import React from 'react';
import FeatureCard from './FeatureCard';
import { Stethoscope, FileSearch, Brain, Shield, Clock, Award } from 'lucide-react';

const ServiceSection = () => {
  return (
    <div className="py-16 bg-gray-50" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your AI-Powered Healthcare Companion</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            ArogyaAI+ bridges the healthcare gap with cutting-edge AI technology, 
            providing accessible and reliable healthcare guidance when you need it most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={Stethoscope}
            title="AI Symptom Assessment"
            description="Advanced AI algorithms to evaluate your symptoms and provide personalized health insights with high accuracy."
            iconClassName="bg-arogya-primary/10"
          />
          
          <FeatureCard
            icon={FileSearch}
            title="Medical Report Analysis"
            description="Upload your medical reports and receive easy-to-understand explanations and recommendations."
            iconClassName="bg-arogya-secondary/10"
          />
          
          <FeatureCard
            icon={Brain}
            title="Smart Health Predictions"
            description="Get intelligent health predictions based on your symptoms, medical history, and relevant medical data."
            iconClassName="bg-arogya-accent/20"
          />
          
          <FeatureCard
            icon={Shield}
            title="Privacy & Security"
            description="Your health data is protected with enterprise-grade security and encrypted end-to-end."
            iconClassName="bg-green-100"
          />
          
          <FeatureCard
            icon={Clock}
            title="24/7 Availability"
            description="Access healthcare guidance anytime, anywhere without waiting for appointments."
            iconClassName="bg-blue-100"
          />
          
          <FeatureCard
            icon={Award}
            title="Physician Reviewed"
            description="Our AI systems are developed in collaboration with medical professionals for reliability."
            iconClassName="bg-purple-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
