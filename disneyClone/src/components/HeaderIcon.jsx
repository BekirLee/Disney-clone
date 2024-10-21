import React from 'react'

function HeaderIcon({ name, Icons }) {
    console.log({ name, Icons })
    return (
        <div className='flex items-center font-bold gap-3 text-[15px] p-3 group'>
            {<Icons className='' />}
            <div className="iconName group-hover:underline underline-offset-8 transition ease-in-out">
                {name}
            </div>
        </div>
    )
}

export default HeaderIcon
