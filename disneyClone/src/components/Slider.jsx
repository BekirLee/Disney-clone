import React, { useEffect, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";



function Slider() {
    const [movieList, setMovieList] = useState([]);
    useEffect(() => {
        getTrendingVideos();
    }, [])
    const getTrendingVideos = () => {
        GlobalApi.getTrendingVideos().then(res => {
            console.log(res.data.results);
            setMovieList(res.data.results);
        })
    }

    return (
        <div className="">
            <HiChevronLeft className='hidden  md:block text-3xl cursor-pointer text-white absolute mt-[350px] mx-8'></HiChevronLeft>
            <HiChevronRight className='hidden md:block text-3xl cursor-pointer text-white absolute mx-8 mt-[350px] right-0' ></HiChevronRight>
            <div className='flex overscroll-x-auto w-full px-16 py-8 '>
                {
                    movieList.map((item) => (
                        //    console.log(movieList)
                        <img src={IMAGE_BASE_URL + item.backdrop_path}
                            alt=""
                            className='min-w-full h-[500px] object-cover mr-5 object-left-top ' />
                    ))
                }

            </div>
        </div>
    )
}

export default Slider
