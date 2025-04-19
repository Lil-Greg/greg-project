import { useLoaderData } from 'react-router-dom';
import MovieApiResponse from '../../../libs/types/MovieTypes';

export default function MovieCard() {
    const movieData: MovieApiResponse = useLoaderData();
    console.log("Movie Data in Card: ", movieData);
    return (
        <div>
            {JSON.stringify(movieData)}
            <h1>{movieData.Title}</h1>
            <img src={movieData.Poster} alt={`${movieData.Title} Poster`} />
        </div>
    )
}
