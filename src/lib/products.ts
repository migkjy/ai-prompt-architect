export interface Product {
  slug: string;
  title: string;
  author: string;
  book: string;
  price: number;
  description: string;
  features: string[];
  checkoutUrl: string;
}

export const products: Product[] = [
  {
    slug: "launch-formula",
    title: "AI Launch Formula",
    author: "Jeff Walker",
    book: "Launch",
    price: 9.99,
    description:
      "Turn AI into your launch strategist. These prompts embed Jeff Walker's proven Product Launch Formula so AI builds pre-launch sequences, seed launches, and internal launches — not generic marketing plans.",
    features: [
      "Pre-launch sequence builder",
      "Seed launch strategy prompts",
      "Internal launch planner",
      "Launch debrief analyzer",
      "Sideways sales letter generator",
    ],
    checkoutUrl: "#checkout",
  },
  {
    slug: "sales-funnel",
    title: "AI Sales Funnel Architecture",
    author: "Russell Brunson",
    book: "DotCom Secrets",
    price: 9.99,
    description:
      "Give AI the blueprint for high-converting sales funnels. These prompts embed Russell Brunson's DotCom Secrets framework so AI designs value ladders, funnel sequences, and offer stacks — not random landing pages.",
    features: [
      "Value ladder designer",
      "Funnel sequence architect",
      "Offer stack builder",
      "Upsell/downsell flow planner",
      "Hook-Story-Offer framework",
    ],
    checkoutUrl: "#checkout",
  },
  {
    slug: "traffic-mastery",
    title: "AI Traffic Mastery",
    author: "Russell Brunson",
    book: "Traffic Secrets",
    price: 9.99,
    description:
      "Transform AI into your traffic strategist. These prompts embed Russell Brunson's Traffic Secrets so AI identifies dream customers, builds traffic systems, and creates content distribution strategies — not vague 'post on social media' advice.",
    features: [
      "Dream 100 list builder",
      "Content distribution planner",
      "Platform-specific traffic strategies",
      "Earned vs paid traffic optimizer",
      "Audience funnel architect",
    ],
    checkoutUrl: "#checkout",
  },
  {
    slug: "copywriting",
    title: "AI Copywriting Secrets",
    author: "Jim Edwards",
    book: "Copywriting Secrets",
    price: 9.99,
    description:
      "Install proven copywriting formulas into AI. These prompts embed Jim Edwards' Copywriting Secrets so AI writes headlines, sales letters, and email sequences using time-tested persuasion principles — not generic filler text.",
    features: [
      "Headline formula generator",
      "Sales letter architect",
      "Email sequence builder",
      "Bullet point sharpener",
      "Story-based selling prompts",
    ],
    checkoutUrl: "#checkout",
  },
  {
    slug: "expert-positioning",
    title: "AI Expert Positioning",
    author: "Russell Brunson",
    book: "Expert Secrets",
    price: 9.99,
    description:
      "Position yourself as the authority with AI. These prompts embed Russell Brunson's Expert Secrets so AI builds your origin story, creates your framework, and designs your webinar — not surface-level personal branding tips.",
    features: [
      "Origin story architect",
      "Framework builder (your unique method)",
      "Webinar script generator",
      "Belief-breaking chain builder",
      "Stack slide designer",
    ],
    checkoutUrl: "#checkout",
  },
  {
    slug: "content-strategy",
    title: "AI Content Strategy",
    author: "Joe Pulizzi",
    book: "Content Inc.",
    price: 9.99,
    description:
      "Build a content empire with AI. These prompts embed Joe Pulizzi's Content Inc. model so AI designs your content tilt, builds editorial calendars, and creates audience-building strategies — not random 'post 3x a week' plans.",
    features: [
      "Content tilt identifier",
      "Editorial calendar builder",
      "Audience-first strategy planner",
      "Content monetization pathway",
      "Platform selection optimizer",
    ],
    checkoutUrl: "#checkout",
  },
];

export const bundle = {
  slug: "bundle",
  title: "AI Prompt Architect Bundle",
  subtitle: "All 6 Prompt Packs",
  price: 49.99,
  originalPrice: 59.94,
  description:
    "Get all 6 AI Prompt Packs at a 17% discount. Install the complete framework library into your AI — from funnel architecture to copywriting, traffic to launches.",
  checkoutUrl: "#checkout",
};
