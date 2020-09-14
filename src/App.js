import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
    return (
        <Router>
        <div>
            <Header />
            
            <Switch>
                <Route path={'/signin'} exact component={SignIn}></Route>
                <Route path={'/signout'} exact component={SignUp}></Route>
            </Switch>
            <Footer />
        </div>
        </Router>
    );
}

export default App;
