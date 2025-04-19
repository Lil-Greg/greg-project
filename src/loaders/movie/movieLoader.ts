import React from 'react'
import MovieApiResponse, { MovieErrorResponse, MovieSearchApiResponse } from '../../libs/types/MovieTypes';
const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

const movieLoader = async (movieId: string) => {

    const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apiKey=${API_KEY}`);

    if (response.ok === false) {
        throw Error(`Searching for Filtered Movie Brings Error; The Response Object: ${JSON.stringify(response)}`)
    }

    const data = await response.json();

    if (data.Error) {
        throw Error(`Fetch is Good (fetch status - ${response.status}:${response.statusText}) but Error with Requested Data. 
            Error: ${data.Error}`);
    }
    return data;
}

export default movieLoader;
