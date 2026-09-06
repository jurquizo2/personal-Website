import { advisoryFraming, capabilities } from "@/content/advisory";

export const metadata = { title: "Advisory — Jacqueline Urquizo" };

export default function AdvisoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Advisory & Board Perspective</h1>
      <p className="mt-6 text-lg text-muted">{advisoryFraming}</p>
      <div className="mt-10 flex flex-wrap gap-3">
        {capabilities.map((capability) => (
          <span
            key={capability}
            className="rounded-full border border-ink/15 px-4 py-2 text-sm text-ink"
          >
            {capability}
          </span>
        ))}
      </div>
    </div>
  );
}
