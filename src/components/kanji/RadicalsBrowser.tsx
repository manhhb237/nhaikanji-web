import React, { useState } from 'react';
import { RADICALS_DATA } from '../../data/radicalsData';
import { Sparkles, Search, Filter } from 'lucide-react';

export const RadicalsBrowser: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStroke, setSelectedStroke] = useState<number | 'all'>('all');

  const strokeCounts = Array.from(new Set(RADICALS_DATA.map(r => r.strokes))).sort((a, b) => a - b);

  const filteredRadicals = RADICALS_DATA.filter((r) => {
    const matchesSearch =
      r.radical.includes(searchTerm) ||
      r.hanViet.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.meaning.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStroke = selectedStroke === 'all' || r.strokes === selectedStroke;
    return matchesSearch && matchesStroke;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Kho Tàng 214 Bộ Thủ Khang Hy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Gốc Rễ Của Mọi Chữ Hán (Kanji)
          </h2>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
            Hiểu rõ 214 bộ thủ là chìa khóa vàng để "Xóa mù Kanji" và phân tích cấu tạo chiết tự của bất kỳ chữ Kanji phức tạp nào một cách tự nhiên.
          </p>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        {/* Search */}
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm theo bộ, tên Hán Việt (Thủy, Mộc...)"
            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>

        {/* Stroke Filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <span className="text-xs font-bold text-slate-400 shrink-0 flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3" /> Nét:
          </span>
          <button
            onClick={() => setSelectedStroke('all')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
              selectedStroke === 'all'
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
            }`}
          >
            Tất cả
          </button>
          {strokeCounts.map((stroke) => (
            <button
              key={stroke}
              onClick={() => setSelectedStroke(stroke)}
              className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all shrink-0 ${
                selectedStroke === stroke
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
              }`}
            >
              {stroke} nét
            </button>
          ))}
        </div>
      </div>

      {/* Radicals Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {filteredRadicals.map((rad) => (
          <div
            key={rad.number}
            className="p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm hover:border-blue-500/50 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
              <span>#{rad.number}</span>
              <span>{rad.strokes} Nét</span>
            </div>

            <div className="text-center my-1">
              <span className="text-4xl font-black font-japanese text-slate-900 dark:text-white">
                {rad.radical}
              </span>
              {rad.variants && (
                <div className="text-[10px] text-slate-400 mt-0.5">
                  Biến thể: {rad.variants.join(', ')}
                </div>
              )}
            </div>

            <div className="text-center mt-2 pt-2 border-t border-slate-100 dark:border-slate-800/80">
              <div className="font-extrabold text-xs text-blue-600 dark:text-blue-400">
                {rad.hanViet}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-2">
                {rad.meaning}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
