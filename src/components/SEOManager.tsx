import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface MetaConfig {
  title: string;
  description: string;
}

const ROUTE_META: Record<string, MetaConfig> = {
  '/': {
    title: 'TREVYK Technologies — Turning Vision Into Progress',
    description: 'Trevyk Technologies builds scalable enterprise IT services, high-performance distributed systems, and our flagship school ERP platform Kiduart. Turning Vision Into Progress.',
  },
  '/services': {
    title: 'Enterprise IT & Cloud Services | TREVYK Technologies',
    description: 'Explore Trevyk’s 8 core enterprise engineering capabilities: Custom Software Development, Cloud DevOps, AI/ML Automation, Kiduart ERP, Cybersecurity, and UI/UX Systems.',
  },
  '/technology': {
    title: 'Capability Atlas & Tech Stack | TREVYK Technologies',
    description: 'Discover the 45+ enterprise frameworks, distributed databases, cloud protocols, and zero-trust security standards powering Trevyk’s high-throughput architectures.',
  },
  '/kiduart': {
    title: 'Kiduart School ERP — Intelligent Campus OS | TREVYK Technologies',
    description: 'Kiduart unifies 12 campus domains: admissions, biometric attendance, fees & finance, live GPS bus fleet, and predictive AI telemetry for educational institutions.',
  },
  '/process': {
    title: 'Engineering Methodology & 5-Stage Process | TREVYK Technologies',
    description: 'Deterministic engineering from day zero to scale: Architecture Discovery, Distributed Blueprinting, High-Velocity Sprints, Zero-Downtime Releases, and 24/7 SRE Observability.',
  },
  '/about': {
    title: 'About Us & Engineering Culture | TREVYK Technologies',
    description: 'A bond of trust, a promise of support, a partnership for progress. Discover Trevyk Technologies’ mission, culture, Pune engineering HQ, and 5-cube architecture philosophy.',
  },
  '/contact': {
    title: 'Contact & Technical Consultation | TREVYK Technologies',
    description: 'Schedule an architectural discovery session or request a guided Kiduart campus trial sandbox with Trevyk Technologies. Direct architect review within 24 hours.',
  },
};

export const SEOManager: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Determine meta configuration for the active route
    const meta = ROUTE_META[pathname] || ROUTE_META['/'];

    // Update document title
    document.title = meta.title;

    // Update meta description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', meta.description);
    }

    // Update OpenGraph Title & Description
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', meta.title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', meta.description);
    }

    // Update Twitter Title & Description
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', meta.title);
    }

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) {
      twitterDesc.setAttribute('content', meta.description);
    }
  }, [pathname]);

  return null;
};
