import styled from "styled-components";
import logo from "../../res/logo.png";
import { CircularButton } from "../circularButton";

export const Header = () => {
    return(
        <Container>
            <article>
                <a href="/">
                    <img src={logo}/>
                    <h1>Moda Pet</h1>
                </a>
            </article>
            <article>
                <CircularButton width="50px"/>
            </article>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    width: calc(100% - 2rem);
    justify-content: space-between;
    align-items: center;

    & article {
        display: flex;
        align-items: flex-end;
        margin: 0;
    }

    & img {
        width: 80px;
        height: 80px;
    }

    & a {
        display: flex;
        align-items: center;
        text-decoration: none;
        color: var(--cor-logo);
        font-family: 'Caveat Brush', cursive;
        font-size: 1.5rem;
    }
`