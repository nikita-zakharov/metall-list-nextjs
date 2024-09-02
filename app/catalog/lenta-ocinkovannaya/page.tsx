import Link from "next/link";
import CatalogNavigation from "../CatalogNavigation";

const productImagePath = '/images/lenta-shtrips-small.png'

export default function CatalogTapePage() {
    return (<div>
        <div style={{ background: 'url("/images/lenta-banner.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="relative w-full py-16">
            <div className="container">
                <h1 className="text-white text-4xl">Лист оцинкованный</h1>
            </div>
        </div>
        <div className="container pt-6 pb-24">
            <div className="grid grid-cols-12 gap-24">
                <div className="col-span-3">
                    <CatalogNavigation />
                </div>
                <div className="col-span-9">
                    <div>
                        <table className="w-full">
                            <thead>
                                <tr className="text-left border-b bg-neutral-100">
                                    <th className="p-5">Наименование</th>
                                    <th>Марка</th>
                                    <th>Толщина</th>
                                    <th>Длина</th>
                                    <th>Производитель</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 0.5 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>0.5</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b bg-neutral-100">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 0.7 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>0.7</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 0.8 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>0.8</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b bg-neutral-100">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 0.9 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>0.9</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 1.0 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>1.0</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b bg-neutral-100">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 1.5 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>1.5</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 2.0 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>2.0</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                                <tr className="border-b bg-neutral-100">
                                    <td className="p-5">
                                        <div className="flex items-center">
                                            <img src={productImagePath} width="48" alt="" />
                                            <span>Лента (штрипс) оцинкованная 3.0 мм</span>
                                        </div>
                                    </td>
                                    <td>Ст3сп</td>
                                    <td>3.0</td>
                                    <td>Любая<br /> от 2500 до 5000 мм</td>
                                    <td>НЛМК</td>
                                    <td><button className="rounded-full bg-orange-400 px-7 py-2 text-white">Купить</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}