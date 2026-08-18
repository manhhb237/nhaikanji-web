import React, { useState } from 'react';
import { SentenceParser } from './SentenceParser';
import { GrammarMindmap } from './GrammarMindmap';
import { BrainCircuit, BookOpen } from 'lucide-react';

export const GrammarHome: React.FC = () => {
  const [activeSubTab, setActiveSubTab] = useState<'parser' | 'mindmap'>('parser');

  return (
    <div className="space-y-6">
      {/* Sub Navigation Switcher */}
      <div className="flex items-center gap-2 p-1.5 bg-slate-200/70 dark:bg-slate-800/80 rounded-2xl max-w-md mx-auto shadow-inner">
        <button
          onClick={() => setActiveSubTab('parser')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeSubTab === 'parser'
              ? 'bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <BrainCircuit className="w-4 h-4" />
          <span>Phân Tích Câu (文の分析)</span>
        </button>

        <button
          onClick={() => setActiveSubTab('mindmap')}
          className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs transition-all ${
            activeSubTab === 'mindmap'
              ? 'bg-white dark:bg-[#111827] text-blue-600 dark:text-blue-400 shadow-md'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Ngữ Pháp JLPT N5 - N1</span>
        </button>
      </div>

      {/* Main SubTab Content */}
      {activeSubTab === 'parser' ? <SentenceParser /> : <GrammarMindmap />}
    </div>
  );
};
