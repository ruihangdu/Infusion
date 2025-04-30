import React, { useState, useEffect } from "react";
import CampaignHeader from "@/components/CampaignHeader";
import FilterBar from "@/components/FilterBar";
import InfluencerCard from "@/components/InfluencerCard";
import SelectionCounter from "@/components/SelectionCounter";
import ConfirmButton from "@/components/ConfirmButton";
import PaginationControls from "@/components/PaginationControls";
import { Badge } from "@/components/ui/badge";
import { useInfluencerSelection } from "@/hooks/useInfluencerSelection";
import { influencers } from "@/data/influencers";
import { Hash, Users, Instagram, Twitter } from "lucide-react";

const InfluencerSelection: React.FC = () => {
  const {
    selectedIds,
    toggleSelection,
    clearSelection,
    isSelected
  } = useInfluencerSelection();

  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const filteredInfluencers = influencers.filter(
    (influencer) =>
      influencer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      influencer.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const paginatedInfluencers = filteredInfluencers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    // Reset to first page when search query changes
    setCurrentPage(1);
  }, [searchQuery]);

  return (
    <div className="min-h-screen">
      <CampaignHeader />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Recommended Influencers
          </h2>
          <p className="text-slate-600">
            We've matched these influencers to your campaign brief. Select the ones you're interested in working with.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Hash className="mr-1 h-3 w-3" /> Fashion
            </Badge>
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Users className="mr-1 h-3 w-3" /> Gen Z
            </Badge>
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Instagram className="mr-1 h-3 w-3" /> Instagram
            </Badge>
            <Badge variant="outline" className="bg-slate-100 text-slate-800 hover:bg-slate-200">
              <Twitter className="mr-1 h-3 w-3" /> TikTok
            </Badge>
          </div>
        </div>

        <FilterBar onSearch={setSearchQuery} />

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

        <PaginationControls
          totalItems={filteredInfluencers.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </main>

      <ConfirmButton
        selectedCount={selectedIds.length}
        selectedIds={selectedIds}
      />
    </div>
  );
};

export default InfluencerSelection;
