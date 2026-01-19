import { Helmet } from 'react-helmet-async';
import logoIcon from 'figma:asset/07514b7ed4710815354d8c9fd9af3bb0e42bc000.png';
import previewImage from 'figma:asset/e664a40c37f3955007e1a959d4c7e50e8fdf0144.png';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = 'RYN Solutions - Proven Business Intelligence Solutions That Drive Revenue Growth',
  description = 'RYN Solutions provides industry-focused data intelligence, analytics and research services to enhance value for African businesses navigating the digital economy.',
  image = previewImage,
  url = 'https://rynsolutions.org',
  type = 'website'
}: SEOProps) {
  const fullTitle = title;
  const fullUrl = url;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <link rel="icon" type="image/png" href={logoIcon} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      
      {/* Google Analytics */}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-3ZLZ0WC2G0"></script>
      <script>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-3ZLZ0WC2G0');
        `}
      </script>
    </Helmet>
  );
}
