import Image from "next/image"
import SectionHeading from "../../shared/SectionHeading"

const Gallery = () => {
    return <section className="py-16 relative">
        <div className="container">
            <SectionHeading title="Галерея" description="Фотоотчет нашей работы" />
            <ul className="grid grid-cols-3 gap-4 mb-4">
                <li>
                    <img className="h-full w-full" src="/images/sklad.jpeg" alt="Склад" />
                </li>
                <li>
                    <img className="h-full w-full" src="/images/pogruzka-produkcii.jpg" alt="Процесс погрузки продукции" />
                </li>
                <li>
                    <img className="h-full w-full" src="/images/doroga-na-sklad.webp" alt="Листы оцинкованные №5" />
                </li>
            </ul>
            <ul className="grid grid-cols-4 gap-4">
                <li>
                    <img className="h-full w-full" src="/images/listy-ocinkovannyj-1.jpeg" alt="Листы оцинкованные №1" />
                </li>
                <li>
                    <img className="h-full w-full" src="/images/listy-ocinkovannyj-2.jpeg" alt="Листы оцинкованные №2" />
                </li>
                <li>
                    <img className="h-full w-full" src="/images/listy-ocinkovannyj-3.jpeg" alt="Листы оцинкованные №3" />
                </li>
                <li>
                    <img className="h-full w-full" src="/images/listy-ocinkovannyj-4.jpeg" alt="Листы оцинкованные №4" />
                </li>
            </ul>
        </div>
    </section>
}

export default Gallery