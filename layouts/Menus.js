"use client";
"use client";
import Link from "next/link";
import { HOME_PAGE_CONTENT } from "@/lib/constants";

const NAVIGATION = HOME_PAGE_CONTENT.NAVIGATION;

const Menus = ({ single, menus }) => {
  const items = menus?.length ? menus : NAVIGATION.PRIMARY;

  return (
    <nav id="mobile-menu" className="d-none d-lg-block">
      <ul>
        {items.map((item) => (
          // Allow lowercase keys if menus are passed from elsewhere
          <li
            key={item.id}
            className={`${item.ACTIVE ?? item.active ? "active" : ""} menu-thumb`.trim()}
          >
            <Link href={item.HREF || item.href || "/"}>{item.LABEL || item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  const items = menus?.length ? menus : NAVIGATION.MOBILE;

  return (
    <nav className="mean-nav d-block d-lg-none">
      <ul>
        {items.map((item, index) => (
          <li
            key={item.id}
            className={`${item.ACTIVE ?? item.active ? "active" : ""} ${index === items.length - 1 ? "mean-last" : ""}`.trim()}
          >
            <Link href={item.HREF || item.href || "/"}>{item.LABEL || item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
