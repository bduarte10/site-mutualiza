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
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Uma equipe apaixonada pelo progresso
          </motion.p>
        </div>

        <div className={styles.content}>
          <div className={styles.content_item}>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={styles.content_item_img}
            >
              <Image
                src='/assets/bg-about.png'
                width={470}
                height={480}
                alt='Imagem de uma arvore sendo plantada'
              />
            </motion.div>
            <div className={styles.content_items}>
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
              >
                Sustentabilidade e conciência
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                Curabitur et mattis ante. Maecenas sit amet commodo tellus.{' '}
                <br />
                Phasellus fermentum pretium eros, ut faucibus velit auctor eget.
                <br />
                Vestibulum semper sed magna pretium congue.
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

          <div className={styles.cards}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0 * 0.3, duration: 0.5 }}
              className={styles.content_card}
            >
              <div className={styles.icon}>
                <span>
                  <CheckCircle size={36} />
                </span>
              </div>
              <div>
                <h2>Luctus nec ullamcorper</h2>
                <p>
                  Lorem ipsum dolor adipiscing elit. Ut elit tellus dapibus leo!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 * 0.3, duration: 0.5 }}
              className={styles.content_card}
            >
              <div className={styles.icon}>
                <span>
                  <CheckCircle size={36} />
                </span>
              </div>
              <div>
                <h2>Luctus nec ullamcorper</h2>
                <p>
                  Lorem ipsum dolor adipiscing elit. Ut elit tellus dapibus leo!
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 * 0.3, duration: 0.5 }}
              className={styles.content_card}
            >
              <div className={styles.icon}>
                <span>
                  <CheckCircle size={36} />
                </span>
              </div>
              <div>
                <h2>Luctus nec ullamcorper</h2>
                <p>
                  Lorem ipsum dolor adipiscing elit. Ut elit tellus dapibus leo!
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
