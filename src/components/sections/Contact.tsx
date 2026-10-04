import { site } from "@/content/site";
import { Reveal } from "../Reveal";
import { Arrow, Squiggle } from "../ui";

const mailto = `mailto:${site.email}?subject=${encodeURIComponent("New project enquiry")}`;

const nextSteps = [
  "We reply within one working day.",
  "A free 30-minute call to understand what you need.",
  "A clear proposal with scope, timeline and a fixed price.",
];

export function Contact() {
  return (
    <section id="contact" className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-ink px-5 py-24 text-paper sm:px-8 sm:py-32">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-accent/25 blur-3xl"
        />
        <div className="relative mx-auto grid max-w-7xl gap-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <p className="mb-6 font-mono text-xs uppercase tracking-[0.18em] text-sun">
              04 / Let&rsquo;s talk
            </p>
            <h2 className="font-display font-soft text-5xl leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Got an idea? We&rsquo;d love to{" "}
              <span className="relative inline-block italic font-wonk text-sun">
                hear it.
                <Squiggle className="text-accent" />
              </span>
            </h2>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-paper/70">
              Half-formed is fine. Tell us what you&rsquo;re trying to do and we&rsquo;ll tell you
              honestly how we&rsquo;d approach it, even if the answer is &ldquo;you don&rsquo;t
              need us yet.&rdquo;
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href={mailto}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-medium text-ink transition-transform hover:-translate-y-0.5"
              >
                Email {site.email}
                <Arrow className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center rounded-full border border-paper/25 px-7 py-4 text-base font-medium transition-colors hover:border-paper"
              >
                Call {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-4 lg:col-start-9 lg:pt-20">
            <h3 className="mb-6 font-display font-soft text-2xl">What happens next</h3>
            <ol className="space-y-6">
              {nextSteps.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-paper/25 font-mono text-sm text-sun">
                    {i + 1}
                  </span>
                  <p className="pt-1 leading-relaxed text-paper/80">{step}</p>
                </li>
              ))}
            </ol>
            <p className="mt-10 text-sm text-paper/50">
              Based in {site.location}. Working with clients worldwide.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
