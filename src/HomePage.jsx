import React from 'react';
import "../src/App.css"
import { CartProvider } from '../src/context/CartContext.jsx'
import ExtraCompo from './ExtraCompo.jsx';


export default function () {

    return (
        <>
            <CartProvider>
                <ExtraCompo />
            </CartProvider>
        </>
    )
}