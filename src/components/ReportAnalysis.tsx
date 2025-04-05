
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileText, Upload, CheckCircle2, XCircle, Loader2 } from "lucide-react";

const ReportAnalysis = () => {
  const [file, setFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [isAnalyzed, setIsAnalyzed] = useState(false);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    
    if (droppedFile && (droppedFile.type === 'application/pdf' || droppedFile.type.startsWith('image/'))) {
      setFile(droppedFile);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleAnalyze = () => {
    if (!file) return;
    
    setIsUploading(true);
    
    // Simulate API call with timeout
    setTimeout(() => {
      setIsUploading(false);
      setIsAnalyzed(true);
    }, 2500);
  };

  return (
    <div className="py-16 bg-arogya-light" id="report-analysis">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Medical Report Analysis</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Upload your lab reports or medical documents and get AI-powered insights 
            and explanations in simple, easy-to-understand language.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Card className="border-arogya-secondary/20 shadow-lg">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl">Report Analyzer</CardTitle>
                  <CardDescription>Upload your medical reports for AI analysis</CardDescription>
                </div>
                <FileText className="text-arogya-secondary h-8 w-8" />
              </div>
            </CardHeader>
            <CardContent>
              {!isAnalyzed ? (
                <div>
                  <div 
                    className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
                      isDragging 
                        ? "border-arogya-secondary bg-arogya-secondary/5" 
                        : file 
                          ? "border-green-500 bg-green-50" 
                          : "border-gray-300 hover:border-arogya-secondary hover:bg-arogya-secondary/5"
                    }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('fileInput')?.click()}
                  >
                    <Input
                      type="file"
                      id="fileInput"
                      className="hidden"
                      accept="application/pdf,image/*"
                      onChange={handleFileChange}
                    />
                    {file ? (
                      <div className="flex flex-col items-center">
                        <CheckCircle2 className="h-12 w-12 text-green-500 mb-3" />
                        <h3 className="text-lg font-medium">File selected!</h3>
                        <p className="text-gray-600 mt-1">{file.name}</p>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center">
                        <Upload className="h-12 w-12 text-gray-400 mb-3" />
                        <h3 className="text-lg font-medium">Upload your medical report</h3>
                        <p className="text-gray-500 mt-1">
                          Drag & drop or click to browse your files<br />
                          (PDF or Image formats)
                        </p>
                      </div>
                    )}
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      onClick={handleAnalyze}
                      className="w-full bg-arogya-secondary hover:bg-arogya-secondary/90"
                      disabled={!file || isUploading}
                    >
                      {isUploading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Processing your report...
                        </>
                      ) : (
                        "Analyze Report"
                      )}
                    </Button>
                  </div>
                  
                  <div className="mt-4 text-center text-xs text-gray-500">
                    <p>Your documents are encrypted and securely processed. We never store your medical reports.</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="flex items-center p-4 bg-green-50 text-green-800 rounded-lg">
                    <CheckCircle2 className="h-6 w-6 mr-2" />
                    <div>
                      <span className="font-medium">Analysis complete!</span>
                      <span className="ml-2 text-sm">Blood Test Report - Complete Blood Count (CBC)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Summary</h3>
                    <p className="text-gray-700">
                      Your blood test results are mostly within normal ranges with a few parameters that may need attention.
                      Your hemoglobin and red blood cell counts are slightly below the normal range, indicating potential mild anemia.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">Hemoglobin</span>
                          <span className="text-red-600 font-medium">Low</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">11.2 g/dL</span>
                          <span className="text-xs text-gray-500 ml-2">(Reference: 13.5-17.5 g/dL)</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Lower than normal hemoglobin may indicate anemia or other conditions.
                        </p>
                      </div>
                      
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">White Blood Cells</span>
                          <span className="text-green-600 font-medium">Normal</span>
                        </div>
                        <div className="flex items-center">
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">7.2 K/uL</span>
                          <span className="text-xs text-gray-500 ml-2">(Reference: 4.5-11.0 K/uL)</span>
                        </div>
                        <p className="text-xs text-gray-600 mt-2">
                          Your white blood cell count is within normal range.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex">
                        <span className="bg-arogya-secondary/10 p-1 rounded mr-2">
                          <CheckCircle2 className="h-4 w-4 text-arogya-secondary" />
                        </span>
                        Consider consulting with your healthcare provider about the low hemoglobin levels
                      </li>
                      <li className="flex">
                        <span className="bg-arogya-secondary/10 p-1 rounded mr-2">
                          <CheckCircle2 className="h-4 w-4 text-arogya-secondary" />
                        </span>
                        Include iron-rich foods in your diet (lean red meat, beans, spinach)
                      </li>
                      <li className="flex">
                        <span className="bg-arogya-secondary/10 p-1 rounded mr-2">
                          <CheckCircle2 className="h-4 w-4 text-arogya-secondary" />
                        </span>
                        Schedule a follow-up test in 4-6 weeks to monitor hemoglobin levels
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-between border-t pt-6">
              {isAnalyzed && (
                <>
                  <Button variant="outline" onClick={() => {
                    setFile(null);
                    setIsAnalyzed(false);
                  }}>
                    Analyze Another Report
                  </Button>
                  <Button className="bg-arogya-primary hover:bg-arogya-primary/90">
                    Download Summary
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

export default ReportAnalysis;
