import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import "../src/App.css"
import { CartProvider } from './CartContext.jsx'
import ExtraCompo from './ExtraCompo.jsx';


export default function () {
    let Navigate = useNavigate()
    const [cookies] = useCookies(["token"])
    useEffect(() => {
        if (!cookies.token) {
            console.log(111);
            Navigate('/login')
        }
        else {
            Navigate('/home')
        }
    }, [])
    return (
        <>
            <CartProvider>
                <ExtraCompo />
            </CartProvider>
        </>
    )
}