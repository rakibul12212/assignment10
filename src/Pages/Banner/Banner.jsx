import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/4021973/pexels-photo-4021973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className='flex  '>
      <div  className="max-w-md text-left">
         <h1 className="mb-5 text-5xl font-bold"><span className='text-cyan-600'>Chefs</span><sub className='text-cyan-800'>mate.</sub></h1>
         <p className="mb-0 text-xl ">Welcome to ChefsMate, the ultimate platform for food enthusiasts and chefs alike. Whether you're a professional chef or simply love to cook, we've got everything you need to take your culinary skills to the next level.</p>
      </div>
      <div >
        <img src="https://www.freepnglogos.com/uploads/chef-png/png-psd-download-chef-cook-vector-illustration-14.png" alt="" className='h-72'/>
      </div>
      
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;