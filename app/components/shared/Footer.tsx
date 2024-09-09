import Link from "next/link";
import PhoneLink from "./PhoneLink";
import EmailLink from "./EmailLink";
import { address } from "@/app/constants";
import { LinkUrl } from "@/app/types";

export default function Footer() {
    return (<footer className="bg-neutral-800 text-gray-200 py-8">
        <div className="container text-sm">
            <div className="grid lg:grid-cols-12 gap-6 text-neutral-300 leading-7">
                <div className="col-span-5">
                    <p className="text-xl mb-3">Металл-лист</p>
                    <p className="mb-2">Продажа оцинкованной стали со склада <br /> в Воронеже, производство ПАО «НЛМК» (г.Липецк)</p>
                    <iframe src="https://yandex.ru/sprav/widget/rating-badge/1381466419?type=rating" width="150" height="50"></iframe>
                </div>
                <div className="col-span-4">
                    <p className="text-neutral-400 text-xl mb-3">Каталог</p>
                    <ul>
                        <li><Link href={LinkUrl.CatalogSheet}>Листы оцинкованные</Link></li>
                        <li><Link href={LinkUrl.CatalogRoll}>Рулоны оцинкованные</Link></li>
                        <li><Link href={LinkUrl.CatalogTape}>Штрипс(лента) оцинкованная</Link></li>
                    </ul>
                </div>
                <div className="col-span-3 lg:justify-self-end">
                    <p className="text-neutral-400 text-xl mb-3">Контакты</p>
                    <ul>
                        <li><span className="text-xl"><PhoneLink /></span></li>
                        <li><EmailLink /></li>
                        <li>{address}</li>
                    </ul>
                </div>
            </div>
            <hr className="my-8 border-t-neutral-500" />
            <div className="lg:grid grid-cols-12 text-neutral-400 text-xs">
                <div className="col-span-6"><p>© 2012-2024 «Металл лист». Все права защищены.</p></div>
                <div className="col-span-6 justify-self-end"><Link href="/policy" className="underline">Политика конфиденциальности</Link></div>
            </div>
        </div>
    </footer>)
}