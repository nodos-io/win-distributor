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

export const metadata = {
  title: "WIN: Internet 100% fibra óptica",
  description: "Nuestro Internet Hogar 100% fibra óptica te brindará una conexión simétrica y de alta velocidad para trabajar, estudiar o jugar en línea.",
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
