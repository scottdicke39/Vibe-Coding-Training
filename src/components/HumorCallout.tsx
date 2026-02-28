'use client';

import { useEffect, useState } from 'react';
import { HUMOR_CALLOUTS } from '@/lib/content';

interface HumorCalloutProps {
  index?: number;
  className?: string;
}

export function HumorCallout({ index, className = '' }: HumorCalloutProps) {
  const [text, setText] = useState('');

  useEffect(() => {
    const idx = index !== undefined ? index % HUMOR_CALLOUTS.length : Math.floor(Math.random() * HUMOR_CALLOUTS.length);
    setText(HUMOR_CALLOUTS[idx]);
  }, [index]);

  if (!text) return null;

  return (
    <div className={`bg-amber-50 border border-amber-200 rounded-xl p-4 ${className}`}>
      <p className="text-sm text-amber-800 italic">
        <span className="not-italic mr-1">🤖</span> {text}
      </p>
    </div>
  );
}
