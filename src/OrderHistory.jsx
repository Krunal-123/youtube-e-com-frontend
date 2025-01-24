import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Box, Card, CardContent, CardMedia, Typography, Button, Modal, Divider, Container, Grid } from '@mui/material';
import { Spinner } from 'react-bootstrap';
import { useCart } from './context/CartContext';
import { Link } from 'react-router-dom';

const OrderCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  boxShadow: theme.shadows[3],
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',// transform: 'scale(1.02)',
  },
}));

const OrderModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[5],
}));

const OrderHistory = () => {
  const { user, LightMode } = useCart();
  const [open, setOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);

  // Spinner and empty order handling
  if (!user) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <Spinner animation="border" variant="primary" />
      </Box>
    );
  }
  if (user[0]?.orderhistory.length == 0) {
    return (
      <section className="h-[70vh] bg-[length:100%_100%] md:bg-[length:50%_100%] bg-no-repeat bg-center bg-[url('https://img.freepik.com/free-vector/removing-goods-from-basket-refusing-purchase-changing-decision-item-deletion-emptying-trash-online-shopping-app-laptop-user-cartoon-character_335657-1172.jpg?w=740&t=st=1729104729~exp=1729105329~hmac=3f5c66177d02ce2c7ad9572109ff93c6da0095a5a2f87666f2ffe5ea74260bac')]">
        <Container className="py-5">
          <div className="text-center my-40 align-items-center">
            <h5 className='text-dark text-5xl md:text-7xl mb-5 font-bold d-flex justify-content-center font-mono'>No Order History</h5>
            <Link to={'/home'}>
              <button className='rounded p-2 text-white font-bold text-xl bg-danger hover:opacity-[0.9]'>Continue Browsing</button>
            </Link>
          </div>
        </Container>
      </section>
    )
  }
  const handleOpen = (order) => {
    setSelectedOrder(order);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedOrder(null);
  };

  return (
    <>
      <Container className={`h-[75vh] mt-5 mb-3 px-5 shadow-xl rounded-4 pt-3 ${LightMode ? "bg-gray-900" : "bg-light"}`} maxWidth={'lg'}>
        <h2 className={`text-3xl text-center font-bold mb-2 text-${LightMode ? "white" : "dark"}`}>#Order History</h2>
        <div className='h-[80%] w-[100%] overflow-y-auto'>
          {[...user[0]?.orderhistory].reverse().map((order, id) => (
            <OrderCard key={id} className='w-[90%] mx-auto my-3'>
              <CardContent className={`${LightMode ? "bg-dark" : "bg-light"} text-${LightMode ? "white" : "dark"}`}>
                <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap">
                  <Box className="flex flex-wrap w-[180px]">
                    {order.id?.map((item, id) => (
                      <CardMedia
                        key={id}
                        component="img"
                        image={item.img}
                        alt={item.img}
                        style={{ width: 80, borderRadius: 4, margin: 5 }}
                      />
                    ))}
                  </Box>
                  <Box className="text-center">
                    <Typography variant="h6">
                      <b>Paid Amount: ₹{order.amount.toLocaleString('en-IN')}</b>
                    </Typography>
                    <Typography variant="body2">
                      Order Date: {new Date(order.createdAt).toLocaleDateString()}
                    </Typography>
                    <Typography variant="body2">
                      Status: Completed
                    </Typography>
                  </Box>
                  <Box display="flex" alignItems="center">
                    <Button variant="contained" color="primary" onClick={() => handleOpen(order)}>
                      View Details
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </OrderCard>
          ))}

          {selectedOrder && (
            <OrderModal open={open} onClose={handleClose}>
              <ModalContent className={`${LightMode ? "bg-dark" : "bg-light"} text-${LightMode ? "white" : "dark"} md:w-[60%] w-[95%]`}>
                <Typography variant="h6" gutterBottom>
                  Order Details
                </Typography>
                <Divider />
                <Box mt={2}>
                  <Typography variant="subtitle1" gutterBottom>
                    <span className='font-bold text-lg'>Order ID:</span> {selectedOrder._id}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    <span className='font-bold text-lg'>Order Date:</span> {new Date(selectedOrder.createdAt).toLocaleDateString()}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    <span className='font-bold text-lg'>Status:</span> Completed
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    <span className='font-bold text-lg'>Purchase Items:</span> ({selectedOrder.id.length})
                  </Typography>
                  <hr className='py-2' />
                  <Grid container spacing={2} className='overflow-y-auto h-[300px] py-5'>
                    {selectedOrder.id?.map((item, id) => (
                      <>
                        <Grid item xs={12} key={id}>
                          <Box className={`flex justify-between md:px-5 px-0`} alignItems="center">
                            <img
                              src={item.img}
                              alt={item.name}
                              className="md:h-[100px] md:w-[100px] h-[55px] w-[55px]"
                            />
                            <Typography variant="body2">
                              <span className='font-bold'> {item.title}</span>
                            </Typography>
                            <Typography variant="body2" >
                              Price: ₹<span className='line-through'>{item.price.toLocaleString('en-IN')}</span><br />
                              Paid Price: ₹<span className='text-red-500'>{Math.floor(item.price / 2).toLocaleString('en-IN')}</span>
                            </Typography>
                            <Typography variant="body2">
                              Items ID: <br /><span> {item._id}</span>
                            </Typography>
                          </Box>
                        </Grid>
                      </>
                    ))}
                  </Grid>
                  <hr />
                  <Box className="mt-2 px-2">
                    <h2 className="my-2">(Incl All Taxes)</h2>
                    <Typography variant="h6" className='flex justify-start items-center'>
                      Paid Amount: ₹{selectedOrder.amount}
                      <img src='https://res.cloudinary.com/dlhikwznm/image/upload/v1737722013/pngwing.com_lvwxnw.png' alt='paid logo' className='ml-4 h-[90px] w-[145px]' />
                    </Typography>
                  </Box>
                </Box>
                <Box mt={2} display="flex" justifyContent="flex-end">
                  <Button variant="contained" color="primary" onClick={handleClose}>
                    Close
                  </Button>
                </Box>
              </ModalContent>
            </OrderModal>
          )}
        </div>
      </Container>
    </>
  );
};

export default OrderHistory;
