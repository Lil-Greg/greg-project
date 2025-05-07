import { useLoaderData } from 'react-router-dom';
import MovieApiResponse from '../../../libs/types/MovieTypes';
import handleImgError from '../../../components/handleImgError';
import { Card, CardContent, CardHeader, CardTitle } from '../../../components/card';

import "./MovieSearchRes.css";

export default function MovieCard() {
    const movieData: MovieApiResponse = useLoaderData();
    return (
        <div className='container my-5'>
            <Card className="">
                <CardHeader className='w-full h-[auto]'>
                    <div className="block grid grid-cols-3 pb-5 border-b-2 dark:border-gray-700 border-black outline-offset-5">
                        <img
                            src={movieData.Poster}
                            alt={`${movieData.Title} Poster`}
                            onError={handleImgError}
                            className='inline-block rounded-xl shadow-md dark:shadow-white shadow-dark col-span-1'
                        />
                        <div className="size-[auto] col-span-2 inline col-span-2">

                            <CardTitle className='block text-center mb-2'>
                                <h1 className='underline offset-[10px] text-[3vw] mb-2'>
                                    {movieData.Title}
                                </h1>
                                <h1 className=''>
                                    {movieData.Released}
                                </h1>
                            </CardTitle>

                            <div className="upperEchelon h-[83%] flex flex-col items-center gap-1 justify-between">

                                <div className="container flex flex-col items-center gap-3">
                                    <h3 className='w-[75%] overflow-x-auto py-2'>
                                        <span className='capitalize underline'>
                                            Genre:
                                        </span>
                                        &nbsp;
                                        {movieData.Genre}
                                    </h3>
                                    <h3 className='w-[75%] overflow-x-auto py-2'>
                                        <span className='capitalize underline'>
                                            Type:
                                        </span>
                                        &nbsp;
                                        {movieData.Type}

                                    </h3>
                                    <h3 className='w-[75%] overflow-x-auto py-2'>
                                        <span className='capitalize underline w-full'>
                                            Filmed in:
                                        </span>
                                        &nbsp;
                                        {movieData.Country}
                                    </h3>
                                </div>

                                {/* Credits */}
                                <div className="container flex flex-col items-center">
                                    <h2 className='w-[75%] text-[2.2vw] underline text-center'>Credits</h2>
                                    <div className="w-[75%] flex flex-col items-start gap-2">
                                        <h3 className="w-full py-2">
                                            <span className='underline w-full'>
                                                Director:
                                            </span>
                                            &nbsp;
                                            <span className="capitalize">
                                                {movieData.Director}
                                            </span>
                                        </h3>
                                        <h3 className="w-full py-2">
                                            <span className='underline w-full'>
                                                Writer:
                                            </span>
                                            &nbsp;
                                            <span className="capitalize">
                                                {movieData.Writer}
                                            </span>

                                        </h3>
                                        <h3 className='w-full py-2'>
                                            <span className='underline w-full'>
                                                Actors:
                                            </span>
                                            &nbsp;
                                            <span className="capitalize">
                                                {movieData.Actors}
                                            </span>
                                        </h3>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="w-full overflow-hidden">
                        <div className="flex flex-col items-center gap-2">
                            <div className='flex flex-col items-center gap-1 pb-3 border-b-2 border-gray-700 outline-offset-5'>
                                <h1 className='text-[2.5vw] underline'>
                                    Plot
                                </h1>
                                <p className='block text-center'>
                                    {movieData.Plot}
                                </p>
                            </div>
                            <div className='flex flex-col items-center w-full'>
                                <h1 className='text-[2.5vw] underline'>
                                    Should You Watch?
                                </h1>
                                <div className="flex flex-col items-center w-full">

                                    <div className="wholeLine w-full flex flex-row justify-evenly">
                                        <h3>
                                            Awards:&nbsp;
                                            <span>{movieData.Awards}</span>
                                        </h3>
                                        <h3>IMDb Rating:&nbsp;
                                            <span>{movieData.imdbVotes}</span>
                                        </h3>
                                    </div>

                                    <div className="oneELe">

                                    </div>

                                    <div className="oneELe">
                                        <h3>Awards:&nbsp;
                                            <span>{movieData.Awards}</span>
                                        </h3>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </CardContent>
            </Card>


        </div>
    )
}
