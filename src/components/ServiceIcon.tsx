import type { ReactNode } from "react";
import type { ServiceIcon as IconName } from "@/content/site";

const paths: Record<IconName, ReactNode> = {
  web: (
    <>
      <rect x="3" y="5" width="26" height="20" rx="3" />
      <path d="M3 10h26M12 16l-3 3 3 3M20 16l3 3-3 3" />
    </>
  ),
  mobile: (
    <>
      <rect x="9" y="3" width="14" height="26" rx="3" />
      <path d="M14 25h4" />
    </>
  ),
  design: (
    <>
      <path d="M6 26l3-9L21 5l6 6-12 12z" />
      <path d="M18 8l6 6M6 26l7-3" />
    </>
  ),
  custom: (
    <>
      <rect x="4" y="4" width="10" height="10" rx="2" />
      <rect x="18" y="18" width="10" height="10" rx="2" />
      <path d="M14 9h7a2 2 0 012 2v7M18 23h-7a2 2 0 01-2-2v-7" />
    </>
  ),
  cloud: (
    <>
      <path d="M9 24a6 6 0 01-.6-12A8 8 0 0124 11a6.5 6.5 0 01-.5 13z" />
      <path d="M16 15v7M13 19l3 3 3-3" />
    </>
  ),
  support: (
    <>
      <path d="M16 28s-11-6.5-11-14a6 6 0 0111-3.3A6 6 0 0127 14c0 7.5-11 14-11 14z" />
      <path d="M11 15h3l2-3 2 6 2-3h2" />
    </>
  ),
};

export function ServiceIcon({ name }: { name: IconName }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 32 32"
      className="h-8 w-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name]}
    </svg>
  );
}
