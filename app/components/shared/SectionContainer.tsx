import { ReactElement } from "react"

interface Props {
    children: ReactElement | ReactElement[]
    className?: string
}

export default function SectionContainer({ children, className }: Props) {
    return (<section className={`py-12 lg:py-16 ${className || ''}`}>
        {children}
    </section>)
}