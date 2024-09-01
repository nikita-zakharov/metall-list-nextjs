import Link from "next/link"
import BaseLayout from "../components/BaseLayout"
import { useEffect } from "react"
import { useRouter } from "next/router"

const CatalogRoot = () => {
    const router = useRouter()
    useEffect(() => {
        console.log(router.route)
    }, [])

    return (
        <BaseLayout>
            <div> <div style={{ background: 'url("/images/lenta-banner.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="relative w-full py-16">
                <div className="container">
                    <h1 className="text-white text-4xl">Каталог</h1>
                </div>
            </div>
                <div className="container pt-6 pb-24">
                    <div className="grid grid-cols-12 gap-24">
                        <div className="col-span-3">
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
                        </div>
                    </div>
                </div></div>
        </BaseLayout >
    )
}

export default CatalogRoot