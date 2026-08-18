import React, { useState, useEffect, useRef } from 'react';
import { 
  MIMIKARA_N3_UNITS, 
  MIMIKARA_N3_WORDS, 
  type MimikaraUnit,
  type MimikaraWord
} from '../../data/mimikaraN3FullData';
import { ALL_CURRICULA_BOOKS, type CurriculumBook } from '../../data/tangoCurriculaData';
import { 
  Headphones, 
  Crown, 
  ArrowLeft, 
  Volume2, 
  RotateCcw, 
  Play, 
  Pause,
  Shuffle, 
  Maximize2, 
  Minimize2,
  Settings, 
  Star, 
  Check, 
  X, 
  FileText, 
  MessageSquare, 
  Layers, 
  HelpCircle, 
  Zap, 
  Languages, 
  ChevronLeft, 
  ChevronRight,
  FolderOpen,
  Send,
  Printer,
  Mic,
  MicOff,
  Flame,
  BookmarkPlus
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useUser } from '../../context/UserContext';

type VocabViewStage = 'curriculum-select' | 'unit-select' | 'unit-study';
type StudyMode = 'flashcard' | 'quiz' | 'cram' | 'translate' | 'shadowing';

// Pitch Accent Formatter Helper
const renderPitchAccent = (reading: string, pitchPattern?: string) => {
  if (!pitchPattern || !pitchPattern.includes('[')) {
    return <span>{reading}</span>;
  }
  const match = pitchPattern.match(/^(.*?)\[(.*?)\](.*)$/);
  if (!match) return <span>{reading}</span>;

  const [_, before, high, after] = match;
  return (
    <span className="inline-flex items-baseline font-japanese">
      {before && <span className="text-slate-400">{before}</span>}
      <span className="border-t-2 border-r-2 border-amber-500 text-slate-100 font-bold px-0.5 pt-0.5">
        {high}
      </span>
      {after && <span className="text-slate-400">{after}</span>}
    </span>
  );
};

