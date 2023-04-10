import styles from './contact.module.css'

export function Form() {
    return (

        <form className={styles.content_items_bottom} action="/send-data-here" method="post">
            <h2>Fale Conosco!</h2>

            <input type="text" id="name" name="name" placeholder="Digite seu nome" />

            <input type="text" id="email" name="e-mail" placeholder="Digite seu e-mail" />

            <input type="number" id="phone" name="phone" placeholder="Digite seu número" />
            <label>Conte-nos a sua necessidade</label>
            <textarea name="" id="" cols={20} rows={10}></textarea>
            <button type="submit">Enviar</button>
        </form>
    )
}