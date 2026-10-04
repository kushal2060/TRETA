import type { Project } from "@/content/site";
import { toneBg } from "./ui";

/** Abstract product mock drawn in CSS, so the page has no placeholder images to replace later. */
export function ProjectCover({ cover }: { cover: Project["cover"] }) {
  const dark = cover.tone === "moss" || cover.tone === "plum";
  const ink = dark ? "bg-paper" : "bg-ink";

  return (
    <div
      aria-hidden="true"
      className={`relative flex aspect-[16/11] items-end justify-center overflow-hidden rounded-2xl px-[8%] pt-[9%] ${toneBg[cover.tone]}`}
    >
      {cover.kind === "browser" && (
        <div className="flex h-full w-full translate-y-3 flex-col rounded-t-xl bg-white shadow-2xl transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex gap-1.5 border-b border-line/60 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="h-2.5 w-2.5 rounded-full bg-line" />
            <span className="ml-3 h-2.5 w-1/3 rounded-full bg-paper-2" />
          </div>
          <div className="flex flex-1 flex-col gap-3 p-5 sm:p-6">
            <div className="h-4 w-1/2 rounded bg-ink/80" />
            <div className="h-2.5 w-3/4 rounded bg-ink/15" />
            <div className="h-2.5 w-2/3 rounded bg-ink/15" />
            <div className={`mt-1 h-7 w-28 rounded-full ${toneBg[cover.tone]}`} />
            <div className="mt-auto grid flex-1 grid-cols-3 gap-3 pt-3">
              <div className="rounded-lg bg-paper-2" />
              <div className="rounded-lg bg-paper-2" />
              <div className="rounded-lg bg-sun/60" />
            </div>
          </div>
        </div>
      )}

      {cover.kind === "phone" && (
        <div className="flex h-full translate-y-[14%] items-start gap-[6%] transition-transform duration-500 group-hover:translate-y-[8%]">
          {[0, 1].map((i) => (
            <div
              key={i}
              className={`flex h-full w-32 flex-col rounded-[1.75rem] border-[5px] border-ink bg-paper p-3 shadow-2xl sm:w-40 ${
                i === 1 ? "mt-[12%]" : ""
              }`}
            >
              <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-ink/20" />
              <div className={`mb-3 h-[34%] rounded-xl ${i === 0 ? "bg-ink/80" : "bg-moss/70"}`} />
              <div className="mb-2 h-2 w-3/4 rounded bg-ink/60" />
              <div className="mb-3 h-2 w-1/2 rounded bg-ink/20" />
              <div className="flex-1 rounded-xl bg-paper-2" />
            </div>
          ))}
        </div>
      )}

      {cover.kind === "dashboard" && (
        <div className="grid h-full w-full translate-y-3 grid-cols-4 gap-3 rounded-t-xl bg-white p-4 shadow-2xl transition-transform duration-500 group-hover:translate-y-0">
          <div className="col-span-1 space-y-3 rounded-lg bg-paper-2 p-3">
            <div className={`mb-4 h-3 w-3 rounded ${toneBg[cover.tone]}`} />
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="h-2 rounded bg-ink/25" />
            ))}
          </div>
          <div className="col-span-3 flex flex-col gap-3">
            <div className="grid grid-cols-3 gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="space-y-2 rounded-lg bg-paper-2 p-3">
                  <div className="h-1.5 w-2/3 rounded bg-ink/20" />
                  <div className={`h-3 w-1/2 rounded ${i === 0 ? ink : "bg-ink/40"}`} />
                </div>
              ))}
            </div>
            <div className="flex flex-1 items-end gap-1.5 rounded-lg bg-paper-2 p-3">
              {[30, 55, 40, 70, 60, 85, 75, 95, 80].map((h, i) => (
                <div
                  key={i}
                  className={`flex-1 rounded-sm ${toneBg[cover.tone]}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
