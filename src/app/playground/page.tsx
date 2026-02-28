'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { markViewed } from '@/lib/progress';
import { HumorCallout } from '@/components/HumorCallout';
import { ArrowLeft, Gamepad2, Send, Sparkles, ArrowRight } from 'lucide-react';

interface FeedbackResult {
  score: 'good' | 'okay' | 'needs-work';
  label: string;
  tips: string[];
  improved: string;
}

const EXAMPLES = [
  {
    label: 'Vague vs. Specific',
    bad: 'Make me a dashboard.',
    good: 'Build a recruiter dashboard that shows my open roles, candidates per stage (sourced, phone screen, onsite, offer), and average days open per role. Include a filter for department and a bar chart for time-to-fill trends by month.',
    lesson: 'The first prompt could produce anything. The second tells the AI exactly what data, what layout, and what filters you want.',
  },
  {
    label: 'Missing Context vs. Context-Rich',
    bad: 'Help me with compensation.',
    good: 'I am a compensation analyst at a Series E startup. I have a Pave export with base salary, equity, and bonus by level and job family. I need a summary of which roles are below the 50th percentile, a table comparing our bands to Pave benchmarks, and a one-page brief for our VP of People.',
    lesson: 'AI gets dramatically better when you include your role, the data you have, and the specific output format you need.',
  },
  {
    label: 'No Format vs. Clear Format',
    bad: 'Write an email about the new PTO policy.',
    good: 'Write an email to all employees about our updated PTO policy. Tone: warm but professional. Structure: (1) what changed, (2) why, (3) how it affects them, (4) FAQ with 5 common questions. Keep it under 300 words. Do not use legal jargon.',
    lesson: 'Telling the AI the format, tone, length, and structure saves you from editing later.',
  },
];

function analyzePrompt(text: string): FeedbackResult {
  const lower = text.toLowerCase();
  const tips: string[] = [];
  let points = 0;

  if (text.length > 100) points += 2;
  else if (text.length > 40) points += 1;
  else tips.push('Try making your prompt longer and more detailed. Specificity is your friend.');

  if (lower.includes('column') || lower.includes('field') || lower.includes('section') || lower.includes('include')) {
    points += 2;
  } else {
    tips.push('Mention specific fields, sections, or features you want included.');
  }

  const formatWords = ['table', 'chart', 'list', 'bullet', 'format', 'structure', 'heading', 'page', 'email', 'dashboard', 'app'];
  if (formatWords.some((w) => lower.includes(w))) {
    points += 2;
  } else {
    tips.push('Include the output format you want (table, chart, email, dashboard, etc.).');
  }

  if (lower.includes('filter') || lower.includes('sort') || lower.includes('search') || lower.includes('dropdown')) {
    points += 1;
  }

  const toneWords = ['tone', 'voice', 'warm', 'professional', 'casual', 'brief', 'concise'];
  if (toneWords.some((w) => lower.includes(w))) {
    points += 1;
  } else {
    tips.push('Consider specifying the tone or voice (warm, professional, concise).');
  }

  const constraintWords = ['do not', 'avoid', 'don\'t', 'under', 'maximum', 'keep it', 'no more than', 'limit'];
  if (constraintWords.some((w) => lower.includes(w))) {
    points += 1;
  } else {
    tips.push('Add constraints: what to avoid, length limits, or things not to include.');
  }

  if (lower.includes('csv') || lower.includes('upload') || lower.includes('data') || lower.includes('file')) {
    points += 1;
  }

  let score: FeedbackResult['score'];
  let label: string;
  if (points >= 7) {
    score = 'good';
    label = 'Great prompt! This has strong specificity and structure.';
    if (tips.length === 0) tips.push('This is solid. You could still iterate by asking the AI to refine specific sections.');
  } else if (points >= 4) {
    score = 'okay';
    label = 'Good start. A few tweaks will make this significantly better.';
  } else {
    score = 'needs-work';
    label = 'This prompt is too vague. The AI will have to guess at a lot. Let\'s add detail.';
  }

  const improved = text.length < 60
    ? `${text} Include specific sections, output format, data fields, and constraints. For example: "Show a table with [columns]. Include filters for [categories]. Keep it under [length]."`
    : `${text}\n\nAdditional specificity: include the exact output format, mention data fields by name, specify tone, and add constraints about what to avoid.`;

  return { score, label, tips, improved };
}

