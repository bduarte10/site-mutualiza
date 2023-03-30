import styles from "../styles/sobre.module.css";
import Image from "next/image";
import { AccordionComponent } from "../components/Accordion"



export default function Sobre() {
  return (
    <main className={styles.section}>
      <div className={styles.content_title}>
        <h2>Sobre nós</h2>
      </div>
      <div className="container">
        <section className={styles.content_items_higher}>

          <div className={styles.content_img}>
            <div className={styles.content_img_front}>
              <Image
                src="/assets/img-sobre.jpg"
                width={500}
                height={500}
                alt=""
              />
            </div>
          </div>

          <div className={styles.content_text}>

            <h2>História</h2>
            <p>O seu negócio e o meio ambiente em uma relação mutuamente benéfica!
              <br />
              <br />
              A partir desta concepção se deu a origem da Mutualiza Engenharia Ambiental. Somos uma empresa de engenharia e consultoria, com atuação em diversas frentes ambientais.
              <br />
              <br />
              Acreditamos que podemos nos desenvolver de forma mútua com o meio ambiente, aproveitando seus recursos de forma responsável e com segurança para as gerações futuras. Para adequar a sua empresa neste cenário, garantindo o cumprimento das legislações ambientais aplicáveis ao seu negócio, nós podemos te ajudar!
              <br />
              <br />
              A Mutualiza conta com uma equipe de profissionais altamente capacitados e experientes para realizar as análises técnicas necessárias para os mais diversos serviços ambientais de forma personalizada, eficiente e segura.
              <br />
              <br />
              Entre em contato conosco e saiba mais sobre como podemos resolver a demanda ambiental do seu negócio.</p>

          </div>

        </section>

        <section className={styles.content_items_bottom}>

          <div className={styles.content_accordion}>

            <AccordionComponent />

          </div>

          <div className={styles.content_img}>
            <div className={styles.content_img_front}>
              <Image
                src="/assets/img-office.jpg"
                width={500}
                height={500}
                alt=""
              />

            </div>

          </div>

        </section>
      </div>
    </main>
  )
}
