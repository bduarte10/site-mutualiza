import styles from './hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero_bg}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.content_items}>
            <div>
              <h1>
                Resolvemos suas demandas ambientais com resultados efetivos.
              </h1>
              <h3>
                We offer a professional advice, guidance and actionable
                solutions to businesses experiencing issues they can’t deal with
                in-house.
              </h3>

              <button>Fale conosco</button>
            </div>
          </div>
          <div className={styles.content_img}>
            <div>
              <img
                src=""
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
