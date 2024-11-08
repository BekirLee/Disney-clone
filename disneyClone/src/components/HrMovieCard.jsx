import React from 'react'

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';


function HrMovieCard({ movie }) {
    return (
        <div
            className="flex hover:scale-110 z-[3] transition-all duration-300 ease-in-out">
            <div className="">
                <img src={IMAGE_BASE_URL + movie.backdrop_path} alt=""
                    className='w-[180px] h-[120px] rounded-lg' />
                <div className="w-[180px] h-[120px] text-[18px]">
                    {movie.title}
                </div>
            </div>
        </div>
    )
}

export default HrMovieCard
