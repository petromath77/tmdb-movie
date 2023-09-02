import { createGlobalStyle } from 'styled-components'

export interface DefaultTheme {
    background: string,
    color: string,
    navHover: string
  }

export default createGlobalStyle<{ theme: DefaultTheme }>`

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-size: 16px;
    line-height: 1.2;
    transition: all 0.3s linear;
  }

  a, 
  button {
    transition: all 0.3s linear;
  }

  button {
    background-color: ${({ theme }) => theme.background};
  }

  a {
    color: ${({ theme }) => theme.color};
    text-decoration: none;
  }

  .navLink {
    color: ${({ theme }) => theme.color};
    font-weight: 700;

    &:hover {
      color: ${({ theme }) => theme.navHover};
    }
  }
  
  .active {
    color: ${({ theme }) => theme.navHover};
  }

  section {
    padding: 40px 0;
  }
`