
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ({ category }) => {

   
    const { data:images , loading } = useFetchGifs( category );
    console.log(loading)
    return (
        /* bg-yellow-100 */
        <>
            <div className="bg-yellow-100 m-4 grid justify-center">
                <div className="animate__animated animate__fadeIn 
                    ml-5 p-6 text-3xl 
                    rounded-full border-4 w-auto max-w-md grid justify-items-center uppercase
                    border-pink-400 bg-black text-pink-400
                    sm:m-0 sm:p-3 sm:text-xl
                    lg:m-0 lg:p-3 lg:text-xl
                    "> {category}
                </div>
            </div>
           { loading ? <p className="animate__animated animate__flash 
            loading grid justify-items-center 
            text-purple-400 text-6xl my-48 p-2
            sm:text-3xl sm:my-20
            md:my-20
            lg:my-20
            xl:my-20"
            >Loading...</p> : null }
            <div className="grid grid-cols-3 bg-yellow-100 
                sm:grid-cols-1 sm:m-0 sm:p-0
                md:grid-cols-2 md:m-0 md:p-0
                lg:grid-cols-2 lg:m-0 lgp-0">
                    {
                            images.map( (img) => (
                                <GifGridItem 
                                    key = {img.id}
                                    {...img }
                                />
                            ))
                    }
                
            </div>
        </>
    )
}


  

