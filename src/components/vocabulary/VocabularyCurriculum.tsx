import React, { useState, useMemo } from 'react';
import { CURRICULA, VOCABULARY_DATA } from '../../data/curriculumData';
import type { CurriculumType } from '../../types/vocabulary';
import type { JLPTLevel } from '../../types/kanji';
import { 
  BookOpen, 
  Volume2, 
  Search, 
  CheckCircle2, 
  Trophy,
  X,
  Play
} from 'lucide-react';
import confetti from 'canvas-confetti';

export const VocabularyCurriculum: React.FC = () => {
  const [selectedCurriculum, setSelectedCurriculum] = useState<CurriculumType>('minna');
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'all'>('all');
  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [learnedWords, setLearnedWords] = useState<string[]>(() => {
    const saved = localStorage.getItem('nhaikanji_learned_vocab');
    return saved ? JSON.parse(saved) : ['v-m-01-01'];
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
      const matchLesson = selectedLesson === 'all' || item.lesson === selectedLesson;
      const matchSearch =
        item.word.includes(searchTerm) ||
        item.reading.includes(searchTerm) ||
        (item.hanViet && item.hanViet.toLowerCase().includes(searchTerm.toLowerCase())) ||
        item.meaning.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.romaji.toLowerCase().includes(searchTerm.toLowerCase());

      return matchCurr && matchLevel && matchLesson && matchSearch;
    });
  }, [selectedCurriculum, selectedLevel, selectedLesson, searchTerm]);

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
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
            <span>Kho Giáo Trình Từ Vựng Chuẩn N5 - N1</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Từ Vựng Giáo Trình & Luyện Phản Xạ
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Học từ vựng theo cấu trúc bài học của các bộ giáo trình kinh điển: Minna no Nihongo, Mimikara Oboeru, Tango và Shinkanzen Master.
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
                setSelectedLesson('all');
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
                {curr.totalWords.toLocaleString()} từ vựng
              </div>
            </button>
          );
        })}
      </div>

      {/* Controls & Filter Bar */}
      <div className="bg-white dark:bg-[#111827] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Tìm theo từ, Hiragana, Hán Việt..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Quick Quiz Action Button */}
          <button
            onClick={startQuiz}
            disabled={filteredWords.length === 0}
            className="w-full sm:w-auto px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white font-bold text-xs shadow-md shadow-orange-500/20 active:scale-95 transition-all flex items-center justify-center gap-1.5"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Làm Trắc Nghiệm ({filteredWords.length} từ)</span>
          </button>
        </div>

        {/* Level & Lesson Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
            <span className="text-xs font-bold text-slate-400 mr-1">Cấp độ:</span>
            {(['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as (JLPTLevel | 'all')[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
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

          {availableLessons.length > 0 && (
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 ml-auto">
              <span className="text-xs font-bold text-slate-400 mr-1">Bài học:</span>
              <button
                onClick={() => setSelectedLesson('all')}
                className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedLesson === 'all'
                    ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                Tất cả bài
              </button>
              {availableLessons.map(lessonNum => (
                <button
                  key={lessonNum}
                  onClick={() => setSelectedLesson(lessonNum)}
                  className={`px-2.5 py-1 rounded-xl text-xs font-bold transition-all ${
                    selectedLesson === lessonNum
                      ? 'bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                  }`}
                >
                  Bài {lessonNum}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Vocabulary Word List Cards */}
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
                    <span className="text-2xl font-black font-japanese text-slate-900 dark:text-white">
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

      {/* QUIZ MODAL */}
      {isQuizOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-md animate-in fade-in">
          <div className="relative w-full max-w-lg bg-white dark:bg-[#111827] rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-amber-500" />
                <h3 className="font-bold text-sm text-slate-900 dark:text-white">Trắc Nghiệm Phản Xạ Từ Vựng</h3>
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
