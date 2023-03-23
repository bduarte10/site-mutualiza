import { Contact } from "@/components/Contact/index";
import styles from "../styles/contato.module.css";

export default function Contato() {
  return (
    <main>
      <div className={styles.content_title}>
        <h2>Contato</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <Contact />

    </main>
  )
}
