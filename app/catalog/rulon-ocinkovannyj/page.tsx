import CatalogNavigation from "../CatalogNavigation"
import nlmkLogoPic from '@/public/images/NLMK-logo.webp'
import rulonSmall from '@/public/images/rulon-small.webp'
import rulonLarge from '@/public/images/rulon-ocink.webp'
import rulonOcink1 from '@/public/images/rulon-ocink-1.webp'
import rulonOcink2 from '@/public/images/rulon-ocink-2.webp'
import Image from "next/image";
import Banner from "@/app/components/shared/Banner";
import SectionContainer from "@/app/components/shared/SectionContainer";
import BuyButton from "../BuyButton";
import { Metadata } from "next";
import ProductCard from "../ProductCard";
import { BsCamera, BsCheckCircle } from "react-icons/bs";
import { emailAddress, phoneNumberFormatted } from "@/app/constants";
import LightGalleryWrapper from "@/app/components/shared/LightGalleryWrapper";
import Link from "next/link"
import Button from "@/app/components/shared/Button"

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0]
const descriptionItems = [
    { name: 'Размер', value: '1250x2500' },
    { name: 'Марка стали', value: '02/220/350' },
    { name: 'Цинк', value: 'от 100 до 600' },
    { name: 'Производитель', value: <Image src={nlmkLogoPic} className="mx-auto inline" width="50" alt="Логотип компании НЛМК" /> },
]
const gallery = [rulonOcink1, rulonOcink2]

export const metadata: Metadata = {
    title: "Рулон оцинкованный купить в Воронеже по выгодной цене, с доставкой",
    description: `Каталог рулонной стали оцинкованной, купить в Воронеже по выгодной цене. Доставка в день заказа. Продаем оптом и в розницу. Оставьте заявку на ${emailAddress} или позвоните нам по телефону ${phoneNumberFormatted} | «Металл-лист»`,
};

export default function CatalogRollPage() {
    return (
        <div>
            <Banner imageSrc="/images/banner-rulon.webp" title="Рулон оцинкованный" />
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
                                                    title={`Рулон оцинкованный ${item} мм`}
                                                    description={descriptionItems}
                                                    image={<Image src={rulonLarge} className="w-full mb-4 p-4" alt={`Рулон оцинкованный ${item} мм`} />}
                                                />
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <table className="hidden lg:w-full lg:table overflow-x-auto">
                                    <thead>
                                        <tr className="border-b bg-neutral-100">
                                            <th>Наименование</th>
                                            <th>Размер</th>
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
                                                        <Image src={rulonSmall} width="40" alt="Рулон оцинкованный" />
                                                        <p>Рулон оцинкованный {Number(item).toFixed(1)} мм</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>1250x2500</p>
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
                                    <Image className="h-full rounded-lg" src={image} key={index} alt={`Фото продукции - Рулон оцинкованный №${index + 1}`} />
                                ))}
                            </LightGalleryWrapper>
                        </nav>
                    </div>
                </div>
            </SectionContainer>
        </div>
    )
}