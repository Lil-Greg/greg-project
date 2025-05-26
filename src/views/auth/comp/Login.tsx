import React, { useRef, useState } from "react"

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

import '../style/Login.css';

export default function Login() {
    const [pShow, setPShow] = useState(false);
    const uRef = useRef<HTMLInputElement>(null);
    const pRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        alert(
            `Username: ${uRef.current?.value}   Password: ${pRef.current?.value}`
        );


    }

    return (
        <>
            <div className="flex flex-col items-center gap-2">

                <form onSubmit={handleSubmit}>
                    <div className="w-full flex flex-col gap-2">

                        <div className="dark:outline-slate-500 rounded-lg flex flex-row outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <input
                                type="text"
                                placeholder="Username or Email"
                                ref={uRef}
                                className="h-full p-2 grow focus:outline-none group"
                            />
                        </div>


                        <div className="dark:outline-slate-500 rounded-lg flex flex-row outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                            <input
                                type={pShow ? "text" : "password"}
                                placeholder="Password"
                                ref={pRef}
                                className="h-full p-2 grow focus:outline-none group"
                            />
                            <div className="h-[2.2rem] p-2 hover:cursor-pointer bg-gray-300 dark:bg-gray-700 rounded-r-lg flex items-center" onClick={() => setPShow(!pShow)}>
                                {pShow ? <IoMdEye /> : <IoMdEyeOff />}
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <button
                                type="submit"
                                className="size-[30%] p-1 rounded-full bg-violet-500 hover:bg-violet-600 focus:outline-2 focus:outline-offset-1 focus:outline-violet-500 active:bg-violet-900"
                            >
                                Submit
                            </button>
                        </div>

                    </div>



                </form>

            </div>

        </>
    )
}