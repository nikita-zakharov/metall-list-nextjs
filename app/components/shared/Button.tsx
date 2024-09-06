import { ButtonHTMLAttributes, ReactElement } from "react";

interface Props {
    children: string | ReactElement | ReactElement[];
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>;
    className?: string;
    onClick?: () => void;
}

export default function Button({ children, onClick, buttonProps, className }: Props) {
    return (<button
        onClick={onClick}
        {...buttonProps}
        className={`rounded-full bg-orange-400 px-7 py-3 text-white ${className}`}>
        {children}
    </button>)
}