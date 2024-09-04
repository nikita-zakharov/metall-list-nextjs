interface Props {
    title: string;
    imageSrc: string;
}

export default function Banner({ title, imageSrc }: Props) {
    return (<div style={{ background: `url("${imageSrc}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} className="relative w-full py-16">
        <div className="container">
            <h1 className="text-white text-4xl">{title}</h1>
        </div>
    </div>)
}