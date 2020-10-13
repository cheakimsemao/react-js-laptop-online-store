import React from 'react';
import Header from './Header';
import Footer from './Footer';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Cart from './Cart';
import Home from './Home';
import About from './About';
import Brands from './Brands';
import Checkout from './Checkout';
import { Route, Switch } from 'react-router-dom';
// brands
import ProductList from './brands/ProductList';
// accessories
import Keyboard from './accessories/Keyboard';
import Mouse from './accessories/Mouse';
import Headset from './accessories/Headset';
import Webcam from './accessories/Webcam';
import USB from './accessories/USB';
import Adaptor from './accessories/Adaptor';

const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route exact path={'/brands'} component={Brands} />
                <Route exact path={'/brands/:name'} component={ProductList} />
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
            </Switch>
            <Footer />
        </div>
    );
};

export default Main;
