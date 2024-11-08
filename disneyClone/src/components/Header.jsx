import React, { useEffect, useState } from 'react'
import logo from '../assets/imgs/logo.png'
import userPhoto from '../assets/imgs/user.png'
// import { IconName } from "react-icons/fi"
import { HiPlus } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { IoTvOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import HeaderIcon from './HeaderIcon';
import { HiDotsVertical } from "react-icons/hi";
// 
import api from '../Services/GlobalApi.jsx'



function Header() {

    const [toggle, setToggle] = useState(false);

    const menu = [
        {
            name: "HOME",
            icon: TiHome
        },
        {
            name: "SEARCH",
            icon: FaMagnifyingGlass
        },
        {
            name: "WATCH LIST",
            icon: HiPlus
        },
        {
            name: "MOVIES",
            icon: IoTvOutline
        },
        {
            name: "SERIES",
            icon: HiPlayCircle
        },
        {
            name: "ORIGINALS",
            icon: FaRegStar
        },

    ]

    // function TrendingVideos() {
    //     const [videos, setVideos] = useState([]); // Videoları tutacak state
    //     const [loading, setLoading] = useState(true); // Yüklenme durumu

    //     useEffect(() => {
    //         api.getTrendingVideos()
    //             .then(res => {
    //                 console.log(res)
    //                 setVideos(res.data.results); // Gelen veriyi state'e set et
    //                 setLoading(false); // Yüklenme durumunu false yap
    //             })
    //             .catch((err) => {
    //                 console.error(err); // Hataları console'a yaz
    //                 setLoading(false); // Yüklenme durumunu hata olsa bile false yap
    //             });
    //     }, []); // Boş bağımlılık dizisi, component mount olduğunda bir kere çalışacak

    //     if (loading) {
    //         return <div>Loading...</div>; // Yüklenme aşamasında gösterilecek
    //     }

    //     return (
    //         <div>
    //             {videos.map(video => (
    //                 <div key={video.id}>{video.title || video.name}</div> // Veriyi render ediyoruz
    //             ))}
    //         </div>
    //     );
    // }

    // TrendingVideos()

    return (
        <div className='text-[#eee] flex justify-between py-4'>
            <div className="flex gap-3 md:gap-8 ">
                <img src={logo} alt="" className='w-[80px] md:w-[115px] object-contain items-center' />
                <div className="hidden md:flex">
                    {
                        menu.map((iconItem, index) => (
                            < HeaderIcon name={iconItem.name} Icons={iconItem.icon} key={index} />
                        ))
                    }
                </div>

                <div className="flex md:hidden">
                    <div className="flex">
                        {
                            menu.map((iconItem, index) => index < 3 && (
                                < HeaderIcon name={iconItem.name} Icons={iconItem.icon} key={index} />
                            ))
                        }
                    </div>
                </div>

                <div className="flex md:hidden" onClick={() => { setToggle(!toggle) }}>
                    <HeaderIcon name='' Icons={HiDotsVertical} />
                    {
                        toggle ? <div className="absolute ">

                            <div className=" mt-5 ml-8 px-5 py-5 bg-black rounded border-[1px] border-gray-700">
                                {
                                    menu.map((iconItem, index) => index > 2 && (
                                        < HeaderIcon name={iconItem.name} Icons={iconItem.icon} key={index} />
                                    ))
                                }
                            </div>
                        </div> : null}
                </div>
            </div>
            <img src={userPhoto} alt="" className='w-[40px] md:w-[50px] object-contain mr-3' />
        </div>
    )
}

export default Header