export interface Badge {
  id: string;
  name: string;
  description: string;
  emoji: string;
  condition: (progress: Record<string, ModuleProgress>) => boolean;
}

export interface ModuleProgress {
  viewed: boolean;
  quizCompleted: boolean;
  quizScore: number;
}

export const BADGES: Badge[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Completed your first learning module',
    emoji: '👣',
    condition: (p) => Object.values(p).some((m) => m.viewed),
  },
  {
    id: 'tool-curious',
    name: 'Tool Curious',
    description: 'Viewed all four tool explainers',
    emoji: '🔍',
    condition: (p) =>
      ['lovable', 'chatgpt', 'claude', 'glean'].every((id) => p[id]?.viewed),
  },
  {
    id: 'quiz-starter',
    name: 'Quiz Starter',
    description: 'Completed your first quiz',
    emoji: '✏️',
    condition: (p) => Object.values(p).some((m) => m.quizCompleted),
  },
  {
    id: 'perfect-score',
    name: 'Perfect Score',
    description: 'Got 100% on any quiz',
    emoji: '💯',
    condition: (p) =>
      Object.values(p).some((m) => m.quizCompleted && m.quizScore === 100),
  },
  {
    id: 'tool-master',
    name: 'Tool Master',
    description: 'Passed all four tool quizzes',
    emoji: '🏆',
    condition: (p) =>
      ['lovable', 'chatgpt', 'claude', 'glean'].every(
        (id) => p[id]?.quizCompleted
      ),
  },
  {
    id: 'concept-clear',
    name: 'Concept Clear',
    description: 'Passed the Key Concepts quiz',
    emoji: '🧠',
    condition: (p) => p['concepts']?.quizCompleted === true,
  },
  {
    id: 'all-in',
    name: 'All In',
    description: 'Viewed every learning module and passed every quiz',
    emoji: '🌟',
    condition: (p) => {
      const modules = ['lovable', 'chatgpt', 'claude', 'glean', 'concepts'];
      return modules.every((id) => p[id]?.viewed && p[id]?.quizCompleted);
    },
  },
  {
    id: 'idea-explorer',
    name: 'Idea Explorer',
    description: 'Browsed the project ideas catalog',
    emoji: '💡',
    condition: (p) => p['ideas']?.viewed === true,
  },
  {
    id: 'prompt-player',
    name: 'Prompt Player',
    description: 'Tried the Prompt Playground',
    emoji: '🎮',
    condition: (p) => p['playground']?.viewed === true,
  },
];
