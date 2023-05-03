import React from 'react';


const Home = (props) => {
    const{id,shortBio,chefPictureUrl,cuisine,chefName,yearsOfExperience,numberOfRecipes,likes} =props.chefs;
    return (
        <div>

          <div className='p-10'>
            <div className="card lg:card-side bg-gray-100 shadow-xl justify-center p-20 ">
                <figure>
                 <img src={chefPictureUrl} alt="Album"/>
                </figure>
               <div className="card-body">
                    <h1 className="card-title text-2xl">{chefName}</h1>
                    <p>Cuisine: <span className='text-bold'>{cuisine}</span></p>
                    <p>Year of Experience: <span className='text-bold'>{yearsOfExperience}</span></p>
                    <p>Number of Recipes: <span className='text-bold'>{numberOfRecipes}</span></p>
                    <p>Number of Like: <span className='text-bold'>{likes}</span></p>
                    
                  

                  <div className="card-actions justify-end">
                   <button  className='rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white'>View Recipes</button>
                  </div>
              </div>
            </div>
          </div>


  
  </div>
        
    );
};

export default Home;

