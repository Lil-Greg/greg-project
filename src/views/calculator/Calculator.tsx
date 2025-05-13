import { useState } from 'react';
import { buttonStuff } from './outsource';
import { TbPlusMinus } from "react-icons/tb";
import { evaluate } from 'mathjs';

import { IoMdClose } from "react-icons/io";

export default function Calculator() {
    const buttons = buttonStuff;
    const [inputVal, setInputVal] = useState("");
    const [resHistory, setResHistory] = useState<string[]>([]);

    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log("Onclick Event Thing Testing", event);
        setInputVal(inputVal.concat(event.currentTarget.value));
    }
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    }
    const handleClose = (index: number) => {
        const updatedHistory = resHistory.filter((_, i) => i !== index);
        setResHistory(updatedHistory);
    };
    const handleSolve = (e: React.FormEvent) => {
        e.preventDefault();

        const result = evaluate(inputVal);
        const newEntry = `${inputVal} = ${result}`;

        setResHistory(prev => [...prev, newEntry]); // Immutable update
        setInputVal("");
    };

    // console.log("Keyboard Event Testing", window.KeyboardEvent.name);
    return (
        <>
            <div className='w-full h-[90vh] overflow-y-hidden'>
                <div className="w-full h-full flex flex-col items-end justify-none flex-grow gap-1">

                    {/* Results & Input */}
                    <div className='w-full h-[65%] flex flex-col items-end gap-2'>

                        {/* Result Overflow */}
                        <div className='w-full h-[fit-content] flex flex-col-reverse items-end flex-grow overflow-y-auto'>
                            {resHistory.map((res, index) => (
                                <div key={res} className='w-full h-[35px] p-2 flex flex-row items-center border-y-1 border-solid border-slate-200 dark:border-slate-500'>
                                    <span
                                        key={res}
                                        className='w-[98%] flex flex-col items-center text-[1.5dvw] justify-self-center'
                                    >
                                        {res}
                                    </span>
                                    <span className='w-[2%] flex flex-col items-end justify-self-end'>
                                        <IoMdClose className='hover:cursor-pointer size-[1.75dvw]' onClick={() => handleClose(index)} />
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Input */}

                        <div className='w-full h-[10%] bg-slate-500 dark:bg-slate-600'>
                            <form className='w-full h-full' onSubmit={handleSolve}>

                                <input
                                    type="text"
                                    value={inputVal}
                                    onChange={handleChange}
                                    className='w-full h-full p-2 text-center text-[1.5dvw]'
                                />
                            </form>

                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="w-full h-[35%] flex flex-col items-center border-t-2 border-solid border-slate-200 dark:border-slate-500">
                        <div className="h-full container p-2 rounded-md flex flex-row justify-center gap-5">
                            <div className="grid grid-cols-3 grid-rows-3 gap-1">
                                {buttons.numbers.buttons.map((num) => (
                                    <button
                                        key={num}
                                        id={num}
                                        value={num}
                                        className='size-[50px] border-solid border-1 border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 rounded-xl flex flex-col items-center justify-center'
                                        onClick={handleBtnClick}
                                    >
                                        {num === "pos/neg" ?
                                            <TbPlusMinus />
                                            :
                                            <span>{num.trim()}</span>
                                        }
                                    </button>

                                ))}
                            </div>

                            <div className="w-[50px] flex flex-col items-center justify-evenly gap-1">
                                {buttonStuff.operations.buttons.map((operation) => (
                                    <button
                                        key={operation}
                                        value={operation}
                                        className='size-[3vw] text-[1.5vw] border-solid border-1 border-slate-600 hover:bg-slate-200 dark:hover:bg-slate-500 flex flex-col items-center justify-center rounded-xl'
                                        onClick={handleBtnClick}
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

                    </div>

                </div>
            </div>
        </>
    )
}