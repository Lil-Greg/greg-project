import { Card, CardContent, CardHeader } from '../../components/card';
import { buttonStuff } from './outsource';
import { TbPlusMinus } from "react-icons/tb";
import { RiSquareRoot } from "react-icons/ri";
import { FaChevronUp } from "react-icons/fa";

export default function Calculator() {
    const buttons = buttonStuff;
    return (
        <>
            <div className='w-full h-[90vh]'>
                <div className="w-full h-full flex flex-col justify-center items-center">

                    <Card className='min-w-[50%] h-[50%] px-3'>
                        <CardHeader className='h-[30%] dark:bg-[rgba()] pb-3 border-b-3 border-solid border-gray-700 '>
                            <input
                                type="text"

                            />
                        </CardHeader>
                        <CardContent className='h-[70%] p-2'>
                            <div className="grid grid-cols-5 grid-rows-auto gap-2">
                                {buttons.expressions.buttons.map((expression) => (
                                    <button
                                        key={expression}
                                        className='col-span-1 border-solid border-1 border-slate-600 rounded-full flex flex-col items-center justify-center'
                                    >
                                        {expression === "sqroot" ?
                                            <RiSquareRoot />
                                            :
                                            expression === "exponent" ?
                                                <FaChevronUp />
                                                :
                                                <span>{expression}</span>}
                                    </button>
                                ))}
                                <div className="col-span-3 row-span-4">
                                    <div className="grid grid-cols-3 grid-rows-4">
                                        {buttons.numbers.buttons.map((num, index) => (
                                            <button
                                                key={num}
                                                value={parseInt(num)}
                                                className='border-solid border-1 border-slate-600 rounded-full flex flex-col items-center justify-center'
                                            >
                                                {index === 11 ?
                                                    <TbPlusMinus />
                                                    :
                                                    <span>{num}</span>
                                                }
                                            </button>
                                        ))}
                                    </div>
                                </div>


                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </>
    )
}
