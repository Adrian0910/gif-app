
import React from 'react'
import PropTypes from 'prop-types';

export const GifGridItem = ( {id, title, url} ) => {

    // console.log({id, title, url})

    return (
        <div className="grid justify-items-center bg-green-200 border-4 
            border-black w-11/12 m-4 p-10
            sm:m-3 sm:p-3
            md:m-3 md:p-3
            lg:m-3 lg:p-3">
            <img 
                src={ url } alt={ title }
                className="h-screen max-h-96 w-1/4 max-w-md min-w-full rounded-2xl
                sm:w-1/4
                md:h-72
                lg:h-72" 
                />
            <p className="font-mono text-2xl pt-4 text-center md:text-lg lg:text-lg"> {title} </p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}



