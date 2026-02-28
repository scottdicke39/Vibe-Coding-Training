import type { ModuleProgress } from './badges';

const STORAGE_KEY = 'vibe-coding-progress';

export function getProgress(): Record<string, ModuleProgress> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function saveProgress(progress: Record<string, ModuleProgress>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

export function markViewed(moduleId: string) {
  const progress = getProgress();
  if (!progress[moduleId]) {
    progress[moduleId] = { viewed: false, quizCompleted: false, quizScore: 0 };
  }
  progress[moduleId].viewed = true;
  saveProgress(progress);
  return progress;
}

export function markQuizCompleted(moduleId: string, score: number) {
  const progress = getProgress();
  if (!progress[moduleId]) {
    progress[moduleId] = { viewed: true, quizCompleted: false, quizScore: 0 };
  }
  progress[moduleId].quizCompleted = true;
  progress[moduleId].quizScore = Math.max(progress[moduleId].quizScore, score);
  saveProgress(progress);
  return progress;
}

export function resetProgress() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
}

export function getCompletionPercentage(progress: Record<string, ModuleProgress>): number {
  const modules = ['lovable', 'chatgpt', 'claude', 'glean', 'concepts'];
  const totalSteps = modules.length * 2; // viewed + quiz per module
  let completed = 0;
  for (const id of modules) {
    if (progress[id]?.viewed) completed++;
    if (progress[id]?.quizCompleted) completed++;
  }
  return Math.round((completed / totalSteps) * 100);
}
