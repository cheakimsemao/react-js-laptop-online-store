import React from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { Button } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { BsFillChatDotsFill } from "react-icons/bs";
function App() {
    return (
        <div>
            <Header />
            <Footer />
            <h3> Lets go for a <FaBeer />? </h3>
            <h3> Lets go for a <BsFillChatDotsFill />? </h3>
        </div>
    );
}

export default App;
