import Link from 'next/link';
import { CheckCircle } from 'phosphor-react';
import styles from './about.module.css';
import Image from "next/image";

export function About() {
  return (
    <section className={styles.section}>
      <div className='container'>

        <div className={styles.content_title}>
          <h2>Quem somos</h2>
          <p>Uma equipe apaixonada pelo progresso</p>
        </div>

        <div className={styles.content}>

          <div className={styles.content_item}>
            <div className={styles.content_item_img}>

              <Image
                src="/assets/bg-about.png"
                width={470}
                height={480}
                alt="Imagem de uma arvore sendo plantada"
              />

            </div>
            <div className={styles.content_items}>
              <h2>Sustentabilidade e conciência</h2>
              <p>
                Curabitur et mattis ante. Maecenas sit amet commodo tellus. <br />
                Phasellus fermentum pretium eros, ut faucibus velit auctor eget.
                <br />
                Vestibulum semper sed magna pretium congue.
              </p>
              <Link className={styles.Link} href='/servicos'>
                More About
              </Link>
            </div>



          </div>

          <div className={styles.cards}>
            <div className={styles.content_card}>
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
            </div>

            <div className={styles.content_card}>
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
            </div>

            <div className={styles.content_card}>
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
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
