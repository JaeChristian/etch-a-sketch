import styled from "@emotion/styled"
import { useEffect, useState } from "react";

const size = 16;
const DrawBoard = styled.div`
    width: 500px;
    height: 500px;
    background: white;
    display: grid;
    grid-template-columns: 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25%;
    grid-template-rows: 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25% 6.25%;
`;
const GridItem = styled.div`
    user-select: none;
    
`

function Pixel({children, MouseDown, DrawingColor}) {
    const [PixelColor, setPixelColor] = useState("white")
    const GridItem = styled.div`
        background: ${PixelColor};
        user-select: none;
        &:hover {
            background: ${DrawingColor};
          }
    `
    function draw() {
        setPixelColor(DrawingColor);
    }
    return(
            <GridItem 
                onMouseOver={()=>
                    {
                        if(MouseDown===true){draw()}
                    }
                } 
                onMouseDown={()=>draw()}>
                    {children}
            </GridItem>
            )
}

function Board({MouseDown, DrawingColor, boardRef}) {
    const Grid = [];
    for(let i=0; i<(size * size); i++){
        Grid.push(i);
    }
    return(
        <DrawBoard ref={boardRef}>
            {Grid.map((gridItem)=> {
                return(<Pixel key={gridItem} DrawingColor={DrawingColor} MouseDown={MouseDown}></Pixel>)
            })
            }
        </DrawBoard>
    )
}

export default Board;