import { useState } from 'react';
import Title from '../../reusables/Title/Title';
import './Contact.scss';

const Contact = () => {
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.name);
  };

  return (
    <div>
      <Title title="contact" />
      <input
        type="text"
        value={email}
        onChange={handleEmail}
      />
    </div>
  );
};

export default Contact;
