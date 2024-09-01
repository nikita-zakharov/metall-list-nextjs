import { ReactElement } from "react"

const BaseButton = ({ children }: { children: ReactElement | string }) => {
    return <button className="rounded-full bg-orange-400 px-7 py-2 text-white">{children}</button>
}

export default BaseButton