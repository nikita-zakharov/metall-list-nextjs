import CatalogNavigation from "../CatalogNavigation";
import Image from "next/image";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import listyOcinkPic1 from '@/public/images/listy-ocinkovannyj-1.jpeg'
import listyOcinkPic2 from '@/public/images/listy-ocinkovannyj-2.jpeg'
import listyOcinkPic3 from '@/public/images/listy-ocinkovannyj-3.jpeg'
import listyOcinkPic4 from '@/public/images/listy-ocinkovannyj-4.jpeg'
import listyOcinkSmall from '@/public/images/list-ocink-small.png'
import LightGalleryWrapper from "@/app/components/shared/LightGalleryWrapper";
import Banner from "@/app/components/shared/Banner";
import SectionContainer from "@/app/components/shared/SectionContainer";
import BuyButton from "../BuyButton";

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0]
const gallery = [listyOcinkPic1, listyOcinkPic2, listyOcinkPic3, listyOcinkPic4]

export default function CatalogSheetPage() {
    return (<div>
        <Banner imageSrc="/images/banner-list-ocinkovannyj.webp" title="Лист оцинкованный" />
        <SectionContainer>
            <div className="container">
                <div className="mb-16">
                    <CatalogNavigation />
                </div>
                <div className="mb-16">
                    <div>
                        <div>
                            <table className="w-full block lg:table overflow-x-auto">
                                <thead>
                                    <tr className="border-b bg-neutral-100">
                                        <th></th>
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
                                                <div className="flex items-center justify-center">
                                                    <Image src={listyOcinkSmall} width="40" alt="Лист оцинкованный" />
                                                </div>
                                            </td>
                                            <td>
                                                <p>Лист оцинкованный</p>
                                                <p>{Number(item).toFixed(1)} мм</p>
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
                                            <td>По запросу</td>
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
                <div>
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