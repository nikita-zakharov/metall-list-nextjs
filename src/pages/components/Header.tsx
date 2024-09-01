import { LinkUrl } from "@/types/links";
import Link from "next/link";
import { BsClock, BsGeoAlt, BsEnvelope, BsTelephone } from "react-icons/bs";

const Header = () => {
    return (
        <header>
            <div className="bg-stone-100">
                <div className="container">
                    <ul className="flex items-center py-2 justify-end">
                        <li className="mr-8 flex items-center gap-2">
                            <span className="text-orange-400"><BsClock /></span>
                            <span>пн-пт: 09:00-18:00</span>
                        </li>
                        <li className="mr-8 flex items-center gap-2">
                            <span className="text-orange-400"><BsGeoAlt /></span>
                            <span>г. Воронеж, ул. Базовая 4</span>
                        </li>
                        <li className="mr-8 flex items-center gap-2">
                            <span className="text-orange-400"><BsEnvelope /></span>
                            <a href="mailto:ser.zah70@mail.ru">ser.zah70@mail.ru</a>
                        </li>
                        <li className="mr-8 flex items-center gap-2">
                            <span className="text-orange-400"><BsTelephone /></span>
                            <a href="tel:+79529506976" className="font-bold text-lg">+7(952) 950-69-76</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container">
                <div className="flex items-center justify-between">
                    <div>
                        <span className="text-2xl uppercase font-bold">Металл-лист</span>
                    </div>
                    <div className="flex items-center">
                        <nav className="flex items-center py-7 mr-14 list-none gap-10">
                            <li><Link href={LinkUrl.Home}>Главная</Link></li>
                            <li><Link href={LinkUrl.CatalogRoot}>Каталог</Link></li>
                            <li><Link href={LinkUrl.PaymentAndDelivery}>Оплата и доставка</Link></li>
                            <li><Link href={LinkUrl.About}>О компании</Link></li>
                            <li><Link href={LinkUrl.Contacts}>Контакты</Link></li>
                        </nav>
                        <button className="rounded-full bg-orange-400 px-7 py-2 text-white">Запросить цены</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header