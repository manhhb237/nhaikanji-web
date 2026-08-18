import React, { useState } from 'react';
import { KANJI_DATA } from '../../data/kanjiData';
import type { KanjiItem } from '../../types/kanji';
import { useUser } from '../../context/UserContext';
import { 
  RotateCw, 
  Volume2, 
  Sparkles, 
  Layers, 
  Flame,
  RefreshCw,
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const SRSFlashcard: React.FC = () => {
  const { user, markAsLearned } = useUser();
  const [deck] = useState<KanjiItem[]>(KANJI_DATA);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionLearnedCount, setSessionLearnedCount] = useState(0);
  const [completed, setCompleted] = useState(false);

  const currentKanji = deck[currentIndex];

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleReview = (quality: 'again' | 'good' | 'easy') => {
    if (quality === 'easy' || quality === 'good') {
      markAsLearned(currentKanji.id);
      setSessionLearnedCount(prev => prev + 1);
    }

    if (currentIndex + 1 < deck.length) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 150);
    } else {
      setCompleted(true);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    }
  };

  const restartDeck = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
    setSessionLearnedCount(0);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header Widget */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-3 rounded-2xl bg-blue-500/10 text-blue-500">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Luyện Tập Flashcard SRS</h2>
            <p className="text-xs text-slate-400">Phương pháp lặp lại ngắt quãng (Spaced Repetition)</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="text-right">
            <div className="text-xs text-slate-400 font-medium">Tiến độ thẻ</div>
            <div className="font-extrabold text-sm text-blue-600 dark:text-blue-400">
              {currentIndex + 1} / {deck.length}
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${((currentIndex + (completed ? 1 : 0)) / deck.length) * 100}%` }}
        />
      </div>

      {!completed && currentKanji ? (
        <div className="space-y-6">
          {/* Flashcard 3D Container */}
          <div className="perspective-1000 min-h-[380px] sm:min-h-[420px] cursor-pointer select-none" onClick={handleFlip}>
            <div
              className={`relative w-full h-full min-h-[380px] sm:min-h-[420px] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl transition-transform duration-500 transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* FRONT SIDE */}
              <div className="absolute inset-0 w-full h-full bg-white dark:bg-[#111827] rounded-3xl p-8 backface-hidden flex flex-col justify-between items-center text-center">
                <div className="w-full flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {currentKanji.level}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <RotateCw className="w-3.5 h-3.5" /> Chạm thẻ để lật
                  </span>
                </div>

                <div className="my-auto space-y-3">
                  <div className="text-8xl sm:text-9xl font-black font-japanese text-slate-900 dark:text-white hover:scale-105 transition-transform">
                    {currentKanji.kanji}
                  </div>
                  <div className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-wider">
                    {currentKanji.hanViet}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {currentKanji.strokes} nét • {currentKanji.radicalName}
                  </div>
                </div>

                <div className="text-xs text-slate-400 font-medium">
                  Bạn có nhớ cấu tạo chiết tự và nghĩa của chữ này không?
                </div>
              </div>

              {/* BACK SIDE */}
              <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 backface-hidden rotate-y-180 flex flex-col justify-between overflow-y-auto">
                <div className="space-y-4">
                  {/* Top Bar on Back */}
                  <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl font-black font-japanese text-blue-600 dark:text-blue-400">
                        {currentKanji.kanji}
                      </span>
                      <div>
                        <div className="font-extrabold text-base text-slate-900 dark:text-white">
                          {currentKanji.hanViet}
                        </div>
                        <div className="text-[11px] text-slate-400">
                          On: {currentKanji.onyomi.join(', ') || '-'} • Kun: {currentKanji.kunyomi.join(', ') || '-'}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        speakText(currentKanji.kunyomi[0] || currentKanji.kanji);
                      }}
                      className="p-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-500"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Chiết tự Breakdown */}
                  <div>
                    <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Sơ đồ chiết tự:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {currentKanji.breakdown.map((b, i) => (
                        <div key={i} className="p-2 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs">
                          <span className="font-bold text-blue-600 dark:text-blue-400 font-japanese mr-1">
                            {b.radical}
                          </span>
                          <span className="font-bold text-slate-700 dark:text-slate-200">{b.name}:</span>
                          <div className="text-[11px] text-slate-400 mt-0.5">{b.meaning}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Mnemonic Story */}
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-700 dark:text-slate-300 font-medium">
                    <strong className="text-amber-500">Mẹo nhớ:</strong> {currentKanji.mnemonic}
                  </div>
                </div>

                <div className="text-center text-[11px] text-slate-400 pt-2">
                  Đánh giá mức độ ghi nhớ của bạn bên dưới:
                </div>
              </div>
            </div>
          </div>

          {/* SRS Assessment Action Buttons */}
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => handleReview('again')}
              className="py-3 px-2 rounded-2xl bg-rose-500/10 hover:bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30 font-bold text-xs sm:text-sm transition-all active:scale-95 flex flex-col items-center justify-center gap-0.5"
            >
              <span>Chưa Nhớ</span>
              <span className="text-[10px] opacity-70 font-normal">Học lại ngay</span>
            </button>

            <button
              onClick={() => handleReview('good')}
              className="py-3 px-2 rounded-2xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 font-bold text-xs sm:text-sm transition-all active:scale-95 flex flex-col items-center justify-center gap-0.5"
            >
              <span>Đang Nhớ</span>
              <span className="text-[10px] opacity-70 font-normal">Ôn sau 3 ngày</span>
            </button>

            <button
              onClick={() => handleReview('easy')}
              className="py-3 px-2 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 font-bold text-xs sm:text-sm transition-all active:scale-95 flex flex-col items-center justify-center gap-0.5"
            >
              <span>Thuộc Làu</span>
              <span className="text-[10px] opacity-70 font-normal">Ôn sau 7 ngày</span>
            </button>
          </div>
        </div>
      ) : (
        /* Completed Deck View */
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6 animate-in zoom-in-95">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-amber-400 to-orange-500 mx-auto flex items-center justify-center text-white shadow-xl shadow-orange-500/30">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Hoàn Thành Phiên Luyện Tập Hôm Nay!
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
              Bạn đã ôn tập xuất sắc toàn bộ bộ thẻ chữ Hán theo phương pháp SRS. Duy trì chuỗi streak hàng ngày để biến kiến thức thành phản xạ tự nhiên.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-around max-w-sm mx-auto">
            <div>
              <div className="text-xs text-slate-400">Đã củng cố</div>
              <div className="font-bold text-lg text-slate-800 dark:text-slate-200">{sessionLearnedCount} chữ</div>
            </div>
            <div className="w-px h-8 bg-slate-200 dark:bg-slate-800" />
            <div>
              <div className="text-xs text-slate-400">Chuỗi Streak</div>
              <div className="font-bold text-lg text-orange-500 flex items-center justify-center gap-1">
                <Flame className="w-4 h-4 fill-orange-500" /> {user.streakDays} ngày
              </div>
            </div>
          </div>

          <button
            onClick={restartDeck}
            className="px-8 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Luyện Tập Lại Bộ Thẻ</span>
          </button>
        </div>
      )}
    </div>
  );
};