export const NhaiKanjiVocabHub: React.FC = () => {
  const { addExp } = useUser();
  const [stage, setStage] = useState<VocabViewStage>('curriculum-select');
  const [selectedBook, setSelectedBook] = useState<CurriculumBook>(ALL_CURRICULA_BOOKS.find(b => b.id === 'mimikara-n3') || ALL_CURRICULA_BOOKS[4]);
  const [selectedUnit, setSelectedUnit] = useState<MimikaraUnit>(MIMIKARA_N3_UNITS[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeMode, setActiveMode] = useState<StudyMode>('flashcard');
  const [modeType, setModeType] = useState<'single' | 'example'>('single');
  const [flipDirection, setFlipDirection] = useState<'JP_VI' | 'VI_JP'>('JP_VI');
  const [favoriteWordIds, setFavoriteWordIds] = useState<string[]>(() => {
    const saved = localStorage.getItem('nhaikanji_fav_words');
    return saved ? JSON.parse(saved) : [];
  });
  const [customDeckWords, setCustomDeckWords] = useState<MimikaraWord[]>(() => {
    const saved = localStorage.getItem('nhaikanji_custom_deck');
    return saved ? JSON.parse(saved) : [];
  });
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [autoPlaySpeed, setAutoPlaySpeed] = useState<number>(3000); // 3s
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');
  
  // Shadowing & audio speed
  const [audioSpeed, setAudioSpeed] = useState<number>(1.0);
  const [isRecording, setIsRecording] = useState(false);

  // Quiz state
  const [quizScore, setQuizScore] = useState(0);
  const [quizStreak, setQuizStreak] = useState(0);
  const [selectedQuizChoice, setSelectedQuizChoice] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const unitWords = MIMIKARA_N3_WORDS.filter(w => w.unit === selectedUnit.id);
  const currentWord = unitWords[currentWordIndex] || unitWords[0];

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('nhaikanji_fav_words', JSON.stringify(favoriteWordIds));
  }, [favoriteWordIds]);

  // Save custom deck
  useEffect(() => {
    localStorage.setItem('nhaikanji_custom_deck', JSON.stringify(customDeckWords));
  }, [customDeckWords]);

  // Audio Speech Synthesis
  const speak = (text: string, rate: number = audioSpeed) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = rate;
      window.speechSynthesis.speak(u);
    }
  };

  const toggleFavorite = (id: string) => {
    setFavoriteWordIds(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    );
  };

  const addToCustomDeck = (word: MimikaraWord) => {
    if (!customDeckWords.some(w => w.id === word.id)) {
      setCustomDeckWords(prev => [...prev, word]);
      addExp(10);
      alert(`Đã thêm từ "${word.word}" vào Bộ Thẻ Riêng Của Bạn! (+10 EXP)`);
    } else {
      alert(`Từ "${word.word}" đã có trong Bộ Thẻ Riêng.`);
    }
  };

  // Keyboard shortcut support: Space (flip), Z (know), X (don't know), C (add to deck), R (audio)
  useEffect(() => {
    if (stage !== 'unit-study') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        handleNextWord(true);
      } else if (e.key === 'x' || e.key === 'X') {
        e.preventDefault();
        handleNextWord(false);
      } else if (e.key === 'c' || e.key === 'C') {
        e.preventDefault();
        if (currentWord) addToCustomDeck(currentWord);
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (currentWord) speak(currentWord.word);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, currentWordIndex, unitWords, currentWord, audioSpeed]);

  // Auto-play timer
  useEffect(() => {
    let timer: any;
    if (isAutoPlaying && stage === 'unit-study' && activeMode === 'flashcard') {
      timer = setInterval(() => {
        setIsFlipped(prev => {
          if (!prev) {
            if (currentWord) speak(currentWord.word);
            return true;
          } else {
            handleNextWord(true);
            return false;
          }
        });
      }, autoPlaySpeed);
    }
    return () => clearInterval(timer);
  }, [isAutoPlaying, autoPlaySpeed, currentWordIndex, stage, activeMode]);

  const handleNextWord = (isKnown: boolean = true) => {
    if (isKnown) {
      addExp(5);
    }
    setIsFlipped(false);
    if (currentWordIndex + 1 < unitWords.length) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      alert('Chúc mừng! Bạn đã hoàn thành toàn bộ từ vựng của bài học này! (+50 EXP)');
      addExp(50);
    }
  };

  const handlePrevWord = () => {
    setIsFlipped(false);
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prev => prev - 1);
    }
  };

  const shuffleWords = () => {
    setCurrentWordIndex(Math.floor(Math.random() * unitWords.length));
    setIsFlipped(false);
  };

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) return;
    alert('Cảm ơn bạn đã gửi đóng góp phản hồi về từ vựng này!');
    setFeedbackText('');
    setIsFeedbackOpen(false);
  };

  // ================= STAGE 1: CURRICULUM SELECTOR (Screenshot 1) =================
  if (stage === 'curriculum-select') {
    const levels: Array<'N5' | 'N4' | 'N3' | 'N2' | 'N1'> = ['N5', 'N4', 'N3', 'N2', 'N1'];

    return (
      <div className="space-y-8 max-w-5xl mx-auto py-2">
        {levels.map(lvl => {
          const booksInLevel = ALL_CURRICULA_BOOKS.filter(b => b.level === lvl);
          if (booksInLevel.length === 0) return null;

          const levelColor = 
            lvl === 'N5' ? 'bg-amber-400' :
            lvl === 'N4' ? 'bg-purple-500' :
            lvl === 'N3' ? 'bg-emerald-500' :
            lvl === 'N2' ? 'bg-orange-500' : 'bg-red-500';

          return (
            <div key={lvl} className="space-y-3">
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-4 ${levelColor} rounded-full`} />
                <h3 className="text-sm font-extrabold text-slate-200 tracking-wide">{lvl}</h3>
                <span className="text-xs text-slate-400 font-medium">日本語能力試験 {lvl}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {booksInLevel.map(book => {
                  const isTango = book.id.includes('tango');
                  const isMimikara = book.id.includes('mimikara');

                  return (
                    <div
                      key={book.id}
                      onClick={() => {
                        setSelectedBook(book);
                        setStage('unit-select');
                      }}
                      className={`p-6 rounded-2xl text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg relative overflow-hidden group ${
                        isTango 
                          ? `bg-[#141b18] border-2 ${lvl === 'N5' ? 'border-amber-400 shadow-amber-500/10' : lvl === 'N4' ? 'border-purple-500 shadow-purple-500/10' : lvl === 'N3' ? 'border-emerald-500 shadow-emerald-500/10' : 'border-orange-500 shadow-orange-500/10'}`
                          : isMimikara
                          ? 'bg-gradient-to-r from-[#172520] to-[#1a382b] border border-emerald-600/40 shadow-emerald-500/15'
                          : 'bg-gradient-to-r from-emerald-800 to-teal-800 border border-emerald-600/30'
                      }`}
                    >
                      {book.hasHeadphones && (
                        <div className="absolute top-4 left-4 text-emerald-400">
                          <Headphones className="w-6 h-6" />
                        </div>
                      )}
                      <div className="text-xs text-slate-300 font-japanese">{book.japaneseTitle}</div>
                      <div className={`text-3xl font-black ${isMimikara ? 'text-red-500' : 'text-white'}`}>
                        {book.level}
                      </div>
                      <div className="text-sm font-extrabold text-emerald-400">
                        {book.wordCount} từ vựng
                      </div>
                      <div className="text-xs text-slate-400">{book.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  // ================= STAGE 2: UNIT LIST VIEW (Screenshot 2) =================
  if (stage === 'unit-select') {
    return (
      <div className="space-y-6 max-w-5xl mx-auto py-2">
        <button
          onClick={() => setStage('curriculum-select')}
          className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </button>

        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            {selectedBook.title}
          </h2>
          <p className="text-xs text-slate-400 mt-1">{selectedBook.totalLessons} bài học</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#161c28] border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>Tiến độ học</span>
            <span>0/{selectedBook.totalLessons} bài</span>
          </div>
          <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="w-0 h-full bg-blue-500" />
          </div>
          <div className="text-right text-[11px] text-slate-400">
            0% hoàn thành
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {MIMIKARA_N3_UNITS.map(unit => (
            <div
              key={unit.id}
              onClick={() => {
                setSelectedUnit(unit);
                setCurrentWordIndex(0);
                setIsFlipped(false);
                setStage('unit-study');
              }}
              className="p-4 rounded-xl bg-[#161c28] border border-slate-800/80 hover:border-blue-500 flex items-center justify-between cursor-pointer transition-all hover:bg-[#1a2232] group"
            >
              <div className="flex items-center gap-2.5">
                {unit.isPremium ? (
                  <Crown className="w-4 h-4 text-amber-400" />
                ) : (
                  <FileText className="w-4 h-4 text-slate-400" />
                )}
                <span className="text-xs sm:text-sm font-bold text-slate-200 group-hover:text-white transition-colors">
                  {unit.title} _ {unit.range}
                </span>
              </div>

              <div>
                {unit.isPremium ? (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 font-bold border border-amber-500/30">
                    Premium
                  </span>
                ) : (
                  <span className="text-xs text-slate-400 font-medium">
                    {unit.wordCount} từ
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="pt-2 text-center">
          <button 
            onClick={() => {
              setSelectedUnit(MIMIKARA_N3_UNITS[0]);
              setStage('unit-study');
              setActiveMode('flashcard');
            }}
            className="w-full py-3 rounded-xl border border-dashed border-blue-500/60 hover:bg-blue-500/10 text-blue-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
          >
            <FolderOpen className="w-4 h-4" />
            <span>Review Toàn Bộ Từ Vựng</span>
          </button>
        </div>
      </div>
    );
  }

  // ================= STAGE 3: UNIT STUDY & 5 MODES VIEW (Screenshots 3 & 4) =================
  return (
    <div 
      ref={containerRef}
      className={`space-y-6 max-w-5xl mx-auto py-2 ${
        isFullscreen ? 'fixed inset-0 z-50 bg-[#0f1420] p-6 overflow-y-auto max-w-none' : ''
      }`}
    >
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800 pb-3">
        <button
          onClick={() => setStage('unit-select')}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </button>

        <h3 className="font-extrabold text-sm text-slate-100 flex items-center gap-2">
          <span>{selectedBook.title} - {selectedUnit.title} _ {selectedUnit.range}</span>
          <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-bold">
            120 Từ Thực Tế
          </span>
        </h3>

        <div className="flex items-center gap-3">
          <button 
            onClick={() => setIsFeedbackOpen(true)}
            className="text-slate-400 hover:text-white flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Góp ý sửa lỗi</span>
          </button>
          <button 
            onClick={() => setIsPrintModalOpen(true)}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold bg-blue-500/10 px-2.5 py-1 rounded-lg border border-blue-500/30"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Tạo file luyện viết</span>
          </button>
        </div>
      </div>

      {/* Mode 1: Flashcard */}
      {activeMode === 'flashcard' && (
        <div className="relative rounded-3xl bg-[#1d263b] border border-slate-700/80 p-8 sm:p-12 text-center min-h-[340px] flex flex-col justify-between shadow-2xl overflow-hidden select-none group">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
              {currentWord?.hanViet}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => currentWord && addToCustomDeck(currentWord)}
                className="text-slate-400 hover:text-blue-400 transition-colors p-1"
                title="Thêm vào bộ thẻ cá nhân (Phím C)"
              >
                <BookmarkPlus className="w-5 h-5" />
              </button>
              <button
                onClick={() => currentWord && toggleFavorite(currentWord.id)}
                className="text-slate-400 hover:text-amber-400 transition-colors p-1"
              >
                <Star className={`w-5 h-5 ${currentWord && favoriteWordIds.includes(currentWord.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
              </button>
            </div>
          </div>

          <div 
            onClick={() => setIsFlipped(!isFlipped)}
            className="py-8 cursor-pointer space-y-3"
          >
            {(!isFlipped && flipDirection === 'JP_VI') || (isFlipped && flipDirection === 'VI_JP') ? (
              <>
                <div className="text-6xl sm:text-7xl font-black font-japanese text-white tracking-tight">
                  {currentWord?.word}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    currentWord && speak(currentWord.word);
                  }}
                  className="inline-flex items-center justify-center p-2 rounded-full bg-slate-700/50 hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
              </>
            ) : (
              <div className="space-y-2 animate-in fade-in">
                <div className="text-3xl font-black font-japanese text-blue-400">
                  {renderPitchAccent(currentWord?.reading, currentWord?.pitchAccent)}
                </div>
                <div className="text-xl font-extrabold text-white">
                  {currentWord?.meaning}
                </div>
                <div className="text-xs text-amber-400 font-bold">
                  Âm Hán Việt: {currentWord?.hanViet}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={handlePrevWord}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleNextWord(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-slate-400 hover:text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="text-[10px] text-slate-400/90 pt-3 border-t border-slate-700/50">
            Phím tắt: <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">Space</kbd> lật &nbsp;
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">Z</kbd> biết &nbsp;
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">X</kbd> chưa biết &nbsp;
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">C</kbd> thêm deck &nbsp;
            <kbd className="px-1.5 py-0.5 bg-slate-800 rounded">R</kbd> nghe audio
          </div>
        </div>
      )}

      {/* Mode 2: Interactive Quiz */}
      {activeMode === 'quiz' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 font-bold">
            <span>Câu hỏi {currentWordIndex + 1} / {unitWords.length}</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1 text-amber-400">
                <Flame className="w-4 h-4" /> Chuỗi: {quizStreak}
              </span>
              <span className="text-emerald-400">Điểm: {quizScore}</span>
            </div>
          </div>

          <div className="text-6xl font-black font-japanese text-white">
            {currentWord.word}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl mx-auto pt-2">
            {[
              currentWord.meaning,
              'Kỳ thi năng lực Nhật ngữ sơ cấp',
              'Sự chuẩn bị cho chuyến đi du lịch',
              'Thất bại trong công việc'
            ].sort().map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedQuizChoice(opt);
                  if (opt === currentWord.meaning) {
                    setQuizScore(s => s + 10);
                    setQuizStreak(st => st + 1);
                    addExp(10);
                  } else {
                    setQuizStreak(0);
                  }
                  setTimeout(() => {
                    setSelectedQuizChoice(null);
                    handleNextWord(opt === currentWord.meaning);
                  }, 700);
                }}
                className={`p-4 rounded-2xl font-bold text-xs transition-all ${
                  selectedQuizChoice === opt
                    ? opt === currentWord.meaning
                      ? 'bg-emerald-600 text-white scale-[1.02]'
                      : 'bg-rose-600 text-white'
                    : 'bg-slate-800 hover:bg-blue-600 text-slate-200 hover:text-white'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mode 3: Speed Cramming (Nhồi Nhét Tốc Độ Cao) */}
      {activeMode === 'cram' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-5">
          <div className="text-xs text-amber-400 font-bold uppercase tracking-wider flex items-center justify-center gap-1.5">
            <Zap className="w-4 h-4" />
            <span>Chế độ Nhồi Nhét Phản Xạ Tức Thì</span>
          </div>

          <div className="text-6xl sm:text-7xl font-black font-japanese text-white py-4">
            {currentWord.word}
          </div>

          <div className="text-2xl text-blue-400 font-extrabold">
            {currentWord.reading} &bull; {currentWord.hanViet}
          </div>
          <div className="text-base text-slate-200 font-bold">
            {currentWord.meaning}
          </div>

          <div className="flex items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleNextWord(false)}
              className="px-8 py-3 rounded-2xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-rose-500/20"
            >
              <X className="w-4 h-4" />
              <span>Chưa Thuộc (X)</span>
            </button>
            <button
              onClick={() => handleNextWord(true)}
              className="px-8 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-2 shadow-lg shadow-emerald-500/20"
            >
              <Check className="w-4 h-4" />
              <span>Đã Thuộc (Z)</span>
            </button>
          </div>
        </div>
      )}

      {/* Mode 4: Sentence Translation Drill */}
      {activeMode === 'translate' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-5">
          <div className="text-xs text-slate-400 font-bold">
            Luyện Dịch Câu & Ngữ Cảnh ({currentWordIndex + 1}/{unitWords.length})
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-2">
            <div className="text-xs text-slate-400 font-japanese">
              {currentWord.exampleSentence.furigana}
            </div>
            <div className="text-2xl sm:text-3xl font-bold font-japanese text-white">
              {currentWord.exampleSentence.japanese}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-900/40 text-sm text-blue-200 font-medium">
            💡 {currentWord.exampleSentence.vietnamese}
          </div>

          <div className="flex justify-center gap-3">
            <button
              onClick={() => speak(currentWord.exampleSentence.japanese)}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold flex items-center gap-1.5"
            >
              <Volume2 className="w-4 h-4" />
              <span>Phát âm câu</span>
            </button>
            <button
              onClick={() => handleNextWord(true)}
              className="px-6 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold"
            >
              Câu Kế Tiếp &rarr;
            </button>
          </div>
        </div>
      )}

      {/* Mode 5: Native Shadowing Suite */}
      {activeMode === 'shadowing' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-6">
          <div className="text-xs text-teal-400 font-bold flex items-center justify-center gap-1.5">
            <Headphones className="w-4 h-4" />
            <span>Phòng Luyện Nghe Đuổi Bản Xứ (Shadowing)</span>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <div className="text-3xl font-black font-japanese text-white">
              {currentWord.exampleSentence.japanese}
            </div>
            <div className="text-xs text-slate-400">
              {currentWord.exampleSentence.vietnamese}
            </div>
          </div>

          {/* Speed & Recording Controls */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl text-xs">
              {[0.75, 1.0, 1.25].map(spd => (
                <button
                  key={spd}
                  onClick={() => setAudioSpeed(spd)}
                  className={`px-3 py-1 rounded-lg font-bold ${
                    audioSpeed === spd ? 'bg-teal-600 text-white' : 'text-slate-400'
                  }`}
                >
                  {spd}x
                </button>
              ))}
            </div>

            <button
              onClick={() => speak(currentWord.exampleSentence.japanese, audioSpeed)}
              className="p-4 rounded-full bg-teal-600 text-white shadow-xl hover:scale-105 transition-transform"
              title="Nghe mẫu phát âm"
            >
              <Volume2 className="w-6 h-6" />
            </button>

            <button
              onClick={() => setIsRecording(!isRecording)}
              className={`p-4 rounded-full transition-transform ${
                isRecording ? 'bg-rose-600 animate-pulse text-white' : 'bg-slate-800 text-slate-300 hover:text-white'
              }`}
              title="Ghi âm giọng của bạn"
            >
              {isRecording ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
            </button>
          </div>
        </div>
      )}

      {/* Control Bar Below Card (Screenshot 3) */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3 rounded-2xl bg-[#161c28] border border-slate-800 text-xs">
        <div className="flex items-center bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => setModeType('single')}
            className={`px-3 py-1 rounded-lg font-bold transition-colors ${
              modeType === 'single' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Từ đơn
          </button>
          <button
            onClick={() => setModeType('example')}
            className={`px-3 py-1 rounded-lg font-bold transition-colors ${
              modeType === 'example' ? 'bg-blue-600 text-white' : 'text-slate-400'
            }`}
          >
            Ví dụ
          </button>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNextWord(false)}
            className="w-8 h-8 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white flex items-center justify-center transition-colors"
            title="Chưa thuộc (Phím X)"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="font-bold text-slate-300 text-xs">
            {currentWordIndex + 1} / {unitWords.length}
          </span>
          <button
            onClick={() => handleNextWord(true)}
            className="w-8 h-8 rounded-xl bg-emerald-500/20 hover:bg-emerald-500 text-emerald-400 hover:text-white flex items-center justify-center transition-colors"
            title="Đã thuộc (Phím Z)"
          >
            <Check className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-2 text-slate-400">
          <button 
            onClick={() => setFlipDirection(prev => prev === 'JP_VI' ? 'VI_JP' : 'JP_VI')}
            className="font-bold text-[11px] text-slate-300 hover:text-white flex items-center gap-1"
          >
            <span>⇄ {flipDirection === 'JP_VI' ? 'JP → VI' : 'VI → JP'}</span>
          </button>
          <button onClick={() => setCurrentWordIndex(0)} className="p-1.5 hover:text-white"><RotateCcw className="w-4 h-4" /></button>
          <button 
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`p-1.5 ${isAutoPlaying ? 'text-blue-400' : 'hover:text-white'}`}
            title="Tự động lật thẻ (Auto-play)"
          >
            {isAutoPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>
          <button onClick={shuffleWords} className="p-1.5 hover:text-white" title="Xáo trộn ngẫu nhiên"><Shuffle className="w-4 h-4" /></button>
          <button 
            onClick={() => setIsFullscreen(!isFullscreen)} 
            className="p-1.5 hover:text-white"
            title="Toàn màn hình"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
          <button 
            onClick={() => setIsSettingsOpen(true)} 
            className="p-1.5 hover:text-white"
            title="Cài đặt học tập"
          >
            <Settings className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Warning Banner */}
      <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold flex items-center gap-2">
        <span>⚠️ Không dùng bộ gõ tiếng Nhật với chế độ nhồi nhét</span>
      </div>

      {/* Chọn Chế Độ Học (5 Tabs - Screenshot 3) */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-slate-400">Chọn chế độ học</span>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {[
            { id: 'flashcard' as StudyMode, label: 'Flashcard', icon: Layers },
            { id: 'quiz' as StudyMode, label: 'Trắc nghiệm', icon: HelpCircle },
            { id: 'cram' as StudyMode, label: 'Nhồi nhét', icon: Zap },
            { id: 'translate' as StudyMode, label: 'Dịch câu', icon: Languages },
            { id: 'shadowing' as StudyMode, label: 'Nghe đuổi', icon: Headphones },
          ].map(m => {
            const Icon = m.icon;
            const isActive = activeMode === m.id;
            return (
              <button
                key={m.id}
                onClick={() => setActiveMode(m.id)}
                className={`p-3 rounded-2xl border flex flex-col items-center justify-center gap-1.5 transition-all ${
                  isActive
                    ? 'bg-blue-900/30 border-blue-500 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-[#161c28] border-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-blue-400' : ''}`} />
                <span className="text-xs font-bold">{m.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Thuật Ngữ Trong Bài Này (120 từ thực tế - Screenshot 4) */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-extrabold text-slate-200">
            Thuật ngữ trong bài này ({unitWords.length})
          </h4>
          <span className="text-xs text-slate-400">
            {favoriteWordIds.length} từ đã lưu sao
          </span>
        </div>

        <div className="space-y-3">
          {unitWords.map(w => (
            <div
              key={w.id}
              className="p-5 rounded-2xl bg-[#172033] border border-slate-800/80 hover:border-slate-700 space-y-3 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4">
                  <div className="text-xs font-bold text-slate-500 mt-1">
                    {w.index}.
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl font-black font-japanese text-white">
                      {w.word}
                    </div>
                  </div>
                  <div className="space-y-0.5 ml-2">
                    <div className="text-sm font-bold text-slate-300 font-japanese">
                      {renderPitchAccent(w.reading, w.pitchAccent)}
                    </div>
                    <div className="text-xs font-bold text-slate-400">
                      {w.hanViet}
                    </div>
                    <div className="text-xs font-medium text-slate-300">
                      {w.meaning}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-slate-400">
                  <button 
                    onClick={() => addToCustomDeck(w)}
                    className="p-1 hover:text-blue-400"
                    title="Thêm vào bộ thẻ cá nhân"
                  >
                    <BookmarkPlus className="w-3.5 h-3.5" />
                  </button>
                  <button 
                    onClick={() => toggleFavorite(w.id)}
                    className="p-1 hover:text-amber-400"
                  >
                    <Star className={`w-3.5 h-3.5 ${favoriteWordIds.includes(w.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
                  </button>
                  <button 
                    onClick={() => speak(w.word)}
                    className="p-1 hover:text-blue-400"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Example sentence box */}
              {w.exampleSentence && (
                <div className="p-3 rounded-xl bg-[#111724] border border-slate-800/60 flex items-center justify-between text-xs">
                  <div className="space-y-0.5">
                    <div className="text-slate-400 text-[10px] font-japanese">
                      {w.exampleSentence.furigana}
                    </div>
                    <div className="font-bold text-slate-200 font-japanese">
                      {w.exampleSentence.japanese}
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      {w.exampleSentence.vietnamese}
                    </div>
                  </div>
                  <button 
                    onClick={() => speak(w.exampleSentence.japanese)}
                    className="p-1.5 text-slate-400 hover:text-blue-400 shrink-0"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Writing Sheet Print Modal */}
      {isPrintModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-2xl bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-base text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-400" />
                <span>Phiếu Ô Ly Tập Viết A4 - {selectedUnit.title}</span>
              </h3>
              <button onClick={() => setIsPrintModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-3">
              <p>Mẫu phiếu tập viết tiếng Nhật chuẩn Genkouyoushi (20 ô ly / từ) kèm hướng dẫn nét mờ để đồ theo:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
                {unitWords.slice(0, 8).map(w => (
                  <div key={w.id} className="p-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
                    <div className="text-2xl font-black font-japanese text-white">{w.word}</div>
                    <div className="text-[10px] text-slate-400">{w.reading}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setIsPrintModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Đóng
              </button>
              <button
                onClick={() => window.print()}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
              >
                <Printer className="w-4 h-4" />
                <span>In Phiếu Luyện Viết PDF (A4)</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Feedback Modal */}
      {isFeedbackOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-blue-400" />
                <span>Góp ý sửa lỗi từ vựng</span>
              </h3>
              <button onClick={() => setIsFeedbackOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <textarea
              rows={4}
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="Nhập nội dung đóng góp, sửa lỗi phát âm, chính tả hoặc bản dịch..."
              className="w-full p-3 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-blue-500"
            />

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setIsFeedbackOpen(false)}
                className="px-4 py-2 rounded-xl text-xs text-slate-400 hover:text-white"
              >
                Hủy
              </button>
              <button
                onClick={handleSendFeedback}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Gửi Góp Ý</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Settings Modal */}
      {isSettingsOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-md bg-slate-900 rounded-3xl border border-slate-800 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="font-bold text-sm text-white flex items-center gap-2">
                <Settings className="w-4 h-4 text-blue-400" />
                <span>Cài Đặt Học Tập</span>
              </h3>
              <button onClick={() => setIsSettingsOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="text-slate-300 font-bold block mb-1.5">Tốc độ tự động chạy thẻ:</label>
                <div className="grid grid-cols-3 gap-2">
                  {[2000, 3000, 5000].map(s => (
                    <button
                      key={s}
                      onClick={() => setAutoPlaySpeed(s)}
                      className={`p-2 rounded-xl border text-center font-bold ${
                        autoPlaySpeed === s ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                    >
                      {s / 1000} giây
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setIsSettingsOpen(false)}
                className="px-5 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Lưu Cài Đặt
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
