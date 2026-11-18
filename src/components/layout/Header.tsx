import { useLocale, useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { Link } from "@/i18n/navigation";
import { categories } from "@/lib/mock-data";
import type { Locale } from "@/lib/types";

export function LogoMark({ className = "size-8" }: { className?: string }) {
    return (
        <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className={className}>
            <circle cx="16" cy="16" r="16" fill="var(--color-primary)" />
            <path d="M16 25v-9" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M16 16c0-4.2 2.6-6.4 7.4-6.4 0 4.2-2.6 6.4-7.4 6.4Z" fill="#fff" />
            <path d="M16 20c0-3.2-2.1-5.2-6.2-5.2 0 3.2 2.1 5.2 6.2 5.2Z" fill="#fff" opacity="0.8" />
        </svg>
    );
}

export function Header() {
    const t = useTranslations();
    const locale = useLocale() as Locale;

    return (
        <header className="sticky top-0 z-40 border-b border-ink/10 bg-canvas/85 backdrop-blur-md">
            <div className="container-page flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-2 md:flex-nowrap">
                <Link
                    href="/"
                    aria-label={t("brand.logoLabel")}
                    className="inline-flex min-h-11 items-center gap-2.5 rounded-full"
                >
                    <LogoMark />
                    <span className="text-xl font-extrabold tracking-tight">{t("brand.name")}</span>
                </Link>

                <nav
                    aria-label={t("header.navLabel")}
                    className="order-last -mx-5 w-full overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:-mx-8 sm:px-8 md:order-none md:mx-0 md:w-auto md:overflow-visible md:px-0 md:pb-0"
                >
                    <ul className="flex w-max gap-2 md:w-auto">
                        {categories.map((category) => (
                            <li key={category.id}>
                                <a
                                    href={`#${category.slug}`}
                                    className={`tone-${category.accent} inline-flex min-h-11 items-center whitespace-nowrap rounded-full bg-(--a-soft) px-4 text-sm font-bold text-(--a-strong) transition-shadow hover:shadow-card`}
                                >
                                    {category.name[locale]}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <LanguageSwitcher />
            </div>
        </header>
    );
}

export default Header;