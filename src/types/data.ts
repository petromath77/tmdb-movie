export interface MovieState {
    loading: boolean,
    error: null | string,
    data: null | { results: any[] }
}

export interface MovieDetailState {
    loading: boolean,
    error: null | string,
    data: null | any
}

export interface MovieFavoriteState {
  data: null | any[]
}

export interface MovieItem {
    id: number;
    title: string;
    overview: string;
    poster_path: string;
    release_date: string;
    vote_average: number;
  }

  export interface MovieItemDetail extends  MovieItem {
    isFavorite: boolean;
  }

  export interface UserState {
    email: string | null;
    token: number | null;
    id: number | null;
  }