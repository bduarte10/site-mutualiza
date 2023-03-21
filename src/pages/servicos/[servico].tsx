import Image from 'next/image';
import { GetStaticPaths, GetStaticProps } from 'next';
import { conteudo } from '../../components/Services/listaServicos';

interface ServicoProps {
  servico: string;
}

const ServicoPage = ({ servico }: ServicoProps) => {
  return (
    <div>
      <h1>{conteudo[servico].titulo}</h1>
      <p>{conteudo[servico].descricao}</p>
      <Image
        src={conteudo[servico].imagem}
        alt={conteudo[servico].titulo}
        width={500}
        height={450}
      />
    </div>
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
