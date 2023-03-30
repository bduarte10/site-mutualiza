import styles from './servicos.module.css';
import { services } from '@/components/Services/listaServicos';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'phosphor-react';

export default function Servicos() {
  return (
    <main>
      <div className={styles.content_title}>
        <h2>Nossos Serviços</h2>
      </div>
      <div className='container'>
        <div className={styles.content_items}>
          {services.map((service, index) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              key={index}
            >
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
