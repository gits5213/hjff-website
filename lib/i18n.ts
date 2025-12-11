export type Locale = 'en' | 'bn';

export interface Translations {
  [key: string]: string | Translations;
}

export const locales: Locale[] = ['en', 'bn'];
export const defaultLocale: Locale = 'en';

export function getNestedTranslation(
  translations: Translations,
  key: string
): string {
  try {
    const keys = key.split('.');
    let value: any = translations;

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        console.warn(`Translation key not found: ${key}`);
        return key; // Return key if translation not found
      }
    }

    if (typeof value === 'string' && value.length > 0) {
      return value;
    }
    return key;
  } catch (error) {
    console.error(`Error getting translation for key "${key}":`, error);
    return key;
  }
}
