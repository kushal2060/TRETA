/** TETRA wordmark: four tiles for the four founders, one of them tilted. */
export function Logo({ inverted = false }: { inverted?: boolean }) {
  const tile = inverted ? "bg-paper" : "bg-ink";
  return (
    <span className="flex items-center gap-2.5">
      <span aria-hidden="true" className="grid grid-cols-2 gap-[3px]">
        <span className={`h-2 w-2 rounded-[2px] ${tile}`} />
        <span className={`h-2 w-2 rounded-[2px] ${tile}`} />
        <span className={`h-2 w-2 rounded-[2px] ${tile}`} />
        <span className="h-2 w-2 rotate-12 rounded-[2px] bg-accent" />
      </span>
      <span
        className={`font-display font-soft text-xl font-semibold tracking-[0.08em] ${
          inverted ? "text-paper" : "text-ink"
        }`}
      >
        TETRA
      </span>
    </span>
  );
}
