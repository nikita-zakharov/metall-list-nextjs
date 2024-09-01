const FormSection = () => {
    return (
        <section className="py-16 relative">
            <div className="container">
                <h2 className="uppercase font-bold text-4xl mb-1">Оставьте заявку</h2>
                <p className="text-orange-400 font-light text-sm mb-16">Мы свяжемся с Вами в ближайшее время</p>
                <form className="flex justify-between">
                    <div className="w-2/5">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm mb-1">Имя</label>
                            <input className="border py-2 px-4 rounded-lg w-full" name="name" type="text" placeholder="Как к Вам обращаться?" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm mb-1">Email</label>
                            <input className="border py-2 px-4 rounded-lg w-full" name="email" type="text" placeholder="name@domain.ru" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm mb-1">Телефон</label>
                            <input className="border py-2 px-4 rounded-lg w-full" name="phone" type="text" placeholder="+7 (XXX) XXX-XX-XX" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comment" className="block text-sm mb-1">Комментарий</label>
                            <input className="border py-2 px-4 rounded-lg w-full" name="comment" type="text" placeholder="Опишите детали заказа" />
                        </div>
                        <p className="text-sm mb-4">Нажимая кнопку “Отправить” вы соглашаетесь с политикой обработки личных данных</p>
                        <button
                            type="submit"
                            className="w-full rounded-full bg-orange-400 px-7 py-2 text-white">
                            Отправить
                        </button>
                    </div>
                    <div className="absolute top-24 right-0">
                        <div className="relative overflow-hidden">
                            <iframe src="https://yandex.ru/map-widget/v1/?ll=39.282288%2C51.652999&mode=search&oid=1381466419&ol=biz&z=14.28"
                                width="920"
                                height="560"
                                frameBorder="1"
                                allowFullScreen
                                className="relative">
                            </iframe>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default FormSection