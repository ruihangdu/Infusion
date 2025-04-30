import React from "react";
import { UserSearch } from "lucide-react";

const CampaignHeader: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="text-primary text-3xl mr-2">
              <UserSearch className="h-8 w-8" />
            </div>
            <h1 className="text-xl font-semibold text-slate-800">InfluencerMatch</h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-slate-500">Campaign: Summer Collection 2023</span>
            <div className="h-8 w-8 rounded-full bg-primary text-white flex items-center justify-center">
              <span className="text-sm font-medium">BC</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CampaignHeader;
