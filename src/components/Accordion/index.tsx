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
          Visão
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        Ser referência nacional na qualidade da prestação de serviços de engenharia e consultoria ambiental.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className={styles.item} value='item-2'>
      <Accordion.Header>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <ArrowRight size={32} className={styles.ArrowCircleRight} />
          Missão
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        Entregar soluções ambientais efetivas e elevar o nível da relação entre o meio ambiente e nossos clientes, gerando valor e sustentabilidade.
      </Accordion.Content>
    </Accordion.Item>

    <Accordion.Item className={styles.item} value='item-3'>
      <Accordion.Header>
        <Accordion.Trigger className={styles.AccordionTrigger}>
          <ArrowRight size={32} className={styles.ArrowCircleRight} />
          Valores
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content className={styles.AccordionContent}>
        <span>Agilidade.</span>  Buscamos por soluções efetivas de forma rápida. Todo caso é uma prioridade.
        <br />
        <br />

        <span>Comprometimento. </span> Trabalhamos para entregar o melhor resultado possível.
        <br />
        <br />

        <span>Ética.</span> Atuamos com respeito e transparência a fim de atingir nossos objetivos.
        <br />
        <br />

        <span>Sustentabilidade.</span> Trabalhamos para assegurar o crescimento dos nossos clientes de forma harmônica com o meio ambiente
      </Accordion.Content>
    </Accordion.Item>

  </Accordion.Root>
);
