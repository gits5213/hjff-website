'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Locale, Translations, getNestedTranslation, defaultLocale } from '@/lib/i18n';
import enTranslations from '@/locales/en.json';
import bnTranslations from '@/locales/bn.json';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Locale, Translations> = {
  en: enTranslations,
  bn: bnTranslations,
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client side
    setMounted(true);
    // Get saved locale from localStorage
    const savedLocale = localStorage.getItem('locale') as Locale | null;
    if (savedLocale && (savedLocale === 'en' || savedLocale === 'bn')) {
      setLocaleState(savedLocale);
    } else {
      // Try to detect browser language
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'bn') {
        setLocaleState('bn');
      }
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      localStorage.setItem('locale', newLocale);
      // Update HTML lang attribute
      document.documentElement.lang = newLocale;
    }
  };

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const t = (key: string): string => {
    const translation = translations[locale];
    return getNestedTranslation(translation, key);
  };

  // Provide default values during SSR/initial render
  const contextValue: LanguageContextType = {
    locale,
    setLocale,
    t,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
