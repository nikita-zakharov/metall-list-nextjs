import { LinkUrl } from "@/app/types"
import Link from "next/link"
import SectionHeading from "../../shared/SectionHeading"
import Image from "next/image"
import sheetPic from '@/public/images/listy-pachka.png'
import rollPic from '@/public/images/rulon-ocink.png'
import tapePic from '@/public/images/lenta-shtrips-rulon.png'

const OurProducts = () => {
    return (
        <section className="py-12 lg:py-16">
            <div className="container">
                <SectionHeading title="Наша продукция" description="Широкий ассортимент оцинкованной стали" />
                <ul className="grid xl:grid-cols-3 grid-cols-1 gap-14">
                    <li>
                        <div className="bg-stone-100 py-8 px-10 rounded-xl relative h-full">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold text-2xl lg:text-3xl">Сталь оцинкованная</p>
                                        <p className="font-bold text-2xl lg:text-3xl text-orange-400">в листах</p>
                                    </div>
                                    <div className="text-sm mb-24">
                                        <p>Толщина:</p>
                                        <p>от 0.3 до 4 мм</p>
                                        <p>Длина: любая</p>
                                    </div>
                                    <div className="absolute top-[85px] right-2">
                                        <Image src={sheetPic} className="opacity-60 w-[230px]" alt="Лист оцинкованный" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-24">
                                    <Link href={LinkUrl.CatalogSheet}><button className="bg-orange-400 text-white px-6 py-2 rounded-full">Каталог</button></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-stone-100 py-8 px-10 rounded-xl relative h-full">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="mb-4">
                                        <p className="font-bold text-2xl lg:text-3xl">Сталь оцинкованная</p>
                                        <p className="font-bold text-2xl lg:text-3xl text-orange-400">в рулонах</p>
                                    </div>
                                    <div className="text-sm mb-24">
                                        <p>Толщина:</p>
                                        <p>от 0.3 до 4 мм</p>
                                    </div>
                                    <div className="absolute top-[65px] -right-6">
                                        <Image src={rollPic} className="opacity-60 w-[280px]" alt="Рулон оцинкованный" />
                                    </div>
                                </div>
                                <div className="flex items-center gap-24">
                                    <Link href={LinkUrl.CatalogRoll}><button className="bg-orange-400 text-white px-6 py-2 rounded-full">Каталог</button></Link>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="bg-stone-100 py-8 px-10 rounded-xl relative h-full">
                            <div className="flex flex-col justify-between">
                                <div>
                                    <div className="mb-4 relative">
                                        <p className="font-bold text-2xl lg:text-3xl">Сталь оцинкованная</p>
                                        <p className="font-bold text-2xl lg:text-3xl text-orange-400">в ленте</p>
                                    </div>
                                    <div className="text-sm mb-24">
                                        <p>Толщина:</p>
                                        <p>от 0.3 до 3 мм</p>
                                    </div>
                                    <div className="absolute top-[75px] right-2">
                                        <Image src={tapePic} className="opacity-60 w-[200px]" alt="Лента (штрипс) оцинкованная" />
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