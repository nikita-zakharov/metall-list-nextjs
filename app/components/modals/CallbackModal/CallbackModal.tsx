'use client'
import { useCallbackModal } from "./CallbackModalProvider"
import { BsXLg } from "react-icons/bs"
import Form from "../../shared/Form"

const CallbackModal = () => {
    const { hide } = useCallbackModal()

    return (
        <div className="fixed top-0 z-20">
            <div className="w-screen h-screen fixed top-0 left-0 bg-black opacity-80" onClick={hide}></div>
            <div className="w-[420px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div>
                        <button onClick={hide} className="absolute top-4 right-4"><BsXLg /></button>
                    </div>
                    <div className="z-10 bg-white p-10 rounded-lg">
                        <h3 className="text-center text-2xl font-bold">Оставить заявку</h3>
                        <p className="text-center mb-4 text-gray-500 text-sm">Оставьте свой номер телефона, мы перезвоним</p>
                        <Form onSuccess={() => hide()} />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CallbackModal