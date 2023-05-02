import styled from 'styled-components'
import ClearIcon from '@mui/icons-material/Clear';

import {useState} from "react"

const sudokuBoard = [
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""],
    ["","","","","","","","",""]
]

function SudokuSolver(){
    const [currentBoard, setCurrentBoard] = useState(sudokuBoard)
    const [selectedRow, setSelectedRow] = useState(0);
    const [selectedColumn, setSelectedColumn] = useState(0);

    const selectRowColumn = (e) =>{
        e.preventDefault();
        const prevCell = document.getElementById("cell-"+selectedRow+"-"+selectedColumn)
        prevCell.style.backgroundColor = "LavenderBlush"
        setSelectedRow(e.target.value[0])
        setSelectedColumn(e.target.value[2])
        e.target.style.backgroundColor = "CornflowerBlue"
    }
    const changeRowColumn = (e) =>{
        const newBoard = currentBoard;
        newBoard[selectedRow][selectedColumn]=e.target.value;
        setCurrentBoard([...newBoard]);
    }

    return(
        <div>
            <Board>
                {currentBoard.map((currentRow, rowIndex)=>{
                    return(
                        currentRow.map((currentColumn, columnIndex)=>{
                            if((columnIndex === 2  || columnIndex === 5) && (rowIndex === 2  || rowIndex === 5)){
                                return(<Tile onClick={selectRowColumn} id={`cell-${rowIndex}-${columnIndex}`} value={[rowIndex,columnIndex]} style={{borderRight:"2px solid black", borderBottom:"2px solid black"}}>{currentColumn}</Tile>)
                            }
                            else if(rowIndex === 2  || rowIndex === 5){
                                return(<Tile onClick={selectRowColumn} id={`cell-${rowIndex}-${columnIndex}`} value={[rowIndex,columnIndex]} style={{borderBottom:"2px solid black"}}>{currentColumn}</Tile>)
                            }
                            else if(columnIndex === 2  || columnIndex === 5){
                                return(<Tile onClick={selectRowColumn} id={`cell-${rowIndex}-${columnIndex}`} value={[rowIndex,columnIndex]} style={{borderRight:"2px solid black"}}>{currentColumn}</Tile>)
                            }

                            return(<Tile onClick={selectRowColumn} id={`cell-${rowIndex}-${columnIndex}`} value={[rowIndex,columnIndex]}>{currentColumn}</Tile>)
                        })
                    )
                })}
            </Board>
            <Digits>
                <NumberSelection onClick={changeRowColumn} value={1}>1</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={2}>2</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={3}>3</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={4}>4</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={5}>5</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={6}>6</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={7}>7</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={8}>8</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={9}>9</NumberSelection>
                <NumberSelection onClick={changeRowColumn} value={""}><ClearIcon/></NumberSelection>
            </Digits>
        </div>
    )
}

const Board = styled.div`
    display:flex;
    flex-wrap:wrap;
    border: 1px solid black;
    margin: 100px auto;
    width:452px;
    height:452px;

`
const Tile = styled.button`
    width:50px;
    height:50px;
    border:1px solid lightgray;
    background-color: LavenderBlush;
    font-size:20px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
    &:hover{
        background-color: LightSkyBlue;
    }
`

const Digits = styled.div`
    width:450px;
    height:50px;
    margin: 0 auto;
    display:flex;
    flex-wrap:wrap;
`

const NumberSelection = styled.button`
    width:43px;
    height:50px;
    border: 1px solid black;
    margin-left:1px;
    margin-right:1px;

    font-size:20px;
    font-weight:bold;
    display:flex;
    justify-content:center;
    align-items:center;
`



export default SudokuSolver;