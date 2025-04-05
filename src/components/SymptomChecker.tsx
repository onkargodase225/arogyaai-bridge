
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Activity, Search, AlertCircle, ThumbsUp, Loader2 } from "lucide-react";

const SymptomChecker = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [symptomData, setSymptomData] = useState({
    mainSymptom: "",
    duration: "",
    severity: "",
    additionalInfo: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSymptomData({
      ...symptomData,
      [name]: value
    });
  };

  const handleSelectChange = (name: string, value: string) => {
    setSymptomData({
      ...symptomData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
    }, 2000);
  };

  return (
    <div className="py-16 bg-white" id="symptom-checker">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">AI Symptom Checker</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get quick and reliable guidance on your health symptoms with our 
            advanced AI system trained on millions of medical data points.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="border-arogya-primary/20 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Symptom Assessment</CardTitle>
                  <CardDescription>Let our AI analyze your symptoms</CardDescription>
                </div>
                <Activity className="text-arogya-primary h-8 w-8" />
              </div>
            </CardHeader>
            <CardContent>
              {step === 1 && (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        What's your main symptom or concern?
                      </label>
                      <Input
                        name="mainSymptom"
                        placeholder="e.g., Headache, Fever, Cough"
                        value={symptomData.mainSymptom}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          How long have you been experiencing this?
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("duration", value)}
                          value={symptomData.duration}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="today">Today</SelectItem>
                            <SelectItem value="few-days">Few days</SelectItem>
                            <SelectItem value="week">About a week</SelectItem>
                            <SelectItem value="month">More than a month</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">
                          How severe is your symptom?
                        </label>
                        <Select
                          onValueChange={(value) => handleSelectChange("severity", value)}
                          value={symptomData.severity}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select severity" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mild">Mild</SelectItem>
                            <SelectItem value="moderate">Moderate</SelectItem>
                            <SelectItem value="severe">Severe</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Additional information (optional)
                      </label>
                      <Textarea
                        name="additionalInfo"
                        placeholder="Any other symptoms or relevant information..."
                        value={symptomData.additionalInfo}
                        onChange={handleInputChange}
                        rows={4}
                      />
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      type="submit" 
                      className="w-full bg-arogya-primary hover:bg-arogya-primary/90"
                      disabled={!symptomData.mainSymptom || !symptomData.duration || !symptomData.severity || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Analyzing Symptoms...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          Analyze Symptoms
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )}
              
              {step === 2 && (
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                    <div className="flex items-start">
                      <AlertCircle className="text-blue-600 h-5 w-5 mt-0.5 mr-2" />
                      <div>
                        <h4 className="font-medium text-blue-700">Important Disclaimer</h4>
                        <p className="text-sm text-blue-600 mt-1">
                          This AI assessment is not a substitute for professional medical advice, 
                          diagnosis, or treatment. Always consult with a qualified healthcare provider 
                          for medical concerns.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-3">AI Assessment Results</h3>
                    
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-gray-800">Potential Conditions</h4>
                      <div className="mt-2 space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Tension Headache</span>
                          <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                            High match
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full w-[85%] bg-gradient-to-r from-green-400 to-green-500 rounded-full"></div>
                        </div>
                        <p className="text-sm text-gray-600">
                          Tension headaches are common and often triggered by stress, 
                          poor posture, or eye strain.
                        </p>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Migraine</span>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                            Moderate match
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full w-[45%] bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full"></div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Sinus Headache</span>
                          <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs font-medium rounded">
                            Low match
                          </span>
                        </div>
                        <div className="w-full h-2 bg-gray-200 rounded-full">
                          <div className="h-full w-[20%] bg-gradient-to-r from-gray-400 to-gray-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium text-gray-800">Recommendations</h4>
                      <ul className="mt-2 space-y-2 text-sm text-gray-600">
                        <li className="flex items-start">
                          <ThumbsUp className="h-4 w-4 text-arogya-primary mr-2 mt-0.5" />
                          Rest in a quiet, dark room and stay hydrated
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="h-4 w-4 text-arogya-primary mr-2 mt-0.5" />
                          Over-the-counter pain relievers may help reduce symptoms
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="h-4 w-4 text-arogya-primary mr-2 mt-0.5" />
                          Apply a cold or warm compress to your head or neck
                        </li>
                        <li className="flex items-start">
                          <ThumbsUp className="h-4 w-4 text-arogya-primary mr-2 mt-0.5" />
                          Consider stress reduction techniques like meditation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              {step === 2 && (
                <>
                  <Button variant="outline" onClick={() => setStep(1)}>
                    Start Over
                  </Button>
                  <Button className="bg-arogya-secondary hover:bg-arogya-secondary/90">
                    Consult Specialist
                  </Button>
                </>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SymptomChecker;
