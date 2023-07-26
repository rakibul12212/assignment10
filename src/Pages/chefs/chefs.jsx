import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ChefInfo from './ChefInfo';


const Chefs = () => {

    const [chefs,setChefs]=useState([]);
    useEffect(()=>{
        fetch('https://chefs-mate-server-rakibul12212.vercel.app/chefs')
        .then(res => res.json())
        .then(data => setChefs(data))

    },[])

    
    return (
        <div>
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