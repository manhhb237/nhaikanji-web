import React, { useState } from 'react';
import type { KanjiItem } from '../../types/kanji';
import { useUser } from '../../context/UserContext';
import { 
  X, 
  Volume2, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Layers, 
  GitFork, 
  BookOpen, 
  PenTool,
  Copy,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface KanjiDetailModalProps {
  kanji: KanjiItem | null;
  onClose: () => void;
  onOpenCanvas?: () => void;
}

export const KanjiDetailModal: React.FC<KanjiDetailModalProps> = ({ kanji, onClose, onOpenCanvas }) => {
  const { user, toggleFavorite, markAsLearned, setActiveTab } = useUser();
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTabLocal] = useState<'mindmap' | 'compounds'>('mindmap');

  if (!kanji) return null;

  const isLearned = user.learnedKanjiIds.includes(kanji.id);
  const isFavorite = user.favoriteKanjiIds.includes(kanji.id);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleMarkLearned = () => {
    markAsLearned(kanji.id);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.7 }
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(`${kanji.kanji} - ${kanji.hanViet} (${kanji.onyomi.join(', ')})`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden my-8">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-600 text-white">
              {kanji.level}
            </span>
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Chi Tiết Hán Tự & Sơ Đồ Chiết Tự
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleCopy}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Sao chép chữ"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
            </button>
            <button
              onClick={() => toggleFavorite(kanji.id)}
              className="p-2 rounded-xl text-slate-400 hover:text-amber-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Yêu thích"
            >
              <Star className={`w-4 h-4 ${isFavorite ? 'text-amber-400 fill-amber-400' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6">
          {/* Header Kanji Hero Banner */}
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-purple-500/10 border border-blue-500/20">
            {/* Big Kanji Character */}
            <div className="relative group">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-white dark:bg-slate-900 border-2 border-blue-500/40 flex items-center justify-center shadow-xl shadow-blue-500/10">
                <span className="text-7xl font-black font-japanese text-slate-900 dark:text-white">
                  {kanji.kanji}
                </span>
              </div>
              <button
                onClick={() => speakText(kanji.kunyomi[0] || kanji.kanji)}
                className="absolute -bottom-2 -right-2 p-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white shadow-lg transition-transform active:scale-90"
                title="Nghe phát âm"
              >
                <Volume2 className="w-4 h-4" />
              </button>
            </div>

            {/* Kanji Key Info */}
            <div className="flex-1 text-center md:text-left space-y-2">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
                <h2 className="text-3xl font-black text-blue-600 dark:text-blue-400 tracking-wider">
                  {kanji.hanViet}
                </h2>
                <span className="text-xs px-2 py-0.5 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold">
                  {kanji.strokes} Nét
                </span>
                <span className="text-xs px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30 font-bold">
                  {kanji.radicalName}
                </span>
              </div>

              {/* Onyomi & Kunyomi Reading Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-rose-500 block mb-0.5">Âm On (Onyomi):</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">
                    {kanji.onyomi.join(', ') || 'Không có'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800">
                  <span className="font-bold text-emerald-500 block mb-0.5">Âm Kun (Kunyomi):</span>
                  <span className="font-semibold text-slate-700 dark:text-slate-200 text-sm">
                    {kanji.kunyomi.join(', ') || 'Không có'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTabLocal('mindmap')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
                activeTab === 'mindmap'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <GitFork className="w-4 h-4" />
              <span>Sơ Đồ Chiết Tự Tư Duy</span>
            </button>
            <button
              onClick={() => setActiveTabLocal('compounds')}
              className={`flex items-center gap-2 px-4 py-2.5 text-xs font-bold border-b-2 transition-all ${
                activeTab === 'compounds'
                  ? 'border-blue-600 text-blue-600 dark:text-blue-400'
                  : 'border-transparent text-slate-500 hover:text-slate-700 dark:hover:text-slate-300'
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Từ Ghép Thông Dụng ({kanji.compounds.length})</span>
            </button>
          </div>

          {/* TAB 1: Sơ đồ Chiết Tự & Mnemonic Story */}
          {activeTab === 'mindmap' && (
            <div className="space-y-6">
              {/* Sơ đồ tư duy Mindmap Tree */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1 rounded-md bg-indigo-500/10 text-indigo-500">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                    Bóc tách cấu tạo các bộ phận (Chiết tự)
                  </h3>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  {/* Tree Visual Flow */}
                  <div className="flex flex-col items-center">
                    {/* Root Character */}
                    <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-base shadow-lg shadow-blue-500/20 mb-4">
                      <span className="text-xl font-japanese">{kanji.kanji}</span>
                      <span>({kanji.hanViet})</span>
                    </div>

                    {/* Connecting Line */}
                    <div className="w-0.5 h-6 bg-blue-500/40 mb-2" />

                    {/* Sub-Radicals Branches */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 w-full">
                      {kanji.breakdown.map((part, index) => (
                        <div
                          key={index}
                          className="p-3.5 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 shadow-sm flex items-start gap-3 hover:border-blue-500/50 transition-colors"
                        >
                          <div className="w-9 h-9 rounded-lg bg-blue-50 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold text-lg font-japanese shrink-0">
                            {part.radical}
                          </div>
                          <div>
                            <div className="font-bold text-xs text-slate-800 dark:text-slate-200">{part.name}</div>
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">{part.meaning}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Câu chuyện gợi nhớ Mnemonic */}
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <div className="flex items-center gap-2 mb-2 text-amber-600 dark:text-amber-400">
                  <Sparkles className="w-4 h-4 fill-amber-500" />
                  <h4 className="font-bold text-xs uppercase tracking-wider">Mẹo Nhớ Bản Chất ("Xóa Mù Kanji")</h4>
                </div>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">
                  {kanji.mnemonic}
                </p>
              </div>
            </div>
          )}

          {/* TAB 2: Từ ghép thông dụng */}
          {activeTab === 'compounds' && (
            <div className="space-y-3">
              {kanji.compounds.map((comp, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4 hover:border-blue-500/40 transition-colors"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="font-black text-lg font-japanese text-slate-900 dark:text-white">
                        {comp.word}
                      </span>
                      <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                        {comp.reading}
                      </span>
                      {comp.level && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold">
                          {comp.level}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-medium">
                      {comp.meaning}
                    </p>
                  </div>

                  <button
                    onClick={() => speakText(comp.word)}
                    className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/40 text-slate-500 hover:text-blue-600 transition-colors shrink-0 shadow-sm"
                    title="Phát âm từ này"
                  >
                    <Volume2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/50 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                setActiveTab('flashcard');
              }}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
            >
              <Layers className="w-4 h-4 text-blue-500" />
              <span>Ôn tập Flashcard</span>
            </button>

            {onOpenCanvas && (
              <button
                onClick={() => {
                  onClose();
                  onOpenCanvas();
                }}
                className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold transition-all"
              >
                <PenTool className="w-4 h-4 text-emerald-500" />
                <span>Luyện vẽ nét</span>
              </button>
            )}
          </div>

          <button
            onClick={handleMarkLearned}
            className={`flex items-center gap-1.5 px-5 py-2 rounded-xl font-bold text-xs shadow-lg transition-all active:scale-95 ${
              isLearned
                ? 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/20'
                : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/20'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{isLearned ? 'Đã Ghi Nhớ Chữ Này' : 'Đánh Dấu Đã Thuộc'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
