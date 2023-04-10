import { ButtonWhatsapp } from '@/components/ButtonWhatsapp';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import styles from './layout.module.css';
import { Toaster } from 'sonner'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <ButtonWhatsapp />
      <Footer />
      <Toaster richColors position="top-right" />
    </div>
  );
}
