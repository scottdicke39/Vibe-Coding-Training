'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { GLOSSARY } from '@/lib/content';
import { QUIZZES } from '@/lib/quizzes';
import { QuizCard } from '@/components/QuizCard';
import { HumorCallout } from '@/components/HumorCallout';
import { markViewed, markQuizCompleted } from '@/lib/progress';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function ConceptsPage() {
  const quiz = QUIZZES.find((q) => q.moduleId === 'concepts');
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    markViewed('concepts');
  }, []);

  const handleQuizComplete = (score: number) => {
    markQuizCompleted('concepts', score);
    setQuizDone(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        <ArrowLeft className="w-3 h-3" /> Back to home
      </Link>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Key Concepts</h1>
      <p className="text-gray-500 mb-8">
        The vocabulary you need to sound like you know what you are talking about. (You will.)
      </p>

      <HumorCallout index={4} className="mb-8" />

      <div className="space-y-4 mb-10">
        {GLOSSARY.map((term) => (
          <div key={term.term} className="bg-white border border-gray-200 rounded-xl p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900">{term.term}</h3>
                <p className="text-gray-600 text-sm mt-1">{term.definition}</p>
              </div>
              <div className="bg-gray-100 rounded-lg px-3 py-1.5 shrink-0">
                <p className="text-xs text-gray-500">Analogy</p>
                <p className="text-sm font-medium text-gray-700">{term.analogy}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {quiz && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
            Test your knowledge
            {quizDone && <CheckCircle2 className="w-5 h-5 text-green-500" />}
          </h2>
          {!quizDone ? (
            <QuizCard quiz={quiz} onComplete={handleQuizComplete} />
          ) : (
            <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
              <p className="text-green-700 font-medium">
                Quiz complete! You know your stuff.
              </p>
            </div>
          )}
        </section>
      )}

      <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
        <Link href="/learn/tools/glean" className="text-sm text-gray-500 hover:text-brand-600">
          Previous: Glean
        </Link>
        <Link href="/learn/recipes" className="text-sm text-brand-600 font-medium hover:underline">
          Next: Recipes →
        </Link>
      </div>
    </div>
  );
}
