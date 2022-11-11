import React from 'react'

function Error({ message }) {

    return (
        <div className='flex bg-red-600 justify-center items-center text-white font-semibold tracking-wider p-1'>
            {message}
        </div>
    )
}

export default Error;