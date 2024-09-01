import Header from "./Header";
import Footer from "./Footer";
import CallbackModalProvider from "./Modals/CallbackModal/CallbackModalProvider";
import { ReactElement } from "react";

const BaseLayout = ({ children }: { children: ReactElement }) => {
    return (
        <CallbackModalProvider>
            <Header />
            <main className="min-h-[600px]">
                {children}
            </main>
            <Footer />
        </CallbackModalProvider>
    )
}

export default BaseLayout