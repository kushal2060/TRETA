import { process, services } from "@/content/site";
import { Reveal } from "../Reveal";
import { ServiceIcon } from "../ServiceIcon";
import { Eyebrow, SectionHeading } from "../ui";

export function Services() {
  return (
    <section id="services" className="bg-paper-2/60 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow index="02">What we do</Eyebrow>
            <SectionHeading>
              From first sketch to <span className="italic font-wonk text-accent">five years</span>{" "}
              after launch.
            </SectionHeading>
          </Reveal>
          <Reveal delay={0.1} className="max-w-sm text-lg leading-relaxed text-ink-soft">
            Pick one service or hand us the whole thing. Either way, you get the same small team
            from start to finish.
          </Reveal>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 3) * 0.08}
              className="group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-white"
            >
              <span className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-paper-2 text-ink transition-colors duration-300 group-hover:bg-accent">
                <ServiceIcon name={s.icon} />
              </span>
              <h3 className="mb-3 font-display font-soft text-2xl">{s.title}</h3>
              <p className="mb-6 leading-relaxed text-ink-soft">{s.blurb}</p>
              <ul className="mt-auto flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-line px-3 py-1 text-xs text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-20 rounded-[2rem] bg-ink p-8 text-paper sm:p-12">
          <h3 className="mb-10 font-display font-soft text-3xl sm:text-4xl">
            How a project with us{" "}
            <span className="italic font-wonk text-sun">actually</span> goes
          </h3>
          <ol className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            {process.map((p) => (
              <li key={p.step} className="relative border-t border-paper/20 pt-6">
                <span className="font-mono text-sm text-sun">{p.step}</span>
                <h4 className="mt-2 mb-2 font-display font-soft text-2xl">{p.title}</h4>
                <p className="leading-relaxed text-paper/70">{p.body}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
