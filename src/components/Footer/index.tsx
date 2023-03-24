import { navItems } from "@/constants";
import { motion } from "framer-motion";
import Link from "next/link";
import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import styles from "./styles.module.css";
import Image from "next/image";
import logoFooter from "/public/assets/mutualiza-logo-branca.png"



export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.logo}>
            <Image src={logoFooter} width={150} height={100} alt="Logo" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <h2>Links Úteis</h2>
            {navItems.map((item, i) => (
              <motion.div
                className={styles.links}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                key={item.label}
              >
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div>
            <h2>Serviços</h2>
            {navItems.map((item, i) => (
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: i * 0.1 }}
                key={item.label}
              >
                <Link className={styles.link} href={item.href}>
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
          <div className={styles.contato}>
            <h2>Contato</h2>
            <p>Rua ffffff, 12000</p>
            <p>Telefone: (11) 99999-9999</p>
            <p>Email: ddddd@dfff.com</p>
            <div>
              <a href="#">
                <InstagramLogo size={32} />
              </a>
              <a href="#">
                <FacebookLogo size={32} />
              </a>
              <a href="#">
                <LinkedinLogo size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
