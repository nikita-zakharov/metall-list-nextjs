'use client'
import { ReactElement, useEffect, useRef } from "react"
import { BsXLg } from "react-icons/bs"

interface Props {
    image?: ReactElement
}

export default function Lightbox({ image }: Props) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    const open = () => {
        dialogRef.current?.showModal()
        document.body.classList.add('overflow-y-hidden')
    }

    const close = () => {
        dialogRef.current?.close()
        document.body.classList.remove('overflow-y-hidden')
    }

    const handleDialogCancel = () => {
        dialogRef.current?.addEventListener('cancel', (e) => {
            e.preventDefault()
            close()
        })
    }

    useEffect(() => {
        handleDialogCancel()
    }, [handleDialogCancel])

    return (
        <div className="h-full">
            <button className="w-full h-full cursor-zoom-in" onClick={open}>
                {image}
            </button>
            <dialog ref={dialogRef} className=" backdrop:bg-black/80 overflow-y-hidden">

                <div className="max-w-[700px] max-h-[700px] relative">
                    <div className="w-full bg-black/70 h-16 absolute top-0">
                        <button className="absolute top-3 right-4 p-2 text-lg text-black rounded-full bg-white shadow" onClick={() => close()}><BsXLg /></button>
                    </div>
                    {image}
                </div>
            </dialog>
        </div>
    )
}