import React from 'react';
import { useAppSelector } from '../../hooks/storeHooks';
import MovieListDetail from '../Movies/MovieListDetail';

const Favorites = () => {
  const data = useAppSelector(state => state.favorite);

  return (
    <MovieListDetail data={data}/>
  )
}

export default Favorites