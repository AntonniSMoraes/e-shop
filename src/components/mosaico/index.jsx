import styled from "styled-components";
import imageTest from "../../res/dog_clothes.png";
import { useNavigate } from "react-router-dom";

export const Mosaico = ({size}) => {
    
    const nav = useNavigate();

    return(
        <Container size={size} onClick={() => nav('/produto')}>
            <Image src={imageTest} alt="Mosaico" />
        </Container>
    );
}

const Container = styled.button`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-branco);
    border: none;

    ${({ size }) => size === 'P' && `
        grid-column: span 2;
        grid-row: span 2;
    `}
    ${({ size }) => size === 'M' && `
        grid-column: span 4;
        grid-row: span 4;
    `}
    ${({ size }) => size === 'G' && `
        grid-column: span 8;
        grid-row: span 8;
    `}

    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
`