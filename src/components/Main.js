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
// brands
import Apple from './brands/Apple';
import Google from './brands/Google';
import Samsung from './brands/Samsung';
import Alienware from './brands/Alienware';
import Lenovo from './brands/Lenovo';
import Microsoft from './brands/Microsoft';
import Huawei from './brands/Huawei';
import Xiaomi from './brands/Xiaomi';
import MSI from './brands/MSI';
import Dell from './brands/Dell';
import Sony from './brands/Sony';
import Asus from './brands/Asus';
import Razer from './brands/Razer';
import HP from './brands/HP';
import ProductDetails from './ProductDetails';
// accessories
import Keyboard from './accessories/Keyboard';
import Mouse from './accessories/Mouse';
import Headset from './accessories/Headset';
import Webcam from './accessories/Webcam';
import USB from './accessories/USB';
import Adaptor from './accessories/Adaptor';
import AccessoryDetails from './AccessoryDetails';

import { Switch, Route } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path={'/'} component={Home} />
                <Route path={'/about'} component={About} />
                <Route exact path={'/brands'} component={Brands} />
                <Route path={'/signin'} component={SignIn} />
                <Route path={'/signup'} component={SignUp} />
                <Route path={'/cart'} exact component={Cart} />
                <Route path={'/cart/checkout'} component={Checkout} />
                <Route path={'/brands/apple'} component={Apple} />
                <Route path={'/brands/google'} component={Google} />
                <Route path={'/brands/samsung'} component={Samsung} />
                <Route path={'/brands/alienware'} component={Alienware} />
                <Route path={'/brands/lenovo'} component={Lenovo} />
                <Route path={'/brands/microsoft'} component={Microsoft} />
                <Route path={'/brands/huawei'} component={Huawei} />
                <Route path={'/brands/xiaomi'} component={Xiaomi} />
                <Route path={'/brands/msi'} component={MSI} />
                <Route path={'/brands/dell'} component={Dell} />
                <Route path={'/brands/sony'} component={Sony} />
                <Route path={'/brands/asus'} component={Asus} />
                <Route path={'/brands/razer'} component={Razer} />
                <Route path={'/brands/hp'} component={HP} />
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
