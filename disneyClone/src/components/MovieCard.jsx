import React from 'react'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original';


function MovieCard({ movie }) {
    return (
        <img src={IMAGE_BASE_URL + movie.poster_path} alt=""
            width={180}
            className='rounded-lg border-md hover:border-[4px] hover:border-gray-150 hover:scale-110 transition-all duration-300 ease-in-out' />
    )
}

export default MovieCard
