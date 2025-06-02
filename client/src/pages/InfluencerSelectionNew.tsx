import React, { useState, useEffect, useContext } from "react";
import CampaignHeader, { LanguageContext } from "@/components/CampaignHeader";
import InfluencerCard from "@/components/InfluencerCard";
import SelectionCounter from "@/components/SelectionCounter";
import ConfirmButton from "@/components/ConfirmButton";
import PaginationControls from "@/components/PaginationControls";
import { useInfluencerSelection } from "@/hooks/useInfluencerSelection";
import { influencers } from "@/data/influencers";
import { ChevronUp, ChevronDown } from "lucide-react";

const translations = {
  en: {
    recommended: "Recommended Vietnamese Influencers",
    matched: "We've matched these influencers to your campaign brief. Select the ones you're interested in working with.",
    yourBrief: "Your Campaign Brief:",
    collapse: "Collapse",
    expand: "Expand"
  },
  vi: {
    recommended: "Đề xuất Influencer Việt Nam",
    matched: "Chúng tôi đã ghép các influencer này với bản tóm tắt chiến dịch của bạn. Hãy chọn những người bạn muốn hợp tác.",
    yourBrief: "Tóm tắt chiến dịch của bạn:",
    collapse: "Thu gọn",
    expand: "Mở rộng"
  }
};

const InfluencerSelection: React.FC = () => {
  const {
    selectedIds,
    toggleSelection,
    clearSelection,
    isSelected
  } = useInfluencerSelection();

  const { lang } = useContext(LanguageContext);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const [campaignBrief, setCampaignBrief] = useState<string>("");
  const [campaignBriefVisible, setCampaignBriefVisible] = useState(true);

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
            {translations[lang].recommended}
          </h2>
          <p className="text-slate-600">
            {translations[lang].matched}
          </p>
          
          {campaignBrief && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium text-slate-800">{translations[lang].yourBrief}</h3>
                <button 
                  onClick={() => setCampaignBriefVisible(prev => !prev)}
                  className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
                >
                  {campaignBriefVisible ? (
                    <>
                      <span className="mr-1">{translations[lang].collapse}</span>
                      <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <span className="mr-1">{translations[lang].expand}</span>
                      <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
              {campaignBriefVisible && (
                <p className="text-slate-600 text-sm italic">{campaignBrief}</p>
              )}
            </div>
          )}
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