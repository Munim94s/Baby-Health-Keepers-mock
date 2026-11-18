import { ArrowRight } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { CategoryIcon } from "@/components/home/CategoryIcon";
import { categories } from "@/lib/mock-data";
import type { Locale } from "@/lib/types";

export function CategoryGrid() {
    const t = useTranslations("categories");
    const locale = useLocale() as Locale;

    return (
        <section id="categories" aria-labelledby="categories-title" className="py-12 sm:py-16">
            <div className="container-page">
                <h2 id="categories-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {t("heading")}
                </h2>
                <p className="mt-2 text-muted">{t("subheading")}</p>

                <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
                    {categories.map((category) => (
                        <li key={category.id}>
                            <a
                                href={`#${category.slug}`}
                                className={`tone-${category.accent} group flex h-full min-h-44 flex-col rounded-[2rem] bg-(--a-soft) p-4 shadow-card transition-transform motion-safe:hover:-translate-y-1 sm:p-6`}
                            >
                                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-surface text-(--a-strong)">
                                    <CategoryIcon name={category.icon} className="size-6" />
                                </span>
                                <span className="mt-4 text-base font-extrabold leading-snug sm:text-lg">
                                    {category.name[locale]}
                                </span>
                                <span className="mt-1 text-sm text-muted">{category.tagline[locale]}</span>
                                <ArrowRight
                                    aria-hidden="true"
                                    className="mt-auto size-5 pt-0 text-(--a-strong) transition-transform rtl:rotate-180 motion-safe:group-hover:translate-x-1 motion-safe:rtl:group-hover:-translate-x-1"
                                />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default CategoryGrid;