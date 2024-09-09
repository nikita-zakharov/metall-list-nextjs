import BuyButton from "./BuyButton";

interface Props {
    title: string;
    description: { name: string; value: string | React.ReactElement }[];
    image: React.ReactElement
}

export default function ProductCard({ title, description, image }: Props) {
    return (
        <div className="p-6 shadow-lg border border-neutral-100 rounded-xl">
            {image}
            <div className="leading-7 mb-4">
                <p className="font-medium text-lg mb-4">{title}</p>
                {description.map((item) => (
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