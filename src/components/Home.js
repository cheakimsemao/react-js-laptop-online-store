import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <p>Home</p>
            <Link to='/brands/product-details'>ProductDetails</Link>
        </div>
    );
};

export default Home;
