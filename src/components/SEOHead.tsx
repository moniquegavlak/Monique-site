import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../i18n';

export default function SEOHead() {
  const location = useLocation();
  const { lang } = useLanguage();

  useEffect(() => {
    const isCookies = location.pathname.startsWith('/cookies') || location.pathname.startsWith('/politica-de-cookies');
    const isGallery = location.pathname.startsWith('/gallery');

    let title = 'Monique Gavlak Design | Visual Strategist & Brand Manager';
    let description = 'Visual Strategist & Premium Brand Manager - Identidade visual de alto padrão, branding exclusivo e estratégias de posicionamento de marca.';
    let canonical = 'https://www.moniquegavlak.com/';

    if (isCookies) {
      title = lang === 'pt' 
        ? 'Política de Cookies | Monique Gavlak Design' 
        : 'Cookie Policy | Monique Gavlak Design';
      description = lang === 'pt'
        ? 'Política de Cookies da Monique Gavlak Design. Saiba como utilizamos cookies para personalizar sua experiência, em conformidade com a LGPD e GDPR.'
        : 'Cookie Policy for Monique Gavlak Design Studio. Learn how we use cookies to provide a refined browsing experience in compliance with LGPD and GDPR.';
      canonical = 'https://www.moniquegavlak.com/cookies';
    } else if (isGallery) {
      title = lang === 'pt'
        ? 'Galeria de Projetos | Monique Gavlak Design'
        : 'Project Gallery | Monique Gavlak Design';
      description = lang === 'pt'
        ? 'Conheça o portfólio completo de identidade visual, direção de arte e branding de alto padrão por Monique Gavlak.'
        : 'Explore the full portfolio of high-end visual identities, art direction, and branding by Monique Gavlak.';
      canonical = 'https://www.moniquegavlak.com/gallery';
    }

    // Update title
    document.title = title;

    // Helper to update or create meta tags
    const updateMeta = (selector: string, attribute: string, value: string) => {
      let element = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
      if (!element) {
        element = document.createElement(selector.startsWith('link') ? 'link' : 'meta');
        if (selector.includes('name=')) {
          const name = selector.match(/name="([^"]+)"/)?.[1];
          if (name) (element as HTMLMetaElement).name = name;
        } else if (selector.includes('property=')) {
          const prop = selector.match(/property="([^"]+)"/)?.[1];
          if (prop) (element as HTMLMetaElement).setAttribute('property', prop);
        } else if (selector.includes('rel=')) {
          const rel = selector.match(/rel="([^"]+)"/)?.[1];
          if (rel) (element as HTMLLinkElement).rel = rel;
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    updateMeta('meta[name="description"]', 'content', description);
    updateMeta('meta[property="og:title"]', 'content', title);
    updateMeta('meta[property="og:description"]', 'content', description);
    updateMeta('meta[property="og:url"]', 'content', canonical);
    updateMeta('link[rel="canonical"]', 'href', canonical);
    updateMeta('meta[name="twitter:title"]', 'content', title);
    updateMeta('meta[name="twitter:description"]', 'content', description);
    updateMeta('meta[name="twitter:url"]', 'content', canonical);

    // Dynamic JSON-LD structured data for Cookies page
    const existingDynamicScript = document.getElementById('dynamic-jsonld');
    if (existingDynamicScript) {
      existingDynamicScript.remove();
    }

    const script = document.createElement('script');
    script.id = 'dynamic-jsonld';
    script.type = 'application/ld+json';

    if (isCookies) {
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': title,
        'url': 'https://www.moniquegavlak.com/cookies',
        'description': description,
        'inLanguage': lang === 'pt' ? 'pt-BR' : 'en-US',
        'isPartOf': {
          '@type': 'WebSite',
          'name': 'Monique Gavlak Design',
          'url': 'https://www.moniquegavlak.com'
        },
        'breadcrumb': {
          '@type': 'BreadcrumbList',
          'itemListElement': [
            {
              '@type': 'ListItem',
              'position': 1,
              'name': 'Home',
              'item': 'https://www.moniquegavlak.com/'
            },
            {
              '@type': 'ListItem',
              'position': 2,
              'name': lang === 'pt' ? 'Política de Cookies' : 'Cookie Policy',
              'item': 'https://www.moniquegavlak.com/cookies'
            }
          ]
        }
      });
    } else {
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        'name': title,
        'url': canonical,
        'description': description,
        'isPartOf': {
          '@type': 'WebSite',
          'name': 'Monique Gavlak Design',
          'url': 'https://www.moniquegavlak.com'
        }
      });
    }
    document.head.appendChild(script);

    return () => {
      const el = document.getElementById('dynamic-jsonld');
      if (el) el.remove();
    };
  }, [location.pathname, lang]);

  return null;
}
