'use client'
import Link from "next/link";
import { LinkUrl } from "../../types";
import { BsClock, BsGeoAlt, BsEnvelope, BsTelephone, BsXLg, BsList } from "react-icons/bs";
import { address, openingHours } from "@/app/constants";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";
import Button from "./Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
    const [open, setOpen] = useState(true)
    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (<header className=" shadow bg-white">
        <div className="xl:block hidden">
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
        </div>
        <div className="bg-white p-4">
            <div className="flex justify-end">
                <button onClick={() => setOpen(true)} className="text-3xl"><BsList /></button>
            </div>
            {open && <div className="bg-white fixed top-0 left-0 z-20 w-full h-full">
                <div className="flex justify-end">
                    <button onClick={() => setOpen(false)} className="p-4 text-4xl" ><BsXLg /></button>
                </div>
                <nav className="p-4 flex flex-col list-none gap-8 ">
                    <li><Link className="w-full px-4 py-2" href={LinkUrl.Home}>Главная</Link></li>
                    <li><Link className="w-full px-4 py-2" href={LinkUrl.CatalogSheet}>Каталог</Link></li>
                    <li><Link className="w-full px-4 py-2" href={LinkUrl.PaymentAndDelivery}>Оплата и доставка</Link></li>
                    <li><Link className="w-full px-4 py-2" href={LinkUrl.Contacts}>Контакты</Link></li>
                </nav>
            </div>}
        </div>
    </header>)
}