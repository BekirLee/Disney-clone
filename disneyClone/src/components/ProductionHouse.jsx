import React from 'react'

// importing production imgs and videos
import disney from '../assets/imgs/disney.png'
import marvel from '../assets/imgs/marvel.png'
import nationalG from '../assets/imgs/nationalG.png'
import pixar from '../assets/imgs/pixar.png'
import starwar from '../assets/imgs/starwar.png'

import disneyV from '../assets/videos/disney.mp4'
import marvelV from '../assets/videos/marvel.mp4'
import natinoalGV from '../assets/videos/national-geographic.mp4'
import pixarV from '../assets/videos/pixar.mp4'
import starwarV from '../assets/videos/star-wars.mp4'


const productions = [
    {
        id: 1,
        name: 'Disney',
        img: disney,
        video: disneyV
    },
    {
        id: 2,
        name: 'Marvel',
        img: marvel,
        video: marvelV
    },
    {
        id: 3,
        name: 'National Geographic',
        img: nationalG,
        video: natinoalGV
    },
    {
        id: 4,
        name: 'Pixar',
        img: pixar,
        video: pixarV
    },
    {
        id: 5,
        name: 'Star Wars',
        img: starwar,
        video: starwarV
    }
]

function ProductionHouse() {
    return (
        <div className='flex gap-7 md:gap-2 p-2 px-5 md:px-16'>
            {
                productions.map((production, key) => (
                    <div key={key}
                        className='border-2 border-md border-gray-300 relative hover:scale-110 transition duration-500 ease-in-out rounded-lg'>
                        <img src={production.img} alt="" className='w-full z-1' />
                        <video src={production.video} autoPlay playsInline loop muted className='w-full absolute top-0 z-0 opacity-0 hover:opacity-50' />
                    </div>
                ))
            }
        </div>
    )
}

export default ProductionHouse
