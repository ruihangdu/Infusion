import React, { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSearch } from "lucide-react";

const Landing: React.FC = () => {
  const [campaignBrief, setCampaignBrief] = useState("");
  const [, navigate] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (campaignBrief.trim()) {
      // Store the brief in session storage
      sessionStorage.setItem("campaignBrief", campaignBrief);
      // Navigate to the influencer selection page
      navigate("/influencers");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center">
            <div className="text-primary text-3xl mr-2">
              <UserSearch className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-semibold text-slate-800">Infusion</h1>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-primary p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Connect with Vietnam's Top Influencers</h2>
            <p className="text-blue-100">Find the perfect match for your brand campaign</p>
          </div>
          
          <div className="p-8">
            <p className="text-slate-600 mb-6">
              Tell us about your campaign and we'll find the right influencers for you. Be specific about your brand, goals, and target audience.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="campaignBrief" className="block text-sm font-medium text-slate-700 mb-2">
                  Campaign Brief
                </label>
                <textarea
                  id="campaignBrief"
                  rows={5}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Describe your campaign, brand values, target audience, and goals..."
                  value={campaignBrief}
                  onChange={(e) => setCampaignBrief(e.target.value)}
                  required
                />
              </div>
              
              <div className="flex items-center">
                <Button 
                  type="submit" 
                  className="w-full py-2"
                >
                  Find Influencers
                </Button>
              </div>
            </form>
            
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Why choose Infusion?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Vietnamese Market Experts</h4>
                  <p className="text-sm text-slate-600">Access to Vietnam's leading influencers</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Data-Driven Matches</h4>
                  <p className="text-sm text-slate-600">Based on engagement and CTR data</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Streamlined Process</h4>
                  <p className="text-sm text-slate-600">Quick and efficient campaign setup</p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">Performance Tracking</h4>
                  <p className="text-sm text-slate-600">Measure ROI on all campaigns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-white border-t border-slate-200 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-center text-slate-500">
            © {new Date().getFullYear()} Infusion. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;