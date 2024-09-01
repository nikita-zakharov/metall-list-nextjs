import ImageZoom from "./ImageZoom"

const ImageZoomWrapper = ({ src, alt }: { src: string; alt: string }) => {
    return <ImageZoom src={src} alt={alt} className="w-full h-full" options={{ background: '#000000df', scrollOffset: 0 }} />
}

const Gallery = () => {
    return <section className="py-16 relative">
        <div className="container">
            <h2 className="uppercase font-bold text-4xl mb-1">Галерея</h2>
            <p className="text-orange-400 font-light text-sm mb-16">Фотоотчет нашей работы</p>
            <ul className="grid grid-cols-3 gap-4 mb-4">
                <li>
                    <ImageZoomWrapper src="/images/sklad.jpeg" alt="Склад" />
                </li>
                <li>
                    <ImageZoomWrapper src="/images/pogruzka-produkcii.jpg" alt="Процесс погрузки продукции" />
                </li>
                <li>
                    <ImageZoomWrapper src="/images/doroga-na-sklad.webp" alt="Листы оцинкованные №5" />
                </li>
            </ul>
            <ul className="grid grid-cols-4 gap-4">
                <li>
                    <ImageZoomWrapper src="/images/listy-ocinkovannyj-1.jpeg" alt="Листы оцинкованные №1" />
                </li>
                <li>
                    <ImageZoomWrapper src="/images/listy-ocinkovannyj-2.jpeg" alt="Листы оцинкованные №2" />
                </li>
                <li>
                    <ImageZoomWrapper src="/images/listy-ocinkovannyj-3.jpeg" alt="Листы оцинкованные №3" />
                </li>
                <li>
                    <ImageZoomWrapper src="/images/listy-ocinkovannyj-4.jpeg" alt="Листы оцинкованные №4" />
                </li>
            </ul>
        </div>
    </section>
}

export default Gallery