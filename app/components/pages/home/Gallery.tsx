import Image from 'next/image'
import SectionHeading from "../../shared/SectionHeading"
import skladPic from '@/public/images/sklad.jpeg'
import pogruzkaPic from '@/public/images/pogruzka-produkcii.jpg'
import dorogaNaSklad from '@/public/images/doroga-na-sklad.webp'
import listyOcinkovannyj1 from '@/public/images/listy-ocinkovannyj-1.jpeg'
import listyOcinkovannyj2 from '@/public/images/listy-ocinkovannyj-2.jpeg'
import listyOcinkovannyj3 from '@/public/images/listy-ocinkovannyj-3.jpeg'
import listyOcinkovannyj4 from '@/public/images/listy-ocinkovannyj-4.jpeg'

const Gallery = () => {
    return <section className="py-16 relative">
        <div className="container">
            <SectionHeading title="Галерея" description="Фотоотчет нашей работы" />
            <ul className="grid xl:grid-cols-3 gap-4 mb-4">
                <li>
                    <Image src={skladPic} className="h-full w-full" alt="Склад" />
                </li>
                <li>
                    <Image className="h-full w-full" src={pogruzkaPic} alt="Процесс погрузки продукции" />
                </li>
                <li>
                    <Image className="h-full w-full" src={dorogaNaSklad} alt="Листы оцинкованные №5" />
                </li>
            </ul>
            <ul className="grid xl:grid-cols-4 grid-cols-2 gap-4">
                <li>
                    <Image className="h-full w-full" src={listyOcinkovannyj1} alt="Листы оцинкованные №1" />
                </li>
                <li>
                    <Image className="h-full w-full" src={listyOcinkovannyj2} alt="Листы оцинкованные №2" />
                </li>
                <li>
                    <Image className="h-full w-full" src={listyOcinkovannyj3} alt="Листы оцинкованные №3" />
                </li>
                <li>
                    <Image className="h-full w-full" src={listyOcinkovannyj4} alt="Листы оцинкованные №4" />
                </li>
            </ul>
        </div>
    </section>
}

export default Gallery