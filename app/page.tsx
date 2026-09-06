import Hero from "@/components/Hero";
import StatBar from "@/components/StatBar";
import Timeline from "@/components/Timeline";
import CaseStudyCard from "@/components/CaseStudyCard";
import ThemeCard from "@/components/ThemeCard";
import ContactCTA from "@/components/ContactCTA";
import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";
import { themes } from "@/content/themes";
import { howIThink } from "@/content/howIThink";
import { advisoryFraming } from "@/content/advisory";

export default function HomePage() {
  const featured = caseStudies.filter((c) => c.featured);

  return (
    <>
      <Hero />
      <StatBar />
      <Timeline />

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="font-serif text-2xl text-ink md:text-3xl">
          Where technology meets development.
        </h2>
        <p className="mt-6 text-lg text-muted">
          Every stage of this career added a capability the next one needed. Markets taught product
          design. Product design taught financial systems. Financial systems taught how to build and
          run an advisory practice. That practice taught how to design programs at the scale
          development finance requires. Now the question is how technology and AI make all of it
          work better — for the SME, the smallholder farmer, and the financial institution trying to
          reach them.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-3xl text-ink">Selected Work</h2>
          <Link href="/work" className="text-sm text-accent">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {featured.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-3xl text-ink">Thought Leadership</h2>
          <Link href="/thinking" className="text-sm text-accent">
            View all →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {themes.slice(0, 3).map((theme) => (
            <ThemeCard key={theme.slug} theme={theme} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-3xl text-ink">How I Think</h2>
          <Link href="/how-i-think" className="text-sm text-accent">
            Full framework →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-5">
          {howIThink.map((step) => (
            <div key={step.step} className="rounded-2xl border border-ink/10 p-5">
              <h3 className="font-serif text-lg text-ink">{step.step}</h3>
              <p className="mt-2 text-sm text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="font-serif text-3xl text-ink">Advisory & Board Perspective</h2>
        <p className="mt-6 text-lg text-muted">{advisoryFraming}</p>
        <Link href="/advisory" className="mt-6 inline-block text-sm text-accent">
          More on advisory work →
        </Link>
      </section>

      <ContactCTA />
    </>
  );
}
