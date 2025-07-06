import styled from "styled-components";
import { cart } from "../../constants/utils";

export const CircularButton = ({ width = '40px' }) => {
    return(
        <Container width={width}>
            {cart}
        </Container>
    );
}

const Container = styled.button`
    width: ${props => props.width};
    height: ${props => props.width};
    border: none;
    border-radius: 100%;
    background-color: var(--cor-logo);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
        background-color: var(--cor-hoover);
    }
`