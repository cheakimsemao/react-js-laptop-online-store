import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Cart from './Cart';
import Home from './Home';
import About from './About';
import Brands from './Brands';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

// brands
import ProductDetails from './ProductDetails';
// accessories
import Keyboard from './accessories/Keyboard';
import Mouse from './accessories/Mouse';
import Headset from './accessories/Headset';
import Webcam from './accessories/Webcam';
import USB from './accessories/USB';
import Adaptor from './accessories/Adaptor';
import AccessoryDetails from './AccessoryDetails';

import Display from '../Display';
import Laptop from './brands/Laptop';
import { ImTerminal } from 'react-icons/im';

const Main = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/brands`).then((res) => {
            setData(res.data);
        });
    }, []);

    const productDetails = data.map((item) => (
        <Route path={`/brands/${item.name}/:id`} component={Display} />
    ));

    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route exact path={'/brands'} component={Brands} />
                <Route path={'/Brands/:id'} exact component={Laptop} />
                {productDetails}
                <Route path={'/signin'} component={SignIn} />
                <Route path={'/signup'} component={SignUp} />
                <Route path={'/cart'} exact component={Cart} />
                <Route path={'/cart/checkout'} component={Checkout} />
                <Route path={'/accessories/keyboard'} component={Keyboard} />
                <Route path={'/accessories/mouse'} component={Mouse} />
                <Route path={'/accessories/headset'} component={Headset} />
                <Route path={'/accessories/webcam'} component={Webcam} />
                <Route path={'/accessories/usb'} component={USB} />
                <Route path={'/accessories/adaptor'} component={Adaptor} />
                <Route path={'/brands/product-details'} component={ProductDetails} />
                <Route path={'/brands/accessory-details'} component={AccessoryDetails} />
            </Switch>
            <Footer />
        </div>
    );
};

export default Main;
