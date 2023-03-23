import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import styles from './accordion.module.css';
import { ArrowRight } from 'phosphor-react';

export const AccordionComponent = () => (
  <Accordion.Root
    className={styles.AccordionRoot}
    type='single'
    defaultValue='item-1'
    collapsible
  >
    <Accordion.Item className={styles.item} value='item-1'>
      <Accordion.Header>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <ArrowRight size={32} className={styles.ArrowCircleRight} />
          Historia
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        O seu negócio e o meio ambiente em uma relação mutuamente benéfica!
        A partir desta concepção se deu a origem da Mutualiza Engenharia Ambiental. Somos uma empresa de engenharia e consultoria, com atuação em diversas frentes ambientais..{' '}
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className={styles.item} value='item-2'>
      <Accordion.Header>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <ArrowRight size={32} className={styles.ArrowCircleRight} />
          Valores
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        {' '}
        Acreditamos que podemos nos desenvolver de forma mútua com o meio ambiente, aproveitando seus recursos de forma responsável e com segurança para as gerações futuras. Para adequar a sua empresa neste cenário, garantindo o cumprimento das legislações ambientais aplicáveis ao seu negócio, nós podemos te ajudar!{' '}
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className={styles.item} value='item-3'>
      <Accordion.Header>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <ArrowRight size={32} className={styles.ArrowCircleRight} /> Missão
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        {' '}
        A Mutualiza conta com uma equipe de profissionais altamente capacitados e experientes para realizar as análises técnicas necessárias para os mais diversos serviços ambientais de forma personalizada, eficiente e segura.
        Entre em contato conosco e saiba mais sobre como podemos resolver a demanda ambiental do seu negócio.{' '}
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
);
