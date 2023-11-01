import React from 'react';
import styled from 'styled-components';
import { MovieState } from '../../types/data';
import Container from '../../elements/Container';
import MovieCard from './MovieCard';

const MovieList: React.FC<MovieState> = (props) => {
    const { data, loading, error, movieDetails } = props;

    console.log(data?.results);
  return (
    <MovieSection>
        <Container>
            <MovieListItems>
                { loading === true && (<h3>Loading...</h3>)}
                {error && (<h3>Server Error: {error}</h3>)}
                {data && (
                    data?.results.map(result => {
                    const { id, title, overview, poster_path, release_date, vote_average } = result;
                    return <MovieCard key={id} title={title}
                    overview={overview} poster_path={poster_path} release_date={release_date} vote_average={vote_average} id={id} detail={movieDetails} isFavorite={false}/>
                    })
                )}
            </MovieListItems>
        </Container>
    </MovieSection>
  )
}

const MovieSection = styled.section`
`

const MovieListItems = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`

export default MovieList