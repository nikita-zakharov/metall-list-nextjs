'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import { useCallbackModal } from "./CallbackModalProvider"
import Button from "../../shared/Button"
import { BsXLg } from "react-icons/bs"

type FormValues = {
    name: string
    email: string
    phone: string
    message: string
}

const CallbackModal = () => {
    const { hide } = useCallbackModal()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<any> = (data) => console.log(data)

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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb-4">
                                <label className="block text-sm mb-1" htmlFor="name">Имя</label>
                                <input {...register('name', { required: { value: true, message: 'Обязательное поле' } })}
                                    className="border py-2 px-4 rounded-lg w-full"
                                    name="name"
                                    placeholder="Как к Вам обращаться?" />
                                {errors?.name && <p className="text-red-400 text-sm mt-1">{errors.name?.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-1" htmlFor="email">Email</label>
                                <input {...register("email", {
                                    required: { value: true, message: 'Обязательное поле' },
                                    pattern: {
                                        value: /\S+@\S+\.\S+/,
                                        message: "Пожалуйста проверьте адрес электронной почты",
                                    },
                                })}
                                    className="border py-2 px-4 rounded-lg w-full"
                                    name="email"
                                    placeholder="name@domain.ru" />
                                {errors?.email && <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-1" htmlFor="phone">Телефон</label>
                                <input {...register('phone')} className="border py-2 px-4 rounded-lg w-full" type="text" name="phone" placeholder="+7 (XXX) XXX-XX-XX" />
                                {errors?.phone && <p className="text-red-400 text-sm mt-1">{errors.phone?.message}</p>}
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm mb-1" htmlFor="message">Комментарий</label>
                                <textarea {...register('message')} className="border py-2 px-4 rounded-lg w-full" name="message" placeholder="Опишите детали заказа" />
                            </div>
                            <p className="text-xs mb-4">Нажимая кнопку “Отправить” вы соглашаетесь с политикой обработки личных данных.</p>
                            <Button
                                buttonProps={{ type: 'submit' }}
                                className="w-full">
                                Отправить
                            </Button>
                        </form>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default CallbackModal