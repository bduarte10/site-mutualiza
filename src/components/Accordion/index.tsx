import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import styles from './accordion.module.css';
import { ArrowRight } from "phosphor-react";



export const AccordionComponent = () => (
    <Accordion.Root className={styles.AccordionRoot} type="single" defaultValue="item-1" collapsible>
        <Accordion.Item value="item-1">
            <Accordion.Header >

                <Accordion.Trigger className={styles.AccordionTrigger}> <ArrowRight size={32} className={styles.ArrowCircleRight} />Historia</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.AccordionContent}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia animi optio assumenda aliquid consequuntur. Officia quod aliquid dicta dolore laborum error ratione, ullam voluptatibus obcaecati odio, ducimus sunt doloremque. </Accordion.Content >
        </Accordion.Item>

        <Accordion.Item value="item-2">
            <Accordion.Header>
                <Accordion.Trigger className={styles.AccordionTrigger}>
                    <ArrowRight size={32} className={styles.ArrowCircleRight} />Valores</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.AccordionContent}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia animi optio assumenda aliquid consequuntur. Officia quod aliquid dicta dolore laborum error ratione, ullam voluptatibus obcaecati odio, ducimus sunt doloremque. </Accordion.Content >
        </Accordion.Item>

        <Accordion.Item value="item-3">
            <Accordion.Header>
                <Accordion.Trigger className={styles.AccordionTrigger}> <ArrowRight size={32} className={styles.ArrowCircleRight} /> Missão</Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className={styles.AccordionContent}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officia animi optio assumenda aliquid consequuntur. Officia quod aliquid dicta dolore laborum error ratione, ullam voluptatibus obcaecati odio, ducimus sunt doloremque. </Accordion.Content >
        </Accordion.Item>


    </Accordion.Root>
);
