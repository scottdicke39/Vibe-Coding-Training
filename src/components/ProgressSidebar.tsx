'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  Wand2,
  MessageSquare,
  Upload,
  Search,
  BookOpen,
  Lightbulb,
  Gamepad2,
  Trophy,
  ChevronRight,
} from 'lucide-react';
import { getProgress, getCompletionPercentage } from '@/lib/progress';
import { BADGES } from '@/lib/badges';
import type { ModuleProgress } from '@/lib/badges';

const NAV_ITEMS = [
  { href: '/learn/tools/lovable', label: 'Lovable', icon: Wand2, moduleId: 'lovable' },
  { href: '/learn/tools/chatgpt', label: 'ChatGPT', icon: MessageSquare, moduleId: 'chatgpt' },
  { href: '/learn/tools/claude', label: 'Claude', icon: Upload, moduleId: 'claude' },
  { href: '/learn/tools/glean', label: 'Glean', icon: Search, moduleId: 'glean' },
  { href: '/learn/concepts', label: 'Key Concepts', icon: BookOpen, moduleId: 'concepts' },
  { href: '/learn/recipes', label: 'Recipes', icon: BookOpen, moduleId: 'recipes' },
  { href: '/learn/ideas', label: 'Project Ideas', icon: Lightbulb, moduleId: 'ideas' },
  { href: '/playground', label: 'Prompt Playground', icon: Gamepad2, moduleId: 'playground' },
];

export function ProgressSidebar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState<Record<string, ModuleProgress>>({});
  const [percentage, setPercentage] = useState(0);
  const [earnedBadges, setEarnedBadges] = useState<string[]>([]);

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    setPercentage(getCompletionPercentage(p));
    setEarnedBadges(BADGES.filter((b) => b.condition(p)).map((b) => b.id));
  }, [pathname]);

  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Brand */}
      <Link href="/" className="p-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center">
            <Wand2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-gray-900">Vibe Coding</span>
        </div>
      </Link>

      {/* Progress Bar */}
      <div className="px-5 py-4 border-b border-gray-100">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-medium text-gray-500">Progress</span>
          <span className="text-xs font-bold text-brand-600">{percentage}%</span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-2">
          <div
            className="bg-brand-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        {earnedBadges.length > 0 && (
          <div className="flex gap-1 mt-2 flex-wrap">
            {BADGES.filter((b) => earnedBadges.includes(b.id)).map((badge) => (
              <span
                key={badge.id}
                title={`${badge.name}: ${badge.description}`}
                className="text-base cursor-default"
              >
                {badge.emoji}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        <p className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest px-2 mb-2">
          Learn
        </p>
        {NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          const mod = progress[item.moduleId];
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors group ${
                isActive
                  ? 'bg-brand-50 text-brand-700 font-medium'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              }`}
            >
              <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-brand-600' : 'text-gray-400'}`} />
              <span className="flex-1 truncate">{item.label}</span>
              {mod?.viewed && (
                <span className="text-xs">
                  {mod.quizCompleted ? '✅' : '👁️'}
                </span>
              )}
              <ChevronRight
                className={`w-3 h-3 shrink-0 transition-transform ${
                  isActive ? 'text-brand-500' : 'text-gray-300 group-hover:text-gray-400'
                }`}
              />
            </Link>
          );
        })}
      </nav>

      {/* Badges */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center gap-2 mb-2">
          <Trophy className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-semibold text-gray-500">
            Badges: {earnedBadges.length}/{BADGES.length}
          </span>
        </div>
      </div>
    </aside>
  );
}
