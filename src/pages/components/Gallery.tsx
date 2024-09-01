const Gallery = () => {
    return <section className="py-16 relative">
        <div className="container">
            <h2 className="uppercase font-bold text-4xl mb-1">Галерея</h2>
            <p className="text-orange-400 font-light text-sm mb-16">Фотоотчет нашей работы</p>
            <ul className="grid grid-cols-3 gap-4 mb-4">
                <li>
                    <img src="/images/sklad.jpeg" className="w-full h-full" alt="Склад" />
                </li>
                <li>
                    <img src="/images/pogruzka-produkcii.jpg" className="w-full h-full" alt="Процесс погрузки продукции" />
                </li>
                <li>
                    <img src="/images/listy-ocinkovannyj-5.jpeg" className="w-full h-full" alt="Листы оцинкованные №5" />
                </li>
            </ul>
            <ul className="grid grid-cols-4 gap-4">
                <li>
                    <img src="/images/listy-ocinkovannyj-1.jpeg" className="w-full h-full" alt="Листы оцинкованные №1" />
                </li>
                <li>
                    <img src="/images/listy-ocinkovannyj-2.jpeg" className="w-full h-full" alt="Листы оцинкованные №2" />
                </li>
                <li>
                    <img src="/images/listy-ocinkovannyj-3.jpeg" className="w-full h-full" alt="Листы оцинкованные №3" />
                </li>
                <li>
                    <img src="/images/listy-ocinkovannyj-4.jpeg" className="w-full h-full" alt="Листы оцинкованные №4" />
                </li>
            </ul>
        </div>
    </section>
}

export default Gallery