import Link from "next/link";

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:pt-28">
      <p className="text-sm uppercase tracking-[0.2em] text-accent">Jacqueline Urquizo</p>
      <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-ink md:text-6xl">
        Technology, Finance & Development Strategist
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-muted">
        Applying technology, data, finance and AI to expand economic opportunity and accelerate
        sustainable development in emerging markets.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link
          href="/work"
          className="rounded-full bg-ink px-6 py-3 text-sm text-paper transition hover:bg-ink/90"
        >
          Explore my work
        </Link>
        <Link
          href="/thinking"
          className="rounded-full border border-ink px-6 py-3 text-sm text-ink transition hover:bg-ink hover:text-paper"
        >
          Read my thinking
        </Link>
      </div>
    </section>
  );
}
