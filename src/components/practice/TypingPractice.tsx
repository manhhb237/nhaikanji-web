import React, { useState, useEffect, useRef } from 'react';
import { VOCABULARY_DATA } from '../../data/curriculumData';
import { Keyboard, Flame, Trophy, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';

export const TypingPractice: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userInput, setUserInput] = useState('');
  const [streak, setStreak] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const practiceItems = VOCABULARY_DATA.slice(0, 20);
  const currentItem = practiceItems[currentIndex];

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentIndex]);

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setUserInput(val);

    const targetReading = currentItem.reading.toLowerCase();
    const targetRomaji = currentItem.romaji.toLowerCase();
    const cleanVal = val.trim().toLowerCase();

    if (cleanVal === targetReading || cleanVal === targetRomaji) {
      speak(currentItem.reading);
      setStreak(prev => prev + 1);
      setUserInput('');

      if (currentIndex + 1 < practiceItems.length) {
        setCurrentIndex(prev => prev + 1);
      } else {
        setIsCompleted(true);
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setUserInput('');
    setStreak(0);
    setIsCompleted(false);
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 space-y-3 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <Keyboard className="w-3.5 h-3.5 text-amber-300" />
            <span>Luyện Gõ Phản Xạ Nhớ Mặt Chữ (Typing Mode)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Gõ Phím Phản Xạ Từ Vựng
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed max-w-lg mx-auto">
            Nhìn mặt chữ Kanji hoặc Hán Việt, gõ nhanh Hiragana hoặc Romaji trên bàn phím để kích hoạt phản xạ nhớ sâu.
          </p>
        </div>
      </div>

      {!isCompleted && currentItem ? (
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-10 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 text-center">
          {/* Stats Bar */}
          <div className="flex items-center justify-between text-xs font-bold text-slate-400 border-b border-slate-100 dark:border-slate-800 pb-3">
            <span>Từ {currentIndex + 1} / {practiceItems.length}</span>
            <span className="flex items-center gap-1 text-orange-500">
              <Flame className="w-4 h-4 fill-orange-500" /> Combo {streak}
            </span>
          </div>

          {/* Big Kanji Display */}
          <div className="space-y-2 py-4">
            <div className="text-6xl sm:text-8xl font-black font-japanese text-slate-900 dark:text-white">
              {currentItem.word}
            </div>
            <div className="text-sm font-extrabold text-blue-600 dark:text-blue-400">
              Nghĩa: {currentItem.meaning}
            </div>
            {currentItem.hanViet && (
              <div className="text-xs font-bold text-slate-400">
                Hán Việt: {currentItem.hanViet}
              </div>
            )}
          </div>

          {/* Input Box */}
          <div className="max-w-md mx-auto space-y-3">
            <input
              ref={inputRef}
              type="text"
              value={userInput}
              onChange={handleInputChange}
              placeholder={`Gõ "${currentItem.romaji}" hoặc "${currentItem.reading}"...`}
              className="w-full px-6 py-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border-2 border-blue-500/50 focus:border-blue-500 text-center text-xl font-bold text-slate-900 dark:text-white focus:outline-none transition-all shadow-inner font-japanese"
            />
            <p className="text-[11px] text-slate-400">
              Mẹo: Có thể gõ bằng Romaji hoặc bộ gõ tiếng Nhật.
            </p>
          </div>
        </div>
      ) : (
        /* Completed Screen */
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-8 border border-slate-200 dark:border-slate-800 shadow-xl text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto shadow-xl">
            <Trophy className="w-10 h-10" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
              Xuất Sắc! Bạn Đã Hoàn Thành Phiên Gõ Phím!
            </h3>
            <p className="text-xs text-slate-400">
              Đạt độ chính xác 100% qua {practiceItems.length} từ vựng.
            </p>
          </div>

          <button
            onClick={handleRestart}
            className="px-8 py-3 rounded-2xl bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/25 active:scale-95 transition-all inline-flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Luyện Tập Lại</span>
          </button>
        </div>
      )}
    </div>
  );
};
