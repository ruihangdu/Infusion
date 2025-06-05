import React, { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSearch } from "lucide-react";

const translations = {
  en: {
    navBenefits: "Benefits",
    navGetStarted: "Get Started",
    heroTitle1: "Launch Video Campaigns",
    heroTitle2: "Faster with AI.",
    heroSubtitle:
      "Rapidly create diverse video ads for your Vietnamese audience. Infusion combines licensed Influencer NIL with AI video generation to accelerate your marketing.",
    heroCTA: "Boost Your Campaign",
    problemSolutionTitle: "Tired of Slow, Costly Video Production?",
    problemSolutionSubtitle:
      "Traditional marketing campaigns take time and resources. Infusion empowers your brand to generate multiple AI-powered video creatives using authentic influencer NIL, enabling quick testing and optimization for the Vietnamese market.",
    benefitsTitle: "Unlock Marketing Agility for Your Brand",
    benefitsSubtitle:
      "Infusion provides the tools to create impactful video campaigns faster and more efficiently.",
    benefit1Title: "Rapid Video Iteration",
    benefit1Desc:
      "Generate multiple video ad variations in minutes, not weeks. Test different messages and visuals quickly.",
    benefit2Title: "Cost-Effective Campaigns",
    benefit2Desc:
      "Reduce video production costs significantly by leveraging AI and licensed influencer NIL.",
    benefit3Title: "Authentic Influencer Appeal",
    benefit3Desc:
      "Connect with your target audience using the trusted faces and styles of Vietnamese micro-influencers.",
    ctaTitle: "Revolutionize Your Video Marketing.",
    ctaSubtitle:
      "Join Infusion's early access program and be among the first brands in Vietnam to leverage AI and influencer NIL for lightning-fast campaign creation.",
    ctaButton: "Request Early Access",
    ctaPrivacy: "Supercharge your marketing. Limited spots available.",
    footerRights:
      "© 2025 Infusion. All rights reserved. AI-Powered Marketing for Vietnam.",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms of Service",
    placeholderEmail: "Enter your company email",
    campaignBriefPlaceholder:
      "Describe your campaign, brand values, target audience, and goals...",
    campaignBriefLabel: "Campaign Brief",
  },
  vn: {
    navBenefits: "Lợi Ích",
    navGetStarted: "Bắt Đầu",
    heroTitle1: "Triển Khai Chiến Dịch Video",
    heroTitle2: "Nhanh Hơn Với AI.",
    heroSubtitle:
      "Nhanh chóng tạo các quảng cáo video đa dạng cho khán giả Việt Nam. Infusion kết hợp NIL Người Ảnh Hưởng được cấp phép với công nghệ tạo video AI để tăng tốc hoạt động tiếp thị của bạn.",
    heroCTA: "Thúc Đẩy Chiến Dịch",
    problemSolutionTitle:
      "Mệt Mỏi Với Việc Sản Xuất Video Chậm Chạp, Tốn Kém?",
    problemSolutionSubtitle:
      "Các chiến dịch tiếp thị truyền thống tốn nhiều thời gian và nguồn lực. Infusion trao quyền cho thương hiệu của bạn tạo ra nhiều mẫu quảng cáo video bằng AI sử dụng NIL người ảnh hưởng đích thực, cho phép thử nghiệm và tối ưu hóa nhanh chóng cho thị trường Việt Nam.",
    benefitsTitle: "Mở Khóa Sự Linh Hoạt Trong Tiếp Thị Cho Thương Hiệu Của Bạn",
    benefitsSubtitle:
      "Infusion cung cấp công cụ để tạo các chiến dịch video hiệu quả nhanh hơn và hiệu quả hơn.",
    benefit1Title: "Lặp Lại Video Nhanh Chóng",
    benefit1Desc:
      "Tạo nhiều biến thể quảng cáo video trong vài phút, không phải vài tuần. Thử nghiệm các thông điệp và hình ảnh khác nhau một cách nhanh chóng.",
    benefit2Title: "Chiến Dịch Tiết Kiệm Chi Phí",
    benefit2Desc:
      "Giảm đáng kể chi phí sản xuất video bằng cách tận dụng AI và NIL người ảnh hưởng được cấp phép.",
    benefit3Title: "Sức Hút Đích Thực Từ Người Ảnh Hưởng",
    benefit3Desc:
      "Kết nối với khán giả mục tiêu của bạn bằng cách sử dụng gương mặt và phong cách đáng tin cậy của các micro-influencer Việt Nam.",
    ctaTitle: "Cách Mạng Hóa Tiếp Thị Video Của Bạn.",
    ctaSubtitle:
      "Tham gia chương trình truy cập sớm của Infusion và là một trong những thương hiệu đầu tiên tại Việt Nam tận dụng AI và NIL người ảnh hưởng để tạo chiến dịch nhanh như chớp.",
    ctaButton: "Yêu Cầu Truy Cập Sớm",
    ctaPrivacy: "Tăng cường sức mạnh tiếp thị của bạn. Số lượng có hạn.",
    footerRights:
      "© 2025 Infusion. Bảo lưu mọi quyền. Tiếp Thị Bằng AI Cho Việt Nam.",
    footerPrivacy: "Chính sách Bảo mật",
    footerTerms: "Điều khoản Dịch vụ",
    placeholderEmail: "Nhập email công ty của bạn",
    campaignBriefPlaceholder:
      "Mô tả chiến dịch, giá trị thương hiệu, đối tượng mục tiêu và mục tiêu...",
    campaignBriefLabel: "Tóm tắt chiến dịch",
  },
};

