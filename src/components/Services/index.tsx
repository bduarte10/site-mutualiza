import {
  ArrowRight,
  EnvelopeSimpleOpen,
  HouseLine,
  Leaf,
  Recycle,
  Scroll,
  Truck,
} from "phosphor-react";
import styles from "./services.module.css";
import Link from "next/link";

const services = [
  {
    icon: <Scroll size={42} />,
    title: "Licenciamento Ambiental",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/servicos",
  },
  {
    icon: <Recycle size={42} />,
    title: "Plano de Gerenciamento de Resíduos Sólidos",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/servicos",
  },
  {
    icon: <Leaf size={42} />,
    title: "Cadastro Técnico Federal (IBAMA)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/servicos",
  },
  {
    icon: <Truck size={42} />,
    title: "Gerenciamento de Manifesto de Transporte de Resíduos (MTR)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/servicos",
  },
  {
    icon: <HouseLine size={42} />,
    title: "Certidão de Esgotamento Sanitário (Sabesp)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/servicos",
  },
  {
    icon: <EnvelopeSimpleOpen size={42} />,
    title:
      "Diretrizes para abastecimento de água e/ou coleta de Esgotos (Sabesp)",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    link: "/servicos",
  },
];

export function Services() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content_title}>
            <h2>Serviços</h2>
          </div>
          <div className={styles.content_items}>
            {services.map((service, index) => (
              <Link key={index} href={service.link}>
                <div className={styles.card}>
                  <div className={styles.icon}>
                    <span>{service.icon}</span>
                  </div>
                  <div className={styles.text}>
                    <h2>{service.title}</h2>
                    <p>{service.text}</p>
                  </div>
                  <div className={styles.link}>
                    <span className={styles.spanLink}>Saiba mais</span>
                    <ArrowRight color="var(--primary)" size={32} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
