import { stats } from "@/content/stats";

export default function StatBar() {
  return (
    <section className="border-y border-ink/10 bg-ink/[0.03]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-5">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <span className="font-serif text-3xl text-ink md:text-4xl">{stat.value}</span>
            <span className="text-sm text-muted">{stat.label}</span>
            <span className="h-1 w-10 rounded-full bg-accent" aria-hidden />
          </div>
        ))}
      </div>
    </section>
  );
}
