import styled from "@emotion/styled";
import Board from "./components/board";
import {useState, useRef} from "react";
import Settings from "./components/settings";
import {exportComponentAsPNG} from "react-component-export-image";

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
    const boardRef = useRef()
    return(
        <Container onMouseDown={()=>setMouseDown(true)} onMouseUp={()=>setMouseDown(false)}>
            <div>
                <Heading>Etch-a-Sketch</Heading>
            </div>
            <Box>
                <Board DrawingColor={DrawingColor} MouseDown={MouseDown} boardRef={boardRef}/>
                <Settings DrawingColor={DrawingColor} setDrawingColor={setDrawingColor} boardRef={boardRef}>Balls</Settings>
            </Box>
        </Container>
    )
}
export default Main;