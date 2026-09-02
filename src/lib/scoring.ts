import { questions } from "@/mocks/questions";
import { jobs } from "@/mocks/jobs";

export interface JobScore {
  jobId: string;
  score: number;
  raw: number;
}

export interface TraitScore {
  traitId: string;
  score: number;
}

export const STORAGE_KEY = "ai-career-test-answers";

export function computeTraitScores(answers: number[]): TraitScore[] {
  const map: Record<string, number> = {};
  questions.forEach((q, i) => {
    const normalized = (answers[i] ?? 3) - 3;
    Object.entries(q.loadings).forEach(([trait, coef]) => {
      map[trait] = (map[trait] || 0) + normalized * coef;
    });
  });
  return Object.entries(map)
    .map(([traitId, score]) => ({ traitId, score }))
    .sort((a, b) => b.score - a.score);
}

export function computeJobScores(answers: number[]): JobScore[] {
  const traitScores: Record<string, number> = {};
  questions.forEach((q, i) => {
    const normalized = (answers[i] ?? 3) - 3;
    Object.entries(q.loadings).forEach(([trait, coef]) => {
      traitScores[trait] = (traitScores[trait] || 0) + normalized * coef;
    });
  });

  const rawScores = jobs.map((job) => {
    let raw = 0;
    Object.entries(job.weights).forEach(([trait, w]) => {
      raw += (traitScores[trait] || 0) * w;
    });
    return { jobId: job.id, raw };
  });

  const raws = rawScores.map((r) => r.raw);
  const min = Math.min(...raws);
  const max = Math.max(...raws);
  const range = max - min;

  return rawScores
    .map((r) => ({
      jobId: r.jobId,
      raw: r.raw,
      score: range === 0 ? 72 : Math.round(45 + 53 * ((r.raw - min) / range)),
    }))
    .sort((a, b) => b.score - a.score);
}

export function loadAnswers(): number[] | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length !== questions.length) return null;
    return parsed.map((v) => (typeof v === "number" && v >= 1 && v <= 5 ? v : 3));
  } catch {
    return null;
  }
}

export function saveAnswers(answers: number[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(answers));
}

export function clearAnswers(): void {
  localStorage.removeItem(STORAGE_KEY);
}