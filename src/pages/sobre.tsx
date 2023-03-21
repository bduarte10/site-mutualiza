import styles from "../styles/sobre.module.css";
import Image from "next/image";
import { Briefcase, Buildings, Gauge, ShieldCheck } from "phosphor-react";
import { AccordionComponent } from "../components/Accordion"



export default function Sobre() {
  return (
    <main className={styles.section}>
      <div className={styles.content_title}>
        <h2>Sobre Nós</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className="container">
        <section className={styles.content_items_higher}>

          <div className={styles.content_img}>
            <Image
              src="/assets/img-sobre.jpg"
              width={550}
              height={500}
              alt=""
            />
          </div>

          <div className={styles.content_accordion}>
            <AccordionComponent />
          </div>

        </section>

        <section className={styles.content_items_bottom}>

          <div className={styles.content_cards}>
            <div className={styles.cards}>
              <span><Briefcase size={32} /></span>
              <div>
                <h2>Capacitação</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam labore magni saepe corporis quas excepturi. </p>
              </div>
            </div>

            <div className={styles.cards}>
              <span><Gauge size={32} /></span>
              <div><h2>Agilidade</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis sint ipsam nobis delectus</p>
              </div>
            </div>

            <div className={styles.cards}>
              <span><Buildings size={32} /></span>
              <div> <h2>Compromisso</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos adipisci repellendus molestias omnis distinctio repudiandae </p>
              </div>
            </div>

            <div className={styles.cards}>
              <span><ShieldCheck size={32} /></span>
              <div>
                <h2>Segurança</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis nulla nobis aut facere autem officiis sed ducimus! </p>
              </div>
            </div>

          </div>
          <div className={styles.content_img}>
            <Image
              src="/assets/img-office.jpg"
              width={500}
              height={500}
              alt=""
            />

          </div>

        </section>
      </div>
    </main>
  )
}
