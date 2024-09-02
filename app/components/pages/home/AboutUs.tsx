import Link from "next/link"
import Button from "../../shared/Button"
import SectionHeading from "../../shared/SectionHeading"

const AboutUs = () => {
    return <>
        <section className="py-16 bg-gray-100">
            <div className="container">
                <SectionHeading title="О компании" description="Немного о компании в цифрах" />
                <div className="grid xl:grid-cols-2 gap-24">
                    <div className="leading-5">
                        <p className="mb-4">
                            Компания «Металл-лист» основана в декабре 2012 года.
                        </p>
                        <p className="mb-4">
                            Предлагаем широкий ассортимент оцинкованной стали, которая отлично подходит для различных применений, например в производстве дорожных знаков, вентиляционных воздуховодов, сельхоз техники и других изделий.
                        </p>
                        <p className="mb-4">Наша цель – стать для Вас надежным партнером в поставках оцинкованного проката. Мы всегда готовы предложить вам продукцию, которая удовлетворяет ваши потребности.</p>
                        <p className="mb-8">Мы занимаемся поставкой оцинкованной стали производства ПАО «НЛМК» (г. Липецк) в листах, рулонах и ленте.</p>
                        <Link href="/about"><Button>Подробнее</Button></Link>
                    </div>
                    <div>
                        <ul className="grid grid-cols-2 gap-14">
                            <li>
                                <p className="text-orange-400 text-6xl font-bold">12</p>
                                <p className="font-bold">лет опыта в сфере</p>
                            </li>
                            <li>
                                <p className="text-orange-400 text-6xl font-bold">200+</p>
                                <p className="font-bold">тонн поставляем ежемесячно</p>
                            </li>
                            <li>
                                <p className="text-orange-400 text-6xl font-bold">30+</p>
                                <p className="font-bold">довольных клиентов</p>
                            </li>
                            <li>
                                <p className="text-orange-400 text-6xl font-bold">50+</p>
                                <p className="font-bold">успешно завершенных объектов</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default AboutUs