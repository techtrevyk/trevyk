import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaConfig {
  title: string;
  description: string;
}

const ROUTE_META: Record<string, MetaConfig> = {
  '/': {
    title: 'TREVYK Technologies — Turning Vision Into Progress',
    description:
      'Trevyk Technologies is the parent company of Kiduart School ERP. We build B2B and B2C software — school products and custom IT services. Based in Noida, India.',
  },
  '/services': {
    title: 'Products & IT Services | TREVYK Technologies',
    description:
      'Kiduart School ERP plus custom software, web/mobile, cloud, design, advisory, and practical security — scoped honestly for B2B and B2C work.',
  },
  '/technology': {
    title: 'Technology & Architecture | TREVYK Technologies',
    description:
      'How Trevyk approaches modular software architecture, with Kiduart as the flagship product and clear security practices we actually ship.',
  },
  '/kiduart': {
    title: 'Kiduart School ERP | TREVYK Technologies',
    description:
      'Kiduart is Trevyk’s school ERP and school management system for Indian schools — admissions to parent updates. Explore modules here, then visit kiduart.com for demos.',
  },
  '/process': {
    title: 'How We Deliver | TREVYK Technologies',
    description:
      'A practical delivery process from discovery to launch — clear stages without invented SLAs or theatre.',
  },
  '/about': {
    title: 'About Trevyk | Parent Company of Kiduart',
    description:
      'Trevyk Technologies — Noida, India. Parent company of Kiduart. B2B services and B2C products with an honest claims policy.',
  },
  '/contact': {
    title: 'Contact Trevyk Technologies',
    description:
      'Contact Trevyk for Kiduart demos or custom IT work. Noida, India. We reply within one business day.',
  },
};

export const SEOManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = ROUTE_META[pathname] || ROUTE_META['/'];
    document.title = meta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', meta.description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', meta.title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', meta.description);
  }, [pathname]);

  return null;
};
