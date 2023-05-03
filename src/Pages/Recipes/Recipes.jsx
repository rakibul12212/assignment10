import React from 'react';
import { Link } from 'react-router-dom';

const Recipes = ({recipe}) => {
    
    const {id,name,ingredients,cookingMethod,rating,picture}=recipe
    return (
        <div>
            <p className='text-5xl'>{name}</p>
            <Link to={`/favrecipe/${id}`}>add to favourite</Link>
        </div>
    );
};

export default Recipes;