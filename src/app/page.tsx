'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  Wand2,
  MessageSquare,
  Upload,
  Search,
  BookOpen,
  Lightbulb,
  Gamepad2,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { HumorCallout } from '@/components/HumorCallout';
import { getProgress, getCompletionPercentage } from '@/lib/progress';

const ROLES = [
  { id: 'people-ops', label: 'People Ops', recommended: '/learn/tools/lovable' },
  { id: 'hrbp', label: 'HRBP', recommended: '/learn/tools/chatgpt' },
  { id: 'comp', label: 'Compensation', recommended: '/learn/tools/claude' },
  { id: 'recruiting', label: 'Recruiting', recommended: '/learn/tools/chatgpt' },
  { id: 'rec-ops', label: 'Rec Ops', recommended: '/learn/tools/lovable' },
];

const TRACKS = [
  {
    href: '/learn/tools/lovable',
    label: 'Lovable',
    description: 'Build apps by describing them',
    icon: Wand2,
    color: 'bg-pink-500',
  },
  {
    href: '/learn/tools/chatgpt',
    label: 'ChatGPT Enterprise',
    description: 'Build reusable AI assistants',
    icon: MessageSquare,
    color: 'bg-emerald-600',
  },
  {
    href: '/learn/tools/claude',
    label: 'Claude',
    description: 'Deep document analysis',
    icon: Upload,
    color: 'bg-amber-600',
  },
  {
    href: '/learn/tools/glean',
    label: 'Glean',
    description: 'Search agents for internal tools',
    icon: Search,
    color: 'bg-orange-500',
  },
  {
    href: '/learn/concepts',
    label: 'Key Concepts',
    description: 'MCP, prompts, hallucinations',
    icon: BookOpen,
    color: 'bg-brand-600',
  },
  {
    href: '/learn/ideas',
    label: '38 Project Ideas',
    description: 'Browse by role, tool, difficulty',
    icon: Lightbulb,
    color: 'bg-yellow-500',
  },
  {
    href: '/playground',
    label: 'Prompt Playground',
    description: 'Practice writing better prompts',
    icon: Gamepad2,
    color: 'bg-cyan-600',
  },
  {
    href: '/learn/recipes',
    label: '4 Quick Recipes',
    description: 'Build something in 10 to 15 min',
    icon: Sparkles,
    color: 'bg-rose-500',
  },
];

export default function LandingPage() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    setPercentage(getCompletionPercentage(getProgress()));
  }, []);

  const recommended = ROLES.find((r) => r.id === selectedRole)?.recommended;

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
          <Wand2 className="w-4 h-4" />
          P&T Hack Day Training
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
          Welcome to Vibe Coding
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto mb-6">
          Build real tools without writing a single line of code.
          <br />
          <span className="text-gray-400">(The AI writes it. You tell it what to do.)</span>
        </p>
        <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
          <span><strong className="text-gray-600">38</strong> project ideas</span>
          <span><strong className="text-gray-600">4</strong> tools</span>
          <span><strong className="text-gray-600">0</strong> lines of code required</span>
        </div>
      </div>

      {/* Humor */}
      <HumorCallout className="mb-10" />

      {/* Role selector */}
      <div className="mb-10">
        <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-3 text-center">
          What is your role?
        </h2>
        <div className="flex flex-wrap justify-center gap-2">
          {ROLES.map((role) => (
            <button
              key={role.id}
              onClick={() => setSelectedRole(role.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedRole === role.id
                  ? 'bg-brand-600 text-white shadow-md'
                  : 'bg-white border border-gray-200 text-gray-600 hover:border-brand-300 hover:text-brand-600'
              }`}
            >
              {role.label}
            </button>
          ))}
        </div>
        {recommended && (
          <div className="text-center mt-3">
            <Link
              href={recommended}
              className="inline-flex items-center gap-1 text-sm text-brand-600 font-medium hover:underline"
            >
              We recommend starting here <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        )}
      </div>

      {/* Tracks grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        {TRACKS.map((track) => {
          const Icon = track.icon;
          return (
            <Link
              key={track.href}
              href={track.href}
              className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-lg hover:border-brand-300 transition-all"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-10 h-10 ${track.color} rounded-xl flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-brand-700 transition-colors">
                    {track.label}
                  </h3>
                  <p className="text-sm text-gray-500 mt-0.5">{track.description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom callout */}
      <div className="bg-brand-50 border border-brand-200 rounded-2xl p-6 text-center">
        <p className="text-brand-800 font-medium mb-1">
          This app was built with vibe coding.
        </p>
        <p className="text-sm text-brand-600">
          Everything you see here was described in plain language and generated by AI.
          If we can build this training tool, you can build your hack day project. Let's go.
        </p>
      </div>
    </div>
  );
}
