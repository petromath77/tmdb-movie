import { useState } from 'react';

type FormProps = {
    title: string | null,
    handleSubmit:  (email: any, password: any) => void
  };

const Form = (props: FormProps) => {
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
        <button onClick={() => props.handleSubmit(email, pass)}>
            {props.title}
        </button>
    </div>
  )
}

export default Form