import styled from "styled-components";
import imagemTeste from "../../res/banner.jpeg";
import imagemTeste2 from "../../res/banner.png";
import React, { useEffect, useState } from "react";
import { arrowBack, arrowForward } from "../../constants/utils";

const slides = [
    imagemTeste
]

export const Carousel = () => {
    const [ index, setIndex ] = useState(0);

    const nextSlide = () => {
        slides.length>1 && setIndex((prev) => (prev === slides.length-1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        slides.length>1 && setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    useEffect(() => {
        const interval = setInterval(() => {
        nextSlide();
        }, 6000);

        return () => clearInterval(interval);
    }, []);

    console.log("Index do slide:", index);

    return (
        <Container>
            {
                index > 0 &&
                <ChangeButton style={{ left: "100px" }} onClick={prevSlide}>{arrowBack}</ChangeButton>
            }
            <CarouselItem src={slides[index]} alt="Banner" />
            {
                index > 0 &&
                <ChangeButton style={{ right: "100px" }} onClick={nextSlide}>{arrowForward}</ChangeButton>
            }
        </Container>
    );
}

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--cor-secundaria);
    border-radius: 20px;
    width: 90%;
    height: 220px;
`

const ChangeButton = styled.button`
    width: 50px;
    height: 50px;
    position: absolute;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: var(--cor-caixa);
    border-radius: 100%;
    border: none;
    cursor: pointer;
`

const CarouselItem = styled.img`
    width: 100%;
    height: 220px;
    border-radius: 20px;
`