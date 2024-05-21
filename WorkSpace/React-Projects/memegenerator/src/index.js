import React from 'react';
import ReactDOM from 'react-dom/client';
import MemeHeader from './components/header/header';
import "./components/style.css"
import Meme from './components/form/form.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <MemeHeader />
        <Meme />
    </>
);


