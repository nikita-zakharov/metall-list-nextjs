import Banner from "../components/shared/Banner";
import EmailLink from "../components/shared/EmailLink";
import PhoneLink from "../components/shared/PhoneLink";
import YandexMap from "../components/shared/YandexMap";
import { openingHours } from "../constants";

export default function ContactsPage() {
    return (<div>
        <div>
            <Banner title="Контакты" imageSrc="/images/banner-lenta.png" />
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
                                <span className="font-bold">Адрес:</span><br />
                                Воронеж, ул. Базовая, 4
                            </p>
                            <p>
                                <span className="font-bold">Часы работы:</span><br />
                                {openingHours}<br />
                                сб-вс выходной
                            </p>
                            <div>
                                <span className="font-bold">Телефон:</span>
                                <p><a href="tel:+7(473)2406976">8 (473) 240 69 76</a></p>
                                <p><PhoneLink /></p>
                                <p><a href="tel:+79531190232">+7 953 119 02 32</a></p>
                            </div>
                            <p>
                                <span className="font-bold">Email:</span><br />
                                <EmailLink />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}