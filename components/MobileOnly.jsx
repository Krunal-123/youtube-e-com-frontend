import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../src/CartContext';

const MobileMenu = () => {
  let navigate = useNavigate();
  const { LightMode } = useCart()
  return (
    <div className={`flex justify-around items-cente ${LightMode ? "bg-gray-950 text-white" : "bg-white text-gray-600"} shadow-md fixed bottom-0 left-0 right-0 z-50 px-2 py-0 md:hidden`}>
      <ListItem button onClick={() => navigate('/home')} className="flex flex-col items-center">
        <HomeIcon className="text-blue-600" />
        <p className='font-bold'>Home</p>
      </ListItem>

      <ListItem button onClick={() => navigate('/contactus')} className="flex flex-col items-center">
        <ContactMailIcon className="text-red-600" />
        <p className='font-bold'>Contact Us</p>
      </ListItem>

      <ListItem button onClick={() => navigate('/aboutus')} className="flex flex-col items-center">
        <InfoIcon />
        <p className='font-bold'>About Us</p>
      </ListItem>
    </div>
  );
};
export default MobileMenu;
