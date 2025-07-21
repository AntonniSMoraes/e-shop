import styled from "styled-components";

export const Title = ({ children }) => {
    return (
        <Container>
            {children}
        </Container>
    );
}

const Container = styled.h1`
    text-align: center;
    font-family: "Caveat Brush", cursive;
    font-size: 3rem;
    color: var(--cor-hoover);
    margin-bottom: -1.5rem;
    padding: 0;
`