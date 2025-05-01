import React, { useState, useEffect } from "react";
import CampaignHeader from "@/components/CampaignHeader";
import InfluencerCard from "@/components/InfluencerCard";
import SelectionCounter from "@/components/SelectionCounter";
import ConfirmButton from "@/components/ConfirmButton";
import PaginationControls from "@/components/PaginationControls";
import { Badge } from "@/components/ui/badge";
import { useInfluencerSelection } from "@/hooks/useInfluencerSelection";
import { influencers } from "@/data/influencers";
import { Hash, Users, Instagram, Zap } from "lucide-react";

const InfluencerSelection: React.FC = () => {
  const {
    selectedIds,
    toggleSelection,
    clearSelection,
    isSelected
  } = useInfluencerSelection();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [campaignBrief, setCampaignBrief] = useState<string>("");

  // Get all influencers, no filtering required
  const paginatedInfluencers = influencers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    // Retrieve the campaign brief from session storage
    const brief = sessionStorage.getItem("campaignBrief");
    if (brief) {
      setCampaignBrief(brief);
    }
  }, []);

  return (
    <div className="min-h-screen">
      <CampaignHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Recommended Vietnamese Influencers
          </h2>
          <p className="text-slate-600">
            We've matched these influencers to your campaign brief. Select the ones you're interested in working with.
          </p>
          
          {campaignBrief && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <h3 className="font-medium text-slate-800 mb-2">Your Campaign Brief:</h3>
              <p className="text-slate-600 text-sm italic">{campaignBrief}</p>
            </div>
          )}
          
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Hash className="mr-1 h-3 w-3" /> Vietnamese Market
            </Badge>
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Users className="mr-1 h-3 w-3" /> Gen Z
            </Badge>
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Instagram className="mr-1 h-3 w-3" /> Instagram
            </Badge>
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Zap className="mr-1 h-3 w-3" /> TikTok
            </Badge>
          </div>
        </div>

        <SelectionCounter
          count={selectedIds.length}
          onClear={clearSelection}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {paginatedInfluencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              influencer={influencer}
              isSelected={isSelected(influencer.id)}
              onSelect={toggleSelection}
            />
          ))}
        </div>

        <ConfirmButton
          selectedCount={selectedIds.length}
          selectedIds={selectedIds}
        />

        <PaginationControls
          totalItems={influencers.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </main>
    </div>
  );
};

export default InfluencerSelection;
