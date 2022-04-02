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
    &:hover {
        background: black;
      }
`

function Pixel({children, MouseDown, DrawingColor}) {
    const GridItemDrawn = styled.div`
        background: ${DrawingColor};
        user-select: none;
    `
    const [Drawn, setDrawn] = useState(false);
    return(
        <>
        {
            Drawn ? (<GridItemDrawn>{children}</GridItemDrawn>) : (<GridItem onMouseOver={()=>
                {
                    if(MouseDown===true){setDrawn(true)}
                }
            } onMouseDown={()=>setDrawn(true)}>
                {children}
            </GridItem>)
        }
        </>
    )
}

function Board({MouseDown, DrawingColor}) {
    const Grid = [];
    for(let i=0; i<(size * size); i++){
        Grid.push(i);
    }
    return(
        <DrawBoard>
            {Grid.map((gridItem)=> {
                return(<Pixel key={gridItem} DrawingColor={DrawingColor} MouseDown={MouseDown}></Pixel>)
            })
            }
        </DrawBoard>
    )
}

export default Board;