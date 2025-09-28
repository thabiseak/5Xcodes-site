'use client';

import Script from 'next/script';

interface StructuredDataProps {
  type: 'organization' | 'website' | 'service' | 'product' | 'article' | 'breadcrumb';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "5Xcodes",
          "url": "https://5xcodes.com",
          "logo": "https://5xcodes.com/images/5Xcodes.png",
          "description": "Leading software development company specializing in custom solutions, AI integration, cloud technologies, and digital transformation.",
          "foundingDate": "2020",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Innovation Street",
            "addressLocality": "San Francisco",
            "addressRegion": "CA",
            "postalCode": "94105",
            "addressCountry": "US"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+1-555-123-4567",
            "contactType": "customer service",
            "email": "hello@5xcodes.com"
          },
          "sameAs": [
            "https://linkedin.com/company/5xcodes",
            "https://twitter.com/5xcodes",
            "https://github.com/5xcodes",
            "https://youtube.com/@5xcodes"
          ],
          "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": 37.7749,
              "longitude": -122.4194
            },
            "geoRadius": "1000000"
          }
        };

      case 'website':
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "5Xcodes",
          "url": "https://5xcodes.com",
          "description": "Accelerate your digital future 5X faster with cutting-edge software solutions, AI integration, and cloud technologies.",
          "publisher": {
            "@type": "Organization",
            "name": "5Xcodes"
          },
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://5xcodes.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        };

      case 'service':
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Organization",
            "name": "5Xcodes",
            "url": "https://5xcodes.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "United States"
          },
          "serviceType": data.serviceType,
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        };

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": data.name,
          "description": data.description,
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Web",
          "offers": {
            "@type": "Offer",
            "price": data.price,
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "500"
          }
        };

      case 'article':
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "image": data.image,
          "author": {
            "@type": "Organization",
            "name": "5Xcodes"
          },
          "publisher": {
            "@type": "Organization",
            "name": "5Xcodes",
            "logo": {
              "@type": "ImageObject",
              "url": "https://5xcodes.com/images/5Xcodes.png"
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified
        };

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data.items.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          }))
        };

      default:
        return {};
    }
  };

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  );
}
