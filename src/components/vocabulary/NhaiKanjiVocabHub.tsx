import React, { useState, useEffect } from 'react';
import { 
  MIMIKARA_N3_UNITS, 
  MIMIKARA_N3_WORDS, 
  type MimikaraUnit
} from '../../data/mimikaraN3FullData';
import { 
  Headphones, 
  Crown, 
  ArrowLeft, 
  Volume2, 
  RotateCcw, 
  Play, 
  Shuffle, 
  Maximize2, 
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
  Send
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
  // Parse format like だ[んせい]
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
  const { setActiveTab } = useUser();
  const [stage, setStage] = useState<VocabViewStage>('curriculum-select');
  const [selectedCurriculumId, setSelectedCurriculumId] = useState<string>('mimikara-n3');
  const [selectedUnit, setSelectedUnit] = useState<MimikaraUnit>(MIMIKARA_N3_UNITS[0]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeMode, setActiveMode] = useState<StudyMode>('flashcard');
  const [modeType, setModeType] = useState<'single' | 'example'>('single');
  const [flipDirection, setFlipDirection] = useState<'JP_VI' | 'VI_JP'>('JP_VI');
  const [favoriteWordIds, setFavoriteWordIds] = useState<string[]>([]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const unitWords = MIMIKARA_N3_WORDS.filter(w => w.unit === selectedUnit.id);
  const currentWord = unitWords[currentWordIndex] || unitWords[0];

  const speak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = 'ja-JP';
      u.rate = 0.85;
      window.speechSynthesis.speak(u);
    }
  };

  const toggleFavorite = (id: string) => {
    setFavoriteWordIds(prev =>
      prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id]
    );
  };

  const [quizScore, setQuizScore] = useState(0);
  const [selectedQuizChoice, setSelectedQuizChoice] = useState<string | null>(null);

  // Keyboard shortcut support: Space (flip), Z (know), X (don't know), R (audio)
  useEffect(() => {
    if (stage !== 'unit-study') return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.key === 'z' || e.key === 'Z') {
        e.preventDefault();
        handleNextWord();
      } else if (e.key === 'x' || e.key === 'X') {
        e.preventDefault();
        handleNextWord();
      } else if (e.key === 'r' || e.key === 'R') {
        e.preventDefault();
        if (currentWord) speak(currentWord.word);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [stage, currentWordIndex, unitWords]);

  const handleNextWord = () => {
    setIsFlipped(false);
    if (currentWordIndex + 1 < unitWords.length) {
      setCurrentWordIndex(prev => prev + 1);
    } else {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const handlePrevWord = () => {
    setIsFlipped(false);
    if (currentWordIndex > 0) {
      setCurrentWordIndex(prev => prev - 1);
    }
  };

  const handleSendFeedback = () => {
    if (!feedbackText.trim()) return;
    alert('Cảm ơn bạn đã gửi đóng góp phản hồi về từ vựng này!');
    setFeedbackText('');
    setIsFeedbackOpen(false);
  };

  // ================= STAGE 1: CURRICULUM SELECTOR (Screenshot 1) =================
  if (stage === 'curriculum-select') {
    return (
      <div className="space-y-8 max-w-5xl mx-auto py-2">
        {/* N5 Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-amber-400 rounded-full" />
            <h3 className="text-sm font-extrabold text-slate-200 tracking-wide">N5</h3>
            <span className="text-xs text-slate-400 font-medium">日本語能力試験 N5</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#1a1f2c] border-2 border-amber-400 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-amber-500/10">
              <div className="text-xs text-slate-400 font-japanese">はじめての日本語能力試験</div>
              <div className="text-3xl font-black text-white">N5</div>
              <div className="text-sm font-extrabold text-amber-400">1000 từ vựng</div>
              <div className="text-xs text-slate-400">dành cho Kỳ thi Năng lực Nhật ngữ N5</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-800 to-teal-800 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-emerald-500/10">
              <div className="text-xs text-emerald-200 font-japanese">みんなの日本語 初級Ⅰ 第2版</div>
              <div className="text-3xl font-black text-white">N5</div>
              <div className="text-sm font-extrabold text-emerald-200">1000 từ vựng</div>
              <div className="text-xs text-emerald-100">Tiếng Nhật sơ cấp 1</div>
            </div>
          </div>
        </div>

        {/* N4 Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-purple-500 rounded-full" />
            <h3 className="text-sm font-extrabold text-slate-200 tracking-wide">N4</h3>
            <span className="text-xs text-slate-400 font-medium">日本語能力試験 N4</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#1a1f2c] border-2 border-purple-500 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-purple-500/10">
              <div className="text-xs text-slate-400 font-japanese">はじめての日本語能力試験</div>
              <div className="text-3xl font-black text-white">N4</div>
              <div className="text-sm font-extrabold text-purple-400">1500 từ vựng</div>
              <div className="text-xs text-slate-400">dành cho Kỳ thi Năng lực Nhật ngữ N4</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-teal-800 to-emerald-700 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-teal-500/10">
              <div className="text-xs text-teal-200 font-japanese">みんなの日本語 初級Ⅱ 第2版</div>
              <div className="text-3xl font-black text-white">N4</div>
              <div className="text-sm font-extrabold text-teal-200">1500 từ vựng</div>
              <div className="text-xs text-teal-100">Tiếng Nhật sơ cấp 2</div>
            </div>
          </div>
        </div>

        {/* N3 Section (FOCUS!) */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-emerald-500 rounded-full" />
            <h3 className="text-sm font-extrabold text-slate-200 tracking-wide">N3</h3>
            <span className="text-xs text-slate-400 font-medium">日本語能力試験 N3</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div 
              onClick={() => {
                setSelectedCurriculumId('tango-n3');
                setStage('unit-select');
              }}
              className="p-6 rounded-2xl bg-[#141b18] border-2 border-emerald-500 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-emerald-500/10"
            >
              <div className="text-xs text-slate-400 font-japanese">はじめての日本語能力試験</div>
              <div className="text-3xl font-black text-white">N3</div>
              <div className="text-sm font-extrabold text-emerald-400">2000 từ vựng</div>
              <div className="text-xs text-slate-400">dành cho Kỳ thi Năng lực Nhật ngữ N3</div>
            </div>

            <div 
              onClick={() => {
                setSelectedCurriculumId('mimikara-n3');
                setStage('unit-select');
              }}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#172520] to-[#1a382b] border border-emerald-600/40 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-emerald-500/15 relative overflow-hidden group"
            >
              <div className="absolute top-4 left-4 text-emerald-400">
                <Headphones className="w-6 h-6" />
              </div>
              <div className="text-xs text-emerald-300 font-japanese">耳から覚える 語彙トレーニング</div>
              <div className="text-3xl font-black text-red-500">N3</div>
              <div className="text-sm font-extrabold text-emerald-400">880 từ vựng</div>
              <div className="text-xs text-emerald-200">Luyện từ vựng qua nghe N3</div>
            </div>
          </div>
        </div>

        {/* N2 Section */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-4 bg-orange-500 rounded-full" />
            <h3 className="text-sm font-extrabold text-slate-200 tracking-wide">N2</h3>
            <span className="text-xs text-slate-400 font-medium">日本語能力試験 N2</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#1a1f2c] border-2 border-orange-500 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform shadow-lg shadow-orange-500/10">
              <div className="text-xs text-slate-400 font-japanese">はじめての日本語能力試験</div>
              <div className="text-3xl font-black text-white">N2</div>
              <div className="text-sm font-extrabold text-orange-400">2500 từ vựng</div>
              <div className="text-xs text-slate-400">dành cho Kỳ thi Năng lực Nhật ngữ N2</div>
            </div>

            <div className="p-6 rounded-2xl bg-gradient-to-r from-stone-900 to-emerald-950 border border-slate-700 text-center space-y-2 cursor-pointer hover:scale-[1.01] transition-transform">
              <div className="text-xs text-slate-400 font-japanese">耳から覚える N2</div>
              <div className="text-3xl font-black text-red-500">N2</div>
              <div className="text-sm font-extrabold text-emerald-400">1160 từ vựng</div>
              <div className="text-xs text-slate-400">Luyện từ vựng qua nghe N2</div>
            </div>
          </div>
        </div>
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
            {selectedCurriculumId === 'mimikara-n3' ? 'Mimikara N3' : 'Tango N3'}
          </h2>
          <p className="text-xs text-slate-400 mt-1">15 bài học</p>
        </div>

        <div className="p-5 rounded-2xl bg-[#161c28] border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300">
            <span>Tiến độ học</span>
            <span>0/15 bài</span>
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
          <button className="w-full py-3 rounded-xl border border-dashed border-blue-500/60 hover:bg-blue-500/10 text-blue-400 font-bold text-xs flex items-center justify-center gap-2 transition-colors">
            <FolderOpen className="w-4 h-4" />
            <span>Review</span>
          </button>
        </div>
      </div>
    );
  }

  // ================= STAGE 3: UNIT STUDY & FLASHCARD VIEW (Screenshot 3 & 4) =================
  return (
    <div className="space-y-6 max-w-5xl mx-auto py-2">
      {/* Top Navigation Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs border-b border-slate-800 pb-3">
        <button
          onClick={() => setStage('unit-select')}
          className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại</span>
        </button>

        <h3 className="font-extrabold text-sm text-slate-100">
          Mimikara N3 - {selectedUnit.title} _ {selectedUnit.range}
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
            onClick={() => setActiveTab('practice-sheet')}
            className="text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Tạo file luyện viết</span>
          </button>
        </div>
      </div>

      {/* Main Interactive Stage for Selected Learning Mode */}
      {activeMode === 'flashcard' && (
        <div className="relative rounded-3xl bg-[#1d263b] border border-slate-700/80 p-8 sm:p-12 text-center min-h-[340px] flex flex-col justify-between shadow-2xl overflow-hidden select-none">
          <div className="flex items-center justify-between">
            <span className="text-[11px] font-bold text-slate-400 uppercase">
              {currentWord?.hanViet}
            </span>
            <button
              onClick={() => currentWord && toggleFavorite(currentWord.id)}
              className="text-slate-400 hover:text-amber-400 transition-colors"
            >
              <Star className={`w-5 h-5 ${currentWord && favoriteWordIds.includes(currentWord.id) ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>
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
                  {currentWord?.reading}
                </div>
                <div className="text-xl font-extrabold text-white">
                  {currentWord?.meaning}
                </div>
                <div className="text-xs text-amber-400 font-bold">
                  Hán Việt: {currentWord?.hanViet}
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
            onClick={handleNextWord}
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

      {/* Mode 2: Quiz */}
      {activeMode === 'quiz' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-6">
          <div className="text-xs text-slate-400 font-bold">
            Câu hỏi {currentWordIndex + 1} / {unitWords.length} (Điểm: {quizScore})
          </div>
          <div className="text-5xl font-black font-japanese text-white">
            {currentWord.word}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg mx-auto pt-2">
            {[currentWord.meaning, 'Ý nghĩa khác A', 'Ý nghĩa khác B', 'Ý nghĩa khác C'].sort().map((opt, i) => (
              <button
                key={i}
                onClick={() => {
                  setSelectedQuizChoice(opt);
                  if (opt === currentWord.meaning) {
                    setQuizScore(s => s + 1);
                  }
                  setTimeout(handleNextWord, 600);
                }}
                className={`p-3.5 rounded-2xl font-bold text-xs transition-colors ${
                  selectedQuizChoice === opt
                    ? opt === currentWord.meaning
                      ? 'bg-emerald-600 text-white'
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

      {/* Mode 3: Cramming (Nhồi nhét) */}
      {activeMode === 'cram' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-4">
          <div className="text-xs text-amber-400 font-bold">Chế độ Nhồi Nhét Tốc Độ Cao</div>
          <div className="text-6xl font-black font-japanese text-white">{currentWord.word}</div>
          <div className="text-xl text-blue-400 font-bold">{currentWord.reading} - {currentWord.meaning}</div>
          <button
            onClick={handleNextWord}
            className="px-8 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs shadow-md"
          >
            Từ Tiếp Theo &rarr;
          </button>
        </div>
      )}

      {/* Mode 4: Translate */}
      {activeMode === 'translate' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-4">
          <div className="text-xs text-slate-400 font-bold">Luyện Dịch Câu Ví Dụ</div>
          <div className="text-2xl font-bold font-japanese text-white">{currentWord.exampleSentence.japanese}</div>
          <div className="text-sm text-slate-400">{currentWord.exampleSentence.vietnamese}</div>
          <button
            onClick={handleNextWord}
            className="px-6 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs"
          >
            Câu Kế Tiếp
          </button>
        </div>
      )}

      {/* Mode 5: Shadowing */}
      {activeMode === 'shadowing' && currentWord && (
        <div className="p-8 rounded-3xl bg-[#1d263b] border border-slate-700 text-center space-y-4">
          <div className="text-xs text-teal-400 font-bold">Luyện Nghe Đuổi (Shadowing)</div>
          <div className="text-3xl font-black font-japanese text-white">{currentWord.exampleSentence.japanese}</div>
          <div className="text-xs text-slate-400">{currentWord.exampleSentence.vietnamese}</div>
          <button
            onClick={() => speak(currentWord.exampleSentence.japanese)}
            className="p-4 rounded-full bg-teal-600 text-white shadow-xl hover:scale-105 transition-transform"
          >
            <Volume2 className="w-6 h-6" />
          </button>
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
            onClick={handleNextWord}
            className="w-8 h-8 rounded-xl bg-rose-500/20 hover:bg-rose-500 text-rose-400 hover:text-white flex items-center justify-center transition-colors"
            title="Chưa thuộc (Phím X)"
          >
            <X className="w-4 h-4" />
          </button>
          <span className="font-bold text-slate-300 text-xs">
            {currentWordIndex + 1} / {unitWords.length}
          </span>
          <button
            onClick={handleNextWord}
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
          >
            <Play className="w-4 h-4" />
          </button>
          <button className="p-1.5 hover:text-white"><Shuffle className="w-4 h-4" /></button>
          <button className="p-1.5 hover:text-white"><Maximize2 className="w-4 h-4" /></button>
          <button className="p-1.5 hover:text-white"><Settings className="w-4 h-4" /></button>
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
        <h4 className="text-sm font-extrabold text-slate-200">
          Thuật ngữ trong bài này ({unitWords.length})
        </h4>

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
                  <button className="p-1 hover:text-white"><Shuffle className="w-3.5 h-3.5" /></button>
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
    </div>
  );
};
