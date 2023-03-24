interface Service {
  icon: JSX.Element;
  title: string;
  text: string;
  link: string;
}

type Servico = {
  titulo: string;
  descricao: string;

};
import {
  EnvelopeSimpleOpen,
  HouseLine,
  Leaf,
  Recycle,
  Scroll,
  Truck,
} from 'phosphor-react';

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
    descricao: `O Licenciamento Ambiental é um processo administrativo obrigatório para os empreendimentos cujas as atividades são potencialmente poluidoras ou degradadoras do meio ambiente; para os empreendimentos que utilizam recursos naturais, e empreendimentos que efetivamente são poluidores.

    O processo de Licenciamento é realizado pelo órgão ambiental, que analisa os estudos e documentos ambientais requisitados para o empreendedor. Existem três tipos de licença ambiental: Licença Prévia (LP); Licença de Instalação (LI); e a Licença de Operação (LO), sendo estabelecido pelo órgão ambiental o prazo de validade da licença.
    
    A Mutualiza oferece serviços para todos os tipos de Licença Ambiental, buscando agilizar o processo de licenciamento, garantindo a rapidez e a eficiência na emissão das licenças necessárias para o início e para a manutenção das operações de nossos clientes.
    
    Invista no bom relacionamento com o meio ambiente e no cumprimento da legislação! Conte conosco para o Licenciamento Ambiental de seu empreendimento, ou para a Renovação de Licença Ambiental.`

  },

  'residuos-solidos': {
    titulo: 'residuos',
    descricao: 'Descrição do Serviço 2',

  },
  'cadastro-tecnico-federal': {
    titulo: 'sfdasdfasdfdasf',
    descricao: 'Desasdfasdfasdfadf',

  },
};
