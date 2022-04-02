import styled from "@emotion/styled"
const Container = styled.div`
    margin-top: 20px;
    display: flex;
`;

const ColorPicker = styled.input`
    width: 80px;
    height: 80px;
    padding: 0px;
    border-radius: 50px;
`
function Settings({setDrawingColor}) {
    function handleColorChange(e){
        const newColor = e.target.value;
        setDrawingColor(newColor);
    }
    return(
        <Container>
            <ColorPicker id="colorPicker" type="color" defaultValue="black" onChange={(event)=>{handleColorChange(event)}}/>
        </Container>
    )
}
export default Settings;