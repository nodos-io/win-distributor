"use client";
import Link from "next/link";

const Menus = ({ single, menus }) => {
  const singleMenus = menus
    ? menus
    : [
        { id: 1, href: "mono", title: "Mono" },
        { id: 2, href: "duos", title: "Dúos" },
        { id: 3, href: "gamer", title: "Gamer" },
      ];
  return (
    <nav id="mobile-menu" className="d-none d-lg-block">
      <ul>
        <li className="active menu-thumb">
          <Link href="/">Mono</Link>
        </li>
        <li className="d-lg-none">
          <Link href="team" className="border-none">Mono</Link>
        </li>
        <li>
          <Link href="duos">Dúos</Link>
        </li>
        <li>
          <Link href="gamer">Gamer</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Menus;

export const MobileMenu = ({ menus, single }) => {
  return (
    <nav className="mean-nav d-block d-lg-none">
      <ul>
        <li className="active d-lg-none">
          <Link href="mono">Mono</Link>
        </li>
        <li>
          <Link href="duos">Dúos</Link>
        </li>
        <li className="mean-last">
          <Link href="gamer">Gamer</Link>
        </li>
      </ul>
    </nav>
  );
};
