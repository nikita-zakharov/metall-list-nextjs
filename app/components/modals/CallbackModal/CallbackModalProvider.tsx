import dynamic from "next/dynamic";
import React, { createContext, useCallback, useContext, useState } from "react";
import { createPortal } from "react-dom";

interface CallbackModalContext {
    isOpen: boolean;
    show: () => void
    hide: () => void
}

const DynamicCallMeModal = dynamic(() => import('./CallbackModal'), {
    ssr: false,
})

const CallbackModalContext = createContext({} as CallbackModalContext)

const CallbackModalProvider = ({ children }: { children: React.ReactElement | React.ReactElement[] }) => {
    const [open, setOpen] = useState(false)

    const toggleBodyScroll = (value: boolean) => {
        if (value) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
    }

    const show = useCallback(() => {
        setOpen(true)
        toggleBodyScroll(true)
    }, [])
    const hide = useCallback(() => {
        toggleBodyScroll(false)
        setOpen(false)
    }, [])

    return (
        <CallbackModalContext.Provider value={{ isOpen: open, show, hide }}>
            {open && createPortal(<DynamicCallMeModal />, document.body)}
            {children}
        </CallbackModalContext.Provider>
    )
}

const useCallbackModal = () => useContext(CallbackModalContext)

export { CallbackModalProvider as default, useCallbackModal } 