import styled from "styled-components";

export const NormalButton = ({ children, onClick }) => {
    return (
        <Container onClick={onClick}>
            {children}
        </Container>
    );
}

const Container = styled.button`
    background-color: var(--cor-logo);
    width: 100%;
    height: 50px;
    color: var(--cor-branco);
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
    
    &:hover {
        background-color: var(--cor-hoover);
    }
`