import styles from '../styles/sobre.module.css';
import Image from 'next/image';
import { AccordionComponent } from '../components/Accordion';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Sobre() {
  return (
    <main className={styles.section}>
      <Head>
        <title>Mutualiza - Sobre</title>
      </Head>
      <div className={styles.content_title}>
        <motion.h2
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}>
          Sobre nós
        </motion.h2>
      </div>
      <div className='container'>
        <section className={styles.content_items_higher}>
          <motion.div
            className={styles.content_img}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            <div className={styles.content_img_front}>
              <Image
                src='/assets/img-sobre.jpg'
                width={500}
                height={500}
                alt='Imagem de várias mãos segurando o tronco de uma árvore'
              />
            </div>
          </motion.div>

          <motion.div
            className={styles.content_text}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}>
            <h2>História</h2>
            <p>
              O seu negócio e o meio ambiente em uma relação mutuamente
              benéfica!
              <br />
              <br />
              A partir desta concepção se deu a origem da Mutualiza Engenharia
              Ambiental. Somos uma empresa de engenharia e consultoria, com
              atuação em diversas frentes ambientais.
              <br />
              <br />
              Acreditamos que podemos nos desenvolver de forma mútua com o meio
              ambiente, aproveitando seus recursos de forma responsável e com
              segurança para as gerações futuras. Para adequar a sua empresa
              neste cenário, garantindo o cumprimento das legislações ambientais
              aplicáveis ao seu negócio, nós podemos te ajudar!
              <br />
              <br />
              A Mutualiza conta com uma equipe de profissionais altamente
              capacitados e experientes para realizar as análises técnicas
              necessárias para os mais diversos serviços ambientais de forma
              personalizada, eficiente e segura.
              <br />
              <br />
              Entre em contato conosco e saiba mais sobre como podemos resolver
              a demanda ambiental do seu negócio.
            </p>
          </motion.div>
        </section>

        <section className={styles.content_items_bottom}>
          <motion.div
            className={styles.content_accordion}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}>
            <AccordionComponent />
          </motion.div>

          <motion.div
            className={styles.content_img}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}>
            <div className={styles.content_img_front}>
              <Image
                src='/assets/img-office.jpg'
                width={500}
                height={500}
                alt='Imagem de projetos ambientais em papel e um notebook'
              />
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
