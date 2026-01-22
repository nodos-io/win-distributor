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
import { HOME_PAGE_CONTENT } from "@/lib/hogar-constants";

export const metadata = {
  title: HOME_PAGE_CONTENT.METADATA.TITLE,
  description: HOME_PAGE_CONTENT.METADATA.DESCRIPTION,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
