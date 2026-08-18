import React, { useState } from 'react';
import type { JLPTLevel } from '../../types/kanji';
import { 
  Headphones, 
  Play, 
  Pause, 
  Check, 
  Eye, 
  EyeOff, 
  ChevronRight
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface AudioSentence {
  id: string;
  level: JLPTLevel;
  japanese: string;
  furigana: string;
  romaji: string;
  vietnamese: string;
  category: string;
  tips?: string;
}

const SHADOWING_DATA: AudioSentence[] = [
  {
    id: 's-n5-01',
    level: 'N5',
    japanese: '初めまして、どうぞよろしくお願いします。',
    furigana: 'はじめまして、どうぞよろしくおねがいします。',
    romaji: 'hajimemashite, douzo yoroshiku onegaishimasu.',
    vietnamese: 'Rất vui được gặp bạn, xin hãy giúp đỡ tôi.',
    category: 'Giao tiếp hàng ngày'
  },
  {
    id: 's-n5-02',
    level: 'N5',
    japanese: '明日の朝、駅の前で会いましょう。',
    furigana: 'あしたのあさ、えきのまえであいましょう。',
    romaji: 'ashita no asa, eki no mae de aimashou.',
    vietnamese: 'Sáng mai, chúng ta hãy gặp nhau trước nhà ga nhé.',
    category: 'Hẹn gặp & Lịch trình'
  },
  {
    id: 's-n4-01',
    level: 'N4',
    japanese: '日本語が上手になりたいので、毎日練習しています。',
    furigana: 'にほんごがじょうずになりたいので、まいにちれんしゅうしています。',
    romaji: 'nihongo ga jouzu ni naritai node, mainichi renshuu shiteimasu.',
    vietnamese: 'Vì muốn tiếng Nhật trở nên giỏi hơn, mỗi ngày tôi đều luyện tập.',
    category: 'Học tập & Động lực'
  },
  {
    id: 's-n3-01',
    level: 'N3',
    japanese: 'お客様のご意見を参考にして、サービスを改善いたします。',
    furigana: 'おきゃくさまのごいけんをさんこうにして、サービスをかいぜんいたします。',
    romaji: 'okyakusama no goiken wo sankou ni shite, saabisu wo kaizen itashimasu.',
    vietnamese: 'Chúng tôi sẽ tham khảo ý kiến của quý khách để cải tiến chất lượng dịch vụ.',
    category: 'Công việc & Khách hàng'
  },
  {
    id: 's-n2-01',
    level: 'N2',
    japanese: 'いかなる困難があろうとも、最後まで諦めずにやり抜く覚悟です。',
    furigana: 'いかなるこんなんがあろうとも、さいごまであきらめずにやりぬくかくごです。',
    romaji: 'ikanaru konnan ga arou tomo, saigo made akiramezu ni yarinuku kakugo desu.',
    vietnamese: 'Dù có gặp bất kỳ khó khăn nào, tôi cũng đã chuẩn bị quyết tâm không bỏ cuộc đến phút cuối cùng.',
    category: 'Ý chí & Đàm phán'
  },
  {
    id: 's-n1-01',
    level: 'N1',
    japanese: '経済のグローバル化に伴い、多角的な視点から物事を捉える力が求められている。',
    furigana: 'けいざいのグローバルかにともない、たかくてきなしてんからものごとをとらえるちからがもとめられている。',
    romaji: 'keizai no guroobaruka ni tomonai, takakutekina shiten kara monogoto wo toraeru chikara ga motomerareteiru.',
    vietnamese: 'Cùng với xu hướng toàn cầu hóa kinh tế, người ta đòi hỏi năng lực nhìn nhận sự vật dưới góc nhìn đa chiều.',
    category: 'Xã hội & Học thuật'
  }
];

export const ShadowingDictation: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'all'>('all');
  const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(0.85);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userInput, setUserInput] = useState('');
  const [showScript, setShowScript] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const filteredList = SHADOWING_DATA.filter(
    s => selectedLevel === 'all' || s.level === selectedLevel
  );

  const currentSentence = filteredList[activeSentenceIndex] || filteredList[0];

  const playAudio = (text: string, speed = playbackSpeed) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = speed;
      utterance.onstart = () => setIsPlaying(true);
      utterance.onend = () => setIsPlaying(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleCheckDictation = () => {
    if (!userInput.trim()) return;
    setIsSubmitted(true);

    // Compute simple similarity score between userInput and japanese/furigana
    const targetClean = currentSentence.japanese.replace(/[、。！？\s]/g, '');
    const targetKana = currentSentence.furigana.replace(/[、。！？\s]/g, '');
    const userClean = userInput.replace(/[、。！？\s]/g, '');

    let matchScore = 0;
    if (userClean === targetClean || userClean === targetKana) {
      matchScore = 100;
    } else {
      // Character overlap ratio
      let matchCount = 0;
      for (const char of userClean) {
        if (targetClean.includes(char) || targetKana.includes(char)) {
          matchCount++;
        }
      }
      matchScore = Math.min(100, Math.round((matchCount / Math.max(targetClean.length, userClean.length)) * 100));
    }

    setScore(matchScore);
    if (matchScore >= 80) {
      confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    }
  };

  const handleNext = () => {
    setUserInput('');
    setIsSubmitted(false);
    setShowScript(false);
    setScore(null);
    if (activeSentenceIndex + 1 < filteredList.length) {
      setActiveSentenceIndex(prev => prev + 1);
    } else {
      setActiveSentenceIndex(0);
    }
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-700 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <Headphones className="w-3.5 h-3.5 text-amber-300" />
            <span>Luyện Nghe Đuổi & Chép Chính Tả Phản Xạ (Shadowing & Dictation)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Luyện Nghe Shadowing & Dictation
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Nghe người bản xứ phát âm, lặp lại ngữ điệu chuẩn Tokyo và gõ chép chính tả để rèn luyện đôi tai bắt từ nhạy bén cho kỳ thi JLPT.
          </p>
        </div>
      </div>

      {/* Level Filters */}
      <div className="flex items-center justify-between gap-3 bg-white dark:bg-[#111827] p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <span className="text-xs font-bold text-slate-400 mr-1">Cấp độ:</span>
          {(['all', 'N5', 'N4', 'N3', 'N2', 'N1'] as (JLPTLevel | 'all')[]).map(lvl => (
            <button
              key={lvl}
              onClick={() => {
                setSelectedLevel(lvl);
                setActiveSentenceIndex(0);
                setUserInput('');
                setIsSubmitted(false);
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

        <div className="text-xs font-bold text-slate-400">
          Câu {activeSentenceIndex + 1} / {filteredList.length}
        </div>
      </div>

      {/* Main Practice Workspace */}
      {currentSentence && (
        <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
          {/* Top Sentence Category & Speed Controls */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-bold text-xs">
                {currentSentence.level}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {currentSentence.category}
              </span>
            </div>

            {/* Speed buttons */}
            <div className="flex items-center gap-1.5 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-bold">
              <span className="text-slate-400 text-[11px] px-1.5">Tốc độ:</span>
              {[0.75, 0.85, 1.0, 1.25].map(speed => (
                <button
                  key={speed}
                  onClick={() => setPlaybackSpeed(speed)}
                  className={`px-2 py-1 rounded-lg transition-all ${
                    playbackSpeed === speed
                      ? 'bg-white dark:bg-slate-900 text-blue-600 dark:text-blue-400 shadow-sm'
                      : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {speed}x
                </button>
              ))}
            </div>
          </div>

          {/* Audio Player Controller Box */}
          <div className="py-6 sm:py-8 bg-gradient-to-br from-slate-50 to-blue-50/30 dark:from-slate-900 dark:to-blue-950/20 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col items-center justify-center gap-4 text-center">
            <button
              onClick={() => playAudio(currentSentence.japanese)}
              className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-xl shadow-blue-500/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95"
            >
              {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8 ml-1" />}
            </button>
            <div className="text-xs font-bold text-slate-500 dark:text-slate-400">
              Nhấn để nghe phát âm và lặp lại theo nhịp (Shadowing)
            </div>
          </div>

          {/* Dictation Typing Input Area */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-slate-700 dark:text-slate-300">
              Chép lại câu bạn nghe được (Dictation):
            </label>
            <textarea
              rows={3}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              placeholder="Gõ câu bằng Hiragana, Kanji hoặc Romaji..."
              className="w-full p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-japanese text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <div className="flex items-center gap-2">
              <button
                onClick={handleCheckDictation}
                disabled={!userInput.trim()}
                className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5"
              >
                <Check className="w-4 h-4" />
                <span>Kiểm Tra Kết Quả</span>
              </button>

              <button
                onClick={() => setShowScript(!showScript)}
                className="px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-1.5"
              >
                {showScript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{showScript ? 'Ẩn Lời Thoại' : 'Xem Lời Thoại (Script)'}</span>
              </button>
            </div>

            <button
              onClick={handleNext}
              className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-800 dark:text-slate-200 font-bold text-xs flex items-center gap-1.5"
            >
              <span>Câu Kế Tiếp</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Score & Feedback Card */}
          {isSubmitted && score !== null && (
            <div className={`p-4 rounded-2xl border flex items-center justify-between ${
              score >= 80 
                ? 'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-500/30 text-emerald-700 dark:text-emerald-300' 
                : 'bg-amber-50 dark:bg-amber-950/20 border-amber-500/30 text-amber-700 dark:text-amber-300'
            }`}>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${
                  score >= 80 ? 'bg-emerald-500 text-white' : 'bg-amber-500 text-white'
                }`}>
                  {score}%
                </div>
                <div>
                  <div className="font-bold text-sm">
                    {score >= 80 ? 'Rất Tuyệt Vời! Đôi tai của bạn rất nhạy.' : 'Khá Tốt! Hãy đối chiếu với đáp án bên dưới.'}
                  </div>
                  <div className="text-xs opacity-80">
                    Độ khớp ký tự chép chính tả: {score}%
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Revealed Script & Meaning */}
          {(showScript || isSubmitted) && (
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3 animate-in fade-in">
              <div className="text-xs font-bold text-slate-400 uppercase">Đáp Án & Lời Thoại Chuẩn:</div>
              <div className="text-xl sm:text-2xl font-black font-japanese text-blue-600 dark:text-blue-400">
                {currentSentence.japanese}
              </div>
              <div className="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                Furigana: {currentSentence.furigana}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                Nghĩa tiếng Việt: {currentSentence.vietnamese}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
