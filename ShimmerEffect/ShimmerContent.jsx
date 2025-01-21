import React from "react"
import { Container } from '@mui/material';
import Card from 'react-bootstrap/Card';
import { Col, Row } from "react-bootstrap";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

const YourComponent = () => {
  return (
    <>
      {/* Carousel Skeleton */}
      <div className="mt-4 rounded max-md:hidden"><Skeleton height="400px" /></div>
      <div className="mt-4 rounded md:hidden"><Skeleton height="240px" /></div>
      {/* Cards Skeleton */}
      <Container className="my-4">
        <Row xl={3} className="g-4">
          {Array.from({ length: 9 }).map((ele, index) => (
            <Col key={index} className="mt-5">
              <Card className={`border-0 w-[350px] h-[500px] m-auto transition duration-500 ease-in-out shadow-2xl bg-white text-gray-700 relative rounded-xl md:w-[310]`}>
                <div className='h-[300px] object-fill' ><Skeleton height="300px" /></div>
                <Card.Body className='p-4'>
                  <Card.Title className='bg-clip-text text-xl' ><Skeleton count={1} /></Card.Title>
                  <Card.Text><Skeleton count={4} /></Card.Text>
                </Card.Body>
              </Card>
            </Col >
          ))
          }
        </Row>
      </Container>
    </>
  )
};

export default YourComponent;