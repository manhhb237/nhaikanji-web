import React, { useState, useMemo } from 'react';
import { KANJI_DATA } from '../../data/kanjiData';
import type { KanjiItem, JLPTLevel } from '../../types/kanji';
import { KanjiCard } from './KanjiCard';
import { KanjiDetailModal } from './KanjiDetailModal';
import { CanvasPad } from './CanvasPad';
import { useUser } from '../../context/UserContext';
import { 
  Search, 
  PenTool, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  BookOpen
} from 'lucide-react';

export const KanjiHome: React.FC = () => {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'all' | 'favorite' | 'learned'>('all');
  const [showCanvas, setShowCanvas] = useState(false);
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem | null>(null);

  const filteredKanji = useMemo(() => {
    return KANJI_DATA.filter((k) => {
      const matchSearch =
        k.kanji.includes(searchTerm) ||
        k.hanViet.toLowerCase().includes(searchTerm.toLowerCase()) ||
        k.onyomi.some(on => on.toLowerCase().includes(searchTerm.toLowerCase())) ||
        k.kunyomi.some(kun => kun.toLowerCase().includes(searchTerm.toLowerCase())) ||
        k.compounds.some(c => c.word.includes(searchTerm) || c.meaning.toLowerCase().includes(searchTerm.toLowerCase()));

      let matchFilter = true;
      if (selectedLevel === 'favorite') {
        matchFilter = user.favoriteKanjiIds.includes(k.id);
      } else if (selectedLevel === 'learned') {
        matchFilter = user.learnedKanjiIds.includes(k.id);
      } else if (selectedLevel !== 'all') {
        matchFilter = k.level === selectedLevel;
      }

      return matchSearch && matchFilter;
    });
  }, [searchTerm, selectedLevel, user.favoriteKanjiIds, user.learnedKanjiIds]);

  return (
    <div className="space-y-6">
      {/* Hero Search & Title Section */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 rounded-3xl p-6 sm:p-10 text-white shadow-xl relative overflow-hidden">
        {/* Subtle background graphics */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none flex items-center justify-center">
          <span className="text-[200px] font-black font-japanese">漢</span>
        </div>

        <div className="relative z-10 max-w-2xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Phương Pháp Chiết Tự Độc Quyền</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
            Xóa Mù Kanji Qua Sơ Đồ Tư Duy & Bản Chất
          </h1>

          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Học chữ Hán không còn là học vẹt. Bóc tách từng bộ phận, giải mã câu chuyện hình tượng và ghi nhớ sâu sắc theo chuẩn khoa học não bộ.
          </p>

          {/* Search Bar */}
          <div className="pt-2">
            <div className="relative flex items-center">
              <Search className="absolute left-4 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Tra theo Hán Việt (NHẬT, THỦY, ÁI...), Hiragana, Kanji hoặc Nghĩa từ ghép..."
                className="w-full pl-12 pr-28 py-3.5 rounded-2xl bg-white dark:bg-[#111827] text-slate-900 dark:text-white placeholder-slate-400 text-xs sm:text-sm font-medium shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all"
              />
              <button
                onClick={() => setShowCanvas(!showCanvas)}
                className={`absolute right-2 px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  showCanvas
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200'
                }`}
              >
                <PenTool className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{showCanvas ? 'Đóng bảng vẽ' : 'Vẽ Kanji'}</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Handwriting Canvas Pad Collapsible */}
      {showCanvas && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <CanvasPad
            kanjiList={KANJI_DATA}
            onSelectKanji={(k) => setSelectedKanji(k)}
          />
        </div>
      )}

      {/* Filter Tabs Bar */}
      <div className="flex items-center justify-between gap-3 overflow-x-auto pb-1">
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSelectedLevel('all')}
            className={`px-4 py-2 rounded-2xl text-xs font-bold transition-all shrink-0 ${
              selectedLevel === 'all'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
            }`}
          >
            Tất cả ({KANJI_DATA.length})
          </button>

          {(['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all shrink-0 ${
                selectedLevel === lvl
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              {lvl}
            </button>
          ))}

          <button
            onClick={() => setSelectedLevel('favorite')}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
              selectedLevel === 'favorite'
                ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            <Star className="w-3.5 h-3.5" />
            <span>Yêu thích ({user.favoriteKanjiIds.length})</span>
          </button>

          <button
            onClick={() => setSelectedLevel('learned')}
            className={`px-3.5 py-2 rounded-2xl text-xs font-bold transition-all shrink-0 flex items-center gap-1 ${
              selectedLevel === 'learned'
                ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/25'
                : 'bg-white dark:bg-[#111827] text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-emerald-400'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Đã thuộc ({user.learnedKanjiIds.length})</span>
          </button>
        </div>
      </div>

      {/* Kanji Cards Grid */}
      {filteredKanji.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredKanji.map((kanji) => (
            <KanjiCard
              key={kanji.id}
              kanji={kanji}
              onClick={() => setSelectedKanji(kanji)}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 space-y-3">
          <BookOpen className="w-10 h-10 text-slate-400 mx-auto" />
          <h4 className="font-bold text-base text-slate-800 dark:text-slate-200">
            Không tìm thấy chữ Kanji phù hợp
          </h4>
          <p className="text-xs text-slate-400">
            Hãy thử tìm kiếm với từ khóa khác (ví dụ: NHẬT, THỦY, CÂY...) hoặc xóa bộ lọc.
          </p>
        </div>
      )}

      {/* Detail Chiết Tự Modal */}
      {selectedKanji && (
        <KanjiDetailModal
          kanji={selectedKanji}
          onClose={() => setSelectedKanji(null)}
          onOpenCanvas={() => {
            setSelectedKanji(null);
            setShowCanvas(true);
            window.scrollTo({ top: 180, behavior: 'smooth' });
          }}
        />
      )}
    </div>
  );
};
