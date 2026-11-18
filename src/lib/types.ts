export type Locale = "en" | "ar";
export type Localized = { en: string; ar: string };

export type CategorySlug =
    | "baby-skincare"
    | "nutrition-food"
    | "feeding-essentials"
    | "oral-care";

export type Category = {
    id: string;
    slug: CategorySlug;
    name: Localized;
    tagline: Localized;
    icon: string; // lucide icon name
    accent: string; // theme token name: rose | amber | sky | mint
};

export type Product = {
    id: string;
    categoryId: string;
    name: Localized;
    brand: string;
    blurb: Localized;
    imageSrc: string; // local placeholder path
    externalUrl: string; // the original company's site
    featured: boolean;
};