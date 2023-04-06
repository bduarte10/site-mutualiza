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
      <div className={styles.content_title}>
        <h1>{conteudo[servico].titulo}</h1>
      </div>

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
