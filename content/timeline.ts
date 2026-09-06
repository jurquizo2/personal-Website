export interface TimelineStage {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  years: string;
  body: string;
  narrativeLine: string;
}

export const timeline: TimelineStage[] = [
  {
    id: "understanding-markets",
    number: "01",
    title: "Understanding Markets",
    subtitle: "Marketing, consumer behavior & financial products",
    years: "1994–2003 · Peru",
    body: "Five vantage points on the same question — how do consumers actually decide, and how do you build a product or brand around that reality rather than around assumptions. Roles at La Tinka, Interbank, Banco Orión, BellSouth Yellow Pages, and PST Marketing Strategy Consulting (advising on the Caja Trujillo brand launch). This is also where the retail-banking side of financial products entered the work directly, through Interbank's savings products, before “financial inclusion” was a category with that name.",
    narrativeLine: "Before working on development, I learned how markets actually work.",
  },
  {
    id: "expanding-access",
    number: "02",
    title: "Expanding Access",
    subtitle: "Financial inclusion, market intelligence & product innovation",
    years: "2003–2011 · Accion International",
    body: "Senior Director. The scale here is the story: technical assistance to 30+ financial institutions across 13+ emerging markets — Citi, ABN AMRO Brazil, Banamex, Compartamos, Mibanco Peru, Credife/Banco Pichincha Ecuador, the National Bank of Egypt, and others. Built the frameworks, manuals, and predictive models for customer attrition and credit performance, deployed across Ecuador, Mexico, El Salvador, Guatemala, and Bolivia, that financial institutions used to serve markets they'd previously treated as unprofitable or unreachable.",
    narrativeLine: "I learned how financial systems can expand opportunity — and where they fail the people they're supposed to serve.",
  },
  {
    id: "building-solutions",
    number: "03",
    title: "Building Solutions",
    subtitle: "Consulting, analytics & digital transformation",
    years: "2012–2020 · Sygoes Consulting",
    body: "The transition from advising inside organizations to building and running an independent practice. Sygoes (no longer active) delivered 20+ engagements across Latin America for banks, non-bank financial institutions, impact investors, and development finance institutions — where market intelligence, product design, predictive analytics, and early digital-transformation work came together as a single practice.",
    narrativeLine: "Building Sygoes meant learning to hold the whole problem — strategy, product, technology, and the client relationship — at once.",
  },
  {
    id: "scaling-development",
    number: "04",
    title: "Scaling Development",
    subtitle: "International development, blended finance & climate",
    years: "2014–2024 · The SEEP Network + USAID/Peru",
    body: "The move from advising individual institutions to designing and managing systems. SEEP (2014–2016) strengthened responsible-finance practice across microfinance networks in Colombia, Uganda, and Ghana. USAID/Peru (2020–2024) is the scale inflection point: a $15M blended finance program, $20M in loan guarantees, $7M+ in digital transformation, and a combined $38M across technical committees spanning climate finance, MSME digitalization, and deforestation prevention in the Amazon.",
    narrativeLine: "This is where finance, agriculture, technology, and climate stopped being separate portfolios and became one system that has to work together.",
  },
  {
    id: "designing-whats-next",
    number: "05",
    title: "Designing What Comes Next",
    subtitle: "AI, technology & the future of development",
    years: "2025–present",
    body: "Where the previous four stages converge. Independent practice focused on how AI, data infrastructure, and digital public infrastructure can make development finance and inclusive growth more effective — not because the technology is new, but because it's the next unaddressed constraint. Current work: advising a Central American financial institution (100K clients) on analytics, CRM, and AI-powered service delivery; a research agenda on Peru's digital-payments governance and interoperability.",
    narrativeLine: "Not a career change. The natural next step of the same question, asked with better tools.",
  },
];
