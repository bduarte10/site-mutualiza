import styles from "../styles/sobre.module.css";
import Image from "next/image";


export default function Sobre() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content_title}>
            <h2>Sobre Nós</h2>
          </div>
          <div className={styles.content_items}>
          <div className={styles.content_text}>
            <span><p>WHAT WE DO</p></span>
            <h2>Transactions & corporate finance</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget.
            </p>
          </div>
          <div className={styles.content_img}>
          <Image
                src="/assets/img-sobre.png"
                width={550}
                height={550}
                alt=""
              />
          </div>
          </div>
          <div className={styles.content_sub_items}>
            <div>
              <h2>A Mutualiza</h2>
              <p>A Natureza Consultoria Ambiental é uma empresa que se dedica à preservação do meio ambiente e à conscientização da população sobre a importância da sustentabilidade. Com uma equipe de profissionais altamente capacitados e comprometidos com a causa ambiental, a empresa presta serviços de consultoria e assessoria para empresas e órgãos governamentais.

Através de estudos e diagnósticos ambientais, a Natureza Consultoria Ambiental identifica os impactos gerados pelas atividades das empresas e propõe soluções sustentáveis que visam minimizar esses impactos e preservar os recursos naturais. Além disso, a empresa também desenvolve projetos de educação ambiental, com o objetivo de conscientizar a população sobre a importância da preservação do meio ambiente.

Um dos projetos mais recentes desenvolvidos pela Natureza Consultoria Ambiental foi a implementação de um sistema de coleta seletiva de resíduos sólidos em uma grande indústria do ramo alimentício. Através de uma análise detalhada dos processos produtivos da empresa, a consultoria identificou os principais resíduos gerados e propôs um sistema de coleta seletiva que permitiu a separação e destinação correta desses resíduos, contribuindo para a redução dos impactos ambientais gerados pela empresa.

Outro projeto desenvolvido pela Natureza Consultoria Ambiental foi a elaboração de um plano de gestão ambiental para uma construtora que atua na região metropolitana da cidade. Através de um diagnóstico ambiental, a consultoria identificou os principais impactos gerados pelas atividades da construtora e propôs medidas mitigadoras que visam reduzir esses impactos e preservar os recursos naturais.

Além dos serviços de consultoria e assessoria, a Natureza Consultoria Ambiental também desenvolve projetos de educação ambiental em escolas e comunidades. O projeto “Escola Sustentável”, por exemplo, tem como objetivo conscientizar os alunos sobre a importância da preservação do meio ambiente e incentivar práticas sustentáveis no ambiente escolar.

A Natureza Consultoria Ambiental acredita que a preservação do meio ambiente é uma responsabilidade de todos e está comprometida em contribuir para a construção de um futuro mais sustentável. Seja qual for o seu desafio ambiental, a Natureza Consultoria Ambiental está pronta para ajudar a sua empresa a encontrar soluções sustentáveis e preservar os recursos naturais. Entre em contato conosco e saiba como podemos ajudá-lo.</p>
            </div>
            <div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
              <div>Lorem</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