const featureIcons = [
  // SVGs for features
  (
    <svg
      className="feature-icon text-indigo-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245M9.53 16.122A3 3 0 0012 13.5m3.879 1.121c1.282-.607 1.567-.968 1.293-1.702A3 3 0 0012 13.5M9.53 16.122A3 3 0 0012 13.5m0-9A3 3 0 009.53 1.122A3 3 0 006.23 4.667m6.23-3.545A3 3 0 0012 6.75c2.166 0 4-1.734 4-3.879A3 3 0 0012 1.5z"
      />
    </svg>
  ),
  (
    <svg
      className="feature-icon text-violet-600"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m00S5.625 7.5 9 7.5s4.5-1.5 4.5-1.5S12.375 3 9 3s-4.5 1.5-4.5 1.5m0 9h.008v.008H7.5v-.008zm0 0H5.625m0 0H3.75m0 0S5.625 12 9 12s4.5-1.5 4.5-1.5S12.375 9 9 9s-4.5 1.5-4.5 1.5M3 12h18M3 12a2.25 2.25 0 00-2.25 2.25v.75A2.25 2.25 0 003 17.25h18a2.25 2.25 0 002.25-2.25v-.75A2.25 2.25 0 0018 12H3z"
      />
    </svg>
  ),
  (
    <svg
      className="feature-icon text-pink-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM15.75 8.25H8.25M15.75 12H8.25m0 0l3.38-3.38M8.25 12l3.38 3.38"
      />
    </svg>
  ),
];

const benefitKeys = [
  ["benefit1Title", "benefit1Desc"],
  ["benefit2Title", "benefit2Desc"],
  ["benefit3Title", "benefit3Desc"],
];

