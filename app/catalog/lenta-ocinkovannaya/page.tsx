import CatalogNavigation from "../CatalogNavigation";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import lentaSmall from '@/public/images/lenta-shtrips-small.png'
import { nlmkSiteUrl } from "@/app/constants";
import Image from "next/image";
import Banner from "@/app/components/shared/Banner";
import SectionContainer from "@/app/components/shared/SectionContainer";

const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0]

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
                                                    <Image src={lentaSmall} width="40" alt="Лента (штрипс) оцинкованная" />
                                                    <span>Лента (штрипс) оцинкованная {Number(item).toFixed(1)} мм</span>
                                                </div>
                                            </td>
                                            <td>По запросу</td>
                                            <td>02/220/350</td>
                                            <td>от 100 до 600</td>
                                            <td>
                                                <a href={nlmkSiteUrl} target="_blank">
                                                    <Image src={nlmkLogoPic} className="mx-auto" width="65" alt="Логотип компании НЛМК" />
                                                </a>
                                            </td>
                                            <td>По запросу</td>
                                            <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
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