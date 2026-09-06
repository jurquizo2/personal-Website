export interface Stat {
  value: string;
  label: string;
  confirm?: string;
}

export const stats: Stat[] = [
  {
    value: "20+",
    label: "years in financial sector development & international finance",
    confirm: "Spanish résumé says 25+ (from 1994); English résumé says 20+ (from 2003). Using 20+ per brief; confirm before publishing.",
  },
  { value: "15+", label: "countries" },
  { value: "$38M+", label: "in development programs designed and managed" },
  { value: "30+", label: "financial institutions advised" },
  { value: "20+", label: "consulting engagements delivered" },
];
