import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detail from './Detail';
import Favorites from './Favorites';
import Upcoming from './Upcoming';



const Pages = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:movieId' element={<Detail />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/upcoming' element={<Upcoming />} />
    </Routes>
  )
}

export default Pages