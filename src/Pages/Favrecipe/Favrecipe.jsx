import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Favrecipe = () => {
    const favrecipe =useLoaderData()
    const {rating}=favrecipe
    return (
        <div>
            <p>{rating}</p>
        </div>
    );
};

export default Favrecipe;