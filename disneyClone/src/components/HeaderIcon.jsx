import React from 'react'

function HeaderIcon({ name, Icons }) {
    console.log({name,Icons})
    return (
        <div>
           { <Icons />}
            {name}
        </div>
    )
}

export default HeaderIcon
