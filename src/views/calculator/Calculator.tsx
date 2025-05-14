import { useState } from 'react';
import { buttonStuff } from './outsource';
import { TbPlusMinus } from "react-icons/tb";
import { evaluate, create, all } from 'mathjs';

import { IoMdClose } from "react-icons/io";
import { TbMathXDivideY as FractionIcon } from "react-icons/tb";
import { TbDecimal } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";


type ResultsObject = {
    equation: string;
    result: string;
    fraction: string;
    mixedNum: string;
    showFrac: boolean;
};


export default function Calculator() {
    const buttons = buttonStuff;
    const [inputVal, setInputVal] = useState("");
    const [resHistory, setResHistory] = useState<ResultsObject[]>([]);

    const math = create(all);

    // EVENT HANDLERS


    const handleShowFrac = (index: number) => {
        setResHistory(prev => {
            const updated = [...prev];
            updated[index] = {
                ...updated[index],
                showFrac: !updated[index].showFrac
            };
            return updated;
        });
    };

    const handleBtnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
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
        const fraction = math.fraction(result).simplify().toFraction();
        const mixedNum = math.fraction(result).simplify().toFraction(true);

        const temp: ResultsObject = {
            equation: inputVal,
            result,
            fraction,
            mixedNum,
            showFrac: false,
        };
        setResHistory(prev => [temp, ...prev]); // Immutable update
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
                                <div key={index} className='w-full h-[8dvh] p-2 flex flex-row items-center border-y-1 border-solid border-slate-200 dark:border-slate-500 translation-all duration-1000'>
                                    <span
                                        key={index}
                                        className='w-full h-full flex flex-row items-center text-[1.5dvw] justify-between'
                                    >
                                        <span className='w-[25%] text-end'>
                                            {res.equation}

                                        </span>
                                        <FaArrowRightLong />
                                        <span className='w-[45%] flex flex-row items-center justify-between gap-2'>
                                            <span className='w-[75%] text-center'>
                                                {res.showFrac === true ? <>{res.fraction}&nbsp;&nbsp;&nbsp;or&nbsp;&nbsp;&nbsp;{res.mixedNum}</>
                                                    : res.result}
                                            </span>

                                            <span className='hover:cursor-pointer' onClick={() => handleShowFrac(index)}>
                                                {res.showFrac === true ?
                                                    <TbDecimal
                                                        className='size-[2.7dvh]'
                                                    />
                                                    :
                                                    <FractionIcon
                                                        className='size-[2.7dvh]'
                                                    />
                                                }
                                            </span>
                                            <span className='flex flex-col items-end justify-self-end'>
                                                <IoMdClose className='hover:cursor-pointer size-[1.75dvw]' onClick={() => handleClose(index)} />
                                            </span>

                                        </span>
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