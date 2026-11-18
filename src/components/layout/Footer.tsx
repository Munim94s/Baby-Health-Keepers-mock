import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { LogoMark } from "@/components/layout/Header";

export function Footer() {
    const t = useTranslations();
    const year = String(new Date().getFullYear());

    return (
        <footer className="border-t border-ink/10 bg-surface">
            <div className="container-page flex flex-col gap-8 py-10 md:flex-row md:items-start md:justify-between">
                <div className="max-w-sm">
                    <div className="flex items-center gap-2.5">
                        <LogoMark />
                        <span className="text-xl font-extrabold tracking-tight">{t("brand.name")}</span>
                    </div>
                    <p className="mt-3 text-muted">{t("footer.description")}</p>
                </div>
                <LanguageSwitcher />
            </div>
            <div className="border-t border-ink/10">
                <div className="container-page flex flex-col gap-1 py-5 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
                    <p>{t("footer.disclosure")}</p>
                    <p>{t("footer.copyright", { year, name: t("brand.name") })}</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;