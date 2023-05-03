import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChefsDetails from '../ChefsDetails/ChefsDetails';
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
        "shortBio": "Mario Batali is an Italian-American chef, restaurateur, writer, and media personality. He has co-hosted several cooking shows and authored several bestselling cookbooks.",
        "recipeId": 1,
      "name": "Spaghetti with Meatballs",
      "ingredients": [
        "1 lb spaghetti",
        "1 lb ground beef",
        "1/2 cup breadcrumbs",
        "1/4 cup grated Parmesan cheese",
        "2 cloves garlic, minced"],
        "cookingMethod": "1. Cook spaghetti according to package directions. 2. In a separate bowl, combine ground beef, breadcrumbs, Parmesan cheese, and garlic. Mix well and form into meatballs. 3. Heat a large skillet over medium-high heat and cook meatballs until browned on all sides. 4. Add spaghetti to the skillet and toss with meatballs and sauce. Serve hot.",
      "rating": 4.9,
      "picture": "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 2,
        "cuisine": "Chinese",
        "chefPictureUrl": "https://images.unsplash.com/photo-1559575003-fb4ee38a747d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80",
        "chefName": "Martin Yan",
        "yearsOfExperience": 35,
        "numberOfRecipes": 200,
        "likes": 40000,
        "shortBio": "Martin Yan is a Chinese-American chef, author, and television host. He is best known for his PBS series Yan Can Cook, which introduced Chinese cuisine to a wide audience.",
        "recipeId": 2,
      "name": "Chicken Tikka Masala",
      "ingredients": [
        "1 lb boneless, skinless chicken breasts, cut into bite-sized pieces",
        "1 cup plain yogurt",
        "1 tbsp garam masala",
        "1 tbsp paprika",
        "1/2 cup heavy cream"
      ],
      "cookingMethod": "1. In a large bowl, mix together chicken, yogurt, garam masala, and paprika. Let marinate for at least 30 minutes. 2. Heat a large skillet over medium-high heat and add chicken mixture. Cook until chicken is browned and cooked through. 3. Reduce heat to low and stir in heavy cream. Simmer for 10 minutes until sauce has thickened. Serve hot.",
      "rating": 4.8,
      "picture": "https://images.pexels.com/photos/3386854/pexels-photo-3386854.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 3,
        "cuisine": "Indian",
        "chefPictureUrl": "https://images.unsplash.com/photo-1574966740637-12c84035a4f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "chefName": "Madhur Jaffrey",
        "yearsOfExperience": 40,
        "numberOfRecipes": 300,
        "likes": 45000,
        "shortBio": "Madhur Jaffrey is an Indian-born actress, food and travel writer, and television personality. She has authored several award-winning cookbooks and appeared in numerous films and television shows.",
        "recipeId": 3,
      "name": "Classic Cheeseburger",
      "ingredients": [
        "1 lb ground beef",
        "4 hamburger buns",
        "4 slices American cheese",
        "1/4 cup ketchup",
        "1/4 cup mustard"
      ],
      "cookingMethod": "1. Preheat grill or skillet to medium-high heat. 2. Form ground beef into four patties and season with salt and pepper. 3. Cook burgers for about 5-6 minutes per side or until cooked through. 4. Place cheese slices on burgers during the last minute of cooking. 5. Toast hamburger buns and spread ketchup and mustard on each. Place burger on bun and serve hot.",
      "rating": 4.5,
      "picture": "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 4,
        "cuisine": "Thai",
        "chefPictureUrl": "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "chefName": "Jet Tila",
        "yearsOfExperience": 20,
        "numberOfRecipes": 100,
        "likes": 30000,
        "shortBio": "Jet Tila is a Thai-American chef, restaurateur, and television personality. He has appeared on several cooking shows and is a frequent guest on the Food Network.",
        "recipeId": 4,
      "name": "Classic Cheeseburger",
      "ingredients": [
        "1 lb ground beef",
        "4 hamburger buns",
        "4 slices American cheese",
        "1/4 cup ketchup",
        "1/4 cup mustard"
      ],
      "cookingMethod": "1. Preheat grill or skillet to medium-high heat. 2. Form ground beef into four patties and season with salt and pepper. 3. Cook burgers for about 5-6 minutes per side or until cooked through. 4. Place cheese slices on burgers during the last minute of cooking. 5. Toast hamburger buns and spread ketchup and mustard on each. Place burger on bun and serve hot.",
      "rating": 4.5,
      "picture": "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 5,
        "cuisine": "Japanese",
        "chefPictureUrl": "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "chefName": "Masaharu Morimoto",
        "yearsOfExperience": 30,
        "numberOfRecipes": 250,
        "likes": 55000,
        "shortBio": "Masaharu Morimoto is a Japanese chef and television personality. He is best known for his appearances on Iron Chef and Iron Chef America, as well as his restaurants around the world.",
        "recipeId": 5,
      "name": "Classic Cheeseburger",
      "ingredients": [
        "1 lb ground beef",
        "4 hamburger buns",
        "4 slices American cheese",
        "1/4 cup ketchup",
        "1/4 cup mustard"
      ],
      "cookingMethod": "1. Preheat grill or skillet to medium-high heat. 2. Form ground beef into four patties and season with salt and pepper. 3. Cook burgers for about 5-6 minutes per side or until cooked through. 4. Place cheese slices on burgers during the last minute of cooking. 5. Toast hamburger buns and spread ketchup and mustard on each. Place burger on bun and serve hot.",
      "rating": 4.5,
      "picture": "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      },
      {
        "id": 6,
        "cuisine": "Mexican",
        "chefPictureUrl": "https://images.unsplash.com/photo-1543716627-839b54c40519?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
        "chefName": "Rick Bayless",
        "yearsOfExperience": 35,
        "numberOfRecipes": 175,
        "likes": 35000,
        "shortBio": "Rick Bayless is an American chef, restaurateur, and television personality. He is known for his expertise in Mexican cuisine and has authored several cookbooks on the subject.",
        "recipeId": 6,
      "name": "Classic Cheeseburger",
      "ingredients": [
        "1 lb ground beef",
        "4 hamburger buns",
        "4 slices American cheese",
        "1/4 cup ketchup",
        "1/4 cup mustard"
      ],
      "cookingMethod": "1. Preheat grill or skillet to medium-high heat. 2. Form ground beef into four patties and season with salt and pepper. 3. Cook burgers for about 5-6 minutes per side or until cooked through. 4. Place cheese slices on burgers during the last minute of cooking. 5. Toast hamburger buns and spread ketchup and mustard on each. Place burger on bun and serve hot.",
      "rating": 4.5,
      "picture": "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
      <h1 className="mb-5 text-5xl font-bold"><span className='text-cyan-600'>Chefs</span><sub className='text-cyan-800'>mate.</sub></h1>
      <p className="mb-0 text-xl ">Welcome to ChefsMate, the ultimate platform for food enthusiasts and chefs alike. Whether you're a professional chef or simply love to cook, we've got everything you need to take your culinary skills to the next level. With a vast array of recipes, expert tips, and a community of passionate foodies, ChefsMate is your one-stop-shop for all things food. Join us today and discover the joy of cooking like never before!</p>
      
    </div>
  </div>
</div>
            {
            chefs.map(chefs=><Home 
                key={chefs.id}
                chefs={chefs}></Home>)
            }
            


            {/*  */}
            <div className="container mx-auto p-20 bg-slate-200">
      <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
      <form className="max-w-lg mx-auto">
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Your email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Your message"
            rows="8"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="block sm:inline-block  text-center text-sm rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white"
            type="submit"
          >
            Send
          </button>
        </div>
      </form>
    </div>
            {/*  */}
        </div>
    );
};

export default Chefs;