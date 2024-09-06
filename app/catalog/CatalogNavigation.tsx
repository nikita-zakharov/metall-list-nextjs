import Link from "next/link";
import { LinkUrl } from "../types";

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
                </Link>
            </li>
            <li className="mb-2">
                <Link
                    href={LinkUrl.CatalogRoll}
                    className="underline">
                    Рулон оцинкованный
                </Link>
            </li>
            <li className="mb-2">
                <Link
                    href={LinkUrl.CatalogTape}
                    className="underline">
                    Лента (штрипс) оцинкованная
                </Link>
            </li>
        </ul></div>
}