import { Link } from "react-router-dom";
import styled from 'styled-components';
import { MovieItem } from '../../types/data';
import { useAppDispatch } from "../../hooks/storeHooks";
// import { addFavorite } from "../../features/favoriteSlice";
import { MdFavorite } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

const MovieCard: React.FC<MovieItem> = (props: any) => {
  const {id, title, poster_path, vote_average, isFavorite} = props;

  const dispatch = useAppDispatch();

  // const favoriteHandler = (e: any) => {
  //   e.preventDefault();
  //   dispatch(addFavorite(props));
  // }

  return (
    <>
      <MovieCardItem>
        <Link to={`/${id}`}>
          <MovieCardImage>
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`}
                alt={title} loading='lazy'/>
            <MovieStar>
              <h4>{vote_average}</h4>
              <AiFillStar />
            </MovieStar>
          </MovieCardImage>
          <MovieCardContent>
            <h4>{title}</h4>
            {/* { !isFavorite ? <AddFavorite onClick={(e) => favoriteHandler(e)}><MdFavorite /></AddFavorite> : '' } */}
            <AddFavorite><MdFavorite /></AddFavorite>
          </MovieCardContent>
        </Link>
      </MovieCardItem>
    </>

  )
}

const MovieCardItem  = styled.div`
  background-color: ${({theme}) => theme.headerColor};
  width: 30%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 10px 13px -7px #000000, 0px 0px 10px 4px rgba(0,0,0,0);

  @media (max-width: 991px) {
    width: 40%;
  }

  @media (max-width: 640px) {
    width: 60%;
  }

  @media (max-width: 480px) {
    width: 80%;
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

const MovieStar = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.7);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 15px;
  column-gap: 7px;

  h4 {
    color: white;
  }

  svg {
    font-size: 22px;
    fill: #FCE100;
  }
`

const MovieCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px;
  column-gap: 20px;
`

const AddFavorite  = styled.button`
  display: flex;
  padding: 3px 7px;
  border-radius: 5px;
  border: none;
  cursor:  pointer;

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

export default MovieCard