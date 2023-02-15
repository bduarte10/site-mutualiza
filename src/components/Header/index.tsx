import { motion } from "framer-motion";
import { GetServerSideProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./header.module.css";
import { Mobile } from "./Mobile";

interface HeaderProps {
  width: number;
}
export interface NavItem {
  label: string;
  href: string;
}
const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Sobre", href: "/sobre" },
  { label: "Serviços", href: "/servicos" },
  { label: "Contato", href: "/contato" },
];

export function Header({ width }: HeaderProps) {
  const [activePage, setActivePage] = useState<string>("home");
  const [windowWidth, setWindowWidth] = useState(width);
  const [color, setColor] = useState(false);
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setColor(true);
      } else {
        setColor(false);
      }
    });
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    // seta a página ativa de acordo com a rota
    if (router.pathname === "/") {
      setActivePage("home");
    } else {
      setActivePage(router.pathname.split("/")[1]);
      if (router.pathname.split("/")[1] === "servicos") {
        setActivePage("serviços");
      }
    }
  }, [router.pathname]);
  const handleClick = (page: string) => {
    setActivePage(page);
  };

  return (
    <header className={`${styles.header} ${color ? styles.scroll : ""}`}>
      <div className="container">
        <div className={styles.navbar}>
          <div>
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className={styles.logo}
            >
              Logo
            </motion.h1>
          </div>

          <nav className={styles.list}>
            {navItems.map((item, i) => (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                key={item.label}
              >
                <Link
                  className={
                    activePage === item.label.toLowerCase() ? styles.active : ""
                  }
                  onClick={() => handleClick(item.label.toLowerCase())}
                  href={item.href}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
            <motion.button
              //entre da esquerda para direita
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.5 }}
              className={styles.button}
            >
              CONTE-NOS A SUA NECESSIDADE
            </motion.button>
          </nav>
          {windowWidth < 768 && <Mobile />}
        </div>
      </div>
    </header>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  let width = 1200;
  try {
    width = window.innerWidth;
  } catch (error) {
    width = 1200;
  }

  return {
    props: {
      width,
    },
  };
};
