import React from 'react';
import styled from 'styled-components';
import { MovieFavoriteState } from '../../types/data';
import Container from '../../elements/Container';
import MovieCard from './MovieCard';

const MovieListDetail: React.FC<MovieFavoriteState> = (props) => {
    const { data } = props;

    return (
        <MovieSection>
            <Container>
                <MovieListItems>
                    {data?.length ? (
                            data?.map((item: { id: any; title: any; overview: any; poster_path: any; release_date: any; vote_average: any; }) => {
                            const { id, title, overview, poster_path, release_date, vote_average } = item;
                            return <MovieCard key={id} title={title}
                            overview={overview} poster_path={poster_path} release_date={release_date} vote_average={vote_average} id={id}/>
                            })
                        )
                    :
                        <MovieEmptyList className='white'>Favorite List Is Empty :(</MovieEmptyList>
                    }
                </MovieListItems>
            </Container>
        </MovieSection>
    );
}

const MovieSection = styled.section``

const MovieListItems = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`

const MovieEmptyList = styled.div`
    letter-spacing: 1.5px;
    font-size: 20px;
    font-weight: 700;
`

export default MovieListDetail