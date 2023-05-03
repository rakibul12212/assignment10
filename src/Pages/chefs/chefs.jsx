import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChefInfo from './ChefInfo';


const Chefs = () => {

    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:8000/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))

    },[])

    
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
            chefs.map(chefs=><ChefInfo 
                key={chefs.id}
                chefs={chefs}></ChefInfo>)
            }
            


           
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
           
        </div>
    );
};

export default Chefs;