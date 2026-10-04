import { testimonials } from "@/content/site";
import { Reveal } from "../Reveal";

const cardStyles = [
  "bg-white -rotate-1",
  "bg-sky/50 rotate-1 lg:translate-y-8",
  "bg-sun/60 -rotate-[0.5deg]",
];

export function Testimonials() {
  return (
    <section aria-labelledby="testimonials-heading" className="pb-28 sm:pb-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <h2
            id="testimonials-heading"
            className="mb-14 text-center font-display font-soft text-3xl sm:text-4xl"
          >
            Don&rsquo;t take <span className="italic font-wonk">our</span> word for it
          </h2>
        </Reveal>
        <ul className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 0.1}>
              <figure
                className={`flex h-full flex-col rounded-3xl border border-line/70 p-8 ${cardStyles[i % cardStyles.length]}`}
              >
                <span aria-hidden="true" className="font-display text-6xl leading-none text-accent">
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 font-display font-soft text-xl leading-snug">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-ink/10 pt-5">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-ink-soft">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
