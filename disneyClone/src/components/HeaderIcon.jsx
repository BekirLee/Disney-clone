import React from 'react'

function HeaderIcon({ name, Icons }) {
    console.log({ name, Icons })
    return (
        <div className='flex items-center font-bold gap-8 text-[15px]'>
            {<Icons className=''/>}
            {name}
        </div>
    )
}

export default HeaderIcon
