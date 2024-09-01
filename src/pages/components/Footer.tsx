import Link from "next/link"

const Footer = () => {
    return (
        <footer className="bg-neutral-800 text-gray-200 py-8">
            <div className="container">
                <div className="grid grid-cols-12 text-neutral-300  leading-7">
                    <div className="col-span-5">
                        <p className="text-xl mb-3">Металл-лист</p>
                        <p>Продажа оцинкованной стали со склада <br /> в Воронеже, производство ПАО «НЛМК» (г.Липецк)</p>
                    </div>
                    <div className="col-span-4">
                        <p className="text-neutral-400 text-xl mb-3">Каталог</p>
                        <ul>
                            <li>Листы оцинкованные</li>
                            <li>Рулоны оцинкованные</li>
                            <li>Штрипс(лента) оцинкованная</li>
                        </ul>
                    </div>
                    <div className="col-span-3 justify-self-end">
                        <p className="text-neutral-400 text-xl mb-3">Контакты</p>
                        <ul>
                            <li><a href="tel:+79529506976" className="text-xl">+7 (952) 950-69-76</a></li>
                            <li><a href="mailto:ser.zah70@mail.ru">ser.zah70@mail.ru</a></li>
                            <li>г. Воронеж, ул. Базовая 4</li>
                        </ul>
                    </div>
                </div>
                <hr className="my-8 border-t-neutral-500" />
                <div className="grid grid-cols-12 text-neutral-400">
                    <div className="col-span-5"><p className="text-sm">© 2012-2024 «Металл лист». Все права защищены.</p></div>
                    <div className="col-span-4"><Link href="/policy" className="text-sm underline">Политика обработки персональных данных</Link></div>
                    <div className="col-span-3 justify-self-end"><Link href="/policy" className="text-sm underline">Политика конфиденциальности</Link></div>
                </div>
            </div>
        </footer>
    )
}

export default Footer