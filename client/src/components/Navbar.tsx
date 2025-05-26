import React from "react";
import { useI18n } from "@/lib/i18n";

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useI18n();
  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0">
              <span className="text-2xl font-bold text-indigo-600">Infusion</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#features" className="text-gray-600 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">{t("navFeatures")}</a>
            <a href="/waitlist" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md text-sm font-medium cta-button">{t("navJoinWaitlist")}</a>
            <div className="flex items-center space-x-1 border-l pl-3 ml-3">
              <button onClick={() => setLang("en")}
                className={`lang-button text-sm font-medium${lang === "en" ? " active" : ""}`}>EN</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang("vn")}
                className={`lang-button text-sm font-medium${lang === "vn" ? " active" : ""}`}>VN</button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button can be implemented if needed */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
