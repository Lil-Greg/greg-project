import React from 'react'
import Login from './comp/Login';
import Register from './comp/Register';

export default function AuthModal() {
    const [yo, yuur] = React.useState<"yooo!!" | "yuurr!!">("yooo!!");
    const [loginShow, setLoginShow] = React.useState(true); // True = Login; False = Register
    return (
        <div>
            <span className='translation-all duration-500 border-solid border-2 border-red-400 hover:border-green-400 hover:bg-magenta-200 hover:cursor-pointer rounded-full' onClick={() => yuur(yo !== "yooo!!" ? "yuurr!!" : "yooo!!")}>
                {yo}
            </span>

            <div className="container hover:cursor-pointer hover:bg-gray-200" onClick={() => setLoginShow(!loginShow)}>
                {loginShow ? <Login /> : <Register />}
            </div>

        </div>
    )
}
