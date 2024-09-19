import Next from "next";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SITE_URL: string;
        }
    }
    interface Window {
        ym?: (id: number, event: string, location: string) => void
    }
}