import type { ReactNode } from "react";

/** Hand-drawn underline that sits beneath a highlighted word. */
export function Squiggle({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 18"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -bottom-2 left-0 h-[0.35em] w-full ${className}`}
    >
      <path
        d="M3 12c22-7 41-9 62-5s34 7 55 2 38-9 60-5 26 5 37 3"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Small mono label used above section headings, e.g. "02 / What we do". */
export function Eyebrow({ index, children }: { index: string; children: ReactNode }) {
  return (
    <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-ink-soft">
      <span className="text-accent-deep">{index}</span>
      <span aria-hidden="true" className="h-px w-8 bg-line" />
      {children}
    </p>
  );
}

export function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2 className="font-display font-soft text-4xl leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
      {children}
    </h2>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className={`h-4 w-4 ${className}`}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const toneBg = {
  accent: "bg-accent",
  moss: "bg-moss",
  sun: "bg-sun",
  sky: "bg-sky",
  plum: "bg-plum",
} as const;

export const toneText = {
  accent: "text-ink",
  moss: "text-paper",
  sun: "text-ink",
  sky: "text-ink",
  plum: "text-paper",
} as const;
