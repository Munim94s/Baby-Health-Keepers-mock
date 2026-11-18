import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { Nunito, Tajawal } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { routing } from "@/i18n/routing";
import "../globals.css";

// Both fonts expose the same CSS variable; only the one for the active locale is applied.
const latinFont = Nunito({
    subsets: ["latin"],
    variable: "--font-body",
    display: "swap",
});

const arabicFont = Tajawal({
    subsets: ["arabic"],
    weight: ["400", "500", "700", "800"],
    variable: "--font-body",
    display: "swap",
});

type Props = {
    children: ReactNode;
    params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
    const { locale } = await params;

    if (!hasLocale(routing.locales, locale)) {
        notFound();
    }

    setRequestLocale(locale);

    const [messages, t] = await Promise.all([
        getMessages(),
        getTranslations({ locale, namespace: "common" }),
    ]);

    const font = locale === "ar" ? arabicFont : latinFont;

    return (
        <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"} className={font.variable}>
            <body className="min-h-dvh">
                {/* Only the language switcher is a client component, so only its messages are sent down. */}
                <NextIntlClientProvider messages={{ language: messages.language }}>
                    <a
                        href="#main"
                        className="sr-only rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50"
                    >
                        {t("skipToContent")}
                    </a>
                    <Header />
                    <main id="main">{children}</main>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    );
}