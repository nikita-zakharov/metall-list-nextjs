'use client'
import { SubmitHandler, useForm } from "react-hook-form"
import Button from "../../shared/Button"
import SectionHeading from "../../shared/SectionHeading"
import YandexMap from "../../shared/YandexMap"
import SectionContainer from "../../shared/SectionContainer"
import Form from "../../shared/Form"

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
        <SectionContainer>
            <div className="container">
                <SectionHeading title="Оставьте заявку" description="Мы свяжемся с Вами в ближайшее время" />
                <div className="grid grid-cols-12 lg:gap-x-16 gap-y-10 lg:gap-y-10">
                    <div className="col-span-12 lg:col-span-4">
                        <Form />
                    </div>
                    <div className="col-span-12 lg:col-span-8">
                        <div className="relative overflow-hidden">
                            <div className="w-full">
                                <YandexMap />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    )
}

export default FormSection