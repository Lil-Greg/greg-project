import { Outlet, useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { MovieSearchApiResponse } from '../../../libs/types/MovieTypes';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';

//Css
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './MovieAllTable.css';
import handleImgError from '../../../components/handleImgError';

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
            <div className='container w-full h-[50vh]'>
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
                        loop
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
            {params.movieId && <Outlet />}
        </div >
    );
}
