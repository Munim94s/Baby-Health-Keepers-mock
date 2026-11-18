import { ArrowRight, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { categories, products } from "@/lib/mock-data";
import type { Locale } from "@/lib/types";

export function Hero() {
    const t = useTranslations("hero");
    const locale = useLocale() as Locale;

    // One featured product per category drives the floating cards.
    const showcase = categories.flatMap((category) => {
        const product =
            products.find((p) => p.categoryId === category.id && p.featured) ??
            products.find((p) => p.categoryId === category.id);
        return product ? [{ category, product }] : [];
    });

    return (
        <section className="relative isolate overflow-hidden bg-linear-to-b from-primary-soft/50 to-canvas">
            {/* Decorative blobs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -end-24 -z-10 size-72 rounded-[60%_40%_55%_45%/50%_55%_45%_50%] bg-primary-soft sm:size-96"
            />
            <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -start-20 -z-10 size-64 rounded-[45%_55%_40%_60%/55%_45%_55%_45%] bg-sky-soft sm:size-80"
            />

            <div className="container-page grid items-center gap-12 pb-24 pt-10 sm:pt-16 lg:grid-cols-2 lg:gap-8 lg:pb-32 lg:pt-20">
                <div>
                    <p className="inline-flex items-center gap-2 rounded-full bg-surface px-4 py-2 text-sm font-bold text-primary shadow-sm ring-1 ring-primary/20">
                        <Sparkles aria-hidden="true" className="size-4" />
                        {t("eyebrow")}
                    </p>

                    <h1 className="mt-5 text-4xl font-extrabold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl rtl:leading-[1.35]">
                        {t("title")}
                    </h1>

                    <p className="mt-5 max-w-xl text-lg text-muted rtl:leading-relaxed">{t("subtitle")}</p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#categories"
                            className="inline-flex min-h-12 items-center gap-2 rounded-full bg-primary px-7 font-bold text-white shadow-card transition-colors hover:bg-primary-hover"
                        >
                            {t("ctaPrimary")}
                            <ArrowRight aria-hidden="true" className="size-5 rtl:rotate-180" />
                        </a>
                        <a
                            href="#how-it-works"
                            className="inline-flex min-h-12 items-center rounded-full bg-surface px-7 font-bold text-ink ring-2 ring-ink/15 transition-colors hover:ring-ink/40"
                        >
                            {t("ctaSecondary")}
                        </a>
                    </div>

                    <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-muted">
                        {(["factCategories", "factBrands", "factDirect"] as const).map((key) => (
                            <li key={key} className="inline-flex items-center gap-2">
                                <span aria-hidden="true" className="size-1.5 rounded-full bg-primary" />
                                {t(key)}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Visual: floating placeholder cards, one per category */}
                <div
                    role="group"
                    aria-label={t("visualLabel")}
                    className="relative mx-auto w-full max-w-sm pb-10 sm:max-w-md"
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                        {showcase.map(({ category, product }, index) => (
                            <div
                                key={category.id}
                                aria-hidden="true"
                                className={index % 2 === 1 ? "translate-y-6 sm:translate-y-10" : ""}
                            >
                                <div
                                    className={`tone-${category.accent} rounded-3xl bg-surface p-2 shadow-float ring-1 ring-ink/5 motion-safe:animate-float`}
                                    style={{ animationDelay: `${index * 0.9}s` }}
                                >
                                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-(--a-soft)">
                                        <Image
                                            src={product.imageSrc}
                                            alt={category.name[locale]}
                                            fill
                                            sizes="(min-width: 1024px) 220px, 40vw"
                                            className="object-contain p-5"
                                        />
                                    </div>
                                    <p className="px-2 pb-1.5 pt-2 text-center text-sm font-bold text-(--a-strong)">
                                        {category.name[locale]}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Wave divider into the next section */}
            <svg
                aria-hidden="true"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-0 block h-10 w-full text-canvas sm:h-16 rtl:-scale-x-100"
            >
                <path
                    fill="currentColor"
                    d="M0 40C240 90 480 0 720 40C960 80 1200 10 1440 40L1440 80L0 80Z"
                />
            </svg>
        </section>
    );
}

export default Hero;