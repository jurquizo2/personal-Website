export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Jacqueline Urquizo.</p>
        <p>Technology, Finance & Development Strategist</p>
      </div>
    </footer>
  );
}
