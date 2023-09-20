import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';
import { ThemeProvider } from 'styled-components';
import { useAppSelector } from './hooks/storeHooks';
import { blackTheme, lightTheme } from './styles/theme';
import GlobalStyles from './styles/global';
import Footer from './components/Footer/Footer';


function App() {
  const { darkTheme } = useAppSelector(state => state);
  return (
    <>
      <ThemeProvider theme={darkTheme ? blackTheme : lightTheme}>
        <BrowserRouter>
          <Header />
          <Pages />
          <Footer />
        </BrowserRouter>
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
