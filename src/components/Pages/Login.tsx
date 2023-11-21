import { Link } from 'react-router-dom';
import Container from '../../elements/Container';
import styled from 'styled-components';
import { useAppDispatch } from '../../hooks/storeHooks';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from '../Form/Form';
import { setUser } from '../../features/userSlice';
import { useNavigate } from 'react-router-dom';


const Login:React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
    .then(({user}) => {
      dispatch(setUser({
        email: user.email,
        id: user.uid,
        token: user.refreshToken
      }));
      navigate('/');
    })
      .catch(console.error);
  }

  return (
    <LoginRegister>
        <Container>
            <LoginRegisterWrapper>
                <h2 className='header'>Login</h2>
                <Form title="Sign In" handleSubmit={handleLogin} />
                <LoginRegisterLine>Or <Link className='link' to='/register'>Register</Link></LoginRegisterLine>
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

export default Login