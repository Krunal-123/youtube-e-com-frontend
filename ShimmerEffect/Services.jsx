import React from "react";
import { Container } from '@mui/material';
import Flickty from "../components/Flickty.jsx";
import { ShimmerPostList } from "react-shimmer-effects";

export default function Services() {
    return (
        <>
            <Flickty />
            <Container className="mt-5">
                <ShimmerPostList postStyle="STYLE_FOUR" col={3} row={3} gap={30} />;
            </Container>
        </>
    )
}