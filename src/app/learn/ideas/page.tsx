'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PROJECT_IDEAS, CATEGORIES, DIFFICULTY_LEVELS } from '@/lib/content';
import { HumorCallout } from '@/components/HumorCallout';
import { markViewed } from '@/lib/progress';
import { ArrowLeft, Search, Lightbulb, Copy, Check } from 'lucide-react';

export default function IdeasPage() {
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [difficultyFilter, setDifficultyFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState<number | null>(null);

  useEffect(() => {
    markViewed('ideas');
  }, []);

  const filtered = PROJECT_IDEAS.filter((idea) => {
    if (categoryFilter !== 'All' && idea.category !== categoryFilter) return false;
    if (difficultyFilter !== 'All' && idea.difficulty !== difficultyFilter) return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      return (
        idea.title.toLowerCase().includes(q) ||
        idea.description.toLowerCase().includes(q) ||
        idea.tools.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const copyPrompt = (id: number, prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const difficultyColor: Record<string, string> = {
    Starter: 'bg-green-100 text-green-700',
    Intermediate: 'bg-amber-100 text-amber-700',
    Advanced: 'bg-red-100 text-red-700',
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        <ArrowLeft className="w-3 h-3" /> Back to home
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <Lightbulb className="w-7 h-7 text-yellow-500" />
        <h1 className="text-3xl font-bold text-gray-900">38 Project Ideas</h1>
      </div>
      <p className="text-gray-500 mb-6">
        These are starting points, not assignments. Riff on them, combine them, or ignore them
        entirely and do your own thing. The only requirement is that you build something.
      </p>

      <HumorCallout index={8} className="mb-6" />

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search ideas..."
            className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
        >
          <option value="All">All Categories</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <select
          value={difficultyFilter}
          onChange={(e) => setDifficultyFilter(e.target.value)}
          className="px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white"
        >
          <option value="All">All Difficulties</option>
          {DIFFICULTY_LEVELS.map((d) => (
            <option key={d} value={d}>{d}</option>
          ))}
        </select>
      </div>

      <p className="text-xs text-gray-400 mb-4">
        Showing {filtered.length} of {PROJECT_IDEAS.length} ideas
      </p>

      {/* Ideas grid */}
      <div className="space-y-4">
        {filtered.map((idea) => (
          <div
            key={idea.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="p-5">
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-gray-900">
                  {idea.id}. {idea.title}
                </h3>
                <div className="flex items-center gap-2 shrink-0">
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${difficultyColor[idea.difficulty]}`}>
                    {idea.difficulty}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                  {idea.tools}
                </span>
                <span className="text-xs text-gray-400">{idea.category}</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">{idea.description}</p>

              <div className="bg-gray-50 rounded-xl p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                    Starter Prompt
                  </p>
                  <button
                    onClick={() => copyPrompt(idea.id, idea.prompt)}
                    className="flex items-center gap-1 text-xs text-brand-600 hover:text-brand-700 transition-colors"
                  >
                    {copiedId === idea.id ? (
                      <>
                        <Check className="w-3 h-3" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" /> Copy
                      </>
                    )}
                  </button>
                </div>
                <p className="text-sm text-gray-600 italic leading-relaxed">
                  "{idea.prompt}"
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400">No ideas match your filters. Try broadening your search.</p>
        </div>
      )}

      <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
        <Link href="/learn/recipes" className="text-sm text-gray-500 hover:text-brand-600">
          Previous: Recipes
        </Link>
        <Link href="/playground" className="text-sm text-brand-600 font-medium hover:underline">
          Next: Prompt Playground →
        </Link>
      </div>
    </div>
  );
}
