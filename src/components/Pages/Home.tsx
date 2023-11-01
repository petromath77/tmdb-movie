import React from 'react';
import { useEffect } from "react";
import MovieList from '../Movies/MovieList';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { getMovies } from '../../features/movieSlice';

const Home: React.FC = () => {
  const { data, loading, error } = useAppSelector(state => state.movies);
  const detail: boolean = false;
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <MovieList data={data} loading={loading} error={error} movieDetails={detail} />
  )
}

export default Home