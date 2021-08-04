import React, { useState } from 'react'
import PropTypes from 'prop-types';


export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');
    const handleInputChange = (e) => {
        
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputValue.trim().length !== 0) {
            setCategories( cat => [inputValue, ...cat]);
            setinputValue('');
        }
        
    }

    return (
        <form  className="grid justify-items-center m-2 py-4" onSubmit={handleSubmit}>
            <input
                type="text"
                value= { inputValue }
                placeholder="Busqueda"
                onChange= { handleInputChange }
                className="
                rounded-full border-4 border-black w-2/4 h-10
                focus:ring-2 focus:ring-red-500 focus:border-transparent
                text-center text-2xl
                sm:text-lg sm:w-11/12"
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}


