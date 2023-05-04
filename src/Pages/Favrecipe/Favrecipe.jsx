import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Favrecipe = () => {
    const favrecipe =useLoaderData()
    const {id,name,ingredients,cookingMethod,rating,picture}=favrecipe
    return (
        <div>
            {/* <p>{rating}</p> */}
            <div className="card w-96 bg-base-100 shadow-xl ">
               <figure><img src={picture} alt="Shoes" /></figure>
               <div className="card-body">
                 <h2 className="card-title">{name}</h2>
                 <p><span className='text-bold'>Ingredients:</span> {ingredients}</p>
                 <p><span className='text-bold'>Cooking Method:</span> {cookingMethod}</p>
                 <p><span className='text-bold'>Rating:</span> {rating}</p>
                 <div className="card-actions justify-end">
                 
                 </div>
               </div>
            </div>
            
        </div>
    );
};

export default Favrecipe;