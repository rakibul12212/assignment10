import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Recipes from '../Recipes/Recipes';

const ChefsDetails = () => {
 const chefDetails=useLoaderData()
 const [recipes,setRecipes]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/recipes')
        .then(res => res.json())
        .then(data => setRecipes(data))

    },[])
      
 const {chefName,chefPictureUrl,shortBio,likes,numberOfRecipes,yearsOfExperience}=chefDetails
    return (
        <div>
          <div>
            

<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <img className="hero-content text-center justify-center" src={chefPictureUrl} alt="" />
      <h1 className="text-5xl font-bold">{chefName}</h1>
      <p className="py-6">{shortBio}</p>
      <p className="py-6">Likes: {likes}</p>
      <p className="py-6">Number Of Recipes: {numberOfRecipes}</p>
      <p className="py-6">Years Of Experience: {yearsOfExperience}</p>
      
    </div>
  </div>
</div>
          </div>
          <div className='flex flex-row'>
            {
                recipes.map(recipe=><Recipes
                key={recipe.id}
                recipe={recipe}></Recipes>)
            }
          </div>
        </div>
        
    );
};

export default ChefsDetails;