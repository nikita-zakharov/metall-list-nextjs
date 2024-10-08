import { LinkUrl } from "@/app/types"
import Link from "next/link"
import Button from "../../shared/Button"

const HeroSection = () => {
    return (
        <div>
            <div className="relative" style={{
                background: 'linear-gradient(0deg,rgba(32, 32, 32, 0.7),rgba(32, 32, 32, 0.9)), url("/images/hero.webp")',
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <div className="container pt-20 lg:pt-24 pb-44 lg:pb-48 px-4 sm:px-0 text-white">
                    <h1 className="xl:text-6xl text-3xl lg:mb-8 mb-4 font-medium">
                        Оцинкованная сталь<br /> с доставкой от 1 часа в Воронеже
                    </h1>
                    <div
                        className="lg:w-1/2 mb-8 leading-7 font-light"
                    >
                        В листах, рулонах и ленте(штрипс). Производство ПАО «НЛМК» (г.Липецк).
                    </div>

                    <div className="flex items center">
                        <Link href={LinkUrl.CatalogSheet}>
                            <Button>
                                Перейти в каталог
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection