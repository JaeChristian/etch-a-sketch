import styled from "@emotion/styled";
import Board from "./components/board";
import {useState} from "react";
import Settings from "./components/settings";
const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction:column;
    align-items: center;
`;

const Box = styled.div`
`;

const Heading = styled.h1`
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: white;
`;

const Text = styled.p`
    color: white;
    text-align: center;
`;

function Main() {
    const [MouseDown, setMouseDown] = useState(false);
    const [DrawingColor, setDrawingColor] = useState("black");
    return(
        <Container onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)}>
            <div>
                <Heading>Etch-a-Sketch</Heading>
                <Text>
                    Sketch something
                </Text>
            </div>
            <Box>
                <Board DrawingColor={DrawingColor} MouseDown={MouseDown}/>
                <Settings setDrawingColor={setDrawingColor}>Balls</Settings>
            </Box>
        </Container>
    )
}
export default Main;