'use client';

import { useState } from 'react';
import type { Quiz } from '@/lib/quizzes';

interface QuizCardProps {
  quiz: Quiz;
  onComplete: (score: number) => void;
}

export function QuizCard({ quiz, onComplete }: QuizCardProps) {
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [finished, setFinished] = useState(false);

  const question = quiz.questions[currentQ];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === question.correctIndex) {
      setCorrect((c) => c + 1);
    }
  };

  const handleNext = () => {
    if (currentQ < quiz.questions.length - 1) {
      setCurrentQ((q) => q + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      const score = Math.round(((correct + (selected === question.correctIndex ? 0 : 0)) / quiz.questions.length) * 100);
      const finalCorrect = correct;
      const finalScore = Math.round((finalCorrect / quiz.questions.length) * 100);
      setFinished(true);
      onComplete(finalScore);
    }
  };

  if (finished) {
    const finalScore = Math.round((correct / quiz.questions.length) * 100);
    return (
      <div className="bg-white border border-gray-200 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">{finalScore === 100 ? '🎉' : finalScore >= 60 ? '👏' : '💪'}</div>
        <h3 className="text-lg font-bold text-gray-900 mb-1">{quiz.title} Complete!</h3>
        <p className="text-gray-600 mb-2">
          You got {correct} out of {quiz.questions.length} correct ({finalScore}%)
        </p>
        <p className="text-sm text-gray-500">
          {finalScore === 100
            ? 'Perfect score! You clearly know your stuff.'
            : finalScore >= 60
              ? 'Nice work! You have a solid understanding.'
              : 'No worries. The best way to learn is by building. Try the Prompt Playground next.'}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">{quiz.title}</h3>
        <span className="text-xs text-gray-400">
          {currentQ + 1} / {quiz.questions.length}
        </span>
      </div>

      <p className="text-gray-800 mb-4 font-medium">{question.question}</p>

      <div className="space-y-2 mb-4">
        {question.options.map((option, idx) => {
          let style = 'border-gray-200 hover:border-brand-300 hover:bg-brand-50';
          if (showResult) {
            if (idx === question.correctIndex) {
              style = 'border-green-400 bg-green-50';
            } else if (idx === selected && idx !== question.correctIndex) {
              style = 'border-red-400 bg-red-50';
            } else {
              style = 'border-gray-200 opacity-50';
            }
          } else if (selected === idx) {
            style = 'border-brand-400 bg-brand-50';
          }

          return (
            <button
              key={idx}
              onClick={() => handleSelect(idx)}
              disabled={showResult}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all ${style}`}
            >
              {option}
            </button>
          );
        })}
      </div>

      {showResult && (
        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-700">
            {selected === question.correctIndex ? '✅ Correct! ' : '❌ Not quite. '}
            {question.explanation}
          </p>
        </div>
      )}

      {showResult && (
        <button
          onClick={handleNext}
          className="w-full py-2.5 bg-brand-600 text-white rounded-xl font-medium hover:bg-brand-700 transition-colors"
        >
          {currentQ < quiz.questions.length - 1 ? 'Next Question' : 'See Results'}
        </button>
      )}
    </div>
  );
}
