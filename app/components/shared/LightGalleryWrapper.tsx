'use client'
import LightGallery from "lightgallery/react";
import { ReactElement } from "react";
import 'lightgallery/css/lightgallery.css';

interface Props {
    children: ReactElement | ReactElement[];
    elementClassNames?: string;
}

export default function LightGalleryWrapper({ children, elementClassNames }: Props) {
    return (
        <LightGallery
            download={false}
            speed={500}
            hideScrollbar
            elementClassNames={elementClassNames}>
            {children}
        </LightGallery>
    )
}