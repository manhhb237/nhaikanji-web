import React, { useState } from 'react';
import { GRAMMAR_DATA } from '../../data/grammarData';
import type { JLPTLevel } from '../../types/kanji';
import { Volume2 } from 'lucide-react';

export const GrammarMindmap: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('N5');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredGrammar = GRAMMAR_DATA.filter((g) => {
    const matchLevel = g.level === selectedLevel;
    const matchCategory = selectedCategory === 'all' || g.category === selectedCategory;
    return matchLevel && matchCategory;
  });

  const categories = Array.from(
    new Set(GRAMMAR_DATA.filter((g) => g.level === selectedLevel).map((g) => g.category))
  );

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="space-y-6">
      {/* Level Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {(['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map((lvl) => (
          <button
            key={lvl}
            onClick={() => {
              setSelectedLevel(lvl);
              setSelectedCategory('all');
            }}
            className={`px-5 py-2.5 rounded-2xl font-bold text-xs transition-all shrink-0 ${
              selectedLevel === lvl
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 scale-105'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
            }`}
          >
            Ngữ Pháp {lvl}
          </button>
        ))}
      </div>

      {/* Category Pills */}
      {categories.length > 0 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
              selectedCategory === 'all'
                ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Tất cả chủ đề ({filteredGrammar.length})
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shrink-0 ${
                selectedCategory === cat
                  ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                  : 'bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}

      {/* Grammar Cards List */}
      <div className="space-y-4">
        {filteredGrammar.map((item) => (
          <div
            key={item.id}
            className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/40 hover:shadow-md transition-all space-y-4"
          >
            {/* Title & Level */}
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-bold font-japanese text-slate-900 dark:text-white">
                    {item.pattern}
                  </h3>
                  <span className="text-xs font-semibold text-slate-400">({item.romaji})</span>
                </div>
                <div className="font-extrabold text-sm text-blue-600 dark:text-blue-400">
                  {item.vietnameseMeaning}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs px-2.5 py-1 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 font-bold border border-purple-500/20">
                  {item.category}
                </span>
                <span className="text-xs px-2.5 py-1 rounded-xl bg-blue-600 text-white font-bold">
                  {item.level}
                </span>
              </div>
            </div>

            {/* Formation Formula */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Cấu Trúc Kết Hợp:
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400">
                {item.formation}
              </div>
            </div>

            {/* Explanation */}
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {item.explanation}
            </p>

            {/* Example Sentences */}
            <div className="space-y-2 pt-1">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Ví Dụ Minh Họa:
              </div>
              {item.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-2xl bg-blue-50/50 dark:bg-blue-950/20 border border-blue-200/50 dark:border-blue-900/40 flex items-start justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="font-bold text-sm sm:text-base font-japanese text-slate-900 dark:text-white">
                      {ex.japanese}
                    </div>
                    <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                      {ex.furigana}
                    </div>
                    <div className="text-xs text-slate-600 dark:text-slate-300">
                      {ex.vietnamese}
                    </div>
                  </div>

                  <button
                    onClick={() => speakText(ex.japanese)}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 text-slate-400 hover:text-blue-600 transition-colors shadow-sm shrink-0"
                    title="Nghe câu ví dụ"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
