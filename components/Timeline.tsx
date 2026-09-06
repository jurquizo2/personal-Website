import { timeline } from "@/content/timeline";

export default function Timeline() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="font-serif text-3xl text-ink">One career. Five transformations.</h2>
      <div className="mt-10 grid gap-6 md:grid-cols-5">
        {timeline.map((stage) => (
          <a
            key={stage.id}
            href={`/about#${stage.id}`}
            className="group flex flex-col gap-3 rounded-2xl border border-ink/10 p-5 transition hover:border-accent hover:shadow-sm"
          >
            <span className="font-serif text-2xl text-accent">{stage.number}</span>
            <span className="font-medium text-ink">{stage.title}</span>
            <span className="text-xs uppercase tracking-wide text-muted">{stage.years}</span>
            <p className="text-sm text-muted">{stage.subtitle}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
