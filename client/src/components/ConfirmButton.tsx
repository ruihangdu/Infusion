import React, { useContext } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";
import { LanguageContext } from "@/components/CampaignHeader";

interface ConfirmButtonProps {
  selectedCount: number;
  selectedIds: number[];
}

const translations = {
  en: "Confirm Selection",
  vi: "Xác nhận lựa chọn"
};

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ 
  selectedCount, 
  selectedIds 
}) => {
  const [, navigate] = useLocation();
  const { lang } = useContext(LanguageContext) ?? { lang: 'en' };

  const handleConfirm = () => {
    // Store the selected IDs in session storage to retrieve on the waitlist page
    sessionStorage.setItem('selectedInfluencers', JSON.stringify(selectedIds));
    navigate('/waitlist');
  };

  return (
    <div className="sticky bottom-6 flex justify-end mt-6 mb-4">
      <Button
        className="confirm-button px-6 py-6 rounded-full font-medium shadow-lg flex items-center"
        disabled={selectedCount === 0}
        onClick={handleConfirm}
      >
        <span>{translations[lang]}</span>
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default ConfirmButton;
