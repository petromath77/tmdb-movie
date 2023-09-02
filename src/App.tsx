import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import Pages from './components/Pages/Pages';


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </>
  );
}

export default App;
