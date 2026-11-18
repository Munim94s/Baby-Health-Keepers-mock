import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { CategoryIcon } from "@/components/home/CategoryIcon";
import { ProductCard } from "@/components/product/ProductCard";
import type { Category, Locale, Product } from "@/lib/types";

type Props = {
    category: Category;
    products: Product[];
};

export function CategorySection({ category, products }: Props) {
    const t = useTranslations("categories");
    const locale = useLocale() as Locale;
    const name = category.name[locale];
    const titleId = `${category.slug}-title`;

    return (
        <section id={category.slug} aria-labelledby={titleId} className={`tone-${category.accent} py-10 sm:py-12`}>
            <div className="container-page">
                <div className="flex items-end justify-between gap-4">
                    <div className="flex items-start gap-3">
                        <span className="mt-1 inline-flex size-11 shrink-0 items-center justify-center rounded-2xl bg-(--a-soft) text-(--a-strong)">
                            <CategoryIcon name={category.icon} className="size-6" />
                        </span>
                        <div>
                            <h2 id={titleId} className="text-2xl font-extrabold tracking-tight sm:text-3xl">
                                {name}
                            </h2>
                            <p className="mt-1 text-muted">{category.tagline[locale]}</p>
                        </div>
                    </div>

                    {/* Placeholder: links to /[locale]/category/[slug] in a later batch */}
                    <a
                        href="#"
                        aria-label={t("viewAllLabel", { name })}
                        className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full px-3 text-sm font-bold text-(--a-strong) hover:bg-(--a-soft)"
                    >
                        {t("viewAll")}
                        <ArrowRight aria-hidden="true" className="size-4 rtl:rotate-180" />
                    </a>
                </div>

                <ul
                    aria-label={t("productsIn", { name })}
                    className="-mx-5 mt-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:thin] scroll-px-5 sm:-mx-8 sm:px-8 sm:scroll-px-8 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0 lg:pb-0"
                >
                    {products.map((product) => (
                        <li key={product.id} className="w-64 shrink-0 snap-start lg:w-auto">
                            <ProductCard product={product} />
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CategorySection;