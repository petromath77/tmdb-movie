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

  section {
    padding: 40px 0;
  }
`

export default withTheme(globalStyle);