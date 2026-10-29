import { es } from './es';
import { en } from './en';
import type { Translations } from './es';

export const translations: Record<string, Translations> = { es, en };

export function t(lang: string): Translations {
  return translations[lang] ?? translations['es'];
}

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'es';
}

export function getRouteForLang(lang: string, currentPath: string): string {
  if (lang === 'en') {
    return currentPath.startsWith('/en') ? currentPath : `/en${currentPath}`;
  }
  return currentPath.startsWith('/en') ? currentPath.replace(/^\/en/, '') || '/' : currentPath;
}
