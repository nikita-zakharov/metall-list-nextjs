import type { MetadataRoute } from 'next'
import { LinkUrl } from './types'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.SITE_URL}/`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.CatalogRoot}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.CatalogSheet}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.CatalogRoll}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.CatalogTape}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.Contacts}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.PaymentAndDelivery}`,
            lastModified: new Date(),
        },
        {
            url: `${process.env.SITE_URL}${LinkUrl.Policy}`,
            lastModified: new Date(),
        },
    ]
}