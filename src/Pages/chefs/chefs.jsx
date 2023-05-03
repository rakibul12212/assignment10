import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Home from '../Home/Home';

const Chefs = () => {

    // const [chefs,setChefs]=useState([]);
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data => setChefs(data))

    // },[])

    const chefs =[
        {
          "id": 1,
          "cuisine": "Italian",
          "chefPictureUrl": "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "chefName": "Mario Batali",
          "yearsOfExperience": 25,
          "numberOfRecipes": 150,
          "likes": 50000,
          "shortBio": "Mario Batali is an Italian-American chef, restaurateur, writer, and media personality. He has co-hosted several cooking shows and authored several bestselling cookbooks."
        },
        {
          "id": 2,
          "cuisine": "Chinese",
          "chefPictureUrl": "https://images.unsplash.com/photo-1559575003-fb4ee38a747d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
          "chefName": "Martin Yan",
          "yearsOfExperience": 35,
          "numberOfRecipes": 200,
          "likes": 40000,
          "shortBio": "Martin Yan is a Chinese-American chef, author, and television host. He is best known for his PBS series Yan Can Cook, which introduced Chinese cuisine to a wide audience."
        },
        {
          "id": 3,
          "cuisine": "Indian",
          "chefPictureUrl": "https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "chefName": "Madhur Jaffrey",
          "yearsOfExperience": 40,
          "numberOfRecipes": 300,
          "likes": 45000,
          "shortBio": "Madhur Jaffrey is an Indian-born actress, food and travel writer, and television personality. She has authored several award-winning cookbooks and appeared in numerous films and television shows."
        },
        {
          "id": 4,
          "cuisine": "Thai",
          "chefPictureUrl": "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "chefName": "Jet Tila",
          "yearsOfExperience": 20,
          "numberOfRecipes": 100,
          "likes": 30000,
          "shortBio": "Jet Tila is a Thai-American chef, restaurateur, and television personality. He has appeared on several cooking shows and is a frequent guest on the Food Network."
        },
        {
          "id": 5,
          "cuisine": "Japanese",
          "chefPictureUrl": "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "chefName": "Masaharu Morimoto",
          "yearsOfExperience": 30,
          "numberOfRecipes": 250,
          "likes": 55000,
          "shortBio": "Masaharu Morimoto is a Japanese chef and television personality. He is best known for his appearances on Iron Chef and Iron Chef America, as well as his restaurants around the world."
        },
        {
          "id": 6,
          "cuisine": "Mexican",
          "chefPictureUrl": "https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
          "chefName": "Rick Bayless",
          "yearsOfExperience": 35,
          "numberOfRecipes": 175,
          "likes": 35000,
          "shortBio": "Rick Bayless is an American chef, restaurateur, and television personality. He is known for his expertise in Mexican cuisine and has authored several cookbooks on the subject."
        }
      ]

    // const Chefs = () => {
    //     const [chefs,setChefs]=useState([]);
    //     useEffect(()=>{
    //      fetch('ChefsData')
    //      .then(res=> res.json())
    //      .then(data=>setChefs(data))
    return (
        <div>
             

<div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/4021973/pexels-photo-4021973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold"><span className='text-cyan-600'>Chefs</span><sub className='text-cyan-800'>mate</sub></h1>
      <p className="mb-0 text-xl ">Welcome to ChefsMate, the ultimate platform for food enthusiasts and chefs alike. Whether you're a professional chef or simply love to cook, we've got everything you need to take your culinary skills to the next level. With a vast array of recipes, expert tips, and a community of passionate foodies, ChefsMate is your one-stop-shop for all things food. Join us today and discover the joy of cooking like never before!</p>
      
    </div>
  </div>
</div>
            {
            chefs.map(chefs=><Home 
                key={chefs.id}
                chefs={chefs}></Home>)
            }
        </div>
    );
};

export default Chefs;