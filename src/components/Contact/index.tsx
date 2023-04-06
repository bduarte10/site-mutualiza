import { InstagramLogo, FacebookLogo, LinkedinLogo, Phone, EnvelopeSimple } from "phosphor-react"
import styles from "./contact.module.css";
import { motion } from "framer-motion";
import { Form } from "./Form";

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
                        <a href="https://www.instagram.com/mutualiza/?next=%2F"
                            target="_blank">
                            <InstagramLogo size={35} />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100090395072401&mibextid=ZbWKwL"
                            target="_blank">
                            <FacebookLogo size={35} />
                        </a>
                        <a href="https://www.linkedin.com/company/mutualiza-engenharia-ambiental/about/"
                            target="_blank">
                            <LinkedinLogo size={35} />
                        </a>
                    </div>


                </motion.div>

                <motion.div className={styles.content_items_bottom}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                >

                    <Form />

                </motion.div>

            </div>
        </div>
    )
}