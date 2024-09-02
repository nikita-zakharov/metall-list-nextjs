import { LinkUrl } from "../types";
import { redirect } from "next/navigation";

export default function CatalogRootPage() {
    redirect(LinkUrl.CatalogSheet)

    return null
}