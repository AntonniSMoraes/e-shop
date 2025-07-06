import styled from "styled-components";
import logo from "../../res/logo.png";
import { CircularButton } from "../circularButton";

export const Header = () => {
    return(
        <Container>
            <article>
                <img src={logo} />
                <h1>Moda Pet</h1>
            </article>
            <article>
                <CircularButton width="50px"/>
            </article>
        </Container>
    );
}

const Container = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    & article {
        display: flex;
        align-items: flex-end;
        margin: 0;
    }

    & img {
        width: 80px;
        height: 80px;
    }
`