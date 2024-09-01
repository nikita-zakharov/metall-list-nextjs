import { LinkUrl } from "@/types/links"
import Link from "next/link"

const HeroSection = () => {
    return (

        <div>
            <div className="relative" style={{
                background: 'linear-gradient(0deg,rgba(32, 32, 32, 0.7),rgba(32, 32, 32, 0.9)), url("/images/hero.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className="container pt-24 pb-48 px-4 sm:px-0 text-white">
                    <h1 className="text-6xl mb-8 font-medium">
                        Оцинкованная сталь<br /> доставка от 2 часов по Воронежу
                    </h1>
                    <div
                        className="w-1/2 mb-8 leading-7 font-light"
                    >
                        В листах, рулонах и ленте(штрипс). Производство ПАО «НЛМК» (г.Липецк)
                    </div>

                    <div className="flex items center">
                        <Link href={LinkUrl.CatalogSheet}>
                            <button
                                className="py-3 px-8 bg-orange-500 hover:scale-105 transition-transform rounded-full text-white font-medium mr-8"
                            >
                                Перейти в каталог
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection