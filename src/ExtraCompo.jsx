import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'
import MobileOnly from '../components/MobileOnly.jsx'
import { Spinner } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import { useCart } from './context/CartContext.jsx';
import { Suspense } from 'react';

export default function () {
    const { LightMode } = useCart()
    return (
        <>
            <div className={`${LightMode ? "bg-slate-900" : "bg-white"}`}>
                <Header />
                <Suspense>
                    <Outlet />
                </Suspense>
                <Footer />
                <MobileOnly />
            </div>
        </>
    )
}
