import Marquee from "react-fast-marquee";

const items = ['для вентиляционных систем', 'для дорожных знаков', 'для производства сельхозтехники и оборудования', 'для строительства']

const MarqueeLoop = () => {
    return (
        <div className="bg-stone-100">
            <Marquee speed={80}>
                <ul className="flex items-center gap-12 lg:gap-24 py-5 mr-24">
                    {items.concat(items).map((item, index) => (<li key={index} className="text-xl lg:text-2xl font-light">{item}</li>))}
                </ul>
            </Marquee>
        </div>

    )
}

export default MarqueeLoop