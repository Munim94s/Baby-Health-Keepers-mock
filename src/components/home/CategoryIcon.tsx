import { Apple, Droplets, Smile, UtensilsCrossed, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
    Droplets,
    Apple,
    UtensilsCrossed,
    Smile,
};

export function CategoryIcon({ name, className }: { name: string; className?: string }) {
    const Icon = icons[name] ?? Droplets;
    return <Icon aria-hidden="true" className={className} />;
}

export default CategoryIcon;