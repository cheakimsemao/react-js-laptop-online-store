import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';



function App() {
    return (
        <div>
            <Header />
            <SignIn />
            <SignUp />
            <Footer />
        </div>
    );
}

export default App;
