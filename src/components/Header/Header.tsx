import React from 'react'
import Container from '../../elements/Container'
import styled from 'styled-components'
import { NavLink, Outlet } from 'react-router-dom'
import IconTheme from '../../elements/IconTheme'

const Header = () => {
    const user = localStorage.getItem('user');

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
                <IconTheme />
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
`

const MenuNav = styled.div`
    display: flex;
    column-gap: 20px;
`

export default Header