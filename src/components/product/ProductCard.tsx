import { ExternalLink, Star } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import type { Locale, Product } from "@/lib/types";

type Props = {
    product: Product;
};

// Inherits the category's --a-soft / --a-strong from the surrounding section's tone class.
export function ProductCard({ product }: Props) {
    const t = useTranslations("product");
    const locale = useLocale() as Locale;
    const name = product.name[locale];

    return (
        <article className="flex h-full flex-col overflow-hidden rounded-3xl bg-surface shadow-card ring-1 ring-ink/5">
            <div className="relative aspect-4/3 bg-(--a-soft)">
                <Image
                    src={product.imageSrc}
                    alt={name}
                    fill
                    sizes="(min-width: 1024px) 25vw, 256px"
                    className="object-contain p-6"
                />
                {product.featured && (
                    <span className="absolute start-3 top-3 inline-flex items-center gap-1 rounded-full bg-surface px-2.5 py-1 text-xs font-bold text-(--a-strong) shadow-sm">
                        <Star aria-hidden="true" className="size-3.5 fill-current" />
                        {t("featured")}
                    </span>
                )}
            </div>

            <div className="flex flex-1 flex-col p-4">
                <p className="text-sm font-bold text-(--a-strong)">{product.brand}</p>
                <h3 className="mt-0.5 text-lg font-extrabold leading-snug">{name}</h3>
                <p className="mt-1 text-sm text-muted">{product.blurb[locale]}</p>

                <a
                    href={product.externalUrl}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    aria-label={t("buyLabel", { name })}
                    className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-ink px-5 text-sm font-bold text-white transition-colors hover:bg-primary"
                >
                    {t("buy")}
                    <ExternalLink aria-hidden="true" className="size-4 rtl:-scale-x-100" />
                </a>
            </div>
        </article>
    );
}

export default ProductCard;