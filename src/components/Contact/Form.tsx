import styles from './contact.module.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

const promise = () => new Promise((resolve) => setTimeout(resolve, 2000));

export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    toast.promise(promise(), {
      loading: 'Enviando...',
      success: (data) => {
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        return 'E-mail enviado com sucesso!';
      },
      error: 'Ocorreu um erro ao enviar o e-mail!',
    });

    try {
      await axios.post('/api/contact', { name, email, phone, message });
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro ao enviar o e-mail!');
    } finally {
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsLoading(false);
    }
  };


  return (
    <form className={styles.content_items_bottom} onSubmit={handleSubmit}>
      <h2>Fale Conosco!</h2>

      <input
        type='text'
        id='name'
        name='name'
        required
        placeholder='Digite seu nome'
        value={name}
        onChange={(event) => setName(event.target.value)}
      />

      <input
        type='text'
        id='email'
        name='e-mail'
        required
        placeholder='Digite seu e-mail'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        type='number'
        id='phone'
        name='phone'
        placeholder='Digite seu número'
        value={phone}
        onChange={(event) => setPhone(event.target.value)}
      />

      <label>Conte-nos a sua necessidade</label>
      <textarea
        name=''
        id=''
        cols={20}
        rows={10}
        required
        value={message}
        onChange={(event) => setMessage(event.target.value)}></textarea>

      <button type='submit' disabled={isLoading}>
        Enviar
      </button>
    </form>
  );
}