export default function PlaygroundPage() {
  const [prompt, setPrompt] = useState('');
  const [feedback, setFeedback] = useState<FeedbackResult | null>(null);
  const [showExamples, setShowExamples] = useState(true);

  useEffect(() => {
    markViewed('playground');
  }, []);

  const handleAnalyze = () => {
    if (!prompt.trim()) return;
    setFeedback(analyzePrompt(prompt.trim()));
    setShowExamples(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAnalyze();
    }
  };

  const scoreColors: Record<string, string> = {
    'good': 'bg-green-50 border-green-200 text-green-800',
    'okay': 'bg-amber-50 border-amber-200 text-amber-800',
    'needs-work': 'bg-red-50 border-red-200 text-red-800',
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-gray-600 mb-6"
      >
        <ArrowLeft className="w-3 h-3" /> Back to home
      </Link>

      <div className="flex items-center gap-3 mb-2">
        <Gamepad2 className="w-7 h-7 text-cyan-600" />
        <h1 className="text-3xl font-bold text-gray-900">Prompt Playground</h1>
      </div>
      <p className="text-gray-500 mb-8">
        Practice writing better prompts. Type one below and get instant feedback on how to improve
        it. This is not connected to any AI; it analyzes your prompt structure and gives tips.
      </p>

      <HumorCallout index={9} className="mb-8" />

      {/* Input */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Write a prompt as if you were typing it into Lovable, ChatGPT, or Claude:
        </label>
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Example: Build me a dashboard that shows..."
          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none"
          rows={4}
        />
        <div className="flex items-center justify-between mt-3">
          <p className="text-xs text-gray-400">Enter to analyze, Shift+Enter for new line</p>
          <button
            onClick={handleAnalyze}
            disabled={!prompt.trim()}
            className="flex items-center gap-2 px-4 py-2 bg-brand-600 text-white rounded-xl text-sm font-medium hover:bg-brand-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Sparkles className="w-4 h-4" /> Analyze My Prompt
          </button>
        </div>
      </div>

      {/* Feedback */}
      {feedback && (
        <div className="space-y-4 mb-8">
          <div className={`border rounded-2xl p-5 ${scoreColors[feedback.score]}`}>
            <p className="font-semibold mb-2">
              {feedback.score === 'good' && '✅ '}
              {feedback.score === 'okay' && '⚡ '}
              {feedback.score === 'needs-work' && '🔧 '}
              {feedback.label}
            </p>
            {feedback.tips.length > 0 && (
              <ul className="space-y-1.5 mt-3">
                {feedback.tips.map((tip, i) => (
                  <li key={i} className="text-sm flex gap-2">
                    <ArrowRight className="w-3 h-3 shrink-0 mt-1" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-5">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
              Enhanced version
            </p>
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {feedback.improved}
            </p>
          </div>
        </div>
      )}

      {/* Before/After examples */}
      {showExamples && (
        <div className="space-y-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900">Before and After Examples</h2>
          {EXAMPLES.map((ex) => (
            <div key={ex.label} className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
              <div className="p-5">
                <h3 className="font-semibold text-gray-900 mb-4">{ex.label}</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-semibold text-red-400 uppercase tracking-wide mb-1">
                      Before (vague)
                    </p>
                    <div className="bg-red-50 rounded-xl p-3">
                      <p className="text-sm text-gray-700 italic">"{ex.bad}"</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-green-500 uppercase tracking-wide mb-1">
                      After (specific)
                    </p>
                    <div className="bg-green-50 rounded-xl p-3">
                      <p className="text-sm text-gray-700 italic">"{ex.good}"</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 border-t border-gray-100 px-5 py-3">
                <p className="text-sm text-gray-600">
                  <strong>Takeaway:</strong> {ex.lesson}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {!showExamples && (
        <button
          onClick={() => setShowExamples(true)}
          className="text-sm text-brand-600 hover:underline mb-8 block"
        >
          Show before/after examples
        </button>
      )}

      <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
        <Link href="/learn/ideas" className="text-sm text-gray-500 hover:text-brand-600">
          Previous: Project Ideas
        </Link>
        <Link href="/" className="text-sm text-brand-600 font-medium hover:underline">
          Back to Home →
        </Link>
      </div>
    </div>
  );
}
