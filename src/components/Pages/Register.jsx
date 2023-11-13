import { Link } from 'react-router-dom';
import Container from '../../elements/Container';
import styled from 'styled-components';

const Register = () => {
  return (
    <LoginRegister>
        <Container>
            <LoginRegisterWrapper>
                <h2 className='header'>Register</h2>
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