import React from "react"
import { ShimmerPostList } from "react-shimmer-effects";
import { Container } from '@mui/material';

const YourComponent = () => {
  return (
    <Container className="mt-5">
      <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={2} gap={30} />;
    </Container>
  )
};

export default YourComponent;