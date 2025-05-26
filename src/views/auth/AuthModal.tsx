import React from 'react'
import Login from './comp/Login';
import Register from './comp/Register';
import { Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function AuthModal() {
    const [loginShow, setLoginShow] = React.useState(true); // True = Login; False = Register
    const [openModal, setOpenModal] = React.useState(true);

    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    if (pathname !== '/auth') {
        setOpenModal(false);
    }

    return (
        <>
            <div>

                <Modal show={openModal} onClose={() => navigate('/')}>
                    <ModalHeader>
                        {loginShow ? <span>Login</span> : <span>Register</span>}
                    </ModalHeader>
                    <ModalBody>
                        {loginShow ? <Login /> : <Register />}
                    </ModalBody>
                    <ModalFooter>
                        <div className="hover:cursor-pointer hover:bg-gray-200" onClick={() => setLoginShow(!loginShow)}>
                            {loginShow ? "No Account?" : "Sign In"}
                        </div>
                    </ModalFooter>
                </Modal>
            </div>
        </>
    )
}
