export interface MovieState {
    loading: boolean,
    error: null | string,
    data: null | { results: any[] },
    movieDetails: boolean | false,
}