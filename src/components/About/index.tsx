import Link from 'next/link';
import { Bookmarks, Calendar, Paperclip } from 'phosphor-react';
import styles from './about.module.css';

export function About() {
  return (
    <section className={styles.section}>
      <div className='container'>
        <div className={styles.content_title}>
          <h2>Sobre</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.content_item}>
            <h2>We are Seven Company</h2>
            <p>
              Curabitur et mattis ante. Maecenas sit amet commodo tellus. <br />
              Phasellus fermentum pretium eros, ut faucibus velit auctor eget.{' '}
              <br />
              Vestibulum semper sed magna pretium congue.
            </p>
            <Link className={styles.Link} href='/servicos'>
              More About
            </Link>
          </div>
          <div className={styles.cards}>
            <div className={styles.content_card}>
              <div className={styles.icon}>
                <span>
                  <Paperclip size={32} />
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
                  <Calendar size={32} />
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
                  <Bookmarks size={32} />
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
    </section>
  );
}
