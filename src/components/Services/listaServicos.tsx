interface Service {
  icon: JSX.Element;
  title: string;
  text: string;
  link: string;
}

type Servico = {
  titulo: string;
  descricao: string;
  imagem: string;
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
    titulo: 'Licenciamento',
    descricao: 'Descrição do Serviço 1',
    imagem: '/assets/bg-hero.jpg',
  },

  'residuos-solidos': {
    titulo: 'residuos',
    descricao: 'Descrição do Serviço 2',
    imagem: '/servico2.png',
  },
  'cadastro-tecnico-federal': {
    titulo: 'sfdasdfasdfdasf',
    descricao: 'Desasdfasdfasdfadf',
    imagem: '/servico2.png',
  },
};
