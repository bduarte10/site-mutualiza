import styles from './contact.module.css';
import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';



export function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    let success = false;

    try {
      await axios.post('/api/contact', { name, email, phone, message });
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      success = true;
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu um erro ao enviar o e-mail!');
    } finally {
      setIsLoading(false);
      if (success) {
        toast.success('E-mail enviado com sucesso!');
      }
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