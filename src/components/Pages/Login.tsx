import { Link } from 'react-router-dom';
import Container from '../../elements/Container';
import styled from 'styled-components';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const Login:React.FC = () => {
  return (
    <LoginRegister>
        <Container>
            <LoginRegisterWrapper>
                <h2 className='header'>Login</h2>
                <p>Or <Link className='link' to='/register'>Register</Link></p>
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

export default Login