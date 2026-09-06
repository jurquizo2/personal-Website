export interface Theme {
  slug: string;
  number: string;
  title: string;
  grounding: string;
  positioning: string;
}

export const themes: Theme[] = [
  {
    slug: "technology-ai-for-development",
    number: "01",
    title: "Technology & AI for Development",
    grounding: "“The Wrong Toolkit: Why Digital Transformation Is Failing Cooperatives in Latin America.” Agricultural cooperatives need infrastructure-first logic — a dirt road is the real blocker, not the absence of a dashboard — and where digitization does make sense, it should be embedded (IoT sensors, automatic data capture) rather than dependent on staff who don't have the literacy or turnover-proof capacity to run software.",
    positioning: "Technology is not transformation. Transformation happens when technology is built for the infrastructure and capacity that actually exist — not the infrastructure a project design assumes.",
  },
  {
    slug: "inclusive-finance-economic-opportunity",
    number: "02",
    title: "Inclusive Finance & Economic Opportunity",
    grounding: "“Designing Financial Services for a Market That Lives in Two Worlds” (a four-segment framework for immigrant financial behavior — Provider, In-Betweener, Striver, Mainstreamed) and “Decoding Attrition and Building Long-Term Value in Microfinance.”",
    positioning: "Segmentation by income misses the behavioral variable that actually predicts financial decisions: where someone believes their future is rooted.",
  },
  {
    slug: "markets-behavior-human-centered-design",
    number: "03",
    title: "Markets, Behavior & Human-Centered Design",
    grounding: "The same two-worlds framework, plus “Inclusive Savings: Design Lessons from Underserved Markets” and “Research Agenda for Customer-Centric Financial Inclusion.”",
    positioning: "Trust in a financial product is not built through branding. It's built through cultural familiarity, language, and a customer's sense of control — the same lesson from retail banking in Lima in 1996 and from microfinance today.",
  },
  {
    slug: "climate-conservation-finance",
    number: "04",
    title: "Climate & Conservation Finance",
    grounding: "“Five Strategic Lines to Mobilize Climate Finance in Developing Economies” (facilitate current pipeline, support enabling conditions, ensure equitable access, create new pipeline, develop non-traditional funding sources) and “Emerging Climate Finance Models Enabled by Digitalization.”",
    positioning: "Climate finance's real gap isn't capital — it's the enabling infrastructure, from data systems to guarantee funds, that makes capital investable in the first place. And the populations most exposed to climate risk have the least access to the capital meant to protect them.",
  },
  {
    slug: "digital-infrastructure-governance",
    number: "05",
    title: "Digital Infrastructure & Governance",
    grounding: "“Who Governs Peru's Digital Payment Revolution?” — digital-wallet adoption jumped from 2% to 34% of retail transactions since 2014, yet 82% of transactions stay within a single platform, and no single regulator owns interoperability across four dominant banks, fintechs, and a central bank that is simultaneously regulator, supervisor, and innovator.",
    positioning: "Adoption is not the same as an open system. Peru's digital-payments growth is real — but without a clear governance owner for interoperability, network effects will concentrate benefits among the institutions that already have scale, not expand access.",
  },
];

export const closingLine =
  "I don't write about these issues from theory. I managed the guarantee structures, assessed the fintechs, and sat in the rooms where the $38M got allocated.";
