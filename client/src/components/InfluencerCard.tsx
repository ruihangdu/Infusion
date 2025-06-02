import React, { useContext } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Influencer } from "@shared/schema";
import { LanguageContext } from "@/components/CampaignHeader";

interface InfluencerCardProps {
  influencer: Influencer;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const translations = {
  en: {
    followers: "Followers",
    engagement: "Engagement",
    avgCtr: "Avg. CTR",
    lastCampaign: "Last campaign:",
    day: "day",
    days: "days",
    ago: "ago",
    viewDetails: "View details"
  },
  vi: {
    followers: "Người theo dõi",
    engagement: "Tương tác",
    avgCtr: "CTR TB",
    lastCampaign: "Chiến dịch gần nhất:",
    day: "ngày",
    days: "ngày",
    ago: "trước",
    viewDetails: "Xem chi tiết"
  }
};

const categoryTranslations: Record<string, { en: string; vi: string }> = {
  "Fashion & Lifestyle": { en: "Fashion & Lifestyle", vi: "Thời trang & Phong cách sống" },
  "Streetwear & Culture": { en: "Streetwear & Culture", vi: "Streetwear & Văn hóa" },
  "Beauty & Wellness": { en: "Beauty & Wellness", vi: "Làm đẹp & Sức khỏe" },
  "Vietnamese Food": { en: "Vietnamese Food", vi: "Ẩm thực Việt Nam" },
  "Active & Streetwear": { en: "Active & Streetwear", vi: "Năng động & Streetwear" },
  "Travel Vietnam": { en: "Travel Vietnam", vi: "Du lịch Việt Nam" },
  "Sustainable Living": { en: "Sustainable Living", vi: "Sống bền vững" },
  "Vietnamese Cuisine": { en: "Vietnamese Cuisine", vi: "Ẩm thực Việt" },
  "Contemporary Fashion": { en: "Contemporary Fashion", vi: "Thời trang hiện đại" },
  "Fitness & Health": { en: "Fitness & Health", vi: "Thể hình & Sức khỏe" },
  "Luxury Lifestyle": { en: "Luxury Lifestyle", vi: "Phong cách sống sang trọng" },
  "Vietnamese Culture": { en: "Vietnamese Culture", vi: "Văn hóa Việt Nam" },
  "Minimalist Style": { en: "Minimalist Style", vi: "Phong cách tối giản" },
  "Hanoi Street Style": { en: "Hanoi Street Style", vi: "Phong cách đường phố Hà Nội" },
  "Vietnamese Coffee": { en: "Vietnamese Coffee", vi: "Cà phê Việt Nam" },
  "Local Creators": { en: "Local Creators", vi: "Nhà sáng tạo địa phương" },
  "Tech Reviews": { en: "Tech Reviews", vi: "Đánh giá công nghệ" },
  "Accessories & Jewelry": { en: "Accessories & Jewelry", vi: "Phụ kiện & Trang sức" },
  "Street Food": { en: "Street Food", vi: "Ẩm thực đường phố" },
  "Urban Vietnam": { en: "Urban Vietnam", vi: "Việt Nam hiện đại" },
  // Custom influencer categories:
  "Beauty & Makeup": { en: "Beauty & Makeup", vi: "Làm đẹp & Trang điểm" },
  "Travel & Adventure": { en: "Travel & Adventure", vi: "Du lịch & Phiêu lưu" },
  "Food Blogger": { en: "Food Blogger", vi: "Blogger Ẩm thực" },
  "Art & Illustration": { en: "Art & Illustration", vi: "Nghệ thuật & Minh họa" },
  "Skincare & Self-Care": { en: "Skincare & Self-Care", vi: "Chăm sóc da & Bản thân" },
};

const InfluencerCard: React.FC<InfluencerCardProps> = ({
  influencer,
  isSelected,
  onSelect,
}) => {
  const { lang } = useContext(LanguageContext) ?? { lang: 'en' };
  const t = translations[lang];
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
            <p className="text-sm text-slate-600">{categoryTranslations[category]?.[lang] || category}</p>
          </div>
          <span className={`${sizeBgColor} ${sizeTextColor} text-xs px-2 py-1 rounded-md font-medium`}>
            {audienceSize}
          </span>
        </div>
        <div className="space-y-2 mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">{t.followers}</span>
            <span className="font-medium text-slate-800">{formattedFollowers}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">{t.engagement}</span>
            <span className="font-medium text-slate-800">{engagement}%</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-slate-500">{t.avgCtr}</span>
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
              {t.lastCampaign} {lastCampaign} {lastCampaign === 1 ? t.day : t.days} {t.ago}
            </span>
            <span className="text-xs font-medium text-blue-600">{t.viewDetails}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;
