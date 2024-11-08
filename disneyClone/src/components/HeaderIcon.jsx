import React from 'react'

function HeaderIcon({ name, Icons }) {
    // console.log({ name, Icons })
    return (
        <div className='flex items-center text-[10px] md:font-bold gap-2 md:gap-3 md:text-[15px] md:p-3 group'>
            {<Icons className='' />}
            <div className="iconName group-hover:underline underline-offset-8 transition ease-in-out whitespace-nowrap">
                {name}
            </div>
        </div>
    )
}

export default HeaderIcon
