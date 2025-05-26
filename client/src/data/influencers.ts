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
    "Minh Ngọc", "Quang Đại", "Thu Trang", "Hải Triều", "Kim Ngân",
    "Hoàng Hiệp", "Thùy Dung", "Đức Phúc", "Quỳnh Anh", "Việt Hoàng",
    "Thanh Hằng", "Trung Kiên", "Hoài Thương", "Mạnh Cường", "Hà Mi",
    "Trọng Hiếu", "Lan Phương", "Minh Tuấn", "Ngọc Trinh", "Hoàng Sơn"
  ];

  const categories = [
    "Fashion & Lifestyle", "Streetwear & Culture", "Beauty & Wellness", "Vietnamese Food",
    "Active & Streetwear", "Travel Vietnam", "Sustainable Living", "Vietnamese Cuisine",
    "Contemporary Fashion", "Fitness & Health", "Luxury Lifestyle", "Vietnamese Culture",
    "Minimalist Style", "Hanoi Street Style", "Vietnamese Coffee", "Local Creators",
    "Tech Reviews", "Accessories & Jewelry", "Street Food", "Urban Vietnam"
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

  // --- Custom influencer profiles ---
  const customProfiles = [
    {
      name: "Hà Linh",
      category: "Beauty & Makeup",
      image: `/images/ha_linh.jpg`,
      platforms: ["Instagram", "TikTok"],
      audienceSize: "Macro",
      engagementRange: [4.5, 7.0],
      ctrRange: [5.5, 9.0],
      ctrColor: "bg-green-500"
    },
    {
      name: "Minh Tuấn",
      category: "Travel & Adventure",
      image: `/images/minh_tuan.jpg`,
      platforms: ["Instagram", "YouTube"],
      audienceSize: "Mega",
      engagementRange: [3.5, 6.0],
      ctrRange: [5.0, 8.0],
      ctrColor: "bg-green-500"
    },
    {
      name: "Ngọc Anh",
      category: "Fashion & Lifestyle",
      image: `/images/ngoc_anh.jpg`,
      platforms: ["Instagram", "TikTok"],
      audienceSize: "Mid-tier",
      engagementRange: [4.0, 7.0],
      ctrRange: [5.0, 8.0],
      ctrColor: "bg-yellow-500"
    },
    {
      name: "Đức Hải",
      category: "Food Blogger",
      image: `/images/duc_hai.jpg`,
      platforms: ["YouTube", "TikTok"],
      audienceSize: "Macro",
      engagementRange: [3.0, 6.0],
      ctrRange: [4.5, 7.0],
      ctrColor: "bg-orange-500"
    },
    {
      name: "Thảo Vy",
      category: "Fitness & Wellness",
      image: `/images/thao_vy.jpg`,
      platforms: ["Instagram", "YouTube"],
      audienceSize: "Mid-tier",
      engagementRange: [4.5, 7.0],
      ctrRange: [5.0, 8.0],
      ctrColor: "bg-green-500"
    },
    {
      name: "Lan Chi",
      category: "Art & Illustration",
      image: `/images/lan_chi.jpg`,
      platforms: ["Instagram", "Twitter"],
      audienceSize: "Micro",
      engagementRange: [4.0, 7.0],
      ctrRange: [4.5, 7.0],
      ctrColor: "bg-yellow-500"
    },
    {
      name: "Bích Ngọc",
      category: "Skincare & Self-Care",
      image: `/images/bich_ngoc.jpg`,
      platforms: ["Instagram", "TikTok"],
      audienceSize: "Mid-tier",
      engagementRange: [4.0, 7.0],
      ctrRange: [5.0, 8.0],
      ctrColor: "bg-green-500"
    }
  ];

  // Generate custom influencer objects
  const customInfluencers = customProfiles.map((profile, idx) => {
    const followers = getFollowerCount(profile.audienceSize as AudienceSize);
    const engagement = getRandomFloat(profile.engagementRange[0], profile.engagementRange[1], 1);
    const ctr = getRandomFloat(profile.ctrRange[0], profile.ctrRange[1], 1);
    return {
      id: idx + 1,
      name: profile.name,
      category: profile.category,
      followers,
      formattedFollowers: formatFollowerCount(followers),
      engagement,
      ctr,
      image: profile.image,
      platforms: profile.platforms as Platform[],
      platformColors: (profile.platforms as Platform[]).map(p => platformColors[p]),
      audienceSize: profile.audienceSize as AudienceSize,
      sizeBgColor: sizeBgColors[profile.audienceSize as AudienceSize],
      sizeTextColor: sizeTextColors[profile.audienceSize as AudienceSize],
      lastCampaign: getRandomInt(1, 10),
      ctrColor: profile.ctrColor
    };
  });

  // Generate the rest of the influencers
  const generated = Array.from({ length: 20 }, (_, index) => {
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

  return [...customInfluencers, ...generated];
};

export const influencers = generateInfluencerData();
