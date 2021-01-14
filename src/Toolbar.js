import React from 'react';
import StyleClass from './Toolbar.module.css';
import Logo from './Logo';

const Toolbar = (props) => (
    <header className={StyleClass.Toolbar}>
        <Logo openedSD={props.openedSide}/>
        <h1>Restau</h1>
        <div className={StyleClass.Formobile}>
            <li onClick={props.homepage}>Home</li>
            <li onClick={props.cartpage}>Cart({props.len})</li>
        </div>
    </header>
);

export default Toolbar;