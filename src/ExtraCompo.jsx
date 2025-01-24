import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import MobileOnly from '../components/MobileOnly.jsx';
import { Outlet } from 'react-router-dom';
import { useCart } from './context/CartContext.jsx';
import { Suspense } from 'react';

export default function () {
    const { LightMode } = useCart();

    return (
        <>
            <div className={`${LightMode ? "bg-slate-900 text-white" : "bg-white text-black"} min-h-screen`}>
                <Header />
                <Suspense
                    fallback={
                        <div className="h-[100vh] flex items-center justify-center">
                            <div role="status">
                                <svg
                                    aria-hidden="true"
                                    className="w-10 h-10 mr-2 text-gray-200 animate-spin fill-blue-600"
                                    viewBox="0 0 100 101"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9765 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9765 100 50.5908ZM9.08189 50.5908C9.08189 74.1544 25.8364 90.9089 49.3999 90.9089C72.9635 90.9089 89.718 74.1544 89.718 50.5908C89.718 27.0273 72.9635 10.2728 49.3999 10.2728C25.8364 10.2728 9.08189 27.0273 9.08189 50.5908Z"
                                        fill="currentColor"
                                    />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5537C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7232 75.2124 7.41289C69.5422 4.10268 63.2754 1.94025 56.7644 1.05112C51.7662 0.367041 46.698 0.446843 41.7345 1.27868C39.2549 1.69328 37.7921 4.19778 38.4292 6.62326C39.0663 9.04874 41.536 10.4816 44.0166 10.1062C47.9242 9.53829 51.8931 9.48894 55.8075 10.009C61.864 10.8213 67.6846 13.1371 72.7339 16.7441C77.7832 20.3511 81.9427 25.173 84.9064 30.7996C86.9171 34.5049 88.3701 38.4314 89.2136 42.431C89.7598 44.7993 91.5422 46.6781 93.9676 46.0409Z"
                                        fill="currentFill"
                                    />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    }
                >
                    <Outlet />
                </Suspense>
                <Footer />
                <MobileOnly />
            </div>
        </>
    );
}
