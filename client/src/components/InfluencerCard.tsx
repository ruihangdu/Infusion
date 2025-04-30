import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Influencer } from "@shared/schema";

interface InfluencerCardProps {
  influencer: Influencer;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const InfluencerCard: React.FC<InfluencerCardProps> = ({
  influencer,
  isSelected,
  onSelect,
}) => {
  const {
    id,
    name,
    category,
    formattedFollowers,
    engagement,
    ctr,
    image,
    platforms,
    platformColors,
    audienceSize,
    sizeBgColor,
    sizeTextColor,
    lastCampaign,
    ctrColor
  } = influencer;

  return (
    <Card 
      className={`influencer-card overflow-hidden cursor-pointer transition-all duration-200 h-full ${isSelected ? 'selected' : ''}`}
      onClick={() => onSelect(id)}
    >
      <div className="relative">
        <img
          src={image}
          alt={`${name} profile`}
          className="w-full h-60 object-cover"
        />
        <div className="absolute top-3 right-3 bg-white rounded-full p-1 shadow-sm">
          <div className={`${isSelected ? 'block' : 'hidden'}`}>
            <Check className="h-5 w-5 text-primary" />
          </div>
        </div>
        <div className="absolute top-3 left-3 flex gap-1">
          {platforms.map((platform, idx) => (
            <span 
              key={idx} 
              className={`px-2 py-1 text-xs font-medium ${platformColors[idx]} text-white rounded-full`}
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-slate-800">{name}</h3>
            <p className="text-sm text-slate-600">{category}</p>
          </div>
          <span className={`${sizeBgColor} ${sizeTextColor} text-xs px-2 py-1 rounded-md font-medium`}>
            {audienceSize}
          </span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Followers</span>
            <span className="font-medium text-slate-800">{formattedFollowers}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Engagement</span>
            <span className="font-medium text-slate-800">{engagement}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">Avg. CTR</span>
            <div className="flex items-center">
              <span className="font-medium text-slate-800 mr-2">{ctr}%</span>
              <div className="ctr-indicator w-16">
                <div 
                  className={`ctr-indicator-inner ${ctrColor}`} 
                  style={{ width: `${ctr * 10}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-3 border-t border-slate-100">
          <div className="flex justify-between items-center">
            <span className="text-xs text-slate-500">
              Last campaign: {lastCampaign} {lastCampaign === 1 ? 'day' : 'days'} ago
            </span>
            <span className="text-xs font-medium text-blue-600">View details</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
