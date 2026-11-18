import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function NotFound() {
    const t = useTranslations("notFound");

    return (
        <section className="container-page flex min-h-[60vh] flex-col items-start justify-center gap-4 py-16">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{t("title")}</h1>
            <p className="max-w-md text-lg text-muted">{t("body")}</p>
            <Link
                href="/"
                className="inline-flex min-h-12 items-center rounded-full bg-primary px-7 font-bold text-white transition-colors hover:bg-primary-hover"
            >
                {t("backHome")}
            </Link>
        </section>
    );
}

export default NotFound;