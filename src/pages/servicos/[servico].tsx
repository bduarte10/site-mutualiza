import { GetStaticPaths, GetStaticProps } from 'next';
import { conteudo } from '../../components/Services/listaServicos';
import { Contact } from '@/components/Contact';
import styles from './servicos.module.css';
import { motion } from 'framer-motion';


interface ServicoProps {
  servico: string;
}

const ServicoPage = ({ servico }: ServicoProps) => {
  return (
    <main className={styles.main}>
      <motion.div className={styles.content_title}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h1>{conteudo[servico].titulo}</h1>
      </motion.div>

      <div className='container'>
        <div className={styles.content_list}>

          {conteudo[servico].conteudo}

        </div>
      </div>

      <Contact />

    </main>
  );
};
export default ServicoPage;
export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(conteudo).map((servico: string) => ({
    params: { servico },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  return { props: { servico: params?.servico } };
};
