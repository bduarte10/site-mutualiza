import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import styles from './accordion.module.css';
import { ArrowRight } from "phosphor-react";

const AccordionDemo = () => (
    <Accordion.Root className={styles.AccordionRoot} type="single" defaultValue="item-1" collapsible>
        <Accordion.Item className="AccordionItem" value="item-1">
            <AccordionTrigger className={styles.AccordionTrigger}>
                História
            </AccordionTrigger>
            <AccordionContent className={styles.AccordionContent}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti modi alias quia consectetur quidem ab nulla nisi iure magnam ut non ipsum error reiciendis, laborum, quibusdam velit incidunt ullam.
                <br />
                <br />
                - Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti modi alias quia consectetur quidem ab nulla

            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-2">
            <AccordionTrigger className={styles.AccordionTrigger}>
                Valores
            </AccordionTrigger>
            <AccordionContent className={styles.AccordionContent}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti modi alias quia consectetur quidem ab nulla nisi iure magnam ut non ipsum error reiciendis, laborum, quibusdam velit incidunt ullam.
            </AccordionContent>
        </Accordion.Item>

        <Accordion.Item className="AccordionItem" value="item-3">
            <AccordionTrigger className={styles.AccordionTrigger}>
                Missão
            </AccordionTrigger>
            <Accordion.Content className={styles.AccordionContent}>
                <div className="AccordionContentText">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere deleniti modi alias quia consectetur quidem ab nulla nisi iure magnam ut non ipsum error reiciendis, laborum, quibusdam velit incidunt ullam.
                </div>
            </Accordion.Content>
        </Accordion.Item>
    </Accordion.Root>
);

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
            className={classNames('AccordionTrigger', className)}
            {...props}
            ref={forwardedRef}
        >
            <ArrowRight size={32} className={styles.ArrowCircleRight} />
            {children}
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
    >
        <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
));

export default AccordionDemo;