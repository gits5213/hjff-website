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
    if (typeof window === 'undefined') return;
    
    setMounted(true);
    // Get saved locale from localStorage
    try {
      const savedLocale = localStorage.getItem('locale') as Locale | null;
      if (savedLocale && (savedLocale === 'en' || savedLocale === 'bn')) {
        setLocaleState(savedLocale);
        return;
      }
    } catch (error) {
      console.warn('Error reading locale from localStorage:', error);
    }
    
    // Try to detect browser language
    try {
      const browserLang = navigator.language.split('-')[0];
      if (browserLang === 'bn') {
        setLocaleState('bn');
      }
    } catch (error) {
      console.warn('Error detecting browser language:', error);
    }
  }, []);

  const setLocale = (newLocale: Locale) => {
    if (newLocale !== 'en' && newLocale !== 'bn') {
      console.warn(`Invalid locale: ${newLocale}, using default`);
      newLocale = defaultLocale;
    }
    setLocaleState(newLocale);
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('locale', newLocale);
        // Update HTML lang attribute
        if (document && document.documentElement) {
          document.documentElement.lang = newLocale;
        }
      } catch (error) {
        console.warn('Error saving locale:', error);
      }
    }
  };

  useEffect(() => {
    if (mounted && typeof window !== 'undefined') {
      document.documentElement.lang = locale;
    }
  }, [locale, mounted]);

  const t = (key: string): string => {
    try {
      const translation = translations[locale] || translations[defaultLocale];
      if (!translation) {
        console.error('Translations not available');
        return key;
      }
      return getNestedTranslation(translation, key);
    } catch (error) {
      console.error(`Translation error for key "${key}":`, error);
      return key;
    }
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
