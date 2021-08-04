import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //En este caso lo hacemos con un useState porque con el arreglo no podemos mutar los datos
    const [categories, setCategories] = useState(['Evangelion']);

    //Agregar elemento al arreglo
    /* const handleAdd = () => {
        // setcategories([...categories, 'Naruto']);
        setcategories( cat => [...cat, 'Naruto']);
    } */

    return (
        <>
            <div className="grid justify-items-center pl-6 py-6 bg-yellow-100 
                sm:m-2 sm:p-2 
                md:m-2 md:p-2
                lg:m-2 lg:p-2">
                <h1 className="animate__animated animate__rubberBand 
                    font-mono text-9xl text-blue-400
                    tracking-widest tittle_page cursor-pointer
                    sm:text-3xl
                    md:text-6xl
                    lg:text-7xl
                    xl:text-8xl">GifExpertApp</h1>
            </div>
            <AddCategory setCategories={ setCategories }/>
            <ol>
                {
                    /* Debemos definir el indice del elemento, en este caso key={category}*/
                    categories.map(  category =>
                        <GifGrid 
                            key={ category }
                            category={ category } />
                        )
                }
            </ol>
        </>
    )
}





