import React from 'react';
import type { KanjiItem } from '../../types/kanji';
import { useUser } from '../../context/UserContext';
import { Star, CheckCircle, Sparkles } from 'lucide-react';

interface KanjiCardProps {
  kanji: KanjiItem;
  onClick: () => void;
}

export const KanjiCard: React.FC<KanjiCardProps> = ({ kanji, onClick }) => {
  const { user, toggleFavorite } = useUser();
  const isLearned = user.learnedKanjiIds.includes(kanji.id);
  const isFavorite = user.favoriteKanjiIds.includes(kanji.id);

  const levelColorMap = {
    N5: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    N4: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30',
    N3: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    N2: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    N1: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
  };

  return (
    <div
      onClick={onClick}
      className={`group relative bg-white dark:bg-[#111827] rounded-2xl p-4 border transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col justify-between ${
        isLearned
          ? 'border-emerald-500/40 bg-emerald-50/10 dark:bg-emerald-950/10'
          : 'border-slate-200 dark:border-slate-800 hover:border-blue-500/50'
      }`}
    >
      {/* Top Badges */}
      <div className="flex items-center justify-between gap-1 mb-2">
        <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${levelColorMap[kanji.level]}`}>
          {kanji.level}
        </span>

        <div className="flex items-center gap-1">
          {isLearned && (
            <span className="flex items-center gap-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-900/40 px-1.5 py-0.5 rounded-full">
              <CheckCircle className="w-3 h-3" />
              <span>Đã thuộc</span>
            </span>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleFavorite(kanji.id);
            }}
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-amber-400 transition-colors"
          >
            <Star className={`w-3.5 h-3.5 ${isFavorite ? 'text-amber-400 fill-amber-400' : ''}`} />
          </button>
        </div>
      </div>

      {/* Main Kanji Character & Sino-Vietnamese */}
      <div className="text-center my-2">
        <div className="text-5xl font-black font-japanese text-slate-900 dark:text-white tracking-wide group-hover:scale-110 transition-transform duration-300">
          {kanji.kanji}
        </div>
        <div className="font-extrabold text-base text-blue-600 dark:text-blue-400 mt-1 tracking-wider">
          {kanji.hanViet}
        </div>
        <div className="text-[11px] text-slate-400 font-medium">
          {kanji.strokes} nét • {kanji.radicalName}
        </div>
      </div>

      {/* Chiết tự mini preview */}
      <div className="mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 dark:text-slate-400 mb-1">
          <Sparkles className="w-3 h-3 text-amber-500" />
          <span>Chiết tự:</span>
        </div>
        <div className="flex flex-wrap gap-1">
          {kanji.breakdown.map((part, idx) => (
            <span
              key={idx}
              className="text-[10px] bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded font-medium"
            >
              {part.radical} {part.name}
            </span>
          ))}
        </div>
      </div>

      {/* Onyomi / Kunyomi */}
      <div className="mt-2 text-[10px] text-slate-400 space-y-0.5">
        <div className="truncate"><strong className="text-slate-500 dark:text-slate-400">On:</strong> {kanji.onyomi.join(', ') || '-'}</div>
        <div className="truncate"><strong className="text-slate-500 dark:text-slate-400">Kun:</strong> {kanji.kunyomi.join(', ') || '-'}</div>
      </div>
    </div>
  );
};
