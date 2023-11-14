import { useState } from 'react';

type FormProps = {
    title: string,
    handleSubmit:  (email: string, password: string) => void
  };

const Form:React.FC<FormProps> = ({title, handleSubmit}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  return (
    <div>
        <input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
        />
        <input 
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
        />
        <button onClick={() => handleSubmit(email, pass)}>
            {title}
        </button>
    </div>
  )
}

export default Form