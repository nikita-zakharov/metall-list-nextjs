import Next from "next";

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SITE_URL: string;
        }
    }
}