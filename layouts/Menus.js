"use client";
import Link from "next/link";

const Menus = ({ single, menus }) => {
  return (
    <nav id="mobile-menu" className="d-none d-lg-block">
      <ul>
        <li className="active menu-thumb">
          <Link href="/">Mono</Link>
        </li>
        <li className="d-lg-none">
          <Link href="/" className="border-none">Mono</Link>
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
          <Link href="/">Mono</Link>
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
