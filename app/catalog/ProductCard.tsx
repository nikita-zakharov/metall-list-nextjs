import Image from "next/image";
import nlmkLogoPic from '@/public/images/NLMK-logo.png'
import BuyButton from "./BuyButton";

interface Props {
    title: string;
    description: React.ReactElement;
    image: React.ReactElement
}

const descriptionItems = [
    { name: 'Ширина', value: 'от 0.950 мм до 1550 мм' },
    { name: 'Длина', value: 'любая, до 5000 мм' },
    { name: 'Марка стали', value: '02/220/350' },
    { name: 'Цинк', value: 'от 100 до 600' },
    { name: 'Производитель', value: <Image src={nlmkLogoPic} className="mx-auto inline" width="50" alt="Логотип компании НЛМК" /> },
]

export default function ProductCard({ title, image }: Props) {
    return (
        <div className="p-6 shadow-lg border border-neutral-100 rounded-xl">
            {image}
            <div className="leading-7 mb-4">
                <p className="font-medium text-lg mb-4">{title}</p>
                {descriptionItems.map(item => (
                    <div key={item.name} className="flex items-center justify-between">
                        <p>{item.name}:</p>
                        <p>{item.value}</p>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between gap-6 mb-6">
                <p>Цена (с НДС):</p>
                <p>по договоренности</p>
            </div>
            <BuyButton className="w-full" />
        </div>
    )
}