export interface FrameworkStep {
  step: string;
  description: string;
  examples: string;
}

export const howIThink: FrameworkStep[] = [
  {
    step: "Understand",
    description: "Markets, people, institutions, data.",
    examples: "Consumer research at BellSouth and La Tinka; institutional assessments at Accion; the two-worlds behavioral framework.",
  },
  {
    step: "Design",
    description: "Strategy, financial mechanisms, technology, business models.",
    examples: "Guarantee structures with DFC; savings products across eight MFIs; the five-line climate-finance framework.",
  },
  {
    step: "Test",
    description: "Evidence, user behavior, economics, feasibility.",
    examples: "Predictive models at Accion and Crezcamos; fintech viability assessments; concept testing at Sygoes.",
  },
  {
    step: "Scale",
    description: "Partnerships, capital, technology, institutions.",
    examples: "Red Catálisis's eight-MFI rollout; $38M across USAID technical committees.",
  },
  {
    step: "Measure",
    description: "Economic value, social outcomes, environmental outcomes, long-term sustainability.",
    examples: "Climate-finance gap studies; MSME digital-transformation factor studies; Amazon financing-opportunity research.",
  },
];
