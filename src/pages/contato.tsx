import { Contact } from '@/components/Contact/index';
import styles from '../styles/contato.module.css';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Contato() {
  return (
    <main>
      <Head>
        <title>Mutualiza - Contato</title>
      </Head>
      <div className={styles.content_title}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}>
          Contato
        </motion.h2>
      </div>
      <Contact />
    </main>
  );
}
