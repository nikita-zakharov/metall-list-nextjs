import { ButtonHTMLAttributes, ReactElement } from "react";

interface Props {
    children: string | ReactElement | ReactElement[];
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>
    className?: string
}

export default function Button({ children, buttonProps, className }: Props) {
    return (<button
        {...buttonProps}
        className={`rounded-full bg-orange-400 px-7 py-3 text-white ${className}`}>
        {children}
    </button>)
}