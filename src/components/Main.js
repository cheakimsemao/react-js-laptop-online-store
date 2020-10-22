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
import AccessoryList from './accessories/AccessoryList';

const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route exact path={'/brands'} component={Brands} />
                <Route exact path={'/brands/:name'} component={ProductList} />
                <Route exact path={'/accessories/:name'} component={AccessoryList} />
                <Route path={'/signin'} component={SignIn} />
                <Route path={'/signup'} component={SignUp} />
                <Route path={'/cart'} exact component={Cart} />
                <Route path={'/cart/checkout'} component={Checkout} />
            </Switch>
            <Footer />
        </div>
    );
};

export default Main;
