import { LinkUrl } from "@/types/links"
import Link from "next/link"

const OurProducts = () => {
    return (
        <section className="py-16">
            <div className="container">
                <h2 className="uppercase font-bold text-4xl mb-1">Наша продукция</h2>
                <p className="text-orange-400 font-light text-sm mb-16">Широкий ассортимент оцинкованной стали</p>
                <ul className="flex items-center justify-between">
                    <li>
                        <div className="bg-stone-100 py-8 px-10 rounded-xl relative">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold text-3xl">Сталь оцинкованная</p>
                                        <p className="font-bold text-3xl text-orange-400">в листах</p>
                                    </div>
                                    <div className="text-sm mb-24">
                                        <p>Толщина:</p>
                                        <p>от 0.5 до 3 мм</p>
                                        <p>Длина: любая</p>
                                    </div>
                                    <div className="absolute top-[85px] right-2">
                                        <img src="/images/listy-pachka.png" className="opacity-60 w-[230px]" alt="Лист оцинкованный" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-24">
                                    <Link href={LinkUrl.CatalogSheet}><button className="bg-orange-400 text-white px-6 py-2 rounded-full">Каталог</button></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-stone-100 py-8 px-10 rounded-xl relative">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold text-3xl">Сталь оцинкованная</p>
                                        <p className="font-bold text-3xl text-orange-400">в рулонах</p>
                                    </div>
                                    <div className="text-sm mb-24">
                                        <p>Толщина:</p>
                                        <p>от 0.5 до 3 мм</p>
                                        <p>Длина: любая</p>
                                    </div>
                                    <div className="absolute top-[65px] -right-6">
                                        <img src="/images/rulon-ocink.png" className="opacity-60 w-[280px]" alt="Рулон оцинкованный" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-24">
                                    <Link href={LinkUrl.CatalogRoll}><button className="bg-orange-400 text-white px-6 py-2 rounded-full">Каталог</button></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li><div className="bg-stone-100 py-8 px-10 rounded-xl relative">
                        <div className="flex flex-col justify-between">
                            <div>
                                <div className="mb-4 relative">
                                    <p className="font-bold text-3xl">Сталь оцинкованная</p>
                                    <p className="font-bold text-3xl text-orange-400">в ленте</p>
                                </div>
                                <div className="text-sm mb-24">
                                    <p>Толщина:</p>
                                    <p>от 0.5 до 3 мм</p>
                                    <p>Длина: любая</p>
                                </div>
                                <div className="absolute top-[75px] right-2">
                                    <img src="/images/lenta-shtrips-rulon.png" className="opacity-60 w-[200px]" alt="Лента (штрипс) оцинкованная" />
                                </div>
                            </div>
                            <div className="flex items-center  gap-24">
                                <Link href={LinkUrl.CatalogTape}><button className="bg-orange-400 text-white px-6 py-2 rounded-full">Каталог</button></Link>
                            </div>
                        </div>
                    </div></li>
                </ul>
            </div>
        </section>
    )
}

export default OurProducts