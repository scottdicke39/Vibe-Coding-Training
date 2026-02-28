'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { RECIPES } from '@/lib/content';
import { HumorCallout } from '@/components/HumorCallout';
import { markViewed } from '@/lib/progress';
import { ArrowLeft, CheckCircle2, Clock } from 'lucide-react';

export default function RecipesPage() {
  useEffect(() => {
    markViewed('recipes');
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        <ArrowLeft className="w-3 h-3" /> Back to home
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Quick-Start Recipes</h1>
      <p className="text-gray-500 mb-8">
        Four step-by-step walkthroughs to get you building in minutes. Not hours. Minutes.
      </p>

      <HumorCallout index={5} className="mb-8" />

      <div className="space-y-8">
        {RECIPES.map((recipe, idx) => (
          <div
            key={recipe.id}
            className="bg-white border border-gray-200 rounded-2xl overflow-hidden"
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center font-bold text-sm">
                  {idx + 1}
                </div>
                <div className="flex-1">
                  <h2 className="font-bold text-gray-900">{recipe.title}</h2>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-xs text-gray-500">{recipe.tool}</span>
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Clock className="w-3 h-3" /> {recipe.duration}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {recipe.steps.map((step, i) => (
                  <div key={i} className="flex gap-3">
                    <div className="w-6 h-6 bg-gray-100 text-gray-500 rounded-full flex items-center justify-center text-xs font-medium shrink-0 mt-0.5">
                      {i + 1}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 border-t border-green-100 px-6 py-3 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              <p className="text-sm text-green-700 font-medium">{recipe.successLine}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
        <Link href="/learn/concepts" className="text-sm text-gray-500 hover:text-brand-600">
          Previous: Key Concepts
        </Link>
        <Link href="/learn/ideas" className="text-sm text-brand-600 font-medium hover:underline">
          Next: Project Ideas →
        </Link>
      </div>
    </div>
  );
}
