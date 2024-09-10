import Link from "next/link";
import SectionContainer from "./components/shared/SectionContainer";
import Button from "./components/shared/Button";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Страница не найдена",
};

export default function Custom404() {
    return (
        <div>
            <SectionContainer>
                <div className="container">
                    <div className="flex flex-col justify-center items-center text-center">
                        <h1 className="mb-8">
                            <p className="text-9xl text-orange-400">404</p>
                            <p className="text-4xl">
                                Страница не найдена
                            </p>
                        </h1>
                        <p className="mb-8 text-gray-700">Неправильно набран адрес или такой страницы не существует</p>
                        <Link href="/">
                            <Button>Вернутся на главную</Button>
                        </Link>
                    </div>

                </div>
            </SectionContainer>
        </div>
    )
}