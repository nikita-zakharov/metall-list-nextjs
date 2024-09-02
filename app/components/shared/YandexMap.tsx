'use client'

interface Props {
    height?: string
}

const defaultHeight = '560px'

export default function YandexMap({ height }: Props) {
    return (<div className="relative overflow-hidden">
        <iframe src="https://yandex.ru/map-widget/v1/?ll=39.282288%2C51.652999&mode=search&oid=1381466419&ol=biz&z=14.28"
            width="100%"
            height={height || defaultHeight}
            loading="lazy"
            className="relative">
        </iframe>
    </div>)
}