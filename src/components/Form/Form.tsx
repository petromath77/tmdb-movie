import { useState } from 'react';
import styled from 'styled-components';

type FormProps = {
    title: string,
    handleSubmit:  (email: string, password: string) => void
  };

const Form:React.FC<FormProps> = ({title, handleSubmit}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
  return (
    <div>
        <Input 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
        />
        <Input 
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            placeholder="Password"
        />
        <button onClick={() => handleSubmit(email, pass)}>
            {title}
        </button>
    </div>
  )
}

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 7px 10px;
  margin: 20px 0;
  border-radius: 5px;
  border: 1px solid #383849;

  &:focus {
    color: #212529;
    background-color: #fff;
    border-color: #bdbdbd;
    outline: 0;
    box-shadow: 0 0 0 3px rgba(158, 158, 158, 0.25);
  }
`
export default Form