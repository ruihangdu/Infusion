import React, { useContext } from "react";

export const LanguageContext = React.createContext<{ lang: 'en' | 'vi'; setLang: (lang: 'en' | 'vi') => void } | undefined>(undefined);

const CampaignHeader: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('LanguageContext not found. Make sure your app is wrapped in LanguageContext.Provider.');
  const { lang, setLang } = context;

  return (
    <nav className="bg-white shadow-sm w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <a href="/" className="text-2xl font-bold text-indigo-600">Infusion</a>
          <div className="flex items-center space-x-1 border-l pl-3 ml-3">
            <button
              className={`lang-button text-sm font-medium${lang === 'en' ? ' active bg-indigo-600 text-white' : ''}`}
              style={{ padding: '0.25rem 0.5rem', borderRadius: '0.375rem', transition: 'background-color 0.2s ease-in-out' }}
              onClick={() => setLang('en')}
              type="button"
            >
              EN
            </button>
            <span className="text-gray-300">|</span>
            <button
              className={`lang-button text-sm font-medium${lang === 'vi' ? ' active bg-indigo-600 text-white' : ''}`}
              style={{ padding: '0.25rem 0.5rem', borderRadius: '0.375rem', transition: 'background-color 0.2s ease-in-out' }}
              onClick={() => setLang('vi')}
              type="button"
            >
              VN
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CampaignHeader;
