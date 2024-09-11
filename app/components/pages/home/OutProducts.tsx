import { LinkUrl } from "@/app/types"
import Link from "next/link"
import SectionHeading from "../../shared/SectionHeading"
import Image, { StaticImageData } from "next/image"
import sheetPic from '@/public/images/listy-pachka.webp'
import rollPic from '@/public/images/rulon-ocink.webp'
import tapePic from '@/public/images/lenta-shtrips-rulon.webp'
import SectionContainer from "../../shared/SectionContainer"
import Button from "../../shared/Button"

interface ProductCardProps {
    name: string;
    thickness: string
    length?: string
    href: string
    image: React.ReactElement
}

const ProductCard = ({ name, thickness, length, href, image }: ProductCardProps) => {
    return (
        <div className="bg-stone-100 py-8 px-10 rounded-xl relative h-full">
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="mb-4">
                        <p className="font-bold text-2xl">Сталь оцинкованная</p>
                        <p className="font-bold text-2xl text-orange-400">{name}</p>
                    </div>
                    <div className="text-sm mb-24">
                        <p>Толщина:</p>
                        <p>{thickness}</p>
                        {length && <p>Длина: {length}</p>}
                    </div>
                    <div>
                        {image}
                    </div>
                </div>
                <div className="flex items-center gap-24">
                    <Link href={href}>
                        <Button>
                            Каталог
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const OurProducts = () => {
    return (
        <SectionContainer>
            <div className="container">
                <SectionHeading title="Наша продукция" description="Широкий ассортимент оцинкованной стали" />
                <ul className="grid xl:grid-cols-3 grid-cols-1 gap-8">
                    <li>
                        <ProductCard
                            name="в листах"
                            thickness="от 0.3 до 4 мм"
                            length="любая"
                            image={(
                                <div className="absolute top-[95px] right-2">
                                    <Image src={sheetPic} className="opacity-60 w-[230px]" alt="Лист оцинкованный" />
                                </div>
                            )}
                            href={LinkUrl.CatalogSheet} />
                    </li>
                    <li>
                        <ProductCard
                            name="в рулонах"
                            thickness="от 0.3 до 4 мм"
                            image={(
                                <div className="absolute top-[85px] right-2">
                                    <Image src={rollPic} className="opacity-60 w-[230px]" alt="Рулон оцинкованный" />
                                </div>
                            )}
                            href={LinkUrl.CatalogRoll} />
                    </li>
                    <li>
                        <ProductCard
                            name="в ленте"
                            thickness="от 0.3 до 4 мм"
                            image={(
                                <div className="absolute top-[85px] right-2">
                                    <Image src={tapePic} className="opacity-60 w-[200px]" alt="Лента (штрипс) оцинкованная" />
                                </div>
                            )}
                            href={LinkUrl.CatalogTape} />
                    </li>
                </ul>
            </div>
        </SectionContainer>
    )
}

export default OurProducts