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
    >
      <Image
        src="/assets/whatsapp.svg"
        alt="whatsapp button"
        width={32}
        height={32}
      />
    </motion.a>
  );
}
