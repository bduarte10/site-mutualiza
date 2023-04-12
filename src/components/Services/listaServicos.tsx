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
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Service {
  icon: JSX.Element;
  title: string;
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
    link: '/servicos/licenciamento-ambiental',
  },
  {
    icon: <Recycle size={42} />,
    title: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
    link: '/servicos/residuos-solidos',
  },
  {
    icon: <Leaf size={42} />,
    title: 'Cadastro Técnico Federal (IBAMA)',
    link: '/servicos/cadastro-tecnico-federal',
  },
  {
    icon: <Truck size={42} />,
    title: 'Gerenciamento de Manifesto de Transporte de Resíduos (MTR)',
    link: '/servicos/gerenciamento-de-manifesto-de-transporte-de-residuos',
  },
  {
    icon: <HouseLine size={42} />,
    title: 'Certidão de Esgotamento Sanitário (Sabesp)',
    link: '/servicos/certidao-de-esgotamento-sanitario',
  },
  {
    icon: <EnvelopeSimpleOpen size={42} />,
    title:
      'Carta de Diretrizes de Água e/ou Esgoto (Sabesp)',
    link: '/servicos/carta-de-diretrizes-de-agua-e-esgoto ',
  },
];

export const conteudo: Record<string, Servico> = {
  'licenciamento-ambiental': {
    titulo: 'Licenciamento Ambiental',
    conteudo: (
      <>
        <motion.div className={styles.content_text}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
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
        </motion.div>
        <motion.div className={styles.back}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={styles.front}>
            <Image
              src='/assets/bg-licenciamentoAmbiental.png'
              width={500}
              height={500}
              alt='qualquer'
            />
            <div className={styles.blob}></div>
          </div>
        </motion.div>
      </>
    ),
  },


  'residuos-solidos': {
    titulo: 'Plano de Gerenciamento de Resíduos Sólidos (PGRS)',
    conteudo: (
      <>
        <motion.div className={styles.content_text}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é um documento técnico previsto pela Política Nacional de Resíduos Sólidos, instituída pela Lei nº 12.305/2010, que consiste no diagnóstico e nos procedimentos relacionados aos resíduos gerados durante a operação da empresa, que vai desde a etapa inicial de segregação, até a destinação final do resíduo.
            <br />
            <br />
            A elaboração de um PGRS é obrigatória para algumas empresas, como as de grande porte e as que geram resíduos perigosos, mas mesmo aquelas que não têm essa obrigação legal podem se beneficiar desse serviço. Caso a empresa seja obrigada a elaborar um PGRS e não o fizer, esta estará sujeita a multas e até cassação do alvará de funcionamento.
            <br />
            <br />
            Alguns segmentos exigem um tipo de PGRS específico, como por exemplo empresas do ramo de Serviços de Saúde (hospitais, clínicas, consultórios) possuem o PGRSS (Plano de Gerenciamento de Resíduos do Serviço de Saúde). Já empresas da área da construção civil possuem o PGRCC (Plano de Gerenciamento de Resíduos da Construção Civil), ambos documentos são, assim como o PGRS, um documento que apresenta como é realizada a gestão de resíduos destes estabelecimentos, de modo a atender os requisitos das legislações pertinentes.
            <br />
            <br />
            A Mutualiza Engenharia conta com profissionais qualificados, com amplo conhecimento da legislação ambiental e das melhores práticas de gerenciamento de resíduos sólidos, garantindo que o PGRS seja adequado às necessidades da sua empresa. Invista no bom relacionamento com o meio ambiente e no cumprimento da legislação! Conte conosco para a elaboração do PGRS da sua empresa.
          </p>
        </motion.div>
        <motion.div className={styles.back}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={styles.front}>
            <Image
              src='/assets/bg-residuosSolidos.jpg'
              width={500}
              height={500}
              alt='Imagem de uma lixeira de residuos reciclaveis'
            />
            <div className={styles.blob}></div>
          </div>
        </motion.div>
      </>
    ),
  },


  'cadastro-tecnico-federal': {
    titulo: 'Cadastro Técnico Federal (IBAMA)',
    conteudo: (
      <>
        <motion.div className={styles.content_text}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}

        >
          <p>
            O Cadastro Técnico Federal (CTF) é um registro obrigatório para pessoas físicas e jurídicas que desenvolvem atividades potencialmente poluidoras e utilizam recursos naturais. O cadastro é feito junto ao IBAMA, no qual utiliza das informações sobre as atividades desenvolvidas para promover a gestão ambiental (Lei Federal nº 6.938/81).
            <br />
            <br />
            Como parte integrante do CTF, é exigido a entrega anual do RAPP (Relatório de Atividades Potencialmente Poluidoras), que consiste em um documento cujos detalhes das atividades realizadas e dos resíduos gerados são descritos.
            <br />
            <br />
            A contratação da nossa empresa para a elaboração desse relatório garante que todas as informações serão apresentadas de forma clara e objetiva, seguindo as exigências legais e evitando possíveis autuações e sanções do Ibama.
            <br />
            <br />
            Invista no bom relacionamento com o meio ambiente e no cumprimento da legislação! Conte conosco para a sua Inscrição no Cadastro Técnico Federal e para a Elaboração do seu Relatório de Atividades Potencialmente Poluidoras (RAPP) do Ibama.
          </p>
        </motion.div>
        <motion.div className={styles.back}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={styles.front}>
            <Image
              src='/assets/bg-ibama.jpg'
              width={500}
              height={500}
              alt='Imagem de fabricas com grandes chaminés'
            />
            <div className={styles.blob}></div>
          </div>
        </motion.div>
      </>
    ),
  },

  'certidao-de-esgotamento-sanitario': {
    titulo: 'Certidão de Esgotamento Sanitário (Sabesp)',
    conteudo: (
      <>
        <motion.div className={styles.content_text}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            A Certidão de Esgotamento Sanitário é um documento emitido pela Companhia de Saneamento Básico do Estado de São Paulo (SABESP), que atesta a existência ou não de rede de coleta e tratamento de esgoto no imóvel em questão. Essa certidão é importante para diversos fins, como para o atendimento a requisitos legais e obtenção de financiamento.
            <br />
            <br />
            A Mutualiza oferece um serviço ágil e eficiente na obtenção da Certidão de Esgotamento Sanitário da SABESP, garantindo a tranquilidade e segurança para o cliente em relação às exigências legais.
          </p>
        </motion.div>
        <motion.div className={styles.back}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={styles.front}>
            <Image
              src='/assets/bg-certidaoEsgotamento.jpg'
              width={500}
              height={500}
              alt='Imagem de reservatorios de água sendo tratada'
            />
            <div className={styles.blob}></div>
          </div>
        </motion.div>
      </>
    ),
  },

  'carta-de-diretrizes-de-agua-e-esgoto': {
    titulo: 'Carta de Diretrizes de Água e/ou Esgoto (Sabesp)',
    conteudo: (
      <>
        <motion.div className={styles.content_text}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            O serviço de obtenção de carta de diretrizes para abastecimento de água e/ou coleta de esgotos da Sabesp consiste em uma análise técnica e orientações para a instalação de novas ligações de água e/ou esgoto em imóveis localizados em áreas atendidas pela Sabesp.
            <br />
            <br />
            O serviço prestado é importante para garantir que as novas ligações sejam feitas de acordo com as normas técnicas e padrões de qualidade estabelecidos pela empresa, garantindo a segurança e a eficiência do sistema de abastecimento de água e coleta de esgotos.
            <br />
            <br />
            A Mutualiza conta com uma equipe de profissionais altamente capacitados e experientes para realizar a análise técnica e fornecer as orientações necessárias para a instalação das novas ligações de forma eficiente e segura. Entre em contato conosco e saiba mais sobre como podemos ajudar no processo de instalação de água e esgoto em seu imóvel.
          </p>
        </motion.div>
        <motion.div className={styles.back}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={styles.front}>
            <Image
              src='/assets/bg-diretrizes.jpg'
              width={500}
              height={500}
              alt='Imagem de água caindo sobre as mãos'
            />
            <div className={styles.blob}></div>
          </div>
        </motion.div>
      </>
    ),
  },

  'gerenciamento-de-manifesto-de-transporte-de-residuos': {
    titulo: 'Gerenciamento de Manifesto de Transporte de Resíduos (MTR)',
    conteudo: (
      <>
        <motion.div className={styles.content_text}
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <p>
            O SIGOR (Sistema Estadual de Gerenciamento Online de Resíduos) - Módulo MTR é um sistema eletrônico desenvolvido pela CETESB (Companhia Ambiental do Estado de São Paulo) que possibilita o controle, o monitoramento e a rastreabilidade de todo o processo de gerenciamento de resíduos, garantindo a adequada destinação dos resíduos gerados pelas empresas.
            <br />
            <br />
            Empresas que são obrigadas a elaborar o <span><Link className={styles.anchor} href={'/servicos/residuos-solidos'}>Plano de Gerenciamento de Resíduos Sólidos (PGRS)</Link> </span> e que geram, transportam e destinam resíduos também estão obrigadas a fazer a utilização do SIGOR para emitir o MTR (Manifesto de Transporte de Resíduos), documento que deve acompanhar o transporte dos resíduos.
            <br />
            <br />
            A Mutualiza oferece o serviço de gerenciamento do SIGOR - Módulo MTR, garantindo a sua correta emissão e demais obrigações relacionadas ao sistema, como a DMR (Declaração de Movimentação de Resíduo), proporcionando tranquilidade e segurança aos nossos clientes no que se refere ao gerenciamento de seus resíduos.
          </p>
        </motion.div>
        <motion.div className={styles.back}
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className={styles.front}>
            <Image
              src='/assets/bg-mtr.jpg'
              width={500}
              height={500}
              alt='Imagem de papelões sendo reciclados'
            />
            <div className={styles.blob}></div>
          </div>
        </motion.div>
      </>
    ),
  },
};
