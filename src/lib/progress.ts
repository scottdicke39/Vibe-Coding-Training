/**
 * Progress & Badge tracking abstraction layer.
 * Currently uses localStorage. When Supabase is enabled, replace the
 * storage calls below with supabase.from('user_progress')... queries.
 *
 * SUPABASE MIGRATION NOTES:
 * - Create table: user_progress (user_id uuid, module_id text, completed bool, quiz_score int, completed_at timestamptz)
 * - Create table: user_badges (user_id uuid, badge_id text, earned_at timestamptz)
 * - Replace get/set helpers with Supabase client calls
 * - Add RLS policies for user_id = auth.uid()
 */

const PROGRESS_KEY = "vibe-training-progress";
const BADGES_KEY = "vibe-training-badges";

export type ModuleId =
  | "tool-lovable"
  | "tool-chatgpt"
  | "tool-claude"
  | "tool-glean"
  | "concepts"
  | "recipes"
  | "ideas"
  | "playground"
  | "how-i-built-this";

export type BadgeId =
  | "first-steps"
  | "tool-explorer"
  | "concept-master"
  | "recipe-chef"
  | "idea-machine"
  | "prompt-pro"
  | "completionist";

export interface ModuleProgress {
  completed: boolean;
  quizScore?: number;
  completedAt?: string;
}

export type ProgressMap = Partial<Record<ModuleId, ModuleProgress>>;

export function getProgress(): ProgressMap {
  try {
    const raw = localStorage.getItem(PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

export function setModuleComplete(moduleId: ModuleId, quizScore?: number) {
  const progress = getProgress();
  progress[moduleId] = {
    completed: true,
    quizScore,
    completedAt: new Date().toISOString(),
  };
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress));
  checkAndAwardBadges();
}

export function isModuleComplete(moduleId: ModuleId): boolean {
  return getProgress()[moduleId]?.completed ?? false;
}

export function getCompletionPercentage(): number {
  const all: ModuleId[] = [
    "tool-lovable", "tool-chatgpt", "tool-claude", "tool-glean",
    "concepts", "recipes", "ideas", "playground", "how-i-built-this",
  ];
  const progress = getProgress();
  const completed = all.filter((m) => progress[m]?.completed).length;
  return Math.round((completed / all.length) * 100);
}

export function getBadges(): BadgeId[] {
  try {
    const raw = localStorage.getItem(BADGES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function awardBadge(badge: BadgeId) {
  const badges = getBadges();
  if (!badges.includes(badge)) {
    badges.push(badge);
    localStorage.setItem(BADGES_KEY, JSON.stringify(badges));
  }
}

export function checkAndAwardBadges() {
  const progress = getProgress();
  const completed = Object.values(progress).filter((p) => p?.completed).length;

  if (completed >= 1) awardBadge("first-steps");

  const tools: ModuleId[] = ["tool-lovable", "tool-chatgpt", "tool-claude", "tool-glean"];
  if (tools.every((t) => progress[t]?.completed)) awardBadge("tool-explorer");

  if (progress.concepts?.completed && (progress.concepts.quizScore ?? 0) >= 80)
    awardBadge("concept-master");

  if (progress.recipes?.completed) awardBadge("recipe-chef");
  if (progress.ideas?.completed) awardBadge("idea-machine");

  if (progress.playground?.completed && (progress.playground.quizScore ?? 0) >= 80)
    awardBadge("prompt-pro");

  const allModules: ModuleId[] = [
    "tool-lovable", "tool-chatgpt", "tool-claude", "tool-glean",
    "concepts", "recipes", "ideas", "playground", "how-i-built-this",
  ];
  if (allModules.every((m) => progress[m]?.completed)) awardBadge("completionist");
}

export function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY);
  localStorage.removeItem(BADGES_KEY);
}

export const BADGE_INFO: Record<BadgeId, { name: string; emoji: string; description: string }> = {
  "first-steps": { name: "First Steps", emoji: "👶", description: "Complete any module" },
  "tool-explorer": { name: "Tool Explorer", emoji: "🔭", description: "Complete all 4 tool deep dives" },
  "concept-master": { name: "Concept Master", emoji: "🧠", description: "Ace the concepts quiz (80%+)" },
  "recipe-chef": { name: "Recipe Chef", emoji: "👨‍🍳", description: "Complete all 4 recipes" },
  "idea-machine": { name: "Idea Machine", emoji: "💡", description: "Browse all project ideas" },
  "prompt-pro": { name: "Prompt Pro", emoji: "✨", description: "Score 80%+ in the playground" },
  "completionist": { name: "Completionist", emoji: "🏆", description: "Finish everything!" },
};
