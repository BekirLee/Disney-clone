import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import HrMovieCard from './HrMovieCard';

const windowWidth = window.innerWidth;


function SingleGenreMovie({ genreId, item_ }) {
    const elementRef = useRef(null);

    const [movies, setMovies] = useState([])

    useEffect(() => {
        getMovieByGenreId()
    }, [])

    const sliderRight = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft += windowWidth - 110;
            console.log(elementRef.current);
        }
    };

    const sliderLeft = () => {
        if (elementRef.current) {
            elementRef.current.scrollLeft -= windowWidth - 110;
            console.log(elementRef.current);
        }
    };

    const getMovieByGenreId = () => {
        GlobalApi.getMoviesByGenre(genreId)
            .then(response => {
                // console.log(response.data.results)
                setMovies(response.data.results)
            })
    }
    return (
        <div className="relative">

            <HiChevronLeft
                className={`z-[4] hidden md:block text-5xl cursor-pointer text-white text-bold absolute left-4 ${item_ % 3 == 0 ? 'mt-[80px]' : 'top-1/2'}`}
                onClick={sliderLeft}
            />
            <HiChevronRight
                className={`z-[4] hidden md:block text-5xl cursor-pointer text-white text-bold absolute right-4 ${item_ % 3 == 0 ? 'mt-[80px]' : 'top-1/2'}`}
                onClick={sliderRight}
            />

            <div ref={elementRef} className='flex overflow-x-auto gap-8 no-scrollbar py-9 scroll-smooth'>
                {
                    movies.map((item, key) => (
                        item_ % 3 == 0 ? <HrMovieCard movie={item} key={key} /> : <MovieCard movie={item} key={key} />
                    ))
                }
            </div>
        </div>
    )
}

export default SingleGenreMovie
