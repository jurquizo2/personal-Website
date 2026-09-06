import ThemeCard from "@/components/ThemeCard";
import { themes } from "@/content/themes";

export const metadata = { title: "Thinking — Jacqueline Urquizo" };

export default function ThinkingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="font-serif text-4xl text-ink">Thinking at the intersection of technology and development</h1>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {themes.map((theme) => (
          <ThemeCard key={theme.slug} theme={theme} />
        ))}
      </div>
    </div>
  );
}
