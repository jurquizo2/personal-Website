import Link from "next/link";
import type { Theme } from "@/content/themes";

export default function ThemeCard({ theme }: { theme: Theme }) {
  return (
    <Link
      href={`/thinking/${theme.slug}`}
      className="flex flex-col gap-3 rounded-2xl border border-ink/10 p-6 transition hover:border-accent hover:shadow-sm"
    >
      <span className="font-serif text-2xl text-accent">{theme.number}</span>
      <h3 className="font-serif text-xl text-ink">{theme.title}</h3>
      <p className="text-sm text-muted">{theme.positioning}</p>
    </Link>
  );
}
