import { site, team, values } from "@/content/site";
import { Reveal } from "../Reveal";
import { Eyebrow, SectionHeading, toneBg, toneText } from "../ui";

const tilts = ["-rotate-2", "rotate-1", "-rotate-1", "rotate-2"];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <Eyebrow index="01">Who we are</Eyebrow>
            <SectionHeading>
              Tetra means <span className="italic font-wonk text-accent">four.</span> That&rsquo;s
              how many of us started this.
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-ink-soft lg:col-span-6 lg:col-start-7 lg:pt-12">
            <p>
              {site.name} began around a kitchen table with four engineers who were tired of
              watching good businesses get sold bloated software. We wanted to build it the way
              we&rsquo;d want it built for ourselves: simple, solid, and explained in plain words.
            </p>
            <p>
              We&rsquo;ve grown a little since then, but we&rsquo;ve kept the team small on
              purpose. When you work with us, you work with the people who design and write your
              product. Not a sales team, and not whoever happens to be free this week.
            </p>
          </Reveal>
        </div>

        <ul className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((person, i) => (
            <Reveal as="li" key={person.name} delay={i * 0.08}>
              <div
                className={`h-full rounded-3xl border border-line bg-white/60 p-6 transition-[rotate] duration-300 hover:rotate-0 ${tilts[i % tilts.length]}`}
              >
                <div
                  aria-hidden="true"
                  className={`mb-6 flex aspect-[4/3] items-end rounded-2xl p-4 ${toneBg[person.tone]} ${toneText[person.tone]}`}
                >
                  <span className="font-display font-wonk text-6xl italic leading-none">
                    {person.initials}
                  </span>
                </div>
                <p className="font-display font-soft text-xl">{person.name}</p>
                <p className="mb-3 font-mono text-xs uppercase tracking-wider text-accent-deep">
                  {person.role}
                </p>
                <p className="text-sm leading-relaxed text-ink-soft">{person.note}</p>
              </div>
            </Reveal>
          ))}
        </ul>

        <div className="mt-20 grid gap-10 border-t border-line pt-12 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <h3 className="mb-3 font-display font-soft text-2xl">{v.title}</h3>
              <p className="leading-relaxed text-ink-soft">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
