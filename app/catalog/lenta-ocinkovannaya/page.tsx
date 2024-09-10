import CatalogNavigation from "../CatalogNavigation";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import lentaSmall from '@/public/images/lenta-shtrips-small.png'
import lentaLarge from '@/public/images/lenta-shtrips-rulon.png'
import Image from "next/image";
import Banner from "@/app/components/shared/Banner";
import SectionContainer from "@/app/components/shared/SectionContainer";
import BuyButton from "../BuyButton";
import { Metadata } from "next";
import ProductCard from "../ProductCard";
import { BsCheckCircle, BsWhatsapp } from "react-icons/bs";
import { emailAddress, phoneNumberFormatted } from "@/app/constants";

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0]
const descriptionItems = [
    { name: 'Ширина', value: 'от 0.950 мм до 1550 мм' },
    { name: 'Марка стали', value: '02/220/350' },
    { name: 'Цинк', value: 'от 100 до 600' },
    { name: 'Производитель', value: <Image src={nlmkLogoPic} className="mx-auto inline" width="50" alt="Логотип компании НЛМК" /> },
]

export const metadata: Metadata = {
    title: "Лента оцинкованная купить в Воронеже по выгодной цене, с доставкой",
    description: `Каталог ленты стальной оцинкованной, купить в Воронеже по выгодной цене. Доставка в день заказа. Продаем оптом и в розницу. Оставьте заявку на ${emailAddress} или позвоните нам по телефону ${phoneNumberFormatted} | «Металл-лист»`,
};


export default function CatalogTapePage() {
    return (<div>
        <Banner imageSrc="/images/banner-lenta.png" title="Лента (штрипс) оцинкованная" />
        <SectionContainer>
            <div className="container">
                <div className="mb-16">
                    <CatalogNavigation />
                </div>
                <div className="mb-16">
                    <div>
                        <div>
                            <ul className="mb-8">
                                <li className="flex items-center gap-2 mb-4">
                                    <BsCheckCircle className="text-xl text-orange-400 w-4 min-w-4" />
                                    Оплата переводом по реквизитам.
                                </li>
                                <li className="flex items-center gap-2 mb-4">
                                    <BsCheckCircle className="text-xl text-orange-400 w-4 min-w-4" />
                                    Скидки для постоянных клиентов.
                                </li>
                            </ul>
                            <div className="w-full">
                                <ul className="lg:hidden flex flex-col gap-16">
                                    {thinkness.map(item => (
                                        <li key={item}>
                                            <ProductCard
                                                title={`Рулон оцинкованный ${item} мм`}
                                                description={descriptionItems}
                                                image={<Image src={lentaLarge} className="w-full mb-4 p-4" alt={`Лента (штрипс) оцинкованная ${item} мм`} />}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <table className="hidden lg:w-full lg:table overflow-x-auto">
                                <thead>
                                    <tr className="border-b bg-neutral-100">
                                        <th>Наименование</th>
                                        <th>Ширина</th>
                                        <th>Марка стали</th>
                                        <th>Цинк</th>
                                        <th>Производитель</th>
                                        <th>Цена (с НДС)</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {thinkness.map(item => (
                                        <tr className="border-b text-center text-sm" key={item}>
                                            <td>
                                                <div className="flex items-center gap-4 justify-center">
                                                    <Image src={lentaSmall} width="40" alt="Лента (штрипс) оцинкованная" />
                                                    <span>Лента (штрипс) оцинкованная {Number(item).toFixed(1)} мм</span>
                                                </div>
                                            </td>
                                            <td>По запросу</td>
                                            <td>02/220/350</td>
                                            <td>от 100 до 600</td>
                                            <td>
                                                <Image src={nlmkLogoPic} className="mx-auto" width="65" alt="Логотип компании НЛМК" />
                                            </td>
                                            <td>По договоренности</td>
                                            <td>
                                                <BuyButton />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    </div>)
}