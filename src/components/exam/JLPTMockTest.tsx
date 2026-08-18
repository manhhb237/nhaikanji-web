import React, { useState, useEffect } from 'react';
import type { JLPTLevel } from '../../types/kanji';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Trophy
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface Question {
  id: string;
  section: 'moji_goi' | 'bunpo' | 'dokkai';
  sectionName: string;
  questionText: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const MOCK_QUESTIONS_N5: Question[] = [
  {
    id: 'q-n5-01',
    section: 'moji_goi',
    sectionName: 'Chữ Hán & Từ Vựng',
    questionText: '毎朝、七時に【起きます】。Cách đọc đúng của từ trong ngoặc là gì?',
    options: ['おきます', 'いきます', 'きます', 'やすみます'],
    correctIndex: 0,
    explanation: '起きます đọc là 「おきます」nghĩa là thức dậy (Khởi).'
  },
  {
    id: 'q-n5-02',
    section: 'moji_goi',
    sectionName: 'Chữ Hán & Từ Vựng',
    questionText: '【あめ】がふっています。Chữ Hán tương ứng là gì?',
    options: ['雨', '雪', '雲', '風'],
    correctIndex: 0,
    explanation: 'あめ (Mưa) chữ Hán là 「雨」.'
  },
  {
    id: 'q-n5-03',
    section: 'bunpo',
    sectionName: 'Ngữ Pháp & Cấu Trúc',
    questionText: 'わたしは　ベトナム（　）来ました。Điền trợ từ thích hợp:',
    options: ['から', 'まで', 'に', 'で'],
    correctIndex: 0,
    explanation: 'ベトナムから来ました (Tôi đến từ Việt Nam). Dùng から để chỉ xuất phát điểm.'
  },
  {
    id: 'q-n5-04',
    section: 'bunpo',
    sectionName: 'Ngữ Pháp & Cấu Trúc',
    questionText: 'いっしょに　お茶を（　）ませんか。Điền dạng đúng của động từ:',
    options: ['飲み', '飲ま', '飲む', '飲んで'],
    correctIndex: 0,
    explanation: 'Cấu trúc rủ rê lịch sự: V(bỏ ます) + ませんか $\\rightarrow$ 飲みませんか.'
  }
];

const MOCK_QUESTIONS_N3: Question[] = [
  {
    id: 'q-n3-01',
    section: 'moji_goi',
    sectionName: 'Chữ Hán & Từ Vựng',
    questionText: 'この商品は若者の間で【流行】している。Cách đọc đúng là:',
    options: ['りゅうこう', 'りゅうごう', 'りょうこう', 'りょうごう'],
    correctIndex: 0,
    explanation: '流行 đọc là 「りゅうこう」nghĩa là thịnh hành, trào lưu.'
  },
  {
    id: 'q-n3-02',
    section: 'bunpo',
    sectionName: 'Ngữ Pháp & Cấu Trúc',
    questionText: '雨が降らない（　）、試合は予定通り行われます。Điền cấu trúc thích hợp:',
    options: ['かぎり', 'だけに', 'せいか', 'わりに'],
    correctIndex: 0,
    explanation: '～かぎり nghĩa là "chừng nào mà / miễn là". Chừng nào trời không mưa thì trận đấu vẫn diễn ra bình thường.'
  },
  {
    id: 'q-n3-03',
    section: 'dokkai',
    sectionName: 'Đọc Hiểu',
    questionText: '「失敗を恐れて何もしないことこそが、最大の失敗である。」Tác giả muốn truyền tải thông điệp gì?',
    options: [
      'Không dám hành động vì sợ thất bại mới là điều tồi tệ nhất.',
      'Thất bại là điều chắc chắn sẽ xảy ra trong cuộc sống.',
      'Nên cẩn thận không làm gì để tránh mắc lỗi.',
      'Chỉ những người thành công mới không bao giờ thất bại.'
    ],
    correctIndex: 0,
    explanation: 'Ý nghĩa của câu khẳng định việc không hành động vì sợ hãi chính là thất bại lớn nhất.'
  }
];

export const JLPTMockTest: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>('N5');
  const [isTestStarted, setIsTestStarted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30 * 60); // 30 mins
  const [userAnswers, setUserAnswers] = useState<{ [key: string]: number }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const questions = selectedLevel === 'N5' || selectedLevel === 'N4' ? MOCK_QUESTIONS_N5 : MOCK_QUESTIONS_N3;

  // Timer countdown
  useEffect(() => {
    let timer: any = null;
    if (isTestStarted && !isSubmitted && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isTestStarted && !isSubmitted) {
      handleSubmit();
    }
    return () => clearInterval(timer);
  }, [isTestStarted, isSubmitted, timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleStart = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setTimeLeft(30 * 60);
    setIsTestStarted(true);
  };

  const handleSelectOption = (questionId: string, optionIndex: number) => {
    if (isSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    let correct = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    const percent = Math.round((correct / questions.length) * 100);
    if (percent >= 60) {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (userAnswers[q.id] === q.correctIndex) {
        correct++;
      }
    });
    return {
      correct,
      total: questions.length,
      percentage: Math.round((correct / questions.length) * 100),
      passed: (correct / questions.length) >= 0.6
    };
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-amber-600 via-orange-600 to-rose-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <Award className="w-3.5 h-3.5 text-amber-300" />
            <span>Phòng Thi Thử Chuẩn Cấu Trúc JLPT (Mock Tests)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Thi Thử Đánh Giá Năng Lực JLPT
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Mô phỏng chân thực đề thi chính thức với đồng hồ bấm giờ đếm ngược, phân bố dạng bài chuẩn và chấm điểm giải thích chi tiết.
          </p>
        </div>
      </div>

      {!isTestStarted ? (
        /* Test Setup Screen */
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6 text-center max-w-xl mx-auto">
          <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center mx-auto shadow-lg">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
              Chọn Cấp Độ Đề Thi
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Thời gian làm bài: 30 phút • Điểm đạt tiêu chuẩn: $\ge$ 60%
            </p>
          </div>

          <div className="flex items-center justify-center gap-2">
            {(['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-4 py-2.5 rounded-2xl font-bold text-sm transition-all ${
                  selectedLevel === lvl
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 ring-2 ring-blue-500/30'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <button
            onClick={handleStart}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-orange-500/25 active:scale-95 transition-all"
          >
            Bắt Đầu Làm Bài Thi {selectedLevel}
          </button>
        </div>
      ) : (
        /* Active Test Interface */
        <div className="space-y-6">
          {/* Sticky Timer Bar */}
          <div className="sticky top-4 z-20 bg-white/95 dark:bg-[#111827]/95 backdrop-blur-md p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-xl bg-blue-600 text-white font-bold text-xs">
                Đề Thi {selectedLevel}
              </span>
              <span className="text-xs font-semibold text-slate-400">
                Đã trả lời {Object.keys(userAnswers).length} / {questions.length} câu
              </span>
            </div>

            <div className="flex items-center gap-2 text-amber-500 font-mono font-black text-base">
              <Clock className="w-4 h-4 animate-pulse" />
              <span>{formatTime(timeLeft)}</span>
            </div>
          </div>

          {/* Result Banner if submitted */}
          {isSubmitted && (
            <div className={`p-6 rounded-3xl border shadow-xl flex items-center justify-between ${
              calculateScore().passed
                ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/40 text-emerald-800 dark:text-emerald-300'
                : 'bg-rose-50 dark:bg-rose-950/20 border-rose-500/40 text-rose-800 dark:text-rose-300'
            }`}>
              <div className="space-y-1">
                <div className="text-xl font-extrabold flex items-center gap-2">
                  {calculateScore().passed ? <CheckCircle2 className="w-6 h-6 text-emerald-500" /> : <XCircle className="w-6 h-6 text-rose-500" />}
                  <span>{calculateScore().passed ? 'CHÚC MỪNG! BẠN ĐÃ ĐỖ KỲ THI' : 'CHƯA ĐẠT ĐIỂM TIÊU CHUẨN'}</span>
                </div>
                <p className="text-xs opacity-80">
                  Đúng {calculateScore().correct} / {calculateScore().total} câu ({calculateScore().percentage}%)
                </p>
              </div>

              <button
                onClick={handleStart}
                className="px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border font-bold text-xs shadow-md"
              >
                Làm Lại Đề Thi
              </button>
            </div>
          )}

          {/* Question List */}
          <div className="space-y-6">
            {questions.map((q, idx) => {
              const selectedOpt = userAnswers[q.id];
              const isCorrect = isSubmitted && selectedOpt === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className={`p-6 rounded-3xl bg-white dark:bg-[#111827] border transition-all space-y-4 ${
                    isSubmitted
                      ? isCorrect
                        ? 'border-emerald-500/40 bg-emerald-50/10'
                        : 'border-rose-500/40 bg-rose-50/10'
                      : 'border-slate-200 dark:border-slate-800 shadow-sm'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">
                      Câu {idx + 1} • {q.sectionName}
                    </span>
                  </div>

                  <div className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white font-japanese">
                    {q.questionText}
                  </div>

                  {/* Options */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, oIdx) => {
                      const isOptionSelected = selectedOpt === oIdx;
                      let btnStyle = 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-800 dark:text-slate-200';

                      if (isSubmitted) {
                        if (oIdx === q.correctIndex) {
                          btnStyle = 'bg-emerald-500 text-white border-emerald-500 font-bold shadow-md';
                        } else if (isOptionSelected) {
                          btnStyle = 'bg-rose-500 text-white border-rose-500 font-bold';
                        }
                      } else if (isOptionSelected) {
                        btnStyle = 'bg-blue-600 text-white border-blue-600 font-bold shadow-md';
                      }

                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectOption(q.id, oIdx)}
                          className={`p-3.5 rounded-2xl border text-left font-japanese text-xs sm:text-sm transition-all ${btnStyle}`}
                        >
                          <span className="font-sans font-bold mr-2">{oIdx + 1}.</span>
                          <span>{opt}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation if submitted */}
                  {isSubmitted && (
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-300">
                      <strong className="text-blue-600 dark:text-blue-400">Giải thích: </strong>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Button */}
          {!isSubmitted && (
            <div className="text-center pt-4">
              <button
                onClick={handleSubmit}
                className="px-10 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-blue-500/25 active:scale-95 transition-all"
              >
                Nộp Bài & Chấm Điểm
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
