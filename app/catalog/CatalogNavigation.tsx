import Link from "next/link";
import { LinkUrl } from "../types";
import { BsArrowBarRight, BsChevronRight } from "react-icons/bs";

export default function CatalogNavigation() {
    return <div>
        <p className="font-bold text-xl">Каталог</p>
        <hr className="my-4" />
        <ul className="list-disc pl-4 marker:text-orange-400">
            <li className="mb-2">
                <Link
                    href={LinkUrl.CatalogSheet}
                    className="underline">
                    Лист оцинкованный
                    <BsChevronRight className="inline ml-2" />
                </Link>
            </li>
            <li className="mb-2">
                <Link
                    href={LinkUrl.CatalogRoll}
                    className="underline">
                    Рулон оцинкованный
                    <BsChevronRight className="inline ml-2" />
                </Link>
            </li>
            <li className="mb-2">
                <Link
                    href={LinkUrl.CatalogTape}
                    className="underline">
                    Лента (штрипс) оцинкованная
                    <BsChevronRight className="inline ml-2" />
                </Link>
            </li>
        </ul></div>
}