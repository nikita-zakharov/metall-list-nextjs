import Image from 'next/image'
import SectionHeading from "../../shared/SectionHeading"
import skladPic from '@/public/images/sklad.jpeg'
import pogruzkaPic from '@/public/images/pogruzka-produkcii.jpg'
import dorogaNaSklad from '@/public/images/doroga-na-sklad.webp'
import listyOcinkovannyj1 from '@/public/images/listy-ocinkovannyj-1.jpeg'
import listyOcinkovannyj2 from '@/public/images/listy-ocinkovannyj-2.jpeg'
import listyOcinkovannyj3 from '@/public/images/listy-ocinkovannyj-3.jpeg'
import listyOcinkovannyj4 from '@/public/images/listy-ocinkovannyj-4.jpeg'
import SectionContainer from '../../shared/SectionContainer'
import LightGalleryWrapper from '../../shared/LightGalleryWrapper'

const Gallery = () => {
    return <SectionContainer>
        <div className="container">
            <SectionHeading title="Галерея" description="Фотоотчет нашей работы" />
            <LightGalleryWrapper elementClassNames='grid lg:grid-cols-12 gap-4'>
                <Image className="h-full w-full col-span-4 rounded-lg cursor-pointer" src={skladPic} alt="Склад" />
                <Image className="h-full w-full col-span-4 rounded-lg cursor-pointer" src={pogruzkaPic} alt="Процесс погрузки продукции" />
                <Image className="h-full w-full col-span-4 rounded-lg cursor-pointer" src={dorogaNaSklad} alt="Листы оцинкованные №5" />
                <Image className="h-full w-full col-span-3 rounded-lg cursor-pointer" src={listyOcinkovannyj1} alt="Листы оцинкованные №1" />
                <Image className="h-full w-full col-span-3 rounded-lg cursor-pointer" src={listyOcinkovannyj2} alt="Листы оцинкованные №2" />
                <Image className="h-full w-full col-span-3 rounded-lg cursor-pointer" src={listyOcinkovannyj3} alt="Листы оцинкованные №3" />
                <Image className="h-full w-full col-span-3 rounded-lg cursor-pointer" src={listyOcinkovannyj4} alt="Листы оцинкованные №4" />
            </LightGalleryWrapper>
        </div>
    </SectionContainer>
}

export default Gallery