import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { Button } from "react-bootstrap";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBIcon, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Container } from '@mui/material';
import { useCart } from './context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { errorToast } from '../components/ErrorToast';
import { Toast } from '../components/SuccessToast';

export default function Basic() {
  const { setCartItems, user, setIsExploding, LightMode, setLengthCart } = useCart();
  const [UserData, setUserData] = useState([]);
  const [cookies] = useCookies();
  const navigate = useNavigate()

  // Calculate the cart totals
  const subtotal = UserData.reduce((acc, item) => acc + item.price, 0);
  const GST = subtotal === 0 ? 0 : Math.floor((subtotal / 2) * 0.18); // Fixed GST cost
  const total = Math.floor((subtotal / 2) + GST);

  useEffect(() => {
    // Scroll to the top when the route changes
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (user && user[0]) {
      setUserData(user[0].addcart || []);
    }
  }, [user]);

  useEffect(() => {
    setCartItems(UserData.length || 0);
  }, [UserData, setCartItems]);

  async function del(id) {
    try {
      await axios.post(`https://youtube-e-com-backend.onrender.com/addcart/delete/${id}`, { cookies });
      errorToast("Deleted", 1000)
      setUserData(prevUserData => prevUserData.filter(d => d._id !== id));
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  }

  // PAYMENT GATEWAY START
  async function handleRazorpayPayment() {
    try {
      // Step 1: Create an order on the server
      const { data: order } = await axios.post("https://youtube-e-com-backend.onrender.com/create-order", { amount: total });
      // Step 2: Configure Razorpay options
      const options = {
        key: "rzp_test_wh5dAj2ZhVsw97", // Replace with your actual key from env variable in production
        amount: order.amount,
        currency: "INR",
        name: "Youtube E-com Services",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          // Step 3: Log order details after payment
          // On payment success
          try {
            let userId = user[0]?._id;
            const productIds = UserData.map(p => p._id);
            // Log the details before sending the purchase request
            await axios.post("https://youtube-e-com-backend.onrender.com/addcart/purchase", { data: productIds, id: userId, amount: total });
            setLengthCart(productIds)
            setUserData([]);
            setCartItems(0)
            setIsExploding((previous) => !previous)
            navigate('/mypurchase')
            Toast("New Items Added🎉", 3500)
            setTimeout(() => {
              setIsExploding((p) => !p)
            }, 5000)
          } catch (error) {
            console.error("Error finalizing purchase:", error);
          }
        },
        prefill: {
          name: `${user?.[0]?.firstName} ${user?.[0]?.lastName}`,
          email: `${user?.[0]?.email}`,
          contact: `${user?.[0]?.number}`,
        },
        theme: {
          color: "#3399cc",
        },
      };
      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initializing Razorpay payment:", error);
    }
  }

  if (UserData.length === 0) {
    return (
      <section className="h-[65vh] md:h-[550px] bg-[length:100%_100%] bg-no-repeat bg-center bg-[url('https://www.pngkey.com/png/detail/365-3654131_cart-empty-image-your-cart-is-empty.png')]">
        <Container className="py-5">
          <div className="text-center my-40 align-items-center">
            <h5 className='text-red-500 text-5xl md:text-7xl mb-5 font-bold d-flex justify-content-center font-mono'>Your cart is empty now</h5>
            <Link to={'/home'}>
              <Button className='bg-primary hover:opacity-[0.9]'>Continue Browsing</Button>
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <Container className="mt-4 mb-5">
      <button onClick={() => { history.back() }} className='max-md:hidden fixed left-10 bg-transparent text-blue-500 font-bold py-2 px-4 border-2 border-blue-500 rounded hover:cursor-pointer hover:shadow-[0_0px_20px_2px_rgba(0,100,255,0.9)]'>Go Back</button>
      <MDBRow className="justify-content-center align-items-center">
        <MDBCol>
          <MDBCard className={`shadow-2xl transition ease-in-out delay-300 ${LightMode ? "bg-gray-600" : "bg-white"} ${LightMode ? "text-white" : "text-dark"} ${LightMode && "hover:shadow-[0_0px_22px_2px_rgba(220,255,0,0.9)]"}`}>
            <MDBCardBody className="px-4">
              <MDBRow>
                <MDBCol lg="7">
                  {/* <MDBTypography tag="h5" className='mb-3 peer'> */}
                  <Link to="/home" className={`block pb-3 text-lg font-semibold transition easy-in-out hover:font-bold hover:scale-[1.02] ${LightMode && "hover:text-cyan-300"}`}>
                    <MDBIcon fas icon="long-arrow-alt-left" /> Continue shopping
                  </Link>
                  {/* </MDBTypography> */}
                  <hr />
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <div>
                      <p className="my-2 text-xl font-bold">Shopping cart</p>
                      <p className="text-xl font-mono">You have <span className='font-extrabold text-red-500 text-2xl'>{UserData.length}</span> items in your cart :</p>
                    </div>
                  </div>
                  {UserData.map(d => (
                    <MDBCard className="mb-3 transition ease-in-out hover:scale-[1.02]" key={d._id}>
                      <MDBCardBody className={`border-1 ${LightMode ? "bg-gray-800" : "bg-light"} text-${LightMode ? "white" : "dark"}`}>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <MDBCardImage
                              src={d.img}
                              fluid
                              className="rounded-3"
                              style={{ width: "75px", height: "60px" }}
                              alt={d.title}
                            />
                            <div className="ms-3">
                              <MDBTypography tag="h5">
                                <b>{d.title}</b>
                              </MDBTypography>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: "80px" }}>
                              <MDBTypography tag="h5" className="mb-0">
                                <i><span className='text-red-500 font-semibold'>₹{Math.floor(d.price / 2).toLocaleString('en-IN')}</span><br /><span className='line-through'>₹{Math.floor(d.price).toLocaleString('en-IN')}</span></i>
                              </MDBTypography>
                            </div>
                            <MDBIcon fas icon="trash-alt" className='py-1 px-2 border-0 rounded text-slate-50 bg-slate-900 transition ease-in-out cursor-pointer text-xl hover:bg-red-600 hover:scale-110 hover:showdow-2xl' onClick={() => del(d._id)} />
                          </div>
                        </div>
                      </MDBCardBody>
                    </MDBCard>
                  ))}
                </MDBCol>
                {/* PAYEMENT SELECTION */}
                <MDBCol lg="5">
                  <MDBCard className="bg-dark text-white rounded-3 h-100">
                    <MDBCardBody>
                      <div tag="h5" className="mb-3 text-3xl font-extrabold text-center text-green-500">
                        Payment Options
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mt-4 text-3xl font-bold">
                        <p className="mb-4 flex justify-between">Items :</p>
                        <p className="mb-4 flex justify-between">Prices :</p>
                      </div>
                      {UserData?.map((d, id) => (
                        <div key={id} className="d-flex justify-content-between mb-2 text-xl">
                          <p className="mb-4 flex justify-between">- {d.title}</p>
                          <p className="mb-4 flex justify-between">₹{Math.floor(d.price / 2).toLocaleString('en-IN')}</p>
                        </div>
                      ))}
                      <hr />
                      <div className="d-flex justify-content-between mt-3 text-lg">
                        <p className="mb-4">GST 18% :</p>
                        <p className="mb-4">{"₹" + GST.toLocaleString('en-IN')}</p>
                      </div>
                      <div className="d-flex justify-content-between text-xl">
                        <p className="mb-4">Subtotal</p>
                        <p className="mb-4 line-through font-bold">{"₹" + subtotal.toLocaleString('en-IN')}</p>
                      </div>
                      <hr />
                      <div className="d-flex justify-content-between mt-3">
                        <p className="mb-4">Applied Coupen</p>
                        <p className='text-red-500 text-xl font-extrabold'>50% OFF</p>
                      </div>
                      <div className="d-flex justify-content-between text-2xl">
                        <p className="mb-4">Total (Incl. taxes)</p>
                        <p className="mb-4 text-green-500 font-bold">{"₹" + Math.floor(total).toLocaleString('en-IN')}</p>
                      </div>
                      <div className="text-center mt-3">
                        <Button className="bg-red-600 border-0 text-xl px-5 py-3 hover:bg-green-600 transition ease-in-out duration-300 delay-200 hover:scale-[1.02]" onClick={handleRazorpayPayment}>
                          <span>
                            Place Order
                            <i className="fas fa-long-arrow-alt-right ms-2"></i>
                          </span>
                        </Button>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </Container>
  );
}
