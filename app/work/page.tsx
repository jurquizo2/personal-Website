import CaseStudyCard from "@/components/CaseStudyCard";
import { caseStudies, additionalProjects } from "@/content/caseStudies";

export const metadata = { title: "Work — Jacqueline Urquizo" };

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Selected Work</h1>
      <p className="mt-4 max-w-2xl text-lg text-muted">
        The Challenge → The Insight → The Strategy → The Implementation → The Result → The Lesson.
      </p>
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>

      <h2 className="mt-20 font-serif text-2xl text-ink">Additional engagements</h2>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {additionalProjects.map((project) => (
          <div key={project.client} className="rounded-xl border border-ink/10 p-4">
            <p className="font-medium text-ink">
              {project.client} <span className="text-muted">· {project.country}</span>
            </p>
            <p className="text-sm text-muted">{project.note}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
