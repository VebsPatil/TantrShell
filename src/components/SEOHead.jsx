import { Helmet } from 'react-helmet-async';

/**
 * SEOHead — Reusable SEO component for every page.
 *
 * Props:
 *  - title        : Page title (will append " | TantrShell")
 *  - description  : Meta description (150-160 chars ideal)
 *  - keywords     : Comma-separated keywords string
 *  - canonical    : Canonical URL path (e.g. "/about")
 *  - ogType       : Open Graph type (default: "website")
 *  - ogImage      : OG image URL (default: logo)
 *  - structuredData: Optional JSON-LD structured data object or array
 *  - noIndex      : If true, adds noindex directive
 */

const SITE_NAME = 'TantrShell';
const BASE_URL = 'https://tantrshell.online';
const DEFAULT_IMAGE = `${BASE_URL}/logo.png`;
const DEFAULT_DESCRIPTION = 'TantrShell builds smart, customizable tech products and trains businesses to use them effectively. From hospital management to AI bots — ready to deploy.';

export default function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords = '',
  canonical = '/',
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  structuredData = null,
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : `${SITE_NAME} | Smart Tech. Ready to Deploy.`;
  const fullCanonical = `${BASE_URL}${canonical}`;

  return (
    <Helmet>
      {/* Primary SEO */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'} />
      <link rel="canonical" href={fullCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@tantrshell" />

      {/* Additional SEO */}
      <meta name="author" content="TantrShell Technologies" />
      <meta name="publisher" content="TantrShell Technologies" />
      <meta name="theme-color" content="#FF4D00" />
      <meta name="format-detection" content="telephone=no" />
      <meta httpEquiv="content-language" content="en" />

      {/* Structured Data / JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
