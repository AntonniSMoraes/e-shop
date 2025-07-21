import styled from "styled-components";
import { Title } from "../../components/title";

import imageTeste from "../../res/dog_clothes.png";
import { NormalButton } from "../../components/normalButton";
import { useState } from "react";

const ItemInfo = () => {
    const [ quantity, setQuantity ] = useState(1);

    const handleQuantityChange = (e) => {
        const value = e.target.value;
        if (value < 1) {
            setQuantity(1);
        } else {
            setQuantity(value);
        }
    };

    return (
        <Container>
            <Title>Item Information</Title>
            <ItemInfoContainer>
                <ImageContainer>
                    <img src={imageTeste} alt="Item" />
                </ImageContainer>
                <InfoContainer>
                    <Title>Dog Clothes</Title>
                    <p>Price: $29.99</p>
                    <p>Description: Comfortable and stylish clothes for your dog.</p>
                    <p style={{marginBottom: '-1rem'}}>Quantidade</p>
                    <Input type="number" value={quantity} onChange={handleQuantityChange}/>
                    <ButtonContainer>
                        <NormalButton>Add to Cart</NormalButton>
                        <NormalButton>Buy Now</NormalButton>
                    </ButtonContainer>
                </InfoContainer>
            </ItemInfoContainer>
        </Container>
    );
}

export default ItemInfo;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4rem;
    width: 100%;
`

const ItemInfoContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 90%;
`

const ImageContainer = styled.div`
    width: 500px;
    height: 450px;
    background-color: var(--cor-branco);
    border-radius: 10px;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    display: flex;

    & img {
        width: 400px;
        height: 400px;
    }
`

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    background-color: var(--cor-branco);
    border-radius: 10px;
    width: 500px;
    height: 450px;
    padding: 1rem 2rem;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
    align-items: flex-end;
`

const Input = styled.input`
    width: 60px;
    height: 60px;
    border: 2px solid var(--cor-logo);
    border-radius: 10px;
    padding: .5rem;
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--cor-hoover);
`