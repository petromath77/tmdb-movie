import { Link } from "react-router-dom";
import styled from 'styled-components';
import { useAppDispatch } from "../../hooks/storeHooks";
// import { addFavorite } from "../../features/favoriteSlice";
import { MdFavorite } from 'react-icons/md';
import { AiFillStar } from 'react-icons/ai';

interface MovieItem {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
  detail: boolean;
  isFavorite: boolean
}

const MovieCard: React.FC<MovieItem> = (props) => {
  const {id, title, overview, poster_path, release_date, vote_average, detail, isFavorite} = props;

  const dispatch = useAppDispatch();

  // const favoriteHandler = (e: any) => {
  //   e.preventDefault();
  //   dispatch(addFavorite(props));
  // }

  return (
    <>
      {detail !== true ? 
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
            </MovieCardContent>
          </Link>
        </MovieCardItem>
        : 
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
      }
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
  height: 450px;

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

const MovieCardDesc = styled.div`
    height: 98px;
    overflow: hidden;
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