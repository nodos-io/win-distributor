import { HOME_PAGE_CONTENT } from "@/lib/hogar-constants";

const DEFAULT_METADATA = HOME_PAGE_CONTENT.METADATA;

export const getSiteUrl = () => {
  const explicitUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicitUrl) {
    return explicitUrl.replace(/\/$/, "");
  }

  const vercelUrl = process.env.VERCEL_URL;
  if (vercelUrl) {
    return `https://${vercelUrl}`;
  }

  return "http://localhost:3000";
};

export const buildPageMetadata = ({ content, pageName, canonicalPath } = {}) => {
  const metadataSource = content?.METADATA || DEFAULT_METADATA;
  const baseTitle = metadataSource?.TITLE || DEFAULT_METADATA.TITLE;
  const description = metadataSource?.DESCRIPTION || DEFAULT_METADATA.DESCRIPTION;
  const resolvedTitle = pageName ? `${pageName} | ${baseTitle}` : baseTitle;

  const metadata = {
    title: resolvedTitle,
    description,
  };

  if (canonicalPath) {
    metadata.alternates = {
      canonical: canonicalPath,
    };
  }

  return metadata;
};

export const toAbsoluteUrl = (pathOrUrl, siteUrl) => {
  if (!pathOrUrl) return null;
  if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
    return pathOrUrl;
  }

  const normalizedSiteUrl = siteUrl.replace(/\/$/, "");
  const normalizedPath = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
  return `${normalizedSiteUrl}${normalizedPath}`;
};

export const buildOrganizationJsonLd = ({ companyInfo, siteUrl, logoSrc }) => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: companyInfo?.NAME,
    url: siteUrl,
    email: companyInfo?.EMAIL,
    telephone: companyInfo?.PHONE,
    address: {
      "@type": "PostalAddress",
      streetAddress: companyInfo?.ADDRESS,
    },
    logo: toAbsoluteUrl(logoSrc, siteUrl),
  };

  if (!data.logo) {
    delete data.logo;
  }

  return data;
};

export const buildWebSiteJsonLd = ({ siteUrl, name }) => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name,
  url: siteUrl,
});

export const buildFaqJsonLd = (items = []) => {
  const entries = items
    .map((item) => ({
      "@type": "Question",
      name: item?.title,
      acceptedAnswer: {
        "@type": "Answer",
        text: item?.content,
      },
    }))
    .filter((item) => item.name && item.acceptedAnswer.text);

  if (!entries.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: entries,
  };
};
