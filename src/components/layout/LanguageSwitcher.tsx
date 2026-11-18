"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
    const t = useTranslations("language");
    const current = useLocale();
    const pathname = usePathname();

    return (
        <nav
            aria-label={t("switch")}
            className="inline-flex rounded-full bg-surface p-0.5 shadow-sm ring-1 ring-ink/10"
        >
            {routing.locales.map((locale) => {
                const isCurrent = locale === current;
                return (
                    <Link
                        key={locale}
                        href={pathname}
                        locale={locale}
                        lang={locale}
                        hrefLang={locale}
                        aria-current={isCurrent ? "page" : undefined}
                        className={
                            "inline-flex min-h-11 min-w-12 items-center justify-center rounded-full px-3 text-sm font-bold transition-colors " +
                            (isCurrent ? "bg-ink text-white" : "text-ink hover:bg-primary-soft")
                        }
                    >
                        {t(locale)}
                    </Link>
                );
            })}
        </nav>
    );
}

export default LanguageSwitcher;