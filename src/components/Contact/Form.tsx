import styles from './contact.module.css';
import { useState } from 'react';
import nodemailer from 'nodemailer';

export function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const transporter = nodemailer.createTransport({
            host: 'smtp.dreamhost.com',
            port: 465,
            secure: true,
            auth: {
                user: 'contato@mutualiza.com.br',
                pass: 'ACY66c6P'
            }
        });
        const mailOptions = {
            from: email,
            to: 'contato@mutualiza.com.br',
            subject: 'New message from website',
            html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
      `
        };
        await transporter.sendMail(mailOptions);
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        alert('Mensagem enviada com sucesso!');
    };

    return (
        <form className={styles.content_items_bottom} onSubmit={handleSubmit}>
            <h2>Fale Conosco!</h2>

            <input type="text" id="name" name="name" placeholder="Digite seu nome" onChange={event => setName(event.target.value)} />

            <input type="text" id="email" name="e-mail" placeholder="Digite seu e-mail" onChange={event => setEmail(event.target.value)} />

            <input type="number" id="phone" name="phone" placeholder="Digite seu número" onChange={event => setPhone(event.target.value)} />

            <label>Conte-nos a sua necessidade</label>
            <textarea name="" id="" cols={20} rows={10} onChange={event => setMessage(event.target.value)}></textarea>

            <button type="submit">Enviar</button>
        </form>
    );
}