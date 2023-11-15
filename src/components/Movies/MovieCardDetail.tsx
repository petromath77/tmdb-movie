import React from 'react'
import styled from 'styled-components';
import { useAppDispatch } from "../../hooks/storeHooks";
import { addFavorite } from "../../features/favoriteSlice";
import { MdFavorite } from 'react-icons/md';
import { MovieItemDetail } from '../../types/data';

const MovieCardDetail: React.FC<MovieItemDetail> = (props) => {
    const {title, overview, poster_path, release_date, vote_average, isFavorite} = props;

    const dispatch = useAppDispatch();

    const favoriteHandler = (e: any) => {
      dispatch(addFavorite(props));
    }

  return (
    <MovieCardItemDetail>
        <MovieCardImage className="image-wrap">
        <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title} loading='lazy'/>
        </MovieCardImage>
        <MovieCardContent className="content">
            <h2>{title}</h2>
            <h4>Release Date: {release_date}</h4>
            <h4>Rate: {vote_average}</h4>
            <MovieCardDesc className="overview">{overview}</MovieCardDesc>
            { !isFavorite ? <AddFavorite onClick={(e) => favoriteHandler(e)}>Add To Favorite<MdFavorite /></AddFavorite> : '' }
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

  @media (max-width: 640px) {
    flex-direction: column;
  }

  .image-wrap {
    width: 50%;
    height: auto;

    @media (max-width: 640px) {
      width: 100%;
      height: 400px;
    }
  }

  .content {
    flex-direction: column;
    justify-content: flex-start;
    row-gap: 30px;
    width: 50%;

    @media (max-width: 640px) {
      width: 100%;
    }
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
  padding: 40px 20px;
  column-gap: 20px;
`

const MovieCardDesc = styled.div`
    height: 98px;
    overflow: hidden;
    letter-spacing: 1px;
`

const AddFavorite  = styled.button`
  display: flex;
  align-items: center;
  padding: 7px 10px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  color: ${({theme}) => theme.color};
  font-weight: 800;
  gap: 10px;

  &:hover {
    transform: translateY(-3px);

    svg {
      fill: #8f4444;
    }
  }
}
  svg {
    font-size: 20px;
    fill: #707070;
    transition: all .3s ease;
  }
`

export default MovieCardDetail