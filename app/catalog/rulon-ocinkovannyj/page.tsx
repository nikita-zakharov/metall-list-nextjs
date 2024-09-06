import CatalogNavigation from "../CatalogNavigation"
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import rulonSmall from '@/public/images/rulon-small.png'
import Image from "next/image";
import Banner from "@/app/components/shared/Banner";
import SectionContainer from "@/app/components/shared/SectionContainer";
import BuyButton from "../BuyButton";

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0]

export default function CatalogRollPage() {
    return (
        <div>
            <Banner imageSrc="/images/banner-rulon.png" title="Рулон оцинкованный" />
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
                                                        <Image src={rulonSmall} width="40" alt="Рулон оцинкованный" />
                                                        <p>Рулон оцинкованный</p>
                                                        <p>{Number(item).toFixed(1)} мм</p>
                                                    </div>
                                                </td>
                                                <td>
                                                    <p>от 0.950 мм</p>
                                                    <p>до 1550 мм</p>
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
                </div>
            </SectionContainer>
        </div>
    )
}