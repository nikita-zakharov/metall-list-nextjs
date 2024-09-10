import CatalogNavigation from "../CatalogNavigation";
import Image from "next/image";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import listyOcinkPic1 from '@/public/images/listy-ocinkovannyj-1.jpeg'
import listyOcinkPic2 from '@/public/images/listy-ocinkovannyj-2.jpeg'
import listyOcinkPic3 from '@/public/images/listy-ocinkovannyj-3.jpeg'
import listyOcinkPic4 from '@/public/images/listy-ocinkovannyj-4.jpeg'
import listyOcinkSmall from '@/public/images/list-ocink-small.png'
import listyOcinkLg from '@/public/images/listy-pachka.png'
import LightGalleryWrapper from "@/app/components/shared/LightGalleryWrapper";
import Banner from "@/app/components/shared/Banner";
import SectionContainer from "@/app/components/shared/SectionContainer";
import BuyButton from "../BuyButton";
import { BsCamera, BsCheckCircle } from "react-icons/bs";
import ProductCard from "../ProductCard";
import Link from "next/link";
import Button from "@/app/components/shared/Button";
import { Metadata } from "next";
import { emailAddress, phoneNumberFormatted } from "@/app/constants";

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0]
const gallery = [listyOcinkPic1, listyOcinkPic2, listyOcinkPic3, listyOcinkPic4]

const descriptionItems = [
    { name: 'Ширина', value: 'от 0.950 мм до 1550 мм' },
    { name: 'Длина', value: 'любая, до 5000 мм' },
    { name: 'Марка стали', value: '02/220/350' },
    { name: 'Цинк', value: 'от 100 до 600' },
    { name: 'Производитель', value: <Image src={nlmkLogoPic} className="mx-auto inline" width="50" alt="Логотип компании НЛМК" /> },
]

export const metadata: Metadata = {
    title: "Лист оцинкованный купить в Воронеже по выгодной цене, с доставкой",
    description: `Каталог листовой стали оцинкованной, купить в Воронеже по выгодной цене. Доставка в день заказа. Продаем оптом и в розницу. Оставьте заявку на ${emailAddress} или позвоните нам по телефону ${phoneNumberFormatted} | «Металл-лист»`,
};

export default function CatalogSheetPage() {
    return (<div>
        <Banner imageSrc="/images/banner-list-ocinkovannyj.webp" title="Лист оцинкованный" />
        <SectionContainer>
            <div className="container">
                <div className="mb-12">
                    <CatalogNavigation />
                </div>
                <div className="mb-16">
                    <div>
                        <div>
                            <ul className="mb-8">
                                <li className="flex items-center gap-2 mb-4">
                                    <BsCheckCircle className="text-xl text-orange-400 w-4 min-w-4" />
                                    <p>Всегда в наличии стандартный лист 1250x2500 мм, всех толщин.</p>
                                </li>
                                <li className="flex items-center gap-2 mb-4">
                                    <BsCheckCircle className="text-xl text-orange-400 w-4 min-w-4" />
                                    Оплата переводом по реквизитам.
                                </li>
                                <li className="flex items-center gap-2 mb-4">
                                    <BsCheckCircle className="text-xl text-orange-400 w-4 min-w-4" />
                                    Индивидуальная порубка длиной до 5000 мм
                                </li>
                                <li className="flex items-center gap-2 mb-4">
                                    <BsCheckCircle className="text-xl text-orange-400 w-4 min-w-4" />
                                    Скидки для постоянных клиентов.
                                </li>
                            </ul>

                            <Link href="#gallery" className="mb-8 inline-block">
                                <Button>
                                    <p>Фото продукции <BsCamera className="inline ml-2" /></p>
                                </Button>
                            </Link>

                            <div className="w-full">
                                <ul className="lg:hidden flex flex-col gap-16">
                                    {thinkness.map(item => (
                                        <li key={item}>
                                            <ProductCard
                                                title={`Лист оцинкованный ${item} мм`}
                                                description={descriptionItems}
                                                image={<Image src={listyOcinkLg} className="w-full mb-4 p-4" alt={`Лист оцинкованный ${item} мм`} />}
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
                                        <th>Длина</th>
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
                                                <div className="flex items-center gap-2 pl-2">
                                                    <Image src={listyOcinkSmall} width="40" alt="Лист оцинкованный" />

                                                    <p>Лист оцинкованный</p>
                                                    <p>{Number(item).toFixed(1)} мм</p>
                                                </div>
                                            </td>
                                            <td>
                                                <p>от 0.950 мм</p>
                                                <p>до 1550 мм</p>
                                            </td>
                                            <td>
                                                <p>Любая</p>
                                                <p>до 5000 мм</p>
                                            </td>
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
                <div id="gallery">
                    <h2 className="font-bold text-2xl mb-8">Фото продукции</h2>
                    <nav>
                        <LightGalleryWrapper
                            elementClassNames="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4 cursor-pointer"
                        >
                            {gallery.map((image, index) => (
                                <Image className="h-full rounded-lg" src={image} key={index} alt={`Фото продукции - Лист оцинкованный №${index + 1}`} />
                            ))}
                        </LightGalleryWrapper>
                    </nav>
                </div>
            </div>
        </SectionContainer >
    </div >)
}