import Link from "next/link";
import { LinkUrl } from "../../types";
import { BsClock, BsGeoAlt, BsEnvelope, BsTelephone } from "react-icons/bs";
import { address, openingHours } from "@/app/constants";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";
import Button from "./Button";

export default function Header() {
    return (<header className="xl:block hidden">
        <div className="bg-stone-100">
            <div className="container">
                <ul className="flex items-center py-2 justify-end">
                    <li className="mr-8 flex items-center gap-2">
                        <span className="text-orange-400"><BsClock /></span>
                        <span>{openingHours}</span>
                    </li>
                    <li className="mr-8 flex items-center gap-2">
                        <span className="text-orange-400"><BsGeoAlt /></span>
                        <span>{address}</span>
                    </li>
                    <li className="mr-8 flex items-center gap-2">
                        <span className="text-orange-400"><BsEnvelope /></span>
                        <EmailLink />
                    </li>
                    <li className="mr-8 flex items-center gap-2">
                        <span className="text-orange-400"><BsTelephone /></span>
                        <span className="font-bold text-lg">
                            <PhoneLink />
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <div className="container">
            <div className="flex items-center justify-between">
                <div>
                    <Link href="/"><span className="text-2xl uppercase font-bold">Металл-лист</span></Link>
                </div>
                <div className="flex items-center">
                    <nav className="flex items-center py-7 mr-14 list-none gap-10">
                        <li><Link href={LinkUrl.Home}>Главная</Link></li>
                        <li><Link href={LinkUrl.CatalogSheet}>Каталог</Link></li>
                        <li><Link href={LinkUrl.PaymentAndDelivery}>Оплата и доставка</Link></li>
                        <li><Link href={LinkUrl.Contacts}>Контакты</Link></li>
                    </nav>
                    <Button>Запросить цены</Button>
                </div>
            </div>
        </div>
    </header>)
}