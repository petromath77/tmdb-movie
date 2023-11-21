import { createGlobalStyle, withTheme } from 'styled-components';
import { ThemeProps } from './theme';

type GlobalThemeProps = {
  theme: ThemeProps;
 };

 const globalStyle = createGlobalStyle`
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.color};
    font-size: 16px;
    line-height: 1.2;
    transition: all 0.3s linear;
  }

  #root {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  a, 
  button {
    transition: all 0.3s linear;
  }

  button {
    background-color: ${({ theme }: GlobalThemeProps) => theme.background};
    color: ${({ theme }: GlobalThemeProps) => theme.color};
    padding: 7px 15px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid;
    border-color: ${({ theme }: GlobalThemeProps) => theme.color};
    cursor: pointer;
    font-weight: 700;

    &:hover {
      background-color: #858585;
    }
  }

  a {
    color: ${({ theme }: GlobalThemeProps) => theme.color};
    text-decoration: none;
  }

  .navLink {
    color: ${({ theme }: GlobalThemeProps) => theme.color};
    font-weight: 700;

    &:hover {
      color: ${({ theme }: GlobalThemeProps) => theme.navHover};
    }
  }
  
  .active {
    color: ${({ theme }: GlobalThemeProps) => theme.navHover};
  }

  .link {
    color: ${({ theme }: GlobalThemeProps) => theme.color};
    text-decoration: underline;

    &:hover {
      color: ${({ theme }: GlobalThemeProps) => theme.navHover};
    }
  }

  section {
    padding: 80px 0;
  }

  .loading {
    display: block;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
  }

  .header {
    margin-bottom: 30px;
  }
`

export default withTheme(globalStyle);