import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import React from 'react';

// 
import { useState } from 'react';

const Blog = () => {


const[loader,setLoader]=useState(false);
const downloadPDF =()=>{
  const capture =document.querySelector('.card-body');
  setLoader(true);
  html2canvas(capture).then((canvas)=>{
    const imgData=canvas.toDataURL('img/png')
    const doc =new jsPDF('p' ,'mm', 'a4')
    const componentWidth=doc.internal.pageSize.getWidth();
    const componentHeight=doc.internal.pageSize.getHeight();
    doc.addImage(imgData, 'PNG', 0, 0,componentWidth,componentHeight);
    setLoader(false);
    doc.save('sample.pdf')

  })

}


    return (
    <div>

<button onClick={downloadPDF} disabled={!(loader===false)} className='rounded shadow shadow-cyan-600  px-4 py-2 hover:bg-cyan-600 hover:text-white'>

                   {loader?(<span>downloading</span>):(<span>download</span>)}
                </button>
          <div className="card-body grid gap-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 ">
            <div>
              <h2 className="card-title bg-slate-300 p-2 rounded">Tell us the differences between uncontrolled and controlled components.</h2>
              <p className=' bg-slate-100 p-2 rounded'>Uncontrolled components manage their own state internally and rely on the DOM to update their state. Controlled components rely on React state to manage their state and update the DOM. Controlled components provide a more predictable way of managing form data and enforcing business logic, while uncontrolled components offer a simpler programming model with less boilerplate code.</p>
              
            </div>
            <div>
              <h2 className="card-title  bg-slate-300 p-2 rounded">Tell us how can we validate React props using PropTypes ?</h2>
              <p className=' bg-slate-100 p-2 rounded'>To validate React props using PropTypes, we can import the PropTypes library from the 'prop-types' package and define the expected prop types for a component by setting the propTypes static property. PropTypes allow us to catch prop type errors during development and provide clear warnings in the console, helping to ensure code correctness and maintainability.</p>
              
            </div>
            <div>
              <h2 className="card-title  bg-slate-300 p-2 rounded">Tell us the difference between nodejs and express js.</h2>
              <p className=' bg-slate-100 p-2 rounded'>Node.js is a JavaScript runtime that allows developers to run JavaScript code outside of the browser. Express.js is a web application framework built on top of Node.js that provides a set of features and tools for building web applications and APIs. Together, Node.js and Express.js provide a powerful platform for building scalable and modular web applications using JavaScript</p>
              
            </div>
            <div>
              <h2 className="card-title  bg-slate-300 p-2 rounded">What is a custom hook, and why will you create a custom hook ?</h2>
              <p className=' bg-slate-100 p-2 rounded'>In React, a custom hook is a function that contains some stateful logic and can be used in multiple components to share and abstract away complex or repetitive logic, or encapsulate third-party libraries into a simpler interface. We create custom hooks to improve code reusability, organization, and maintainability. Custom hooks allow us to create modular, composable, and testable code.</p>
              
            </div>


        </div>
    </div>



    );
};

export default Blog;
