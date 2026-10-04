"use client";

import { motion, useReducedMotion } from "motion/react";
import { site } from "@/content/site";
import { Arrow, Squiggle } from "../ui";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  const float = (distance: number, duration: number) =>
    reduceMotion
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: { duration, repeat: Infinity, ease: "easeInOut" as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20 sm:pt-36 lg:pb-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7">
          <p className="animate-rise mb-8 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper/70 px-4 py-1.5 text-sm text-ink-soft">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-moss opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
            </span>
            {site.availability}
          </p>

          <h1
            style={{ animationDelay: "0.08s" }}
            className="animate-rise font-display font-soft text-[2.75rem] leading-[1.02] tracking-tight text-balance sm:text-6xl lg:text-7xl xl:text-[5.25rem]"
          >
            We build the software your business{" "}
            <span className="relative inline-block whitespace-nowrap italic font-wonk text-accent">
              runs on.
              <Squiggle className="text-ink/80" />
            </span>
          </h1>

          <p
            style={{ animationDelay: "0.18s" }}
            className="animate-rise mt-8 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl"
          >
            {site.name} is a four-person studio of engineers and designers. We design, build
            and look after websites, mobile apps and custom software, and we pick up the phone
            when you call.
          </p>

          <div
            style={{ animationDelay: "0.28s" }}
            className="animate-rise mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-4 text-base font-medium text-paper transition-transform hover:-translate-y-0.5"
            >
              Tell us about your project
              <Arrow className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-7 py-4 text-base font-medium transition-colors hover:border-ink"
            >
              See our work
            </a>
            <span className="hidden items-center gap-2 pl-2 font-display text-lg italic text-ink-soft font-wonk xl:flex">
              <svg aria-hidden="true" viewBox="0 0 60 30" className="h-6 w-12 -scale-x-100 text-ink-soft">
                <path
                  d="M2 22c14 6 32 4 44-8M46 14l-1 9M46 14l-9 1"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
              we reply within a day
            </span>
          </div>
        </div>

        {/* Collage of little "work in progress" artifacts */}
        <div className="relative mx-auto h-[420px] w-full max-w-md lg:col-span-5 lg:h-[500px] lg:max-w-none">
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: -8, y: 40 }}
            animate={{ opacity: 1, rotate: -4, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.3 }}
            className="absolute left-0 top-4 w-[82%]"
          >
            <motion.div
              {...float(8, 7)}
              className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_60px_-30px_rgba(26,23,20,0.35)]"
            >
              <div className="flex items-center gap-1.5 border-b border-line/70 px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-sun" />
                <span className="h-2.5 w-2.5 rounded-full bg-moss/70" />
                <span className="ml-3 h-5 flex-1 rounded-md bg-paper-2/70" />
              </div>
              <div className="grid grid-cols-5 gap-4 p-5">
                <div className="col-span-3 space-y-3">
                  <div className="h-3 w-3/4 rounded bg-ink/80" />
                  <div className="h-2 w-full rounded bg-ink/15" />
                  <div className="h-2 w-5/6 rounded bg-ink/15" />
                  <div className="mt-4 h-7 w-24 rounded-full bg-accent" />
                </div>
                <div className="col-span-2 rounded-xl bg-sky/60 p-3">
                  <div className="flex h-full items-end gap-1.5">
                    {[40, 65, 50, 85, 70].map((h, i) => (
                      <div key={i} className="flex-1 rounded-sm bg-ink/70" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                <div className="col-span-5 grid grid-cols-3 gap-3">
                  {["bg-paper-2", "bg-sun/50", "bg-paper-2"].map((c, i) => (
                    <div key={i} className={`h-14 rounded-lg ${c}`} />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, rotate: 12, y: 60 }}
            animate={{ opacity: 1, rotate: 6, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.45 }}
            className="absolute bottom-0 right-2 w-[38%] min-w-[140px]"
          >
            <motion.div
              {...float(10, 6)}
              className="rounded-[2rem] border-[6px] border-ink bg-ink p-1 shadow-[0_30px_60px_-25px_rgba(26,23,20,0.5)]"
            >
              <div className="space-y-2.5 rounded-[1.5rem] bg-paper p-3 pt-6">
                <div className="mx-auto mb-3 h-1.5 w-10 rounded-full bg-ink/20" />
                <div className="h-20 rounded-xl bg-accent/90" />
                <div className="h-2 w-3/4 rounded bg-ink/70" />
                <div className="h-2 w-1/2 rounded bg-ink/20" />
                <div className="flex gap-2 pt-1">
                  <div className="h-10 flex-1 rounded-lg bg-moss/80" />
                  <div className="h-10 flex-1 rounded-lg bg-sun" />
                </div>
                <div className="h-8 rounded-full bg-ink" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: -6 }}
            transition={{ duration: 0.7, ease, delay: 0.7 }}
            className="absolute bottom-10 left-2 w-44 bg-sun p-4 shadow-[0_20px_40px_-20px_rgba(26,23,20,0.45)] sm:w-48"
          >
            <span
              aria-hidden="true"
              className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-3 bg-paper/70"
            />
            <p className="font-display text-lg leading-snug italic font-wonk">
              Demo every Friday. No surprises.
            </p>
          </motion.div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease, delay: 1 }}
            className="absolute right-0 top-0 space-y-2 text-sm sm:-right-2"
          >
            <p className="rounded-2xl rounded-br-sm bg-ink px-4 py-2 text-paper shadow-lg">
              Can v2 ship by Friday?
            </p>
            <p className="ml-6 w-fit rounded-2xl rounded-bl-sm border border-line bg-white px-4 py-2 shadow-lg">
              Yep. Staging link tonight.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
