import Link from "next/link"
import BaseLayout from "../components/BaseLayout"

const productImagePath = '/images/lenta-shtrips-small.png'

const Tape = () => {
    return (
        <BaseLayout>
            <>
                <div style={{ background: 'url("/images/lenta-banner.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="relative w-full py-16">
                    <div className="container">
                        <h1 className="text-white text-4xl">Лист оцинкованный</h1>
                    </div>
                </div>
                <div className="container pt-6 pb-24">
                    <p className="mb-16">
                        <span className="text-orange-400">Главная</span> / <span className="text-orange-400">Каталог</span> / Лист оцинкованный
                    </p>
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-3">
                            <p className="font-bold text-xl">Каталог</p>
                            <hr className="my-4" />
                            <ul className="list-disc pl-4 marker:text-orange-400">
                                <li className="mb-2">
                                    <Link
                                        href="/catalog/list-ocinkovannyj"
                                        className="underline">
                                        Лист оцинкованный
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/catalog/rulon-ocinkovannyj"
                                        className="underline">
                                        Рулон оцинкованный
                                    </Link>
                                </li>
                                <li className="mb-2">
                                    <Link
                                        href="/catalog/lenta-ocinkovannyj"
                                        className="underline">
                                        Штрипс(лента) оцинкованная
                                    </Link>
                                </li>
                            </ul>
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
            </>
        </BaseLayout >
    )
}

export default Tape