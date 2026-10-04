import { clients, stats, type ClientLogo } from "@/content/site";
import { Reveal } from "../Reveal";

const styleClass: Record<ClientLogo["style"], string> = {
  serif: "font-display font-semibold",
  italic: "font-display italic font-wonk",
  mono: "font-mono font-medium tracking-tight",
  sans: "font-sans font-bold tracking-tight",
};

function Mark({ mark }: { mark: ClientLogo["mark"] }) {
  switch (mark) {
    case "circle":
      return <span className="h-4 w-4 rounded-full border-[3px] border-current" />;
    case "square":
      return <span className="h-3.5 w-3.5 rotate-45 bg-current" />;
    case "triangle":
      return (
        <svg viewBox="0 0 16 16" className="h-4 w-4">
          <path d="M8 2l7 12H1z" fill="currentColor" />
        </svg>
      );
    case "dots":
      return (
        <span className="flex gap-0.5">
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
        </span>
      );
    default:
      return null;
  }
}

function LogoRow({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center gap-16 pr-16">
      {clients.map((c) => (
        <li
          key={c.name}
          className={`flex items-center gap-2.5 whitespace-nowrap text-2xl text-ink/55 ${styleClass[c.style]}`}
        >
          <span aria-hidden="true" className="flex items-center">
            <Mark mark={c.mark} />
          </span>
          {c.name}
        </li>
      ))}
    </ul>
  );
}

export function TrustedBy() {
  return (
    <section aria-labelledby="trusted-heading" className="border-y border-line/80 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <h2
          id="trusted-heading"
          className="mb-10 text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-soft"
        >
          Trusted by teams who&rsquo;d rather not think about tech
        </h2>
      </div>

      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex animate-marquee hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>

      <div className="mx-auto mt-14 max-w-7xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} className="flex flex-col items-center text-center">
              <dt className="order-2 mt-1 text-sm text-ink-soft">{s.label}</dt>
              <dd className="order-1 font-display font-soft text-5xl tracking-tight">{s.value}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
