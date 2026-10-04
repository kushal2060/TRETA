// All copy and placeholder data for the landing page lives here.
// Swap these values for real content; the components only read from this file.

export const site = {
  name: "TETRA",
  description:
    "TETRA is a small studio of engineers and designers building websites, mobile apps and custom software for growing businesses.",
  email: "hello@tetra.example",
  phone: "+977 980-000-0000",
  location: "Kathmandu, Nepal",
  availability: "Booking new projects for December",
} as const;

export const nav = [
  { label: "Who we are", href: "#about" },
  { label: "What we do", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export type ClientLogo = {
  name: string;
  style: "serif" | "mono" | "sans" | "italic";
  mark: "circle" | "square" | "triangle" | "dots" | "none";
};

export const clients: ClientLogo[] = [
  { name: "Northwind", style: "sans", mark: "triangle" },
  { name: "Halcyon Health", style: "serif", mark: "circle" },
  { name: "kestrel/pay", style: "mono", mark: "none" },
  { name: "Ombra Coffee", style: "italic", mark: "dots" },
  { name: "FIELDNOTE", style: "sans", mark: "square" },
  { name: "Lumen Labs", style: "serif", mark: "triangle" },
  { name: "parcelo", style: "mono", mark: "circle" },
  { name: "Brightside Schools", style: "italic", mark: "none" },
];

export const stats = [
  { value: "60+", label: "products shipped" },
  { value: "9 yrs", label: "building together" },
  { value: "4.9/5", label: "average client rating" },
  { value: "87%", label: "clients who come back" },
] as const;

export type TeamMember = {
  name: string;
  role: string;
  note: string;
  initials: string;
  tone: "accent" | "moss" | "sun" | "sky";
};

export const team: TeamMember[] = [
  {
    name: "Aarav Shrestha",
    role: "Engineering lead",
    note: "Has opinions about database indexes. Usually right.",
    initials: "AS",
    tone: "accent",
  },
  {
    name: "Mira Gurung",
    role: "Product designer",
    note: "Sketches every screen on paper before touching Figma.",
    initials: "MG",
    tone: "sun",
  },
  {
    name: "Rohan Karki",
    role: "Mobile & backend",
    note: "Ships Android and iOS from the same coffee.",
    initials: "RK",
    tone: "moss",
  },
  {
    name: "Sajan Tamang",
    role: "Client partner",
    note: "The one who actually answers your calls.",
    initials: "ST",
    tone: "sky",
  },
];

export const values = [
  {
    title: "Small on purpose",
    body: "You talk to the people writing your code. No account managers, no hand-offs, no telephone game.",
  },
  {
    title: "Plain talk",
    body: "Clear estimates, weekly demos and honest answers, including “we don’t think you need that.”",
  },
  {
    title: "Here after launch",
    body: "Most of our clients have been with us for years. We build things we’re happy to maintain.",
  },
] as const;

export type ServiceIcon = "web" | "mobile" | "design" | "cloud" | "custom" | "support";

export type Service = {
  icon: ServiceIcon;
  title: string;
  blurb: string;
  items: string[];
};

export const services: Service[] = [
  {
    icon: "web",
    title: "Web development",
    blurb: "Fast, search-friendly websites and web apps that your team can actually update.",
    items: ["Marketing sites", "Web apps & portals", "E-commerce", "CMS setup"],
  },
  {
    icon: "mobile",
    title: "Mobile apps",
    blurb: "iOS and Android apps that feel native, built from one codebase when it makes sense.",
    items: ["React Native", "Flutter", "App Store launch", "Push & offline"],
  },
  {
    icon: "design",
    title: "UI/UX design",
    blurb: "Research, wireframes and polished interfaces, tested with real users before we build.",
    items: ["Product discovery", "Prototypes", "Design systems", "Usability testing"],
  },
  {
    icon: "custom",
    title: "Custom software",
    blurb: "Internal tools, dashboards and integrations that replace the spreadsheet nobody trusts.",
    items: ["APIs & integrations", "Admin dashboards", "Automation", "Data pipelines"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    blurb: "Hosting, CI/CD and monitoring set up properly, so releases are boring in the best way.",
    items: ["AWS & GCP", "CI/CD pipelines", "Monitoring", "Cost tuning"],
  },
  {
    icon: "support",
    title: "Care & support",
    blurb: "Updates, security patches and small improvements on a simple monthly plan.",
    items: ["Bug fixes", "Security updates", "Performance", "Monthly reports"],
  },
];

export const process = [
  {
    step: "01",
    title: "Talk",
    body: "A free call to understand the problem, the budget and what success looks like.",
  },
  {
    step: "02",
    title: "Plan & design",
    body: "A clear scope, a fixed estimate and clickable designs before any code is written.",
  },
  {
    step: "03",
    title: "Build",
    body: "Two-week sprints with a live demo every Friday. You see progress, not status reports.",
  },
  {
    step: "04",
    title: "Launch & care",
    body: "We ship it, watch it, and stay around to fix, improve and grow it with you.",
  },
] as const;

export const projectCategories = ["All", "Web", "Mobile", "Platform"] as const;
export type ProjectCategory = Exclude<(typeof projectCategories)[number], "All">;

export type Project = {
  title: string;
  client: string;
  category: ProjectCategory;
  year: string;
  summary: string;
  result: string;
  tags: string[];
  cover: {
    kind: "browser" | "phone" | "dashboard";
    tone: "accent" | "moss" | "sun" | "sky" | "plum";
  };
};

export const projects: Project[] = [
  {
    title: "Booking platform for 40 clinics",
    client: "Halcyon Health",
    category: "Platform",
    year: "2026",
    summary:
      "Replaced phone-only booking with an online system patients and front-desk staff both use daily.",
    result: "62% fewer missed appointments",
    tags: ["Next.js", "Django", "PostgreSQL"],
    cover: { kind: "dashboard", tone: "moss" },
  },
  {
    title: "Ordering app for a coffee chain",
    client: "Ombra Coffee",
    category: "Mobile",
    year: "2025",
    summary:
      "Order-ahead and loyalty app for 12 cafes, with a barista screen that keeps the queue moving.",
    result: "31% of orders now in-app",
    tags: ["React Native", "Stripe", "Firebase"],
    cover: { kind: "phone", tone: "accent" },
  },
  {
    title: "Payments dashboard rebuild",
    client: "kestrel/pay",
    category: "Web",
    year: "2025",
    summary:
      "Redesigned and rebuilt the merchant dashboard so small shops can understand their money at a glance.",
    result: "Support tickets down 44%",
    tags: ["TypeScript", "React", "Design system"],
    cover: { kind: "browser", tone: "sky" },
  },
  {
    title: "Parent app for school groups",
    client: "Brightside Schools",
    category: "Mobile",
    year: "2024",
    summary:
      "Attendance, fees and messages in one simple app, built for parents who just want the answer.",
    result: "18k monthly active parents",
    tags: ["Flutter", "FastAPI", "AWS"],
    cover: { kind: "phone", tone: "sun" },
  },
  {
    title: "Logistics tracking portal",
    client: "parcelo",
    category: "Platform",
    year: "2024",
    summary:
      "Live shipment tracking and driver hand-off tools that replaced three spreadsheets and a group chat.",
    result: "2.5 hrs saved per dispatcher daily",
    tags: ["Go", "Maps API", "WebSockets"],
    cover: { kind: "dashboard", tone: "plum" },
  },
  {
    title: "Marketing site & CMS",
    client: "Lumen Labs",
    category: "Web",
    year: "2023",
    summary:
      "A fast, editable website the marketing team updates on their own, without filing a ticket.",
    result: "Page load 3.1s → 0.8s",
    tags: ["Next.js", "Sanity", "Vercel"],
    cover: { kind: "browser", tone: "accent" },
  },
];

export const testimonials = [
  {
    quote:
      "They told us which features to cut, and they were right. We launched two months early and under budget.",
    name: "Priya Malla",
    role: "COO, Halcyon Health",
  },
  {
    quote:
      "It honestly feels like they work here. Same Slack, same standups, and they care about our numbers.",
    name: "Daniel Okafor",
    role: "Founder, Ombra Coffee",
  },
  {
    quote:
      "Three years in and I still get a reply within the hour. That alone is worth it.",
    name: "Hannah Weiss",
    role: "Head of Product, kestrel/pay",
  },
] as const;
