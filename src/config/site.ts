/**
 * Site-wide SEO / URL config.
 * Set VITE_SITE_URL in .env for production (must match the live host, including www).
 * Example: https://www.trevyk.in
 */
const viteEnv = import.meta.env as { VITE_SITE_URL?: string } | undefined;
export const SITE_URL = (viteEnv?.VITE_SITE_URL || 'https://www.trevyk.in').replace(/\/$/, '');

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
  '/sitemap',
] as const;

export function absoluteUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${normalized}`;
}
