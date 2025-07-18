import styled from "styled-components";
import { Mosaico } from "../../components/mosaico";
import { SideBar } from "../../components/sideBar";
import { Carousel } from "../../components/carousel";

const Home = () => {
    return(
        <Container>
                <Carousel />
                <MosaicoContainer>
                    <SideBar />
                    <Mosaico />
                </MosaicoContainer>
        </Container>
    );
}

export default Home;

const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px 0;
    gap: 3rem;
    width: 100%;
`

const MosaicoContainer = styled.section`
    display: flex;
    gap: 20px;
    width: 100%;
`