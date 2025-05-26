import React, { useState } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserSearch } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const Landing: React.FC = () => {
  const [campaignBrief, setCampaignBrief] = useState("");
  const [, navigate] = useLocation();
  const { t } = useI18n();

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
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Remove header/footer, use global ones */}
      <main className="flex-grow flex items-center justify-center p-4">
        <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-primary p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">
              {t("heroTitle1")}{" "}
              <span className="gradient-text">{t("heroTitle2")}</span>
            </h2>
            <p className="text-blue-100">{t("heroSubtitle")}</p>
          </div>
          <div className="p-8">
            <p className="text-slate-600 mb-6">{t("problemSubtitle")}</p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="campaignBrief"
                  className="block text-sm font-medium text-slate-700 mb-2"
                >
                  {t("problemTitle")}
                </label>
                <textarea
                  id="campaignBrief"
                  rows={5}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder={t("placeholderEmail")}
                  value={campaignBrief}
                  onChange={(e) => setCampaignBrief(e.target.value)}
                  required
                />
              </div>
              <div className="flex items-center">
                <Button type="submit" className="w-full py-2">
                  {t("ctaButton")}
                </Button>
              </div>
            </form>
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">
                {t("featuresTitle")}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">
                    {t("feature1Title")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("feature1Desc")}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">
                    {t("feature2Title")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("feature2Desc")}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-slate-800">
                    {t("feature3Title")}
                  </h4>
                  <p className="text-sm text-slate-600">
                    {t("feature3Desc")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Landing;