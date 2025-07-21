import styled from "styled-components";
import { Title } from "../../components/title";

import imageTeste from "../../res/dog_clothes.png";
import { NormalButton } from "../../components/normalButton";

const ItemInfo = () => {
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
    height: 500px;
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
    background-color: var(--cor-branco);
    border-radius: 10px;
    width: 500px;
    height: 500px;
    padding: 1rem;
`

const ButtonContainer = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;
    height: 100%;
    align-items: flex-end;
`