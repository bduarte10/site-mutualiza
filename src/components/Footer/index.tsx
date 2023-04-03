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

          </div>

          <div className={styles.contato}>

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
