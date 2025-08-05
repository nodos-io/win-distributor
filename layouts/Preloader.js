"use client";
import { useEffect } from "react";
import Script from 'next/script';
import Hotjar from '@hotjar/browser';

const Preloader = () => {
  // Initialize Hotjar with your site ID and version
  useEffect(() => {
    const siteId = 6459755;
    const hotjarVersion = 6;
    Hotjar.init(siteId, hotjarVersion);
  }, []);

  return (
    <>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-C23SB4MCFR"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-C23SB4MCFR');
        `}
      </Script>
    </>
  );
};
export default Preloader;
