import Image from "next/image";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import BuyButton from "./BuyButton";

interface Props {
    title: string;
    description: React.ReactElement;
    image: React.ReactElement
}

export default function ProductCard({ title, description, image }: Props) {
    return (
        <div className="p-6 shadow-lg border border-neutral-100 rounded-xl">
            {image}
            <div className="mb-4">
                <p className="font-medium text-lg mb-2">{title}</p>
                <div>
                    {description}
                </div>
                <p>Марка стали: 02/220/350</p>
                <p>Цинк: от 100 до 600</p>
                <p>
                    Производитель: <Image src={nlmkLogoPic} className="mx-auto inline" width="50" alt="Логотип компании НЛМК" />
                </p>
            </div>
            <div className="flex items-center gap-6 mb-4">
                <p>Цена (с НДС): по договоренности</p>
            </div>
            <BuyButton className="w-full" />
        </div>
    )
}