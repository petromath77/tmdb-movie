import React from 'react'
import styled from 'styled-components';
import { MovieItemDetail } from '../../types/data';

const MovieCardDetail: React.FC<MovieItemDetail> = (props) => {
    const {title, overview, poster_path, release_date, vote_average} = props;

  return (
    <MovieCardItemDetail>
        <MovieCardImage className="image-wrap">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title} loading='lazy'/>
        </MovieCardImage>
        <MovieCardContent className="content">
            <h4>{title}</h4>
            <h4>Release Date: {release_date}</h4>
            <h4>Rate: {vote_average}</h4>
            <MovieCardDesc className="overview">{overview}</MovieCardDesc>
        </MovieCardContent>
    </MovieCardItemDetail>
  )
}

const MovieCardItemDetail  = styled.div`
  background-color: ${({theme}) => theme.headerColor};
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 10px 4px rgba(0,0,0,0);

  .image-wrap {
    width: 50%;
    height: auto;
  }

  .content {
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 30px;
    width: 50%;
  }

  .overview {
    height: auto;
  }
`

const MovieCardImage = styled.div`
  position: relative;
  width: 100%;
  height: 400px;

  @media (max-width: 991px) {
    height: 350px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const MovieCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  column-gap: 20px;
`

const MovieCardDesc = styled.div`
    height: 98px;
    overflow: hidden;
`

export default MovieCardDetail