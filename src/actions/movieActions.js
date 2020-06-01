import { FETCH_MOVIES } from './types';
import Config from "../config";

export const fetchMovies = () => dispatch => {
    fetch(`${Config.BACKEND_URL}/api/v1/movies`)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_MOVIES,
            payload: data.data
        }));
};

export const fetchMovie = () => dispatch => {
    fetch(`${Config.BACKEND_URL}/api/v1/movies`)
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_MOVIES,
            payload: data.data
        }));
};