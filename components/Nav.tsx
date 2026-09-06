import Link from "next/link";

const links = [
  { href: "/work", label: "Work" },
  { href: "/thinking", label: "Thinking" },
  { href: "/how-i-think", label: "How I Think" },
  { href: "/advisory", label: "Advisory" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="font-serif text-lg tracking-tight text-ink">
          Jacqueline Urquizo
        </Link>
        <nav className="hidden gap-8 text-sm text-ink/80 md:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#contact"
          className="rounded-full border border-ink px-4 py-1.5 text-sm text-ink transition hover:bg-ink hover:text-paper"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}
