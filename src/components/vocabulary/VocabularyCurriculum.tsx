import React, { useState, useMemo } from 'react';
import { CURRICULA, VOCABULARY_DATA } from '../../data/curriculumData';
import type { CurriculumType } from '../../types/vocabulary';
import type { JLPTLevel } from '../../types/kanji';
import { useUser } from '../../context/UserContext';
import { 
  BookOpen, 
  Volume2, 
  Search, 
  CheckCircle2, 
  Trophy, 
  X, 
  Play,
  LayoutGrid,
  List,
  Layers
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const VocabularyCurriculum: React.FC = () => {
  const { setActiveTab } = useUser();
  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumType>('minna');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'all'>('all');
  const [selectedLesson, setSelectedLesson] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [learnedWords, setLearnedWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('nhaikanji_learned_vocab');
    return saved ? JSON.parse(saved) : ['minna-01-01', 'minna-01-02'];
  });

  // Quiz State
  const [isQuizOpen, setIsQuizOpen] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizFinished, setQuizFinished] = useState(false);

  const toggleWordLearned = (id: string) => {
    setLearnedWords(prev => {
      const updated = prev.includes(id) ? prev.filter(w => w !== id) : [...prev, id];
      localStorage.setItem('nhaikanji_learned_vocab', JSON.stringify(updated));
      return updated;
    });
  };

  const currentCurriculumInfo = CURRICULA.find(c => c.id === selectedCurriculum)!;

  // Filter lessons available for this curriculum
  const availableLessons = useMemo(() => {
    const wordsInCurr = VOCABULARY_DATA.filter(v => v.curriculum === selectedCurriculum);
    const lessons = Array.from(new Set(wordsInCurr.map(v => v.lesson))).sort((a, b) => a - b);
    return lessons;
  }, [selectedCurriculum]);

  const filteredWords = useMemo(() => {
    return VOCABULARY_DATA.filter(item => {
      const matchCurr = item.curriculum === selectedCurriculum;
      const matchLevel = selectedLevel === 'all' || item.level === selectedLevel;
      const matchLesson = selectedLesson === 0 || item.lesson === selectedLesson;
      const matchSearch =
        item.word.includes(searchTerm) ||
        item.reading.includes(searchTerm) ||
        (item.hanViet && item.hanViet.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.romaji.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCurr && matchLevel && matchLesson && matchSearch;
    });
  }, [selectedCurriculum, selectedLevel, selectedLesson, searchTerm]);

  const lessonLearnedCount = useMemo(() => {
    return filteredWords.filter(w => learnedWords.includes(w.id)).length;
  }, [filteredWords, learnedWords]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  // Quiz logic
  const startQuiz = () => {
    if (filteredWords.length === 0) return;
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setQuizFinished(false);
    setIsQuizOpen(true);
  };

  const currentQuizWord = filteredWords[quizIndex];

  // Generate 4 multiple-choice options
  const quizOptions = useMemo(() => {
    if (!currentQuizWord) return [];
    const wrong = VOCABULARY_DATA.filter(w => w.id !== currentQuizWord.id).map(w => w.meaning);
    const shuffledWrong = wrong.sort(() => 0.5 - Math.random()).slice(0, 3);
    const all = [currentQuizWord.meaning, ...shuffledWrong];
    return all.sort(() => 0.5 - Math.random());
  }, [currentQuizWord]);

  const handleAnswer = (option: string) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(option);
    const isCorrect = option === currentQuizWord.meaning;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }

    setTimeout(() => {
      if (quizIndex + 1 < Math.min(filteredWords.length, 5)) {
        setQuizIndex(prev => prev + 1);
        setSelectedAnswer(null);
      } else {
        setQuizFinished(true);
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Hero Curriculum Selector */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-amber-300" />
            <span>Kho Giáo Trình Từ Vựng Chuẩn Quốc Tế N5 - N1</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Kho Từ Vựng Toàn Diện Theo Bài Học
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Học từ vựng theo trọn bộ 50 bài Minna no Nihongo, 12 chương Mimikara Oboeru, 20 chủ đề Tango và 15 chuyên đề Shinkanzen Master.
          </p>
        </div>
      </div>

      {/* Curriculum Tabs Switcher */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {CURRICULA.map(curr => {
          const isSelected = selectedCurriculum === curr.id;
          return (
            <button
              key={curr.id}
              onClick={() => {
                setSelectedCurriculum(curr.id);
                setSelectedLesson(1);
                setSelectedLevel('all');
              }}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-[#111827] border-blue-600 dark:border-blue-500 shadow-xl ring-2 ring-blue-500/20'
                  : 'bg-white/60 dark:bg-[#111827]/60 border-slate-200 dark:border-slate-800 hover:border-blue-400'
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                    {curr.levelRange}
                  </span>
                  <span className="text-[10px] text-slate-400 font-semibold font-japanese">{curr.japaneseName}</span>
                </div>
                <div className="font-extrabold text-sm text-slate-900 dark:text-white mt-1">
                  {curr.name}
                </div>
              </div>
              <div className="text-[11px] text-slate-400 mt-2 font-medium">
                {curr.totalLessons} bài học • {curr.totalWords.toLocaleString()} từ
              </div>
            </button>
          );
        })}
      </div>

      {/* Lesson Selector Bar & Progress */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
        {/* Top bar with Lesson title and Actions */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-base text-slate-900 dark:text-white">
              {currentCurriculumInfo.name} - Bài {selectedLesson}
            </span>
            <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold border border-emerald-500/30">
              Đã thuộc: {lessonLearnedCount} / {filteredWords.length} từ
            </span>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2">
            {/* View Switcher */}
            <div className="flex items-center p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm' : 'text-slate-400'
                }`}
                title="Dạng Thẻ"
              >
                <LayoutGrid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'table' ? 'bg-white dark:bg-slate-900 text-blue-600 shadow-sm' : 'text-slate-400'
                }`}
                title="Dạng Bảng"
              >
                <List className="w-4 h-4" />
              </button>
            </div>

            {/* Start Flashcard Button */}
            <button
              onClick={() => setActiveTab('flashcard')}
              className="px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Học Flashcard</span>
            </button>

            {/* Quick Quiz */}
            <button
              onClick={startQuiz}
              disabled={filteredWords.length === 0}
              className="px-3.5 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-white font-bold text-xs shadow-md transition-all flex items-center gap-1.5 active:scale-95"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Trắc Nghiệm</span>
            </button>
          </div>
        </div>

        {/* Lesson Carousel Scroll */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-bold text-slate-400">
            <span>Chọn bài học trong giáo trình ({availableLessons.length} bài):</span>
            <button 
              onClick={() => setSelectedLesson(0)}
              className={`text-[11px] font-bold ${selectedLesson === 0 ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
            >
              Xem tất cả các bài
            </button>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 pt-1 scrollbar-thin">
            {availableLessons.map((lNum) => (
              <button
                key={lNum}
                onClick={() => setSelectedLesson(lNum)}
                className={`px-3.5 py-2 rounded-2xl text-xs font-bold shrink-0 transition-all ${
                  selectedLesson === lNum
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/25 ring-2 ring-blue-500/30'
                    : 'bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-blue-400'
                }`}
              >
                Bài {lNum}
              </button>
            ))}
          </div>
        </div>

        {/* Search filter */}
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Tìm kiếm nhanh từ vựng trong bài theo Kanji, Hiragana, Hán Việt..."
            className="w-full pl-10 pr-4 py-2.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
          />
        </div>
      </div>

      {/* VIEW 1: GRID CARDS VIEW */}
      {viewMode === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredWords.map((item) => {
            const isLearned = learnedWords.includes(item.id);
            return (
              <div
                key={item.id}
                className={`p-5 rounded-3xl bg-white dark:bg-[#111827] border transition-all hover:shadow-lg space-y-3 ${
                  isLearned
                    ? 'border-emerald-500/40 bg-emerald-50/10 dark:bg-emerald-950/10'
                    : 'border-slate-200 dark:border-slate-800 hover:border-blue-400/50'
                }`}
              >
                {/* Card Top */}
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl sm:text-3xl font-black font-japanese text-slate-900 dark:text-white">
                        {item.word}
                      </span>
                      <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                        {item.reading}
                      </span>
                      {item.hanViet && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                          {item.hanViet}
                        </span>
                      )}
                    </div>
                    <div className="font-extrabold text-sm text-slate-800 dark:text-slate-200">
                      {item.meaning}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => speakText(item.reading || item.word)}
                      className="p-2 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-colors shadow-sm"
                      title="Nghe phát âm"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => toggleWordLearned(item.id)}
                      className={`p-2 rounded-xl border transition-colors ${
                        isLearned
                          ? 'bg-emerald-500 text-white border-emerald-500'
                          : 'text-slate-400 border-slate-200 dark:border-slate-800 hover:text-emerald-500'
                      }`}
                      title={isLearned ? 'Đã thuộc từ này' : 'Đánh dấu đã thuộc'}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Example Sentence */}
                {item.exampleSentence && (
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 space-y-1">
                    <div className="font-bold text-xs sm:text-sm font-japanese text-slate-900 dark:text-white">
                      {item.exampleSentence.japanese}
                    </div>
                    <div className="text-[11px] text-blue-600 dark:text-blue-400">
                      {item.exampleSentence.furigana}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">
                      {item.exampleSentence.vietnamese}
                    </div>
                  </div>
                )}

                {/* Lesson Badge Footer */}
                <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1 border-t border-slate-100 dark:border-slate-800/60 font-medium">
                  <span>{item.lessonName || `Bài ${item.lesson}`}</span>
                  <span className="font-bold uppercase text-blue-600 dark:text-blue-400">{item.level}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* VIEW 2: TABLE LIST VIEW */}
      {viewMode === 'table' && (
        <div className="bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold">
                <tr>
                  <th className="p-4">Từ Vựng (Kanji)</th>
                  <th className="p-4">Cách Đọc</th>
                  <th className="p-4">Hán Việt</th>
                  <th className="p-4">Ý Nghĩa Tiếng Việt</th>
                  <th className="p-4 text-center">Phát Âm</th>
                  <th className="p-4 text-center">Trạng Thái</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                {filteredWords.map((item) => {
                  const isLearned = learnedWords.includes(item.id);
                  return (
                    <tr key={item.id} className="hover:bg-slate-50/60 dark:hover:bg-slate-900/40 transition-colors">
                      <td className="p-4 font-black font-japanese text-base text-slate-900 dark:text-white">
                        {item.word}
                      </td>
                      <td className="p-4 text-blue-600 dark:text-blue-400 font-bold font-japanese">
                        {item.reading}
                      </td>
                      <td className="p-4">
                        {item.hanViet ? (
                          <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400 font-bold border border-amber-500/20">
                            {item.hanViet}
                          </span>
                        ) : '-'}
                      </td>
                      <td className="p-4 font-extrabold text-slate-800 dark:text-slate-200">
                        {item.meaning}
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => speakText(item.reading || item.word)}
                          className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 hover:bg-blue-100"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </td>
                      <td className="p-4 text-center">
                        <button
                          onClick={() => toggleWordLearned(item.id)}
                          className={`p-1.5 rounded-lg border ${
                            isLearned ? 'bg-emerald-500 text-white border-emerald-500' : 'text-slate-400 border-slate-200 dark:border-slate-800'
                          }`}
                        >
                          <CheckCircle2 className="w-4 h-4" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* QUIZ MODAL */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Trắc Nghiệm Phản Xạ Từ Vựng Bài {selectedLesson}</h3>
              </div>
              <button
                onClick={() => setIsQuizOpen(false)}
                className="p-1.5 text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {!quizFinished && currentQuizWord ? (
              <div className="space-y-6">
                <div className="text-center space-y-2 py-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                  <span className="text-xs text-slate-400 font-bold">Câu hỏi {quizIndex + 1} / {Math.min(filteredWords.length, 5)}</span>
                  <div className="text-4xl font-black font-japanese text-blue-600 dark:text-blue-400">
                    {currentQuizWord.word}
                  </div>
                  <div className="text-xs text-slate-500 font-bold">
                    {currentQuizWord.reading} {currentQuizWord.hanViet ? `(${currentQuizWord.hanViet})` : ''}
                  </div>
                </div>

                <div className="space-y-2.5">
                  {quizOptions.map((opt, idx) => {
                    const isSelected = selectedAnswer === opt;
                    const isCorrect = opt === currentQuizWord.meaning;
                    let btnStyle = 'bg-slate-50 dark:bg-slate-900 hover:bg-blue-50 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200';
                    if (selectedAnswer !== null) {
                      if (isCorrect) {
                        btnStyle = 'bg-emerald-500 text-white border-emerald-500 shadow-md';
                      } else if (isSelected) {
                        btnStyle = 'bg-rose-500 text-white border-rose-500 shadow-md';
                      }
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleAnswer(opt)}
                        disabled={selectedAnswer !== null}
                        className={`w-full p-3.5 rounded-2xl border text-left font-bold text-xs sm:text-sm transition-all ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : (
              /* Quiz Finished */
              <div className="text-center space-y-4 py-4">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto shadow-lg">
                  <Trophy className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-black text-slate-900 dark:text-white">Hoàn Thành Bài Trắc Nghiệm!</h4>
                <p className="text-xs text-slate-400">
                  Bạn trả lời đúng <strong>{quizScore}</strong> / {Math.min(filteredWords.length, 5)} câu.
                </p>
                <button
                  onClick={() => setIsQuizOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 text-white font-bold text-xs"
                >
                  Xong
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
