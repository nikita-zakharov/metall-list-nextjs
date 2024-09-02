interface Props {
    title: string
    description: string
}

export default function SectionHeading({ title, description }: Props) {
    return (<div>
        <h2 className="uppercase font-bold text-4xl mb-1">{title}</h2>
        <p className="text-orange-400 font-light text-sm mb-16">{description}</p>
    </div>)
}