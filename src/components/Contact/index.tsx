import { InstagramLogo, FacebookLogo, LinkedinLogo, Phone, EnvelopeSimple } from "phosphor-react"
import styles from "./contact.module.css";
import { motion } from "framer-motion";

export function Contact() {
    return (
        <div className="container">
            <div className={styles.content_items}>

                <motion.div className={styles.content_items_higher}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}

                >
                    <div>
                        <span><EnvelopeSimple size={32} />
                            atendimento@mutualiza.com.br
                        </span>
                        <p>Dúvidas? Envie-nos um e-mail! <br />
                            Responderemos o mais rápido possível.</p>
                    </div>

                    <div>
                        <span><Phone size={32} />
                            (11) 90909-0897
                        </span>
                        <p>De segunda a sexta das 9h às 21h.</p>
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


                </motion.div>

                <motion.div className={styles.content_items_bottom}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >

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

                </motion.div>

            </div>
        </div>
    )
}