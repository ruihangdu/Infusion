import React from "react";
import { useI18n } from "@/lib/i18n";

const Footer: React.FC = () => {
  const { t } = useI18n();
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm" dangerouslySetInnerHTML={{ __html: t("footerRights") }} />
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">{t("footerPrivacy")}</a>
            <a href="#" className="hover:text-gray-300">{t("footerTerms")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
