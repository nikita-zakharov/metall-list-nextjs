import { Metadata } from "next";
import Banner from "../components/shared/Banner";
import SectionContainer from "../components/shared/SectionContainer";

export const metadata: Metadata = {
    title: "Оплата и доставка оцинкованной стали",
};

export default function PaymentAndDeliveryPage() {
    return (<div>
        <Banner title="Оплата и доставка" imageSrc="/images/truck-banner.webp" />
        <SectionContainer>
            <div className="container">
                <div className="mb-8">
                    <h3 className="font-bold text-2xl mb-4">Варианты доставки</h3>
                    <ol className="leading-7 list-decimal pl-4 marker:text-orange-400 marker:font-bold">
                        <li>
                            <p>
                                <span className="font-bold">Самовывоз</span> — забрать товар можно самостоятельно с нашего склада по адресу: <span className="underline">г. Воронеж, ул. Базовая, 4</span>
                            </p>
                        </li>
                        <li>
                            <div>
                                <span className="font-bold">Доставка</span> — мы можем отправить ваш заказ нашим автотранспортом
                                <ul className="list-disc pl-4 marker:text-orange-400 marker:font-bold">
                                    <li>Cтоимость определяется индивидуально, исходя из веса и местоположения.</li>
                                    <li>Сроки доставки — со склада от 1 часа, под заказ от 1 до 3 рабочих дней.</li>
                                </ul>
                                <p>Для получения подробностей свяжитесь с нами по телефону <a href="tel:+79529506976" className="underline">+7 (952) 950-69-76</a> или электронной почте <a href="mailto:ser.zah70@mail.ru" className="underline">ser.zah70@mail.ru</a>.</p>
                                <p>Мы стараемся максимально быстро доставить ваш заказ.</p>
                            </div>
                        </li>
                    </ol>
                </div>
                <div>
                    <h3 className="font-bold text-2xl mb-4">Процесс оформления заявки</h3>
                    <ol className="list-decimal pl-4 leading-8 marker:text-orange-400 marker:font-bold">
                        <li>
                            <p className="font-bold">Оформление заявки</p>
                            <p>Вы можете отправить заявку через наш сайт или позвонить нам по телефону.</p>
                        </li>
                        <li>
                            <p className="font-bold">Согласование заказа</p>
                            <p>Мы свяжемся с вами для уточнения деталей заказа, оплаты и условий доставки.</p>
                        </li>
                        <li>
                            <p className="font-bold">Заключение договора</p>
                            <p>Отправляем Вам форму договора и счет для оплаты</p>
                        </li>
                        <li>
                            <p className="font-bold">Оплата заказа</p>
                            <p>Оплата проводится путем перевода на наш расчетный счет. (Работаем с НДС)</p>
                        </li>
                        <li>
                            <p className="font-bold">Комплектование заказа</p>
                            <p>После подтверждения оплаты мы начнем собирать ваш заказ на складе.</p>
                        </li>
                        <li>
                            <p className="font-bold">Получение заказа</p>
                            <p>При получении заказа вы получите весь комплект документов и сможете проверить качество и комплектность продукции.</p>
                        </li>
                    </ol>
                </div>

            </div>
        </SectionContainer>
    </div >)
}