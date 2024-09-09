'use client'

import { useCallbackModal } from "../components/modals/CallbackModal/CallbackModalProvider"
import Button from "../components/shared/Button"

interface Props {
    className?: string
}

export default function BuyButton({ className }: Props) {
    const callbackModal = useCallbackModal()

    return (
        <Button className={className} onClick={() => callbackModal.show()}>Купить</Button>
    )
}