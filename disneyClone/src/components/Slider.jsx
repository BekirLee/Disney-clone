import React, { useEffect, useRef, useState } from 'react';
import GlobalApi from '../Services/GlobalApi';
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';
const windowWidth = window.innerWidth;

function Slider() {
    const [movieList, setMovieList] = useState([]);
    const elementRef = useRef(null);

    useEffect(() => {
        getTrendingVideos();
    }, []);

    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos.then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        });
    };

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

    return (
        <div className="relative">
            <HiChevronLeft
                className="hidden md:block text-3xl cursor-pointer text-white absolute top-1/2 transform -translate-y-1/2 left-4"
                onClick={sliderLeft}
            />
            <HiChevronRight
                className="hidden md:block text-3xl cursor-pointer text-white absolute top-1/2 transform -translate-y-1/2 right-4"
                onClick={sliderRight}
            />
            <div className="flex w-full px-16 py-8 scroll-smooth overflow-hidden" ref={elementRef}>
                {movieList.map((item, key) => (
                    <img
                        key={key}
                        src={IMAGE_BASE_URL + item.backdrop_path}
                        alt=""
                        className="min-w-full md:h-[500px] object-cover mr-5 object-left-top border-md hover:border-[4px] transition-all duration-300 ease-in-out"
                    />
                ))}
            </div>
        </div>
    );
}

export default Slider;
