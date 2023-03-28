import Image from 'next/image';
import styles from './services.module.css';
import {
  EnvelopeSimpleOpen,
  HouseLine,
  Leaf,
  Recycle,
  Scroll,
  Truck,
} from 'phosphor-react';

interface Service {
  icon: JSX.Element;
  title: string;
  text: string;
  link: string;
}

type Servico = {
  titulo: string;
  conteudo: JSX.Element;
};

export const services: Service[] = [
  {
    icon: <Scroll size={42} />,
    title: 'Licenciamento Ambiental',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos/licenciamento-ambiental',
  },
  {
    icon: <Recycle size={42} />,
    title: 'Plano de Gerenciamento de Resíduos Sólidos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos/residuos-solidos',
  },
  {
    icon: <Leaf size={42} />,
    title: 'Cadastro Técnico Federal (IBAMA)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos/cadastro-tecnico-federal',
  },
  {
    icon: <Truck size={42} />,
    title: 'Gerenciamento de Manifesto de Transporte de Resíduos (MTR)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos',
  },
  {
    icon: <HouseLine size={42} />,
    title: 'Certidão de Esgotamento Sanitário (Sabesp)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos',
  },
  {
    icon: <EnvelopeSimpleOpen size={42} />,
    title:
      'Diretrizes para abastecimento de água e/ou coleta de Esgotos (Sabesp)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos',
  },
];

export const conteudo: Record<string, Servico> = {
  'licenciamento-ambiental': {
    titulo: 'Licenciamento Ambiental',
    conteudo: (
      <>
        <div className={styles.content_text}>
          <p>
            O Licenciamento Ambiental é um processo administrativo obrigatório
            para os empreendimentos cujas as atividades são potencialmente
            poluidoras ou degradadoras do meio ambiente; para os empreendimentos
            que utilizam recursos naturais, e empreendimentos que efetivamente são
            poluidores.
            <br />
            <br />
            O processo de Licenciamento é realizado pelo órgão
            ambiental, que analisa os estudos e documentos ambientais requisitados
            para o empreendedor. Existem três tipos de licença ambiental: Licença
            Prévia (LP); Licença de Instalação (LI); e a Licença de Operação (LO),
            sendo estabelecido pelo órgão ambiental o prazo de validade da
            licença.
            <br />
            <br />
            A Mutualiza oferece serviços para todos os tipos de Licença
            Ambiental, buscando agilizar o processo de licenciamento, garantindo a
            rapidez e a eficiência na emissão das licenças necessárias para o
            início e para a manutenção das operações de nossos clientes.
            <br />
            <br />
            Invista no bom relacionamento com o meio ambiente e no cumprimento da
            legislação! Conte conosco para o Licenciamento Ambiental de seu
            empreendimento, ou para a Renovação de Licença Ambiental.
          </p>
        </div>
        <div className={styles.back}>
          <div className={styles.front}>
            <Image
              src='/assets/bg-about.png'
              width={500}
              height={500}
              alt='qualquer'
            />
          </div>
        </div>
      </>
    ),
  },

  'residuos-solidos': {
    titulo: 'residuos',
    conteudo: (
      <>
        <p>
          O Licenciamento Ambiental é um processo administrativo obrigatório
          para os empreendimentos cujas as atividades são potencialmente
          poluidoras ou degradadoras do meio ambiente; para os empreendimentos
          que utilizam recursos naturais, e empreendimentos que efetivamente são
          poluidores. O processo de Licenciamento é realizado pelo órgão
          ambiental, que analisa os estudos e documentos ambientais requisitados
          para o empreendedor. Existem três tipos de licença ambiental: Licença
          Prévia (LP); Licença de Instalação (LI); e a Licença de Operação (LO),
          sendo estabelecido pelo órgão ambiental o prazo de validade da
          licença. A Mutualiza oferece serviços para todos os tipos de Licença
          Ambiental, buscando agilizar o processo de licenciamento, garantindo a
          rapidez e a eficiência na emissão das licenças necessárias para o
          início e para a manutenção das operações de nossos clientes. Invista
          no bom relacionamento com o meio ambiente e no cumprimento da
          legislação! Conte conosco para o Licenciamento Ambiental de seu
          empreendimento, ou para a Renovação de Licença Ambiental.
        </p>
        <Image
          src='/assets/bg-hero.png'
          width={1000}
          height={500}
          alt='qualquer'
        />
      </>
    ),
  },
  'cadastro-tecnico-federal': {
    titulo: 'sfdasdfasdfdasf',
    conteudo: (
      <>
        <p>
          O Licenciamento Ambiental é um processo administrativo obrigatório
          para os empreendimentos cujas as atividades são potencialmente
          poluidoras ou degradadoras do meio ambiente; para os empreendimentos
          que utilizam recursos naturais, e empreendimentos que efetivamente são
          poluidores. O processo de Licenciamento é realizado pelo órgão
          ambiental, que analisa os estudos e documentos ambientais requisitados
          para o empreendedor. Existem três tipos de licença ambiental: Licença
          Prévia (LP); Licença de Instalação (LI); e a Licença de Operação (LO),
          sendo estabelecido pelo órgão ambiental o prazo de validade da
          licença. A Mutualiza oferece serviços para todos os tipos de Licença
          Ambiental, buscando agilizar o processo de licenciamento, garantindo a
          rapidez e a eficiência na emissão das licenças necessárias para o
          início e para a manutenção das operações de nossos clientes. Invista
          no bom relacionamento com o meio ambiente e no cumprimento da
          legislação! Conte conosco para o Licenciamento Ambiental de seu
          empreendimento, ou para a Renovação de Licença Ambiental.
        </p>
        <div>
          <Image
            src='/assets/bg-hero.png'
            width={1000}
            height={500}
            alt='qualquer'
          />
        </div>
      </>
    ),
  },
};