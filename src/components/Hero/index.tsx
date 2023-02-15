import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero_bg}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content_items}>
            <div>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Resolvemos suas demandas ambientais com resultados efetivos.
              </motion.h1>
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                We offer a professional advice, guidance and actionable
                solutions to businesses experiencing issues they can’t deal with
                in-house.
              </motion.h3>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.0 }}
              >
                <Link className={styles.link} href="/contato">
                  Contate-nos
                </Link>
              </motion.div>
            </div>
          </div>
          <div className={styles.content_img}>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              <Image
                src="/assets/bg-hero.jpg"
                width={500}
                height={450}
                alt="hero background"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
