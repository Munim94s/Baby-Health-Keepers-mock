import { Languages, LayoutGrid, MousePointerClick } from "lucide-react";
import { useTranslations } from "next-intl";

const points = [
    { icon: LayoutGrid, title: "curatedTitle", body: "curatedBody" },
    { icon: MousePointerClick, title: "directTitle", body: "directBody" },
    { icon: Languages, title: "bilingualTitle", body: "bilingualBody" },
] as const;

export function TrustStrip() {
    const t = useTranslations("trust");

    return (
        <section id="how-it-works" aria-labelledby="trust-title" className="relative mt-12 bg-primary-soft">
            {/* Wave divider from the page background */}
            <svg
                aria-hidden="true"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="block h-10 w-full text-canvas sm:h-16 rtl:-scale-x-100"
            >
                <path
                    fill="currentColor"
                    d="M0 0L1440 0L1440 40C1200 10 960 80 720 40C480 0 240 90 0 40Z"
                />
            </svg>

            <div className="container-page pb-16 pt-6 sm:pb-20">
                <h2 id="trust-title" className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    {t("title")}
                </h2>

                <ul className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
                    {points.map(({ icon: Icon, title, body }) => (
                        <li key={title} className="rounded-3xl bg-surface p-6 shadow-card">
                            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary-soft text-primary">
                                <Icon aria-hidden="true" className="size-6" />
                            </span>
                            <h3 className="mt-4 text-lg font-extrabold">{t(title)}</h3>
                            <p className="mt-1 text-muted">{t(body)}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default TrustStrip;