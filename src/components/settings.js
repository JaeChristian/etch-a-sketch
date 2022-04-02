import styled from "@emotion/styled"
import {useState} from "react";
import {exportComponentAsPNG} from "react-component-export-image";

const Container = styled.div`
    margin-top: 20px;
    display: flex;
    gap: 20px;
    align-items: center;
`;

const Button = styled.button`
    padding: 20px;
    padding-top: 5px;
    padding-bottom: 5px;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    color: white;
    background: rgb(0,0,0,0);
    border-radius: 8px;
    border-color: white;
`;

const ColorPicker = styled.input`
    width: 80px;
    height: 80px;
    padding: 0px;
    border-radius: 50px;
`
function Settings({DrawingColor, setDrawingColor, boardRef}) {
    const [PrimaryColor,setPrimaryColor] = useState(DrawingColor);
    const [OnErase, setOnErase] = useState(false);
    function handleColorChange(e){
        const newColor = e.target.value;
        setDrawingColor(newColor);
    }

    function handleErase() {
        if(OnErase===false){
            setPrimaryColor(DrawingColor);
            setDrawingColor("white");
            setOnErase(true);
        }
    }

    function handlePencil() {
        if(OnErase===true){
            setDrawingColor(PrimaryColor);
            setPrimaryColor(DrawingColor);
            setOnErase(false);
        }
    }

    return(
        <Container>
            <ColorPicker id="colorPicker" type="color" defaultValue="black" onChange={(event)=>{handleColorChange(event)}}/>
            <Button onClick={()=>handlePencil()}>Pencil</Button>
            <Button onClick={()=>handleErase()}>Eraser</Button>
            <Button onClick={()=>exportComponentAsPNG(boardRef)}>Export</Button>
        </Container>
    )
}
export default Settings;