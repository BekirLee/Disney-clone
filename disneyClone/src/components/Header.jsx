import React from 'react'
import logo from '../imgs/disneyLogo.png'
// import { IconName } from "react-icons/fi"
import { HiPlus } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { IoTvOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import HeaderIcon from './HeaderIcon';

function Header() {
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
    return (
        <div className='text-black'>
            <img src={logo} alt="" width={80} />
            {
                menu.map((iconItem) => (
                    < HeaderIcon name={iconItem.name} Icons={iconItem.icon} />
                ))
            }
        </div>
    )
}

export default Header