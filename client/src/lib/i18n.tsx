import React, { createContext, useContext, useState, ReactNode } from "react";

const translations = {
  en: {
    navFeatures: "Features",
    navJoinWaitlist: "Join Waitlist",
    navFeaturesMobile: "Features",
    navJoinWaitlistMobile: "Join Waitlist",
    srOpenMenu: "Open main menu",
    heroTitle1: "Less Searching,",
    heroTitle2: "More Creating.",
    heroSubtitle: "Spend less time finding brand deals and more time doing what you love. Our AI platform connects you with the best Vietnamese brands, effortlessly.",
    heroCTA: "Join Our Waitlist",
    heroCTASubtext: "Be the first to know!",
    problemTitle: "Focus On Your Art, Not the Admin",
    problemSubtitle: "Tired of endless searching for brand partnerships? Infusion uses AI to bring relevant Vietnamese SMBs directly to you. Sign up, let our AI match you, review opportunities, and get back to creating!",
    featuresTitle: "The AI-Powered Advantage",
    featuresSubtitle: "We're your creative partner, powered by smart AI to save you time.",
    feature1Title: "Smart AI Matching",
    feature1Desc: "Our AI connects you with aligned Vietnamese brands, saving search time.",
    feature2Title: "AI Video Creation Tools",
    feature2Desc: "Generate draft marketing videos from your NIL, speeding up production.",
    feature3Title: "More Time for Passion",
    feature3Desc: "Automate the grind, free your time to create and inspire!",
    ctaTitle: "Ready to Unlock Your Creative Potential?",
    ctaSubtitle: "Be among the first to experience the future of influencer marketing in Vietnam. Sign up for exclusive early access!",
    srEmailAddress: "Email address",
    placeholderEmail: "Enter your email",
    ctaButton: "Join Waitlist",
    ctaPrivacy: "We respect your privacy. No spam, ever.",
    footerRights: "© 2025 Infusion. All rights reserved. Celebrating Vietnamese Creativity!",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
  },
  vn: {
    navFeatures: "Tính Năng",
    navJoinWaitlist: "Tham Gia Ngay",
    navFeaturesMobile: "Tính Năng",
    navJoinWaitlistMobile: "Tham Gia Ngay",
    srOpenMenu: "Mở menu chính",
    heroTitle1: "Ít Tìm Kiếm Hơn,",
    heroTitle2: "Sáng Tạo Nhiều Hơn.",
    heroSubtitle: "Dành ít thời gian hơn để tìm kiếm hợp đồng thương hiệu và có nhiều thời gian hơn để làm những gì bạn yêu thích. Nền tảng AI của chúng tôi kết nối bạn với các thương hiệu Việt Nam tốt nhất một cách dễ dàng.",
    heroCTA: "Tham Gia Danh Sách Chờ",
    heroCTASubtext: "Hãy là người đầu tiên biết!",
    problemTitle: "Tập Trung Sáng Tạo, Đừng Lo Quản Lý",
    problemSubtitle: "Mệt mỏi với việc tìm kiếm đối tác thương hiệu? Infusion dùng AI để đưa các SMB Việt Nam phù hợp đến với bạn. Đăng ký, để AI tìm đối tác, xem cơ hội và quay lại sáng tạo!",
    featuresTitle: "Lợi Thế Từ AI",
    featuresSubtitle: "Chúng tôi là đối tác sáng tạo của bạn, được hỗ trợ bởi AI thông minh để tiết kiệm thời gian cho bạn.",
    feature1Title: "Kết Nối AI Thông Minh",
    feature1Desc: "AI của chúng tôi kết nối bạn với các thương hiệu Việt phù hợp, tiết kiệm thời gian tìm kiếm.",
    feature2Title: "Công Cụ Tạo Video AI",
    feature2Desc: "Tạo video marketing nháp từ NIL của bạn, tăng tốc sản xuất.",
    feature3Title: "Thêm Thời Gian Cho Đam Mê",
    feature3Desc: "Tự động hóa công việc nhàm chán, giải phóng thời gian để bạn sáng tạo và truyền cảm hứng!",
    ctaTitle: "Sẵn Sàng Khai Phá Tiềm Năng Sáng Tạo?",
    ctaSubtitle: "Hãy là một trong những người đầu tiên trải nghiệm tương lai của tiếp thị người ảnh hưởng tại Việt Nam. Đăng ký để nhận quyền truy cập sớm!",
    srEmailAddress: "Địa chỉ email",
    placeholderEmail: "Nhập email của bạn",
    ctaButton: "Tham Gia Ngay",
    ctaPrivacy: "Chúng tôi tôn trọng quyền riêng tư của bạn. Không bao giờ spam.",
    footerRights: "© 2025 Infusion. Bảo lưu mọi quyền. Tôn vinh Sáng tạo Việt!",
    footerPrivacy: "Chính sách Bảo mật",
    footerTerms: "Điều khoản Dịch vụ",
  }
};

type Lang = "en" | "vn";

interface I18nContextProps {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: keyof typeof translations["en"]) => string;
}

const I18nContext = createContext<I18nContextProps | undefined>(undefined);

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (key: keyof typeof translations["en"]) => translations[lang][key] || key;
  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
