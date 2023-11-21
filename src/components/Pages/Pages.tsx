import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Favorites from './Favorites';
import Upcoming from './Upcoming';
import Register from './Register';
import Login from './Login';



const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
    </Routes>
  )
}

export default Pages