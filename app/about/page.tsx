import { timeline } from "@/content/timeline";
import { aboutIntro, education, professionalDevelopment, bilingualNote } from "@/content/about";

export const metadata = { title: "About — Jacqueline Urquizo" };

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">About</h1>
      <p className="mt-6 text-xl text-ink">{aboutIntro}</p>

      <div className="mt-14 space-y-10">
        {timeline.map((stage) => (
          <div key={stage.id} id={stage.id} className="scroll-mt-24 border-b border-ink/10 pb-8">
            <p className="font-serif text-2xl text-accent">{stage.number}</p>
            <h2 className="mt-1 font-serif text-xl text-ink">{stage.title}</h2>
            <p className="text-sm uppercase tracking-wide text-muted">{stage.years}</p>
            <p className="mt-3 text-muted">{stage.body}</p>
            <p className="mt-3 text-sm italic text-ink">“{stage.narrativeLine}”</p>
          </div>
        ))}
      </div>

      <h2 className="mt-16 font-serif text-2xl text-ink">Education</h2>
      <ul className="mt-4 space-y-2">
        {education.map((item) => (
          <li key={item.degree} className="text-muted">
            <span className="text-ink">{item.degree}</span> — {item.institution}
            {item.note ? ` (${item.note})` : ""}
          </li>
        ))}
      </ul>

      <h2 className="mt-10 font-serif text-2xl text-ink">Recent professional development</h2>
      <ul className="mt-4 space-y-2">
        {professionalDevelopment.map((item) => (
          <li key={item.program} className="text-muted">
            <span className="text-ink">{item.program}</span> — {item.institution} ({item.year})
          </li>
        ))}
      </ul>

      <p className="mt-10 text-ink">{bilingualNote}</p>

      <p className="mt-10 text-sm text-muted">
        {/* TODO: link to a hosted CV/resume file once one is added to the project */}
        Download CV — coming soon
      </p>
    </div>
  );
}
