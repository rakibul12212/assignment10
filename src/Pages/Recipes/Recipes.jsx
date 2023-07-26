import { connectAuthEmulator } from 'firebase/auth';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading';


const Recipes = ({recipe}) => {


    const {id,name,ingredients,cookingMethod,rating,picture}=recipe
const {loading,setLoading}=useContext(AuthContext)
if(loading){
    setLoading(true)
    return <Loading></Loading>
}
    return (
        <div >
            <div className="card w-78 px-2 bg-base-100 shadow-xl flex">
               <figure><img src={picture} alt="Shoes" /></figure>
               <div className="card-body">
                 <h2 className="card-title">{name}</h2>
                 <p><span className='text-bold'>Ingredients:</span> {ingredients}</p>
                 <p><span className='text-bold'>Cooking Method:</span> {cookingMethod}</p>
                 <p><span className='text-bold'>Rating:</span> {rating}</p>

                 <div className="card-actions justify-end">

                    <Link to={`/favrecipe/${id}`}>
                        <button className='rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white' >add to favourite</button>
                        </Link>
                 </div>
               </div>
            </div>
            
            
        </div>
    );
};



export default Recipes;
