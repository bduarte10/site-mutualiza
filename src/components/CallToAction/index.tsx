import Link from "next/link";
import styles from "./calltoaction.module.css";

export function CallToAction() {
    return(
        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content_item}>
                        <h2>Where does it come from</h2>
                        <p>It is a long established fact that a reader will be distracted by the <br />
                        readable content of a page when looking at its layout.</p>
                        <Link className={styles.link} href="/contato">
                            Consultores Online
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}