import { notFound } from "next/navigation";
import Link from "next/link";
import { themes, closingLine } from "@/content/themes";

export function generateStaticParams() {
  return themes.map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const theme = themes.find((t) => t.slug === params.slug);
  return { title: theme ? `${theme.title} — Jacqueline Urquizo` : "Thinking" };
}

export default function ThemePage({ params }: { params: { slug: string } }) {
  const theme = themes.find((t) => t.slug === params.slug);
  if (!theme) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/thinking" className="text-sm text-accent">
        ← All thinking
      </Link>
      <p className="mt-6 font-serif text-2xl text-accent">{theme.number}</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">{theme.title}</h1>

      <h2 className="mt-10 font-serif text-lg text-ink">Grounding</h2>
      <p className="mt-2 text-muted">{theme.grounding}</p>

      <h2 className="mt-8 font-serif text-lg text-ink">Position</h2>
      <p className="mt-2 text-lg text-ink">“{theme.positioning}”</p>

      <p className="mt-10 border-t border-ink/10 pt-6 text-sm italic text-muted">{closingLine}</p>
    </div>
  );
}
