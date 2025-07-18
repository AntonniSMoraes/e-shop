import styled from "styled-components";

export const Mosaico = () => {
    return(
        <Container>
            teste
        </Container>
    );
}

const Container = styled.button`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background-color: var(--cor-branco);
    border-radius: 20px;
    border: none;
    width: 200px;
    height: 300px;
    padding: 20px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    cursor: pointer;

    &:hover {
        box-shadow: 0 15px 20px rgba(0, 0, 0, 0.2);
        transform: scale(1.05);
    }
`