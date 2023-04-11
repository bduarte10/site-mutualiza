import Link from 'next/link';
import { CheckCircle } from 'phosphor-react';
import styles from './about.module.css';
import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content_title}>
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Quem somos
          </motion.h2>
        </div>

        <div className={styles.content}>
          <div className={styles.content_item}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={styles.content_item_img}
            >
              <div className={styles.content_item_img_back}>
                <Image
                  src='/assets/bg-about.png'
                  width={500}
                  height={500}
                  alt='Imagem de uma arvore sendo plantada'
                />
              </div>
            </motion.div>
            <div className={styles.content_items}>
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                A Mutualiza
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Localizada em São Paulo e atendendo também a outros estados, a Mutualiza Engenharia Ambiental atua oferecendo soluções técnicas ambientais de forma personalizada para o seu negócio, em demandas relacionadas a Licenciamento Ambiental, Ibama, Resíduos Sólidos e Saneamento.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.1, duration: 1 }}
              >
                <Link className={styles.Link} href='/servicos'>
                  Saiba Mais
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
