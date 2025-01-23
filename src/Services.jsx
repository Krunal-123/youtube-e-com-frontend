import React, { useState, useEffect } from "react";
import Card from "../components/Cards.jsx";
import { Container } from '@mui/material';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Flickty from "../components/Flickty.jsx";
import { useCart } from "./context/CartContext.jsx";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import ShimmerContent from '../ShimmerEffect/ShimmerContent.jsx'


export default function ServiceList() {
  const { services, user, LightMode } = useCart();
  const [sortCallback, setSortcallback] = useState(() => () => { })

  // Load services into the cards components mount and services change

  if (!services || !user) {
    return (
      <ShimmerContent />
    );
  }
  else {

    return (
      <>
        <Flickty />
        <div className="my-12">
          {services.length > 0 ? (
            <h1 className={`mb-4 text-4xl font-extrabold leading-none tracking-tight text-${LightMode ? "white" : "dark"} md:text-5xl lg:text-6xl text-center`}>
              Our Services
            </h1>
          ) : (
            <h1 className="my-5 text-4xl font-extrabold leading-none tracking-tight text-red-500 md:text-5xl lg:text-6xl text-center">
              No Data Found!
            </h1>
          )}

          <Container>
            {/* Sort by Price Button */}
            {services.length !== 0 && <div className="d-flex justify-content-end">
              <Dropdown as={ButtonGroup} className="me-2 shadow-2xl" >
                <Button variant="success" className={`font-semibold text-white`}>Sort By Price</Button>
                <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />
                <Dropdown.Menu className={`text-center`} data-bs-theme={`${LightMode ? "dark" : "light"}`}>
                  <Dropdown.Item className={`hover:font-bold`} onClick={() => setSortcallback(() => (a, b) => (a.price - b.price))}>Low to High</Dropdown.Item>
                  <Dropdown.Item className={`hover:font-bold`} onClick={() => setSortcallback(() => (a, b) => (b.price - a.price))}>High to Low</Dropdown.Item>
                  <Dropdown.Item className={`hover:font-bold`} onClick={() => setSortcallback(() => { })}>Default</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>}

            {/* Cards List */}
            <Row xl={3} className="g-4">
              {[...services]?.sort(sortCallback)?.map((d, index) => (
                <Col key={index} className="mt-5">
                  <Card
                    id={d._id}
                    img={d.img}
                    title={d.title}
                    status={d.status}
                    color={d.color}
                    description={d.description}
                    email={user[0]?.email}
                    price={d.price}
                  />
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </>
    );
  }
}