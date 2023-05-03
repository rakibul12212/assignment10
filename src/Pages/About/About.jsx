import React from 'react';

const About = () => {
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto py-10 px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-10">
            <h2 className="text-3xl font-bold mb-4">About Us</h2>
            <p className="mb-4">We are a team of passionate food lovers who believe that cooking should be fun, easy, and accessible to everyone. Our mission is to provide you with the best recipes, tips, and advice to help you create delicious and healthy meals at home.</p>
            <p className="mb-4">Our website is dedicated to helping you discover new recipes, learn new cooking techniques, and connect with other foodies from around the world. Whether you're a beginner or an experienced cook, we have something for everyone.</p>
          </div>
          <div className="lg:w-1/2">
            <img className="w-full rounded shadow-md" src="https://images.pexels.com/photos/5050827/pexels-photo-5050827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="About Us" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
