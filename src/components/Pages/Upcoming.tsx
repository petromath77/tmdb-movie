import { useEffect } from "react";
import MovieList from '../Movies/MovieList';
import { useAppSelector, useAppDispatch } from '../../hooks/storeHooks';
import { getUpcoming } from '../../features/upcomingSlice';

const Upcoming:React.FC = () => {
  const { data, loading, error } = useAppSelector(state => state.upcoming);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUpcoming());
  }, [dispatch]);

  return (
    <MovieList data={data} loading={loading} error={error}/>
  )
}

export default Upcoming