import React, { useState, useMemo, useEffect } from 'react';
import { KANJI_DATA } from '../../data/kanjiData';
import { VOCABULARY_DATA } from '../../data/curriculumData';
import { GRAMMAR_DATA } from '../../data/grammarData';
import type { JLPTLevel } from '../../types/kanji';
import { useUser } from '../../context/UserContext';
import { 
  RotateCw, 
  Volume2, 
  Sparkles, 
  Layers, 
  RefreshCw, 
  Trophy, 
  Gamepad2, 
  BookOpen, 
  BrainCircuit,
  Bookmark,
  CheckCircle2,
  Timer
} from 'lucide-react';
import confetti from 'canvas-confetti';

type StudyMode = 'flashcard' | 'match';
type DeckType = 'kanji' | 'vocab' | 'grammar';

interface UnifiedCard {
  id: string;
  frontTitle: string;
  frontSub?: string;
  hanViet?: string;
  level: JLPTLevel;
  backTitle: string;
  backDetails?: string[];
  mnemonic?: string;
  audioText: string;
}

export const SRSFlashcard: React.FC = () => {
  const { markAsLearned } = useUser();
  const [deckType, setDeckType] = useState<DeckType>('kanji');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'all'>('all');
  const [mode, setMode] = useState<StudyMode>('flashcard');

  // Flashcard Mode State
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  // Match Game State
  const [matchedPairs, setMatchedPairs] = useState<string[]>([]);
  const [selectedMatchFirst, setSelectedMatchFirst] = useState<{ id: string; text: string; type: 'word' | 'meaning' } | null>(null);
  const [matchScore, setMatchScore] = useState(0);
  const [matchTime, setMatchTime] = useState(0);
  const [matchActive, setMatchActive] = useState(false);

  // Build unified deck based on user selection
  const rawCards: UnifiedCard[] = useMemo(() => {
    if (deckType === 'kanji') {
      return KANJI_DATA.map(k => ({
        id: k.id,
        frontTitle: k.kanji,
        frontSub: `On: ${k.onyomi.join(', ') || '-'} | Kun: ${k.kunyomi.join(', ') || '-'}`,
        hanViet: k.hanViet,
        level: k.level,
        backTitle: k.hanViet,
        backDetails: k.breakdown.map(b => `${b.radical} ${b.name} (${b.meaning})`),
        mnemonic: k.mnemonic,
        audioText: k.kunyomi[0] || k.kanji
      }));
    } else if (deckType === 'vocab') {
      return VOCABULARY_DATA.map(v => ({
        id: v.id,
        frontTitle: v.word,
        frontSub: v.reading,
        hanViet: v.hanViet,
        level: v.level,
        backTitle: v.meaning,
        backDetails: v.exampleSentence ? [`VD: ${v.exampleSentence.japanese}`, v.exampleSentence.vietnamese] : undefined,
        audioText: v.reading || v.word
      }));
    } else {
      return GRAMMAR_DATA.map(g => ({
        id: g.id,
        frontTitle: g.pattern,
        frontSub: g.formation,
        level: g.level,
        backTitle: g.vietnameseMeaning,
        backDetails: [g.explanation, ...g.examples.map(e => `${e.japanese} -> ${e.vietnamese}`)],
        audioText: g.pattern
      }));
    }
  }, [deckType]);

  const deck = useMemo(() => {
    return rawCards.filter(c => {
      const matchLevel = selectedLevel === 'all' || c.level === selectedLevel;
      return matchLevel;
    });
  }, [rawCards, selectedLevel]);

  const currentCard = deck[currentIndex];

  // Match Game Cards (6 pairs)
  const matchCards = useMemo(() => {
    const subset = deck.slice(0, 6);
    const words = subset.map(c => ({ id: c.id, text: c.frontTitle, type: 'word' as const }));
    const meanings = subset.map(c => ({ id: c.id, text: c.backTitle, type: 'meaning' as const }));
    return [...words, ...meanings].sort(() => 0.5 - Math.random());
  }, [deck, matchActive]);

  // Match Game Timer
  useEffect(() => {
    let interval: any = null;
    if (mode === 'match' && matchActive && matchedPairs.length < Math.min(deck.length, 6)) {
      interval = setInterval(() => {
        setMatchTime(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [mode, matchActive, matchedPairs.length, deck.length]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleReview = (quality: 'again' | 'good' | 'easy') => {
    if (quality === 'easy' || quality === 'good') {
      if (currentCard) {
        markAsLearned(currentCard.id);
      }
    }

    if (currentIndex + 1 < deck.length) {
      setIsFlipped(false);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
      }, 150);
    } else {
      setCompleted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }
  };

  const restartDeck = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
  };

  // Match Game Handling
  const handleMatchClick = (item: { id: string; text: string; type: 'word' | 'meaning' }) => {
    if (matchedPairs.includes(item.id)) return;

    if (!selectedMatchFirst) {
      setSelectedMatchFirst(item);
    } else {
      if (selectedMatchFirst.type !== item.type && selectedMatchFirst.id === item.id) {
        // Correct match!
        setMatchedPairs(prev => [...prev, item.id]);
        setMatchScore(prev => prev + 100);
        setSelectedMatchFirst(null);
        if (matchedPairs.length + 1 === Math.min(deck.length, 6)) {
          confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        }
      } else {
        // Wrong match
        setSelectedMatchFirst(null);
      }
    }
  };

  const startMatchGame = () => {
    setMatchedPairs([]);
    setSelectedMatchFirst(null);
    setMatchScore(0);
    setMatchTime(0);
    setMatchActive(true);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Top Deck Switcher & Mode Header */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-5 sm:p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Deck Type Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-800 rounded-2xl">
            <button
              onClick={() => {
                setDeckType('kanji');
                restartDeck();
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                deckType === 'kanji'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Bộ Hán Tự (Kanji)</span>
            </button>

            <button
              onClick={() => {
                setDeckType('vocab');
                restartDeck();
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                deckType === 'vocab'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Bộ Từ Vựng Giáo Trình</span>
            </button>

            <button
              onClick={() => {
                setDeckType('grammar');
                restartDeck();
              }}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-xl font-bold text-xs transition-all ${
                deckType === 'grammar'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              <BrainCircuit className="w-3.5 h-3.5" />
              <span>Bộ Ngữ Pháp JLPT</span>
            </button>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-1">
            <button
              onClick={() => setMode('flashcard')}
              className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                mode === 'flashcard'
                  ? 'bg-indigo-50 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-400 border border-indigo-500/30'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              title="Lật thẻ Flashcard 3D"
            >
              <Layers className="w-4 h-4" />
              <span className="hidden sm:inline">Lật Thẻ SRS</span>
            </button>

            <button
              onClick={() => {
                setMode('match');
                startMatchGame();
              }}
              className={`p-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1 ${
                mode === 'match'
                  ? 'bg-amber-50 dark:bg-amber-900/40 text-amber-600 dark:text-amber-400 border border-amber-500/30'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
              title="Trò chơi Ghép Thẻ Trí Nhớ"
            >
              <Gamepad2 className="w-4 h-4" />
              <span className="hidden sm:inline">Ghép Thẻ Game</span>
            </button>
          </div>
        </div>

        {/* Level Filters */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 mr-1">Cấp độ:</span>
            {(['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as (JLPTLevel | 'all')[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => {
                  setSelectedLevel(lvl);
                  restartDeck();
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {lvl === 'all' ? 'Tất cả' : lvl}
              </button>
            ))}
          </div>

          <div className="text-xs font-bold text-blue-600 dark:text-blue-400 shrink-0">
            {deck.length} thẻ khả dụng
          </div>
        </div>
      </div>

      {/* MODE 1: FLASHCARD SRS */}
      {mode === 'flashcard' && (
        <div className="space-y-6">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
              style={{ width: `${deck.length ? ((currentIndex + (completed ? 1 : 0)) / deck.length) * 100 : 0}%` }}
            />
          </div>

          {!completed && currentCard ? (
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
                        {currentCard.level}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                        <RotateCw className="w-3.5 h-3.5" /> Chạm thẻ để lật
                      </span>
                    </div>

                    <div className="my-auto space-y-3">
                      <div className="text-6xl sm:text-8xl font-black font-japanese text-slate-900 dark:text-white hover:scale-105 transition-transform">
                        {currentCard.frontTitle}
                      </div>
                      {currentCard.frontSub && (
                        <div className="text-base font-bold text-blue-600 dark:text-blue-400">
                          {currentCard.frontSub}
                        </div>
                      )}
                      {currentCard.hanViet && (
                        <div className="text-xs font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 inline-block border border-amber-500/30 uppercase">
                          Hán Việt: {currentCard.hanViet}
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-slate-400 font-medium">
                      Thẻ {currentIndex + 1} / {deck.length}
                    </div>
                  </div>

                  {/* BACK SIDE */}
                  <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-900 rounded-3xl p-6 sm:p-8 backface-hidden rotate-y-180 flex flex-col justify-between overflow-y-auto">
                    <div className="space-y-4">
                      {/* Top Bar on Back */}
                      <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-3xl font-black font-japanese text-blue-600 dark:text-blue-400">
                            {currentCard.frontTitle}
                          </span>
                          <div>
                            <div className="font-extrabold text-base text-slate-900 dark:text-white">
                              {currentCard.backTitle}
                            </div>
                            <div className="text-[11px] text-slate-400">
                              {currentCard.frontSub || '-'}
                            </div>
                          </div>
                        </div>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            speakText(currentCard.audioText);
                          }}
                          className="p-2 rounded-xl bg-blue-600 text-white shadow hover:bg-blue-500"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Chiết tự / Chi tiết */}
                      {currentCard.backDetails && currentCard.backDetails.length > 0 && (
                        <div>
                          <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                            <Sparkles className="w-3.5 h-3.5 text-indigo-500" /> Chi tiết bóc tách:
                          </div>
                          <div className="space-y-1">
                            {currentCard.backDetails.map((det, i) => (
                              <div key={i} className="p-2 rounded-xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300">
                                {det}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Mnemonic Story */}
                      {currentCard.mnemonic && (
                        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-slate-700 dark:text-slate-300 font-medium">
                          <strong className="text-amber-500">Mẹo nhớ:</strong> {currentCard.mnemonic}
                        </div>
                      )}
                    </div>

                    <div className="text-center text-[11px] text-slate-400 pt-2">
                      Đánh giá mức độ ghi nhớ của bạn bên dưới:
                    </div>
                  </div>
                </div>
              </div>

              {/* SRS Assessment Buttons */}
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
                  Hoàn Thành Phiên Ôn Tập!
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 max-w-md mx-auto">
                  Bạn đã ôn tập xuất sắc toàn bộ bộ thẻ theo chu kỳ Spaced Repetition.
                </p>
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
      )}

      {/* MODE 2: MATCH CARDS GAME */}
      {mode === 'match' && (
        <div className="space-y-6">
          {/* Game Stats Bar */}
          <div className="flex items-center justify-between p-4 bg-white dark:bg-[#111827] rounded-2xl border border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <Timer className="w-4 h-4 text-blue-500" />
              <span className="font-mono text-sm font-bold text-slate-900 dark:text-white">{matchTime}s</span>
            </div>

            <div className="text-sm font-bold text-amber-500 flex items-center gap-1">
              <Trophy className="w-4 h-4" /> Điểm: {matchScore}
            </div>

            <button
              onClick={startMatchGame}
              className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-bold text-slate-700 dark:text-slate-300 hover:bg-slate-200"
            >
              Chơi Lại
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {matchCards.map((card, idx) => {
              const isMatched = matchedPairs.includes(card.id);
              const isSelected = selectedMatchFirst?.text === card.text;

              if (isMatched) {
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center opacity-40 select-none min-h-[90px]"
                  >
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                );
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleMatchClick(card)}
                  className={`p-4 rounded-2xl border font-bold text-center transition-all min-h-[90px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                      : 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 hover:border-blue-400 text-slate-900 dark:text-white shadow-sm'
                  }`}
                >
                  <span className={card.type === 'word' ? 'text-xl sm:text-2xl font-japanese' : 'text-xs sm:text-sm leading-tight'}>
                    {card.text}
                  </span>
                </button>
              );
            })}
          </div>

          {matchedPairs.length === Math.min(deck.length, 6) && (
            <div className="p-6 bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 text-center space-y-3">
              <Trophy className="w-10 h-10 text-amber-500 mx-auto" />
              <h4 className="font-extrabold text-lg text-slate-900 dark:text-white">Chiến Thắng Trò Chơi Ghép Thẻ!</h4>
              <p className="text-xs text-slate-400">Thời gian hoàn thành: {matchTime} giây với {matchScore} điểm.</p>
              <button
                onClick={startMatchGame}
                className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Chơi Ván Mới
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
