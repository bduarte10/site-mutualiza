import { motion } from "framer-motion";
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
            <p>(11) 96573-3521</p>
            <p>contato@mutualiza.com.br</p>
            <div>
              <a href="https://www.instagram.com/mutualiza/?next=%2F"
                target="_blank"
                rel="noreferrer">
                <InstagramLogo size={32} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100090395072401&mibextid=ZbWKwL"
                target="_blank"
                rel="noreferrer">
                <FacebookLogo size={32} />
              </a>
              <a href="https://www.linkedin.com/company/mutualiza-engenharia-ambiental/about/"
                target="_blank"
                rel="noreferrer">
                <LinkedinLogo size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer >
  );
}
