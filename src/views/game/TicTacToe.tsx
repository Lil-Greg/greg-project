import { useState } from "react"
import "./TicTacToe.css"

export default function TicTacToe() {
    const [board, setBoard] = useState([{}, {}, {}]);
    const [turn, setTurn] = useState<boolean | undefined>(true);// true = p1, undefined = comp, false = p2
    // const winningPattern = {
    //     [0][1], [0][1], [0][1],
    //     [0][0], [0][0], [0][0],

    // }

    const handleClick = (rowIndex?: number, cellIndex?: number) => {

    }
    return (
        <>
            <div className="card">
                <div className="board grid grid-row-3">
                    {
                        board.map((row, index) => {
                            return <div className={`row row-${index} grid grid-cols-3`} key={index}>
                                {row.map((cell, index) => {
                                    return <div className={`cell cell-${index}`} onClick={() => handleClick(index)}>
                                        {
                                            cell === -1 ? "empty"
                                                : cell === 0 ? "x"
                                                    : "y"
                                        }
                                    </div>
                                })}
                            </div>
                        })
                    }
                </div>
            </div>
        </>
    )
}