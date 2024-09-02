'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallbackModal } from "./CallbackModalProvider"

const CallbackModal = () => {
    const { hide } = useCallbackModal()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<any>()
    const onSubmit: SubmitHandler<any> = (data) => console.log(data)

    return (
        <div>
            <div className="w-screen h-screen fixed top-0 left-0 bg-neutral-800 opacity-85" onClick={hide}></div>
            <div className="w-[420px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div>
                        <button onClick={hide} className="absolute top-4 right-4">x</button>
                    </div>
                    <div className="z-10 bg-white p-10">
                        <h3 className="text-center text-2xl font-bold">Заказать звонок</h3>
                        <p className="text-center mb-4 text-gray-500 text-sm">Оставьте свой номер телефона, мы перезвоним</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label htmlFor="name">Имя</label>
                                <input id="name" className="border-2 p-2 w-full" defaultValue="test" {...register("example")} />
                            </div>
                            <div className="mb-4" >
                                <label htmlFor="email">Email</label>
                                <input id="email" className="border-2 p-2 w-full" {...register("exampleRequired", { required: true })} />
                            </div>
                            <p className="mb-4 text-red-600">{errors.exampleRequired && <span>Обязательно поле</span>}</p>

                            <input type="submit" className="bg-gray-600 text-white p-2" />
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CallbackModal