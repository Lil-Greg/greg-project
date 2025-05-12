import { useState } from 'react';
import { Card, CardContent, CardHeader } from '../../components/card';
import { buttonStuff } from './outsource';
import { TbPlusMinus } from "react-icons/tb";
import { evaluate } from 'mathjs';

export default function Calculator() {
    const buttons = buttonStuff;
    const [inputVal, setInputVal] = useState("");
    const [resHistory, setResHistory] = useState([]);
    let result = "";

    const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Onclick Event Thing Testing", event);
        setInputVal(inputVal.concat(event.currentTarget.value));
    }
    const handleSolve = () => {
        result = evaluate(inputVal);
        setResHistory(resHistory.append(result));
        console.log(result);
    }

    // console.log("Keyboard Event Testing", window.KeyboardEvent.name);
    return (
        <>
            <div className='w-full h-[90vh]'>
                <div className="w-full h-full flex flex-col justify-center items-center">

                    <Card className='bg-white min-w-[40%] h-[50%] px-3'>
                        <CardHeader className='h-[30%]  pb-3 border-b-3 border-solid border-gray-700'>
                            <input
                                type="text"
                                className='p-2 text-center bg-slate-200 dark:bg-gray-900 border-1 border-solid border-gray-700 rounded-xl'
                                value={inputVal}
                            />
                        </CardHeader>
                        <CardContent className='h-[70%] p-2'>
                            <div className="h-full flex flex-row size-full justify-evenly">

                                <div className="w-[200px] grid grid-cols-3 grid-rows-4 gap-2">
                                    {buttons.numbers.buttons.map((num) => (
                                        <button
                                            key={num}
                                            id={num}
                                            value={num}
                                            className='border-solid border-1 border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 rounded-xl flex flex-col items-center justify-center'
                                            onClick={handleOnClick}
                                        >
                                            {num === "pos/neg" ?
                                                <TbPlusMinus />
                                                :
                                                <span>{num.trim()}</span>
                                            }
                                        </button>
                                    ))}
                                </div>

                                <div className="col-span-[0.5fr] w-[50px] flex flex-col items-center justify-evenly gap-1">
                                    {buttonStuff.operations.buttons.map((operation) => (
                                        <button
                                            key={operation}
                                            value={operation}
                                            className='size-[3vw] text-[1.5vw] border-solid border-1 border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 flex flex-col items-center justify-center rounded-xl'
                                            onClick={handleOnClick}
                                        >
                                            {operation.trim()}
                                        </button>
                                    ))}
                                    <button
                                        className='size-[3vw] text-[1.5vw] text-gray-600 bg-green-400 border-solid border-1 border-green-300 hover:bg-green-300 flex flex-col items-center justify-center rounded-xl'
                                        onClick={handleSolve}
                                    >
                                        =
                                    </button>
                                </div>


                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
