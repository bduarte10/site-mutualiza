import styles from './servicos.module.css';
import { services } from '@/components/Services/listaServicos';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';
import Head from 'next/head';

export default function Servicos() {
  return (
    <main>
      <Head>
        <title>Mutualiza - Serviços</title>
      </Head>
      <div className={styles.content_title}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}>
          Nossos Serviços
        </motion.h2>
      </div>
      <div className='container'>
        <div className={styles.content_items}>
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}>
              <Link href={service.link}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <span>{service.icon}</span>
                  </div>
                  <div className={styles.text}>
                    <h2>{service.title}</h2>
                  </div>
                  <div className={styles.link}>
                    <span className={styles.spanLink}>Saiba mais</span>
                    <ArrowRight color='var(--primary)' size={32} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
