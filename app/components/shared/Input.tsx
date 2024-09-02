import { ChangeEvent, ReactElement } from "react";

interface Props {
    children: ReactElement | ReactElement[];
    name: string;
    placeholder: string;
    label: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ children, name, placeholder, label, onChange }: Props) {
    return (<div>
        <label htmlFor={name}>{label}</label>
        <input onChange={onChange} name={name} placeholder={placeholder}>{children}</input>
    </div>)
}