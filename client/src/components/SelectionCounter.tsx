import React from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectionCounterProps {
  count: number;
  onClear: () => void;
}

const SelectionCounter: React.FC<SelectionCounterProps> = ({ count, onClear }) => {
  if (count === 0) return null;
  
  return (
    <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
            <Check className="h-5 w-5" />
          </div>
          <span className="font-medium text-slate-800">
            {count} {count === 1 ? 'influencer' : 'influencers'} selected
          </span>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-sm text-primary hover:text-blue-700"
          onClick={onClear}
        >
          Clear selection
        </Button>
      </div>
    </div>
  );
};

export default SelectionCounter;
