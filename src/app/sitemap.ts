import {MetadataRoute} from "next";

const getGeneralSitemap = () => {
    const mapping = [
        '',
        'about',
        'authentication',
        'health',
        'esims/overview',
        'esims/countries',
        'esims/packages',
        'esims/orders',
        'esims/esims',
        'esims/esims-link',
        'esims/events',
        'esims/compatible-devices',
        'esims/balance',
        'webhooks/overview',
        'webhooks/verification',
        'webhooks/types/esim-status',
        'webhooks/types/esim-usage',
        'webhooks/types/partner-balance',
        'webhooks/types/affiliate-orders',
        'affiliate/overview',
        'affiliate/affiliate-links',
        'exchange-rates/overview',
        'exchange-rates/get-currencies',
        'exchange-rates/get-exchange-rates',
    ];
    return mapping.map((doc) => ({
        url: doc === '' ? 'https://docs.getroamify.com/' : `https://docs.getroamify.com/${doc}/`,
        lastModified: new Date().toISOString(),
        changeFrequency: "weekly" as const,
        priority: doc === '' ? 1.0 : 0.8,
    }));
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const generalPages = getGeneralSitemap();

    return [...generalPages];
}
