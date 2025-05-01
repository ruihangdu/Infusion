import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLocation } from "wouter";

interface ConfirmButtonProps {
  selectedCount: number;
  selectedIds: number[];
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ 
  selectedCount, 
  selectedIds 
}) => {
  const [, navigate] = useLocation();

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
        <span>Confirm Selection</span>
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </div>
  );
};

export default ConfirmButton;
