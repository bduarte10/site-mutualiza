import Image from "next/image";
import styles from "./styles.module.css";

export function ButtonWhatsapp() {
  return (
    <div className={styles.buttonWhatsapp}>
      <a className={styles.linkWhats} href="#">
        <Image
          src="/assets/whatsapp.svg"
          alt="whatsapp button"
          width={32}
          height={32}
        />
      </a>
    </div>
  );
}
