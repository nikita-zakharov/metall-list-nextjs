import { useRouter } from "next/router";
import Banner from "../components/shared/Banner";
import CatalogNavigation from "./CatalogNavigation";
import { useEffect } from "react";
import { LinkUrl } from "../types";
import { redirect } from "next/navigation";

export default function CatalogRootPage() {
    redirect(LinkUrl.CatalogSheet)

    return null
}