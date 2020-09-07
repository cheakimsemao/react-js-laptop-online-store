import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
ReactDOM.render(
    <React.StrictMode>
        <SignUp />
    </React.StrictMode>,
    document.getElementById('root')
);
