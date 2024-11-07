import React from 'react'
import GenresList from '../Constant/GenresList'
import SingleGenreMovie from './SingleGenreMovie'

function GenreMovieList() {
    return (
        <div className='text-white'>
            {
                GenresList.genere.map((item, index) => index <= 4 && (
                    // console.log(genre)
                    <div className=" p-8 px-8 md:p-16">
                        <h1 className='text-white text-[20px] text-bold'>
                            {item.name}
                            <SingleGenreMovie genreId={item.id} />
                        </h1>
                    </div>
                ))
            }

        </div>
    )
}

export default GenreMovieList