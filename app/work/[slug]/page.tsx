import { notFound } from "next/navigation";
import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((c) => c.slug === params.slug);
  return { title: caseStudy ? `${caseStudy.title} — Jacqueline Urquizo` : "Work" };
}

const sections: { key: keyof typeof caseStudies[number]; label: string }[] = [
  { key: "challenge", label: "The Challenge" },
  { key: "insight", label: "The Insight" },
  { key: "strategy", label: "The Strategy" },
  { key: "implementation", label: "The Implementation" },
  { key: "result", label: "The Result" },
  { key: "lesson", label: "The Lesson" },
];

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseStudy = caseStudies.find((c) => c.slug === params.slug);
  if (!caseStudy) return notFound();

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link href="/work" className="text-sm text-accent">
        ← All work
      </Link>
      <p className="mt-6 text-xs uppercase tracking-wide text-accent">{caseStudy.org}</p>
      <h1 className="mt-2 font-serif text-4xl text-ink">{caseStudy.title}</h1>

      {caseStudy.confirm && (
        <p className="mt-6 rounded-lg border border-accent/40 bg-accent/5 p-4 text-sm text-accent">
          ⚠ CONFIRM: {caseStudy.confirm}
        </p>
      )}

      <div className="mt-10 space-y-8">
        {sections.map(({ key, label }) => (
          <div key={label}>
            <h2 className="font-serif text-lg text-ink">{label}</h2>
            <p className="mt-2 text-muted">{caseStudy[key] as string}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
