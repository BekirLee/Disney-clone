import React, { useState } from 'react'
import logo from '../imgs/disney-logo-disney-icon-transparent-free-png.webp'
import userPhoto from '../imgs/user.png'
// import { IconName } from "react-icons/fi"
import { HiPlus } from "react-icons/hi";
import { HiPlayCircle } from "react-icons/hi2";
import { TiHome } from "react-icons/ti";
import { IoTvOutline } from "react-icons/io5";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import HeaderIcon from './HeaderIcon';
import { HiDotsVertical } from "react-icons/hi";


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
    return (
        <div className='text-[#eee] flex justify-between'>
            <div className="flex gap-8 ">
                <img src={logo} alt="" className='w-[80px] md:w-[115px] object-cover items-center' />
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
            <img src={userPhoto} alt="" className='w-[50px] object-contain mr-3' />
        </div>
    )
}

export default Header