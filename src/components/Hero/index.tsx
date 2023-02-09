import styles from './hero.module.css'

export function Hero() {

    return(
        <section>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.content_items}>
                        <div>
                            <h1>Resolvemos <br /> Suas demandas <br /> Ambientais<br /> Com resultados <br /> Efetivos.</h1>

                            <button>Fale conosco</button>
                        </div>
                    </div>
                    <div className={styles.content_img}>
                        <div><img src="" alt="" /></div>
                    </div>
                </div>
            </div>
        </section>
    )
}