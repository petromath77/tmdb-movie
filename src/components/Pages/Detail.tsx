import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Container from '../../elements/Container';
import { getDetails } from "../../features/detailSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import MovieCardDetail from '../Movies/MovieCardDetail';

const Detail:React.FC = () => {
  const { movieId } = useParams();
  const { data, loading, error } = useAppSelector(state => state.detail);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getDetails(movieId));
  }, [dispatch, movieId]);

  return (
    <DetailItem>
      <Container>
        { loading && (<h3 className='loading'>Loading...</h3>)}
        {error && (<h3 className='loading'>Server Error: {error}</h3>)}
        {data && !loading && <MovieCardDetail id={data?.id} title={data?.title} overview={data?.overview} poster_path={data?.poster_path} release_date={data?.release_date} vote_average={data?.vote_average} isFavorite={data?.isFavorite}/>}
      </Container>
    </DetailItem>
  )
}

const DetailItem = styled.section``;

export default Detail