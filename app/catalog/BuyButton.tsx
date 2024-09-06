'use client'

import { useCallbackModal } from "../components/modals/CallbackModal/CallbackModalProvider"
import Button from "../components/shared/Button"

export default function BuyButton() {
    const callbackModal = useCallbackModal()

    return (
        <Button onClick={() => callbackModal.show()}>Купить</Button>
    )
}