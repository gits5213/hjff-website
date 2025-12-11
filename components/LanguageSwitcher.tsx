'use client';

import { useLanguage } from './LanguageProvider';
import { Globe } from 'lucide-react';
import { Locale } from '@/lib/i18n';

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  const languages: { code: Locale; label: string; native: string }[] = [
    { code: 'en', label: 'English', native: 'English' },
    { code: 'bn', label: 'Bengali', native: 'বাংলা' },
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center space-x-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-neutral-100"
        aria-label="Change language"
      >
        <Globe className="w-5 h-5" />
        <span className="hidden sm:inline font-medium">
          {languages.find((lang) => lang.code === locale)?.native || 'EN'}
        </span>
      </button>

      {/* Dropdown Menu */}
      <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-neutral-200 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLocale(lang.code)}
            className={`w-full text-left px-4 py-2 text-sm transition-colors duration-200 ${
              locale === lang.code
                ? 'bg-primary-50 text-primary-600 font-semibold'
                : 'text-neutral-700 hover:bg-neutral-50'
            }`}
          >
            <div className="flex items-center justify-between">
              <span>{lang.native}</span>
              <span className="text-xs text-neutral-500">{lang.label}</span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
