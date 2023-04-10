import Image from "next/image";
import styles from "./styles.module.css";
import { motion } from "framer-motion";

export function ButtonWhatsapp() {
  return (
    <motion.a
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1, type: "tween", ease: "easeIn" }}
      className={styles.buttonWhatsapp}
      href={"https://api.whatsapp.com/send?phone=5511965733521&text=Ol%C3%A1,%20tenho%20interesse%20em%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Mutualiza%20Engenharia%20Ambiental."}
      target="_blank"
      rel="noreferrer"
    >
      <Image
        src="/assets/whatsapp.svg"
        alt="whatsapp button"
        width={42}
        height={42}
      />

    </motion.a>
  );
}
