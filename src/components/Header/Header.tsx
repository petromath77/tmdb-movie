import Container from '../../elements/Container';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';
import IconTheme from '../../elements/IconTheme';
import { useAppDispatch } from '../../hooks/storeHooks';
import { removeUser } from '../../features/userSlice';
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const user = localStorage.getItem('user');
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const unAuthUser = () => {
        const auth = getAuth();
    
        signOut(auth).then(() => {
          dispatch(removeUser());
          navigate('/');
        })
          .catch(console.error);
    }

    console.log(user);
  return (
    <HeaderSection>
        <Container>
            <HeaderWrapper>
                <MenuNav>
                    <NavLink className='navLink' to='/'>Movies</NavLink>
                    <NavLink className='navLink' to='/upcoming'>Upcoming</NavLink>
                    {user && <NavLink className='navLink' to='/favorites'>Favorites</NavLink>}
                </MenuNav>
                <MenuRight>
                    <MenuAuth>
                        {!user && <SignButton>
                                    <NavLink to='/register'>Sign In</NavLink>
                                </SignButton>
                        }
                        {user && <SignButton onClick={unAuthUser}>Sign Out</SignButton>}
                    </MenuAuth>
                    <IconTheme />
                </MenuRight>
            </HeaderWrapper>
        </Container>
        <Outlet />
    </HeaderSection>
  )
}

const HeaderSection = styled.header`
    background-color: ${({theme}) => theme.headerColor};
    padding: 20px 0;
`
const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 30px;
    align-items: center;

    @media (max-width: 480px) {
        justify-content: center;
      }
    
`

const MenuNav = styled.div`
    display: flex;
    column-gap: 20px;
`

const MenuRight = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media (max-width: 480px) {
        width: 100%;
        justify-content: space-between;
    }
`

const MenuAuth = styled.div``

const SignButton = styled.button`
    margin: 0;
`

export default Header