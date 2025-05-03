import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { MovieSearchApiResponse } from '../../../libs/types/MovieTypes';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

//Css
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './MovieSearchRes.css';
import handleImgError from '../../../components/handleImgError';

export default function MovieSearchRes() {
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
            <div className="flex flex-col items-center gap-3 w-full h-[auto]">

                <div className='container w-full h-[100%]'>
                    <div className="relative">
                        <Swiper
                            effect={'coverflow'}
                            grabCursor={true}
                            centeredSlides={true}
                            slidesPerView={'auto'}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={true}
                            history={{ enabled: false }}
                            mousewheel={{ enabled: true }}
                            modules={[EffectCoverflow, Pagination]}
                            className="swiper"
                        >
                            {movieSearchData.Search.map((movie) => (
                                <SwiperSlide key={movie.imdbID} className='swiper-slide h-full'>
                                    <div className="hover:cursor-pointer" key={movie.imdbID} onClick={() => handleOnClick(movie.imdbID)}>
                                        <img
                                            src={movie.Poster}
                                            key={movie.imdbID}
                                            onError={handleImgError}
                                            alt={`${movie.Title} Movie Poster`}
                                            className='h-full'
                                        />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div className='w-full h-full'>
                    {params.movieId && <Outlet />}
                </div>

            </div>
        </div >
    );
}
