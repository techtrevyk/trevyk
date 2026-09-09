/**
 * Site-wide SEO / URL config.
 * Set VITE_SITE_URL in .env for production (e.g. https://trevyk.com).
 */
export const SITE_URL = (import.meta.env.VITE_SITE_URL || 'https://trevyk.com').replace(/\/$/, '');

export const SITE_NAME = 'TREVYK Technologies';
export const SITE_TAGLINE = 'Turning Vision Into Progress.';
export const KIDUART_URL = 'https://kiduart.com';
export const KIDUART_ABOUT_URL = 'https://kiduart.com/about';

export const SITE_ROUTES = [
  '/',
  '/services',
  '/technology',
  '/kiduart',
  '/process',
  '/about',
  '/contact',
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
