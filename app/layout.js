import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/animate.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/slick.css";
import "@css/swiper-bundle.min.css";
import "@css/nice-select.css";
import "@scss/main.scss";
import "./globals.css";
import Preloader from "@/layouts/Preloader";
import Script from "next/script";
import { COMPANY_INFO, HOME_PAGE_CONTENT } from "@/lib/hogar-constants";
import { buildOrganizationJsonLd, buildWebSiteJsonLd, getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();
const organizationJsonLd = buildOrganizationJsonLd({
  companyInfo: COMPANY_INFO,
  siteUrl,
  logoSrc: HOME_PAGE_CONTENT.HEADER1.LOGO_SRC,
});
const websiteJsonLd = buildWebSiteJsonLd({
  siteUrl,
  name: HOME_PAGE_CONTENT.METADATA.TITLE,
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: HOME_PAGE_CONTENT.METADATA.TITLE,
  description: HOME_PAGE_CONTENT.METADATA.DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Script id="organization-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(organizationJsonLd)}
        </Script>
        <Script id="website-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(websiteJsonLd)}
        </Script>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
