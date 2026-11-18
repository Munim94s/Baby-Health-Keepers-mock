import type { Metadata } from "next";
import { hasLocale } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { CategorySection } from "@/components/home/CategorySection";
import { Hero } from "@/components/home/Hero";
import { TrustStrip } from "@/components/home/TrustStrip";
import { routing } from "@/i18n/routing";
import { categories, products } from "@/lib/mock-data";

type Props = {
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    if (!hasLocale(routing.locales, locale)) notFound();

    const t = await getTranslations({ locale, namespace: "meta" });

    return {
        title: t("title"),
        description: t("description"),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: "/en",
                ar: "/ar",
                "x-default": "/en",
            },
        },
    };
}

export default async function HomePage({ params }: Props) {
    const { locale } = await params;
    setRequestLocale(locale);

    return (
        <>
            <Hero />
            <CategoryGrid />
            {categories.map((category) => (
                <CategorySection
                    key={category.id}
                    category={category}
                    products={products.filter((p) => p.categoryId === category.id)}
                />
            ))}
            <TrustStrip />
        </>
    );
}