import { Influencer, Platform, AudienceSize } from "@shared/schema";

const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloat = (min: number, max: number, decimals: number = 1): number => {
  const value = Math.random() * (max - min) + min;
  return parseFloat(value.toFixed(decimals));
};

const generateInfluencerData = (): Influencer[] => {
  const names = [
    "Sophia J.", "Alex R.", "Mia C.", "Jasmine T.", "Marcus J.",
    "Daniel P.", "Olivia G.", "Noah C.", "Emma S.", "Liam T.",
    "Ava B.", "Mason L.", "Zoe K.", "Ethan W.", "Lily R.",
    "Lucas H.", "Harper M.", "Jackson P.", "Aria C.", "Elijah D."
  ];

  const categories = [
    "Fashion & Lifestyle", "Streetwear & Culture", "Beauty & Wellness", "Summer Fashion",
    "Active & Streetwear", "Fashion & Travel", "Sustainable Fashion", "Men's Lifestyle",
    "Women's Fashion", "Fitness & Health", "Luxury Fashion", "Vintage Style",
    "Minimalist Style", "Athleisure", "Festival Fashion", "Eco-Friendly Fashion",
    "Fashion Tech", "Accessories & Jewelry", "Street Style", "Urban Fashion"
  ];

  const platforms: Platform[] = ["Instagram", "TikTok", "YouTube", "Spotify", "Twitter"];
  const audienceSizes: AudienceSize[] = ["Micro", "Mid-tier", "Macro", "Mega"];

  const platformColors: Record<Platform, string> = {
    "Instagram": "bg-blue-500",
    "TikTok": "bg-rose-500", 
    "YouTube": "bg-red-500",
    "Spotify": "bg-green-500",
    "Twitter": "bg-sky-500"
  };

  const sizeBgColors: Record<AudienceSize, string> = {
    "Micro": "bg-green-50",
    "Mid-tier": "bg-indigo-50",
    "Macro": "bg-orange-50",
    "Mega": "bg-purple-50"
  };

  const sizeTextColors: Record<AudienceSize, string> = {
    "Micro": "text-green-700",
    "Mid-tier": "text-indigo-700",
    "Macro": "text-orange-700",
    "Mega": "text-purple-700"
  };

  const images = [
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=764&q=80",
    "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1536766768598-e09213fdcf22?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1488161628813-04466f872be2?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1464863979621-258859e62245?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
  ];

  const getFollowerCount = (size: AudienceSize): number => {
    switch (size) {
      case "Micro": return getRandomInt(10, 50) * 1000;
      case "Mid-tier": return getRandomInt(50, 500) * 1000;
      case "Macro": return getRandomInt(500, 1000) * 1000;
      case "Mega": return getRandomInt(1000, 5000) * 1000;
    }
  };

  const formatFollowerCount = (count: number): string => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    } else {
      return (count / 1000).toFixed(1) + 'k';
    }
  };

  return Array.from({ length: 20 }, (_, index) => {
    const platformCount = getRandomInt(1, 2);
    const selectedPlatforms: Platform[] = [];
    
    while (selectedPlatforms.length < platformCount) {
      const platform = platforms[getRandomInt(0, platforms.length - 1)];
      if (!selectedPlatforms.includes(platform)) {
        selectedPlatforms.push(platform);
      }
    }

    const audienceSize = audienceSizes[
      index < 8 
        ? index % audienceSizes.length 
        : getRandomInt(0, audienceSizes.length - 1)
    ];
    
    const followers = getFollowerCount(audienceSize);
    const engagement = getRandomFloat(2.5, 6.5, 1);
    const ctr = getRandomFloat(4.5, 9.5, 1);
    
    return {
      id: index + 1,
      name: names[index],
      category: categories[index],
      followers,
      formattedFollowers: formatFollowerCount(followers),
      engagement,
      ctr,
      image: images[index],
      platforms: selectedPlatforms,
      platformColors: selectedPlatforms.map(p => platformColors[p]),
      audienceSize,
      sizeBgColor: sizeBgColors[audienceSize],
      sizeTextColor: sizeTextColors[audienceSize],
      lastCampaign: getRandomInt(1, 30),
      ctrColor: ctr >= 7 ? "bg-green-500" : ctr >= 5.5 ? "bg-yellow-500" : "bg-orange-500"
    };
  });
};

export const influencers = generateInfluencerData();
