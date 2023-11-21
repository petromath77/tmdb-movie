import { Link } from 'react-router-dom';
import Container from '../../elements/Container';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/storeHooks';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../features/userSlice';
import { useState } from 'react';
import Error from '../../UI/Error';
import { useNavigate } from 'react-router-dom';

const Register:React.FC = () => {
  const dispatch = useAppDispatch();
  const [validation, setValidation] = useState('');
  const navigate = useNavigate();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }));
        navigate('/');
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setValidation("The email address is already in use");
      
        } else if (error.code === "auth/invalid-email") {
          setValidation("The email address is not valid.");
           
        } else if (error.code === "auth/operation-not-allowed") {
          setValidation("Operation not allowed.");
        } else if (error.code === "auth/weak-password") {
          setValidation("The password is too weak.");
        }
      });
  }

  return (
    <LoginRegister>
        <Container>
            <LoginRegisterWrapper>
                <h2 className='header'>Register</h2>
                <Form title="Sign Up" handleSubmit={handleRegister}/>
                {validation && <Error title={validation} />}
                <LoginRegisterLine>Already Have An Account <Link className='link' to='/login'>Login</Link></LoginRegisterLine>
            </LoginRegisterWrapper>
        </Container>
    </LoginRegister>
  )
}

const LoginRegister = styled.section``;

const LoginRegisterWrapper = styled.div`
    background-color: ${({theme}) => theme.headerColor};
    max-width: 360px;
    padding: 20px;
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
`;

const LoginRegisterLine = styled.p`
  margin: 15px 0;
`

export default Register