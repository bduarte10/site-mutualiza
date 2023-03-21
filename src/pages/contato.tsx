import { FacebookLogo, InstagramLogo, LinkedinLogo } from "phosphor-react";
import styles from "../styles/contato.module.css";

export default function Contato() {
  return (
    <main>
      <div className={styles.content_title}>
        <h2>Contato</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="container">
        <div className={styles.content_items}>

          <div className={styles.content_items_higher}>
            <div>
              <h3>Dúvidas? Ligue para nós!</h3>
              <span>(11) 90909-0897</span>
              <p>De segunda a sexta das 9h às 21h.</p>

              <h3>Suporte ao cliente</h3>
              <span>atendimento@mutualiza.com.br</span>
              <p>Dúvidas? Envie-nos um e-mail! <br />
                Responderemos o mais rápido possível.</p>
            </div>

            <div>
              <a href="#">
                <InstagramLogo size={35} />
              </a>
              <a href="#">
                <FacebookLogo size={35} />
              </a>
              <a href="#">
                <LinkedinLogo size={35} />
              </a>
            </div>




          </div>

          <div className={styles.content_items_bottom}>

            <form action="/send-data-here" method="post">
              <h2>Duvidas, sugestões, elogios... <br />
                Entre em contato!</h2>

              <input type="text" id="name" name="name" placeholder="Digite seu nome" />

              <input type="text" id="email" name="e-mail" placeholder="Digite seu e-mail" />

              <input type="number" id="phone" name="phone" placeholder="Digite seu número" />
              <label>Conte-nos a sua necessidade</label>
              <textarea name="" id="" cols={20} rows={10}></textarea>
              <button type="submit">Enviar</button>
            </form>

          </div>

        </div>
      </div>

    </main>
  )
}
