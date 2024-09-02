import Banner from "../components/shared/Banner";
import YandexMap from "../components/shared/YandexMap";

export default function ContactsPage() {
    return (<div>
        <div>
            <Banner title="Контакты" imageSrc="/images/lenta-banner.png" />
            <div className="container py-20">
                <div className="grid xl:grid-cols-12 gap-8">
                    <div className="col-span-8">
                        <YandexMap />
                    </div>
                    <div className="col-span-4 order-first xl:order-none  leading-7">
                        <div className="mb-4">
                            <div>
                                <p>
                                    Индивидуальный предприниматель
                                    Захаров Сергей Александрович
                                </p>
                                <p>ИНН 366103728670</p>
                                <p>Р/сч 40802810413000046954</p>
                                <p>ЦЕНТРАЛЬНО-ЧЕРНОЗЕМНЫЙ БАНК ПАО СБЕРБАНК</p>
                                <p>к/сч 30101810600000000681</p>
                                <p>БИК 042007681</p>
                            </div>
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
                            <div>
                                <span className="font-bold">Телефон:</span>
                                <p>8 (473) 240 69 76</p>
                                <p>+7 952 950 69 76</p>
                                <p>+7 953 119 02 32</p>
                            </div>
                            <p>
                                <span className="font-bold">Email:</span>
                                ser.zah70@mail.ru
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}