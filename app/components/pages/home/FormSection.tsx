'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "../../shared/Button"
import SectionHeading from "../../shared/SectionHeading"
import YandexMap from "../../shared/YandexMap"

type FormValues = {
    name: string
    email: string
    phone: string
    message: string
}

const FormSection = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        console.log(data)
        const formData = new FormData();
        formData.append('name', data.name)
        formData.append('email', data.email)
        formData.append('message', data.message)

        let xhr = new XMLHttpRequest();

        xhr.open("POST", "/send.php");
        xhr.send(formData);

        xhr.onload = () => alert('Success');
        xhr.onerror = () => alert("Error");
    }

    return (
        <section className="py-16 relative">
            <div className="container">
                <SectionHeading title="Оставьте заявку" description="Мы свяжемся с Вами в ближайшее время" />
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex justify-between">
                    <div className="w-2/5">
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
                        <p className="text-sm mb-4">Нажимая кнопку “Отправить” вы соглашаетесь с политикой обработки личных данных</p>
                        <Button
                            buttonProps={{ type: 'submit' }}
                            className="w-full">
                            Отправить
                        </Button>
                    </div>
                    <div className="absolute top-24 right-0">
                        <div className="relative overflow-hidden">
                            <YandexMap width="960" />
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormSection