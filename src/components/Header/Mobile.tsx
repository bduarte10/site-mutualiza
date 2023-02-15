import Link from "next/link";
import { useState } from "react";
import styles from "./header.module.css";
import { List, X } from "phosphor-react";
import { NavItem } from ".";

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export function Mobile() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    console.log("abriu o menu");
    setIsOpen(!isOpen);
  };
  return (
    <>
      {!isOpen ? (
        <List className={styles.open} size={32} onClick={handleClick} />
      ) : (
        <div className={styles.mobileMenu} onClick={handleClick}>
          <X className={styles.close} size={32} onClick={handleClick} />
          <div className={styles.mobileNav}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} onClick={handleClick}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
