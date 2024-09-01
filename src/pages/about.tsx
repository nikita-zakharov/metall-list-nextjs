import BaseLayout from "./components/BaseLayout"

const AboutPage = () => {
    return (
        <BaseLayout>
            <div>
                <div>
                    <div style={{ background: 'url("/images/lenta-banner.png")', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} className="relative w-full py-16">
                        <div className="container">
                            <h1 className="text-white text-4xl">О компании</h1>
                        </div>
                    </div>
                    <div className="container py-20">
                        Will be ready soon
                    </div>
                </div>
            </div>
        </BaseLayout>
    )
}

export default AboutPage