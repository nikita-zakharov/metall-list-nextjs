import CatalogNavigation from "../CatalogNavigation"
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import { nlmkSiteUrl } from "@/app/constants";
import Image from "next/image";

const productImagePath = '/images/rulon-small.png'
const thinkness = [0.5, 0.7, 0.8, 0.9, 1.0, 1.2, 1.5, 2.0, 2.5, 3.0, 4.0]

export default function CatalogRollPage() {
    return (<div><div style={{ background: 'url("/images/banner-rulon.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="relative w-full py-16">
        <div className="container">
            <h1 className="text-white text-4xl">Рулон оцинкованный</h1>
        </div>
    </div>
        <div className="container py-20">
            <div className="mb-16">
                <CatalogNavigation />
            </div>
            <div className="mb-16">
                <div>
                    <div>
                        <table className="w-full block lg:table overflow-x-auto">
                            <thead>
                                <tr className="border-b bg-neutral-100">
                                    <th className="p-5">Наименование</th>
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
                                        <td className="py-5">
                                            <div className="flex items-center gap-4 justify-center">
                                                <img src={productImagePath} width="48" alt="Рулон оцинкованный" />
                                                <span>Рулон оцинкованный {Number(item).toFixed(1)} мм</span>
                                            </div>
                                        </td>
                                        <td>
                                            <p>от 0.950 мм</p>
                                            <p>до 1550 мм</p>
                                        </td>
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
    </div>)
}