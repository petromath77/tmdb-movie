import { Link } from 'react-router-dom';
import Container from '../../elements/Container';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/storeHooks';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../features/userSlice';

const Register:React.FC = () => {
  const dispatch = useAppDispatch();

  const handleRegister = (email: string, password: string) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.refreshToken
        }))
      })
      .catch(console.error);
  }

  return (
    <LoginRegister>
        <Container>
            <LoginRegisterWrapper>
                <h2 className='header'>Register</h2>
                <Form title="Sign Up" handleSubmit={handleRegister}/>
                <p>Already Have An Account <Link className='link' to='/login'>Login</Link></p>
            </LoginRegisterWrapper>
        </Container>
    </LoginRegister>
  )
}

const LoginRegister = styled.section``;

const LoginRegisterWrapper = styled.div`
    background-color: ${({theme}) => theme.headerColor};
    max-width: 480px;
    padding: 20px;
    text-align: center;
    margin: 0 auto;
    border-radius: 10px;
`;

export default Register