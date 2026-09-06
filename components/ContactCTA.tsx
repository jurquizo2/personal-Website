export default function ContactCTA() {
  return (
    <section id="contact" className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-6 py-20 text-center">
        <h2 className="font-serif text-3xl md:text-4xl">Let's talk</h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/70">
          Advisory, board, or project inquiries — reach out directly.
        </p>
        <a
          href="mailto:urquizojacqui@gmail.com"
          className="mt-8 inline-block rounded-full bg-paper px-6 py-3 text-sm text-ink transition hover:bg-paper/90"
        >
          urquizojacqui@gmail.com
        </a>
      </div>
    </section>
  );
}
