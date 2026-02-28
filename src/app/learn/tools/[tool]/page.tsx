'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { TOOLS } from '@/lib/content';
import { QUIZZES } from '@/lib/quizzes';
import { QuizCard } from '@/components/QuizCard';
import { HumorCallout } from '@/components/HumorCallout';
import { markViewed, markQuizCompleted } from '@/lib/progress';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';

export default function ToolPage() {
  const params = useParams();
  const toolId = params.tool as string;
  const tool = TOOLS.find((t) => t.id === toolId);
  const quiz = QUIZZES.find((q) => q.moduleId === toolId);
  const [quizDone, setQuizDone] = useState(false);

  useEffect(() => {
    if (tool) {
      markViewed(toolId);
    }
  }, [toolId, tool]);

  if (!tool) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center">
        <p className="text-gray-500">Tool not found.</p>
        <Link href="/" className="text-brand-600 hover:underline mt-2 inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  const handleQuizComplete = (score: number) => {
    markQuizCompleted(toolId, score);
    setQuizDone(true);
  };

  const colorMap: Record<string, string> = {
    pink: 'bg-pink-500',
    emerald: 'bg-emerald-600',
    amber: 'bg-amber-600',
    orange: 'bg-orange-500',
  };
  const bgColor = colorMap[tool.color] || 'bg-brand-600';

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        <ArrowLeft className="w-3 h-3" /> Back to home
      </Link>

      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className={`w-12 h-12 ${bgColor} rounded-2xl flex items-center justify-center`}>
          <span className="text-white text-xl font-bold">{tool.name.charAt(0)}</span>
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
          <p className="text-lg text-gray-500">"{tool.tagline}"</p>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {/* What it is */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">What it is</h2>
          <p className="text-gray-600 leading-relaxed">{tool.whatItIs}</p>
        </section>

        {/* Why it matters */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Why it matters for P&T</h2>
          <p className="text-gray-600 leading-relaxed">{tool.whyItMatters}</p>
        </section>

        <HumorCallout index={TOOLS.indexOf(tool)} />

        {/* How it works */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">How it works</h2>
          <div className="space-y-3">
            {tool.howItWorks.map((step, i) => (
              <div key={i} className="flex gap-3">
                <div className="w-7 h-7 bg-brand-100 text-brand-700 rounded-full flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <p className="text-gray-600 pt-0.5">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key features */}
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Key features</h2>
          <div className="space-y-3">
            {tool.keyFeatures.map((feat) => (
              <div key={feat.name} className="bg-white border border-gray-200 rounded-xl p-4">
                <h3 className="font-semibold text-gray-900 text-sm">{feat.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{feat.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key concept */}
        <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6">
          <h3 className="font-bold text-brand-800 mb-1">{tool.keyConcept.title}</h3>
          <p className="text-brand-700 text-sm leading-relaxed">{tool.keyConcept.body}</p>
        </div>

        {/* CTA */}
        {tool.url && (
          <a
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Open {tool.name} <ExternalLink className="w-4 h-4" />
          </a>
        )}

        {/* Quiz */}
        {quiz && (
          <section className="pt-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
              Test your knowledge
              {quizDone && <CheckCircle2 className="w-5 h-5 text-green-500" />}
            </h2>
            {!quizDone ? (
              <QuizCard quiz={quiz} onComplete={handleQuizComplete} />
            ) : (
              <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                <p className="text-green-700 font-medium">Quiz complete! Check your progress in the sidebar.</p>
              </div>
            )}
          </section>
        )}

        {/* Next */}
        <div className="flex justify-between items-center pt-4 border-t border-gray-200">
          {TOOLS.indexOf(tool) > 0 && (
            <Link
              href={`/learn/tools/${TOOLS[TOOLS.indexOf(tool) - 1].id}`}
              className="text-sm text-gray-500 hover:text-brand-600"
            >
              Previous: {TOOLS[TOOLS.indexOf(tool) - 1].name}
            </Link>
          )}
          <div className="ml-auto">
            {TOOLS.indexOf(tool) < TOOLS.length - 1 ? (
              <Link
                href={`/learn/tools/${TOOLS[TOOLS.indexOf(tool) + 1].id}`}
                className="text-sm text-brand-600 font-medium hover:underline"
              >
                Next: {TOOLS[TOOLS.indexOf(tool) + 1].name} →
              </Link>
            ) : (
              <Link
                href="/learn/concepts"
                className="text-sm text-brand-600 font-medium hover:underline"
              >
                Next: Key Concepts →
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