const Landing: React.FC = () => {
  const [lang, setLang] = useState<"en" | "vn">("en");
  const [campaignBrief, setCampaignBrief] = useState("");
  const [email, setEmail] = useState("");
  const [, navigate] = useLocation();

  const t = translations[lang];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (campaignBrief.trim()) {
      // Store the brief in session storage
      sessionStorage.setItem("campaignBrief", campaignBrief);
      // Navigate to the influencer selection page
      navigate("/influencers");
    }
  };

  return (
    <div className="bg-white text-gray-800 font-['Inter',sans-serif]">
      {/* Navbar */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold text-indigo-700">Infusion</span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="#benefits"
                className="text-gray-600 hover:text-indigo-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t.navBenefits}
              </a>
              <a
                href="#cta"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium cta-button"
              >
                {t.navGetStarted}
              </a>
              <div className="flex items-center space-x-1 border-l pl-3 ml-3">
                <button
                  className={`lang-button text-sm font-medium ${
                    lang === "en" ? "active bg-indigo-700 text-white" : ""
                  }`}
                  onClick={() => setLang("en")}
                >
                  EN
                </button>
                <span className="text-gray-300">|</span>
                <button
                  className={`lang-button text-sm font-medium ${
                    lang === "vn" ? "active bg-indigo-700 text-white" : ""
                  }`}
                  onClick={() => setLang("vn")}
                >
                  VN
                </button>
              </div>
            </div>
            {/* Mobile menu button (not functional for brevity) */}
            <div className="-mr-2 flex md:hidden">
              <button
                type="button"
                className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero-bg pt-24 pb-16 sm:pt-32 sm:pb-24" style={{ backgroundColor: "#E0E7FF" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="block text-gray-900">{t.heroTitle1}</span>
            <span
              className="block gradient-text"
              style={{
                background: "linear-gradient(to right, #4F46E5, #7C3AED)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {t.heroTitle2}
            </span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">{t.heroSubtitle}</p>
          <div className="mt-10">
            {/* Campaign Brief Textarea */}
            <div className="mb-6 max-w-xl mx-auto">
              <label
                htmlFor="campaignBrief"
                className="block text-sm font-medium text-gray-700 mb-2 text-left"
              >
                {t.campaignBriefLabel}
              </label>
              <textarea
                id="campaignBrief"
                rows={4}
                className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder={t.campaignBriefPlaceholder}
                value={campaignBrief}
                onChange={(e) => setCampaignBrief(e.target.value)}
              />
            </div>
            <a
              className="inline-block bg-indigo-600 text-white font-semibold py-3 px-8 rounded-lg text-lg hover:bg-indigo-700 cta-button shadow-lg"
              onClick={() => {
                // Optionally store the campaignBrief if needed, or just navigate
                navigate("/influencers");
              }}
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer" }}
            >
              {t.heroCTA}
            </a>
          </div>
        </div>
      </header>

      {/* Problem/Solution */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">{t.problemSolutionTitle}</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">{t.problemSolutionSubtitle}</p>
          </div>
          {/* <div className="flex justify-center">
            <img
              src="https://placehold.co/600x350/C7D2FE/4338CA?text=AI+Video+Campaign+Automation"
              alt="AI Video Campaign Automation for Brands"
              className="rounded-lg shadow-xl aspect-video object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/600x350/A5B4FC/312E81?text=Fast+Marketing+Iterations";
              }}
            />
          </div> */}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              {t.benefitsTitle.split(" ").map((word, i) =>
                word === "Agility" || word === "Linh" || word === "Hoạt" ? (
                  <span
                    key={i}
                    className="gradient-text"
                    style={{
                      background: "linear-gradient(to right, #4F46E5, #7C3AED)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {word + " "}
                  </span>
                ) : (
                  word + " "
                )
              )}
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.benefitsSubtitle}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefitKeys.map(([titleKey, descKey], i) => (
              <div
                key={titleKey}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                {/* <div className="flex justify-center mb-4">{featureIcons[i]}</div> */}
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {t[titleKey as keyof typeof t]}
                </h3>
                <p className="text-gray-600 text-center text-sm">{t[descKey as keyof typeof t]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 sm:py-20 bg-indigo-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">{t.ctaTitle}</h2>
          <p className="mt-4 text-lg text-indigo-100">{t.ctaSubtitle}</p>
          <form className="mt-10 max-w-md mx-auto" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-4">
              <label htmlFor="email-address" className="sr-only">
                Company Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md border-gray-300 shadow-sm focus:border-indigo-500 sm:text-sm"
                placeholder={t.placeholderEmail}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="w-full sm:w-auto bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-md text-lg cta-button shadow-lg"
              >
                {t.ctaButton}
              </button>
            </div>
            <p className="mt-3 text-sm text-indigo-200">{t.ctaPrivacy}</p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-400">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">{t.footerRights}</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-gray-300">
                {t.footerPrivacy}
              </a>
              <a href="#" className="hover:text-gray-300">
                {t.footerTerms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;