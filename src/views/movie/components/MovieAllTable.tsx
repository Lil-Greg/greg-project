import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { MovieSearchApiResponse } from '../../../libs/types/MovieTypes';
import React from 'react';

export default function MovieAllTable() {
    const params = useParams();
    const movieSearchData: MovieSearchApiResponse = useLoaderData();
    const navigate = useNavigate();
    console.log("Search Data inside of All Table: ", movieSearchData);

    const handleOnClick = (movieId: string) => {
        console.log(movieId);
        return navigate(`/movie/${params.title}/${movieId}`);
    }
    return (
        <div className='container'>
            <div className="flex flex-row items-center gap-2">
                {movieSearchData.Search.map((movie) => (
                    <div className="hover:cursor-pointer" key={movie.imdbID} onClick={() => handleOnClick(movie.imdbID)}>
                        <img src={movie.Poster} alt={`${movie.Title} Movie Poster`} />
                        {movie.Title}
                    </div>
                ))}
            </div>
            {params.movieId && <Outlet />}
        </div>
    );
}
