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
  const keys = key.split('.');
  let value: any = translations;

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }

  return typeof value === 'string' ? value : key;
}
