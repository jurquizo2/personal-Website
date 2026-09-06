export interface CaseStudy {
  slug: string;
  title: string;
  org: string;
  challenge: string;
  insight: string;
  strategy: string;
  implementation: string;
  result: string;
  lesson: string;
  confirm?: string;
  featured?: boolean;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "loan-portfolio-guarantees",
    title: "Structuring $20M in Loan Portfolio Guarantees",
    org: "USAID/Peru, with DFC",
    challenge: "SME and agricultural lending in Peru was constrained by financial institutions' risk perception — capital that could reach small businesses and farmers wasn't moving because the risk-sharing mechanisms didn't exist.",
    insight: "De-risking, not new capital, was the binding constraint for several mid-sized lenders.",
    strategy: "Scope financial institutions for fit, then co-design guarantee term sheets with the U.S. International Development Finance Corporation (DFC).",
    implementation: "Led the scoping of five financial institutions and co-designed the guarantee structures with DFC.",
    result: "$20M in loan portfolio guarantees, de-risking SME and agricultural lending.",
    lesson: "Development finance often moves faster by re-engineering risk than by injecting new capital.",
    featured: true,
  },
  {
    slug: "blended-finance-amazon",
    title: "Managing a $15M Blended Finance Program in the Amazon",
    org: "Catalyze, USAID/Peru",
    challenge: "Mobilizing private capital into sustainable development in the Peruvian Amazon, where conventional investment risk models don't hold.",
    insight: "Blended finance only works if the risk and monitoring architecture is built for additionality — capital that wouldn't have gone there otherwise — not just capital that shows up.",
    strategy: "Structure the program around continuous evaluation of transactions (CAPEX, OPEX, factoring) for additionality and risk.",
    implementation: "Managed the program end-to-end, evaluating individual financial transactions against those criteria.",
    result: "$15M program mobilizing private capital toward sustainable development in the Amazon.",
    lesson: "Blended finance is a discipline, not a funding source — the underwriting logic determines whether it actually changes outcomes.",
    featured: true,
  },
  {
    slug: "digital-transformation-msme",
    title: "Designing a $7M+ Digital Transformation Program for Agricultural Producer Associations",
    org: "USAID/Peru",
    challenge: "MSME and agricultural-producer competitiveness in Peru was limited by weak data infrastructure and low digital/financial literacy — not by an absence of digital tools.",
    insight: "Digitization efforts fail when they're layered onto organizations that lack the underlying data infrastructure and public digital infrastructure to support them.",
    strategy: "Build the program around data infrastructure and digital/financial literacy first, technology second.",
    implementation: "Led strategy design as part of the technical committee responsible for the program.",
    result: "$7M+ program targeting MSME competitiveness through digital transformation.",
    lesson: "Digital transformation in emerging-market agriculture is an infrastructure problem before it's a software problem.",
    confirm: "Spanish résumé says $7M, English says $7.5M — confirm exact figure before publishing.",
    featured: true,
  },
  {
    slug: "fintech-viability-assessment",
    title: "Assessing 18+ Fintechs and Digital Platforms for Viability and Governance",
    org: "USAID/Peru",
    challenge: "As Alternate Program Manager for CRECE (digital finance) and CAFÉ (competitiveness), needed to know which of a growing field of digital finance platforms were actually viable and appropriately governed before recommending program alignment.",
    insight: "Interoperability and regulatory clarity, not adoption numbers, were the real predictors of which platforms would hold up.",
    strategy: "Build an assessment framework covering interoperability, governance, and regulatory readiness.",
    implementation: "Assessed 18+ digital platforms and fintechs against that framework.",
    result: "A vetted view of the digital-finance landscape that informed $10M (CRECE) and $12M (CAFÉ) program design.",
    lesson: "The binding constraint on fintech-enabled development usually isn't the technology — it's governance and interoperability.",
    featured: true,
  },
  {
    slug: "savings-products-red-catalisis",
    title: "Developing and Launching Savings Products Across Eight MFIs",
    org: "Red Catálisis, Honduras — Sygoes",
    challenge: "Remittance-recipient and youth segments in Honduras were underserved by existing savings products across a network of microfinance institutions.",
    insight: "A single product design, replicated with local coaching, was more scalable than eight bespoke designs.",
    strategy: "Design a savings-product template validated against remittance and youth-segment behavior, paired with go-to-market coaching for replication across the network.",
    implementation: "Developed and helped launch the products across eight MFIs in the Red Catálisis network.",
    result: "Products launched and scaled across all eight institutions in the network.",
    lesson: "Financial-product design for underserved markets scales through disciplined replication, not through eight separate reinventions.",
  },
  {
    slug: "predictive-retention-crezcamos",
    title: "Predictive Retention Modeling",
    org: "Crezcamos, Colombia — Sygoes",
    challenge: "Customer attrition at Crezcamos, a Colombian microfinance institution, was eroding long-term portfolio value.",
    insight: "Retention is a modeling problem before it's a service-design problem.",
    strategy: "Build predictive models on the institution's historical customer data to flag attrition risk.",
    implementation: "Delivered the predictive retention model and an accompanying customer-experience guide for front-line agents.",
    result: "No quantified retention or churn figure is documented in available sources. Presented as a methodology-forward case study until a verified number is available.",
    lesson: "The same modeling discipline that improved credit performance at scale (Accion years) applies directly to retention.",
    confirm: "No verified churn/retention percentage exists in source material — do not publish a specific number (e.g. 12%) without a confirmed source document.",
  },
  {
    slug: "clean-energy-sme-financing",
    title: "Clean Energy SME Financing Strategy",
    org: "COFIDE, Peru's Development Bank — Sygoes",
    challenge: "Peru's development bank needed a strategy to expand SME access to clean-energy financing.",
    insight: "Awareness and communication, not product design alone, were limiting uptake.",
    strategy: "Design a market strategy and communication approach with built-in prioritization mechanisms for which SMEs to reach first.",
    implementation: "Delivered the strategy directly to COFIDE.",
    result: "A prioritized go-to-market strategy for clean-energy SME financing.",
    lesson: "Green finance pipelines stall on distribution and communication as often as they stall on capital.",
  },
];

export interface ProjectNote {
  client: string;
  country: string;
  note: string;
}

export const additionalProjects: ProjectNote[] = [
  { client: "Incofin Impact Investments", country: "Ecuador", note: "Rural finance market assessment" },
  { client: "Velifin Investments", country: "Mexico", note: "NBFI funding evaluation" },
  { client: "FIE Microfinanzas", country: "Argentina", note: "Brand and positioning strategy" },
  { client: "Fundeser", country: "Nicaragua", note: "Digital-transformation and customer-experience diagnostic" },
  { client: "IDB", country: "Latin America", note: "Customer-centricity framework" },
  { client: "National Disability Institute", country: "USA", note: "Accessible digital-solution redesign" },
  { client: "Banco Popular", country: "Honduras", note: "Savings-mobilization capacity building" },
];
