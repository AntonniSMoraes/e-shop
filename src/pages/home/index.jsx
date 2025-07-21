import styled from "styled-components";
import { Mosaico } from "../../components/mosaico";
import { SideBar } from "../../components/sideBar";
import { Carousel } from "../../components/carousel";
import { useState } from "react";
import { Title } from "../../components/title";

const Home = () => {
    const [ mosaicos, setMosaicos ] = useState([
            { id: 1, size: 'P' },
            { id: 2, size: 'P' },
            { id: 3, size: 'P' },
            { id: 4, size: 'P' },
            { id: 5, size: 'P' },
            { id: 6, size: 'P' },
            { id: 7, size: 'G' },
            { id: 8, size: 'P' },
            { id: 9, size: 'P' },
            { id: 10, size: 'P' },
            { id: 11, size: 'M' },
            { id: 14, size: 'P' },
            { id: 15, size: 'P' },
            { id: 16, size: 'P' },
            { id: 17, size: 'M' },
            { id: 18, size: 'M' },
            { id: 19, size: 'P' },
    ]);



    return(
        <Container>
                <Carousel />
                <Title>Mosaicos</Title>
                <MosaicoContainer>
                    {/* <SideBar /> */}
                    <MosaicoGrid>
                        {mosaicos.map(mosaico => (
                            <Mosaico key={mosaico.id} size={mosaico.size} />))
                        }
                    </MosaicoGrid>
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
    align-items: center;
    justify-content: center;
    width: 100%;
`

const MosaicoGrid = styled.div`
    display: grid;
    width: 1000px;
    grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
    grid-auto-rows: 125px; 
    grid-auto-flow: dense;
    box-shadow: -10px 10px 20px rgba(0, 0, 0, 0.08);
`