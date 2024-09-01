import BaseLayout from "./components/BaseLayout"

const Contacts = () => {
    return (<BaseLayout>
        <div>
            <div>
                <div style={{ background: 'url("/images/lenta-banner.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="relative w-full py-16">
                    <div className="container">
                        <h1 className="text-white text-4xl">Контакты</h1>
                    </div>
                </div>
                <div className="container py-20">
                    <div className="grid grid-cols-12 gap-8">
                        <div className="col-span-8">
                            <div className="relative overflow-hidden">
                                <iframe src="https://yandex.ru/map-widget/v1/?ll=39.282288%2C51.652999&mode=search&oid=1381466419&ol=biz&z=14.28"
                                    width="100%"
                                    height="560"
                                    frameBorder="1"
                                    allowFullScreen
                                    className="relative">
                                </iframe>
                            </div>
                        </div>
                        <div className="w-[280px] leading-7">
                            <div className="mb-4">
                                <p>
                                    <p>
                                        Индивидуальный предприниматель
                                        Захаров Сергей Александрович
                                    </p>
                                    <p>ИНН 366103728670</p>
                                    <p>Р/сч 40802810413000046954</p>
                                    <p>ЦЕНТРАЛЬНО-ЧЕРНОЗЕМНЫЙ БАНК ПАО СБЕРБАНК</p>
                                    <p>к/сч 30101810600000000681</p>
                                    <p>БИК 042007681</p>
                                </p>
                            </div>
                            <div>
                                <p>
                                    <span className="font-bold">Адрес:</span>
                                    Воронеж, ул. Базовая, 4
                                </p>
                                <p>
                                    <span className="font-bold">Часы работы:</span>
                                    пн-пт 09:00-18:00
                                    сб-вс выходной
                                </p>
                                <p><span className="font-bold">Телефон:</span>
                                    <p>8 (473) 240 69 76</p>
                                    <p>+7 952 950 69 76</p>
                                    +7 953 119 02 32</p>
                                <p>
                                    <span className="font-bold">Email:</span>
                                    ser.zah70@mail.ru
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </BaseLayout>)
}

export default Contacts