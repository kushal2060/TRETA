"use client";

import { AnimatePresence, LayoutGroup, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { projectCategories, projects } from "@/content/site";
import { ProjectCover } from "../ProjectCover";
import { Reveal } from "../Reveal";
import { Eyebrow, SectionHeading } from "../ui";

type Filter = (typeof projectCategories)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");
  const reduceMotion = useReducedMotion();
  const visible = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal className="max-w-2xl">
            <Eyebrow index="03">Our projects</Eyebrow>
            <SectionHeading>
              A few things we&rsquo;re <span className="italic font-wonk text-accent">proud</span>{" "}
              of.
            </SectionHeading>
          </Reveal>

          <Reveal delay={0.1}>
            <LayoutGroup>
              <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
                {projectCategories.map((c) => {
                  const active = c === filter;
                  return (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setFilter(c)}
                      className={`relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors ${
                        active ? "text-paper" : "text-ink-soft hover:text-ink"
                      }`}
                    >
                      {active && (
                        <motion.span
                          layoutId="project-filter"
                          className="absolute inset-0 rounded-full bg-ink"
                          transition={{ type: "spring", stiffness: 400, damping: 32 }}
                        />
                      )}
                      <span className="relative">{c}</span>
                    </button>
                  );
                })}
              </div>
            </LayoutGroup>
          </Reveal>
        </div>

        <motion.ul layout={!reduceMotion} className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((p) => (
              <motion.li
                key={p.title}
                layout={!reduceMotion}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <article>
                  <ProjectCover cover={p.cover} />
                  <div className="mt-6 flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-ink-soft">
                    <span>{p.client}</span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-soft" />
                    <span>{p.category}</span>
                    <span aria-hidden="true" className="h-1 w-1 rounded-full bg-ink-soft" />
                    <span>{p.year}</span>
                  </div>
                  <h3 className="mt-3 font-display font-soft text-2xl sm:text-3xl">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.summary}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-3">
                    <span className="rounded-full bg-sun px-3 py-1 text-sm font-medium">
                      {p.result}
                    </span>
                    {p.tags.map((t) => (
                      <span key={t} className="text-sm text-ink-soft">
                        #{t.toLowerCase().replace(/\s+/g, "")}
                      </span>
                    ))}
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      </div>
    </section>
  );
}
