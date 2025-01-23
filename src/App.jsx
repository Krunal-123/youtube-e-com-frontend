import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from 'react';

import Login from '../components/Login.jsx';
import Signup from './Signup.jsx';
import HomePage from './HomePage.jsx';

// lazy loading components
const About = lazy(() => import('./Aboutus.jsx'))
const Contact = lazy(() => import('./Contactus.jsx'))
const Services = lazy(() => import('./Services.jsx'))
const DetailCard = lazy(() => import('./DeatilCard.jsx'))
const Addcart = lazy(() => import('./Addcart.jsx'))
const Mypurchase = lazy(() => import('./Mypurchase.jsx'))
const Myprofile = lazy(() => import('./Myprofile.jsx'))
const ForgotPassword = lazy(() => import('./ForgotPassword.jsx'))
const ResetPassword = lazy(() => import('./ResetPassword.jsx'))
const Myfavourites = lazy(() => import('./Myfavourites.jsx'))
const OrderHistory = lazy(() => import('./OrderHistory.jsx'))
const ErrorPage = lazy(() => import('../components/ErrorPage.jsx'))

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route path='/home' element={<Services />} />
            <Route path='/myprofile' element={<Myprofile />} />
            <Route path='/mypurchase' element={<Mypurchase />} />
            <Route path='/aboutus' element={<About />} />
            <Route path='services/:id' element={<DetailCard />} />
            <Route path='/addcart' element={<Addcart />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/myfavourites' element={<Myfavourites />} />
            <Route path='/orderhistory' element={<OrderHistory />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:email" element={<ResetPassword />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </>
  )
}

export default App;