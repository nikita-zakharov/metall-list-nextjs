'use client'
import Link from "next/link";
import { LinkUrl } from "../../types";
import { BsClock, BsGeoAlt, BsEnvelope, BsTelephone, BsXLg, BsList, BsChevronRight, BsWhatsapp } from "react-icons/bs";
import { address, openingHours, whatsappLink } from "@/app/constants";
import EmailLink from "./EmailLink";
import PhoneLink from "./PhoneLink";
import Button from "./Button";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useCallbackModal } from "../modals/CallbackModal/CallbackModalProvider";

const MobileMenu = () => {
    const [open, setOpen] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (<div className="lg:hidden bg-white p-4">
        <div className="flex justify-between items-center">
            <Link href="/" className="font-bold text-lg uppercase">Металл-лист</Link>
            <button onClick={() => setOpen(true)} className="text-3xl"><BsList /></button>
        </div>
        {open && <div className="bg-gray-100 fixed top-0 left-0 z-20 w-full h-full">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-end">
                        <button onClick={() => setOpen(false)} className="p-4 text-4xl">
                            <BsXLg />
                        </button>
                    </div>
                    <nav className="mt-8 flex flex-col list-none gap-1">
                        <li className="flex justify-between items-center border-b p-4">
                            <Link className={`w-full link ${pathname === LinkUrl.Home ? 'active' : ''}`}
                                href={LinkUrl.Home}>Главная</Link>
                            <BsChevronRight className="text-xl text-gray-400" />
                        </li>
                        <li className="flex justify-between items-center border-b p-4">
                            <Link className={`w-full link ${pathname.includes(LinkUrl.CatalogRoot) ? 'active' : ''}`} href={LinkUrl.CatalogSheet}>Каталог</Link>
                            <BsChevronRight className="text-xl text-gray-400" />
                        </li>
                        <li className="flex justify-between items-center border-b p-4">
                            <Link className={`w-full link ${pathname === LinkUrl.PaymentAndDelivery ? 'active' : ''}`} href={LinkUrl.PaymentAndDelivery}>Оплата и доставка</Link>
                            <BsChevronRight className="text-xl text-gray-400" />
                        </li>
                        <li className="flex justify-between items-center border-b  p-4">
                            <Link className={`w-full link ${pathname === LinkUrl.Contacts ? 'active' : ''}`} href={LinkUrl.Contacts}>Контакты</Link>
                            <BsChevronRight className="text-xl text-gray-400" />
                        </li>
                    </nav>
                </div>
                <div>
                    <ul>
                        <li className="flex items-center gap-2 p-4">
                            <Link href={whatsappLink}
                                target="_blank"
                                className="flex items-center gap-2">
                                <div className="rounded-full bg-green-400">
                                    <BsWhatsapp className="text-white text-2xl" />
                                </div>
                                <span className="text-green-600">Написать в Whatsapp</span>
                            </Link>
                        </li>
                        <li className="flex items-center gap-2 p-4">
                            <span className="text-orange-400"><BsTelephone /></span>
                            <span className="font-bold text-lg">
                                <PhoneLink />
                            </span>
                        </li>
                        <li className="flex items-center gap-2 p-4">
                            <span className="text-orange-400"><BsEnvelope /></span>
                            <span>
                                <EmailLink />
                            </span>
                        </li>
                        <li className="flex items-center gap-2 p-4">
                            <span className="text-orange-400"><BsClock /></span>
                            <span>
                                {openingHours}
                            </span>
                        </li>
                        <li className="flex items-center gap-2 p-4">
                            <span className="text-orange-400"><BsGeoAlt /></span>
                            <span>
                                {address}
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>}
    </div>)
}

export default function Header() {
    const callbackModal = useCallbackModal()
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-20 shadow bg-white">
            <div className="lg:block hidden">
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
                                <span>
                                    <PhoneLink />
                                </span>

                            </li>
                            <li>
                                <Link href={whatsappLink}
                                    target="_blank"
                                    className="flex items-center gap-2">
                                    <div className="rounded-full bg-green-400">
                                        <BsWhatsapp className="text-white text-xl" />
                                    </div>
                                    <span className="text-green-600 hover:text-green-800">Написать в Whatsapp</span>
                                </Link>
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
                                <li>
                                    <Link className={`link ${pathname === LinkUrl.Home ? 'active' : ''}`}
                                        href={LinkUrl.Home}>
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`link ${pathname.includes(LinkUrl.CatalogRoot) ? 'active' : ''}`}
                                        href={LinkUrl.CatalogSheet}>
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`link ${pathname === LinkUrl.PaymentAndDelivery ? 'active' : ''}`}
                                        href={LinkUrl.PaymentAndDelivery}>
                                        Оплата и доставка
                                    </Link>
                                </li>
                                <li>
                                    <Link className={`link ${pathname === LinkUrl.Contacts ? 'active' : ''}`}
                                        href={LinkUrl.Contacts}>
                                        Контакты
                                    </Link>
                                </li>
                            </nav>
                            <Button onClick={() => callbackModal.show()}>Расчет стоимости</Button>
                        </div>
                    </div>
                </div>
            </div>
            <MobileMenu />
        </header>
    )
}