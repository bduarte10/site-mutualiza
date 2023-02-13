import { ArrowRight, EnvelopeSimpleOpen, HouseLine, Leaf, Recycle, Scroll, Truck } from 'phosphor-react'
import styles from './services.module.css'
import Link from 'next/link'



export function Services() {
    return (

        <section className={styles.section}>
            <div className="container">
                <div className={styles.content}>
                <div className={styles.content_title}>
                            <h2>Serviços</h2>
                        </div>
                    <div className={styles.content_items}>
                        <div className={styles.card}>


                            <div className={styles.icon}>
                            <span> <Scroll size={42} /></span>                                
                            </div>
                            <div className={styles.text}>
                                <h2>Licenciamento Ambiental</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={styles.link}>
                            <Link href="/servicos"><span><ArrowRight size={32} /></span></Link>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span><Recycle size={42} /></span>
                            </div>
                            <div className={styles.text}>
                                <h2>Plano de Gerenciamento de Resíduos Sólidos</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={styles.link}>
                            <Link href="/servicos"><span><ArrowRight size={32} /></span></Link>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span><Leaf size={42} /></span>
                            </div>
                            <div className={styles.text}>
                                <h2>Cadastro Técnico Federal </h2>
                                <p>Lorem ipsum (IBAMA) sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={styles.link}>
                            <Link href="/servicos"><span><ArrowRight size={32} /></span></Link>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span><Truck size={42} /></span>
                            </div>
                            <div className={styles.text}>
                                <h2>Gerenciamento de Manifesto de Transporte de Resíduos </h2>
                                <p>Lorem ipsum (MTR) sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={styles.link}>
                            <Link href="/servicos"><span><ArrowRight size={32} /></span></Link>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span><HouseLine size={42} /></span>
                            </div>
                            <div className={styles.text}>
                                <h2>Certidão de Esgotamento Sanitário</h2>
                                <p>Lorem ipsum  (Sabesp) sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={styles.link}>
                            <Link href="/servicos"><span><ArrowRight size={32} /></span></Link>
                            </div>
                        </div>


                        <div className={styles.card}>
                            <div className={styles.icon}>
                                <span><EnvelopeSimpleOpen size={42} /></span>
                            </div>
                            <div className={styles.text}>
                                <h2>Diretrizes para abastecimento de água e/ou coleta de Esgotos </h2>
                                <p>Lorem ipsum (Sabesp) sit amet, consectetur adipiscing elit</p>
                            </div>
                            <div className={styles.link}>
                            <Link href="/servicos"><span><ArrowRight size={32} /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

