import { howIThink } from "@/content/howIThink";

export const metadata = { title: "How I Think — Jacqueline Urquizo" };

export default function HowIThinkPage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">How I Think</h1>
      <div className="mt-10 space-y-8">
        {howIThink.map((step, i) => (
          <div key={step.step} className="flex gap-6 border-b border-ink/10 pb-8">
            <span className="font-serif text-3xl text-accent">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h2 className="font-serif text-xl text-ink">{step.step}</h2>
              <p className="mt-2 text-muted">{step.description}</p>
              <p className="mt-2 text-sm italic text-muted">{step.examples}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
