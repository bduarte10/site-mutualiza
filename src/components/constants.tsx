interface Service {
  icon: JSX.Element;
  title: string;
  text: string;
  link: string;
}
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
    link: '/servicos',
  },
  {
    icon: <Recycle size={42} />,
    title: 'Plano de Gerenciamento de Resíduos Sólidos',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos',
  },
  {
    icon: <Leaf size={42} />,
    title: 'Cadastro Técnico Federal (IBAMA)',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    link: '/servicos',
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
