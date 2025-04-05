
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, FileText, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative pt-16 pb-24 md:pb-32 overflow-hidden bg-gradient-to-br from-arogya-light to-white wave-pattern">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 md:space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text">Bridging Healthcare</span> with AI Intelligence
              </h1>
              <p className="mt-4 text-lg text-gray-600 max-w-lg">
                Access reliable healthcare guidance with our AI-powered symptom checker and medical report analysis. Healthcare made accessible, reliable, and intelligent.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-arogya-secondary hover:bg-arogya-secondary/90 text-white px-6 py-6 rounded-lg text-lg" size="lg">
                Check Symptoms
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-arogya-primary text-arogya-primary hover:text-arogya-primary/90 hover:bg-arogya-primary/5 px-6 py-6 rounded-lg text-lg" size="lg">
                Analyze Reports
              </Button>
            </div>
            
            <div className="flex items-center gap-1">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-arogya-primary flex items-center justify-center text-white text-xs shadow">
                  +1k
                </div>
                <div className="w-8 h-8 rounded-full bg-arogya-secondary flex items-center justify-center text-white text-xs shadow">
                  +5k
                </div>
                <div className="w-8 h-8 rounded-full bg-arogya-accent flex items-center justify-center text-arogya-dark text-xs shadow">
                  +10k
                </div>
              </div>
              <span className="text-sm text-gray-600 ml-2">Trusted by thousands of users daily</span>
            </div>
          </div>
          
          <div className="relative hidden md:block">
            <div className="absolute w-72 h-72 bg-arogya-primary/10 rounded-full -top-10 -right-10 animate-pulse-slow"></div>
            <div className="absolute w-40 h-40 bg-arogya-secondary/10 rounded-full bottom-0 left-10 animate-pulse-slow delay-700"></div>
            
            <div className="relative z-10 bg-white p-6 rounded-2xl shadow-xl max-w-md mx-auto animate-float">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-arogya-primary/20 rounded-full flex items-center justify-center">
                  <Stethoscope className="h-6 w-6 text-arogya-primary" />
                </div>
                <div className="ml-4">
                  <h3 className="font-semibold text-lg">AI Symptom Checker</h3>
                  <p className="text-sm text-gray-500">Intelligent health assessment</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-arogya-light p-4 rounded-lg">
                  <FileText className="h-5 w-5 text-arogya-primary mb-2" />
                  <p className="text-sm font-medium">Report Analysis</p>
                </div>
                <div className="bg-arogya-accent/30 p-4 rounded-lg">
                  <MessageCircle className="h-5 w-5 text-arogya-secondary mb-2" />
                  <p className="text-sm font-medium">Health Consult</p>
                </div>
              </div>
              
              <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">AI confidence</span>
                  <span className="text-sm font-medium">96%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
                  <div className="h-full w-[96%] bg-gradient-to-r from-arogya-primary to-arogya-secondary rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
};

export default Hero;
