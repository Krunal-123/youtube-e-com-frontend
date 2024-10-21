import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx'
import MobileOnly from '../components/MobileOnly.jsx'
import { Outlet} from 'react-router-dom';
import { useCart } from './context/CartContext.jsx';
import { useCookies } from 'react-cookie';
import { Outlet, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function (){
    const {LightMode}=useCart()
    let Navigate = useNavigate()
    const [cookies] = useCookies()
    useEffect(() => {
        if (!cookies.token) {
            Navigate('/login')
        }
        else {
            Navigate('/home')
        }
    }, [])
    return (
        <>
        <div className={`${LightMode?"bg-slate-900":"bg-white"}`}>
            <Header />
            <Outlet />
            <Footer />
            <MobileOnly />
        </div>
        </>
    )
}