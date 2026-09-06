import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";

export default function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Link
      href={`/work/${caseStudy.slug}`}
      className="flex flex-col gap-3 rounded-2xl border border-ink/10 p-6 transition hover:border-accent hover:shadow-sm"
    >
      <span className="text-xs uppercase tracking-wide text-accent">{caseStudy.org}</span>
      <h3 className="font-serif text-xl text-ink">{caseStudy.title}</h3>
      <p className="text-sm text-muted">{caseStudy.result}</p>
      {caseStudy.confirm && (
        <span className="text-xs text-accent">⚠ figure pending confirmation</span>
      )}
    </Link>
  );
}
