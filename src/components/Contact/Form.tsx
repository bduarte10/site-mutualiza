import styles from './contact.module.css';
import { useState } from 'react';
import axios from 'axios';


export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsLoading(true);

        try {
            await axios.post('/api/sendEmail', { name, email, phone, message });
            setName('');
            setEmail('');
            setPhone('');
            setMessage('');
            alert('Mensagem enviada com sucesso!');
        } catch (error) {
            alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente mais tarde.');
        }

        setIsLoading(false);
    };

    return (
        <form className={styles.content_items_bottom} onSubmit={handleSubmit}>
            <h2>Fale Conosco!</h2>

            <input type="text" id="name" name="name" placeholder="Digite seu nome" value={name} onChange={event => setName(event.target.value)} />

            <input type="text" id="email" name="e-mail" placeholder="Digite seu e-mail" value={email} onChange={event => setEmail(event.target.value)} />

            <input type="number" id="phone" name="phone" placeholder="Digite seu número" value={phone} onChange={event => setPhone(event.target.value)} />

            <label>Conte-nos a sua necessidade</label>
            <textarea name="" id="" cols={20} rows={10} value={message} onChange={event => setMessage(event.target.value)}></textarea>

            <button type="submit" disabled={isLoading}>Enviar</button>
        </form>
    );
}
