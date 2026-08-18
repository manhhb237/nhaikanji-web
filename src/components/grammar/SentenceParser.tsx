import React, { useState } from 'react';
import { SAMPLE_SENTENCES, parseJapaneseSentence } from '../../data/sentenceParserData';
import type { SentenceAnalysisResult, ParsedToken } from '../../types/grammar';
import { 
  BrainCircuit, 
  Sparkles, 
  Volume2, 
  Lightbulb
} from 'lucide-react';

export const SentenceParser: React.FC = () => {
  const [inputText, setInputText] = useState('私は毎日日本語を勉強します。');
  const [result, setResult] = useState<SentenceAnalysisResult>(SAMPLE_SENTENCES[0]);
  const [selectedToken, setSelectedToken] = useState<ParsedToken | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAnalyze = () => {
    if (!inputText.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      const res = parseJapaneseSentence(inputText);
      setResult(res);
      setSelectedToken(null);
      setIsAnalyzing(false);
    }, 300);
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ja-JP';
      utterance.rate = 0.85;
      window.speechSynthesis.speak(utterance);
    }
  };

  const posColorMap: Record<string, string> = {
    noun: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/30',
    verb: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30',
    particle: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/30',
    adjective: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/30',
    adverb: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30',
    auxiliary: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30',
    punctuation: 'bg-slate-500/10 text-slate-600 dark:text-slate-400 border-slate-500/30'
  };

  return (
    <div className="space-y-6">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold mb-3">
            <BrainCircuit className="w-3.5 h-3.5 text-amber-300" />
            <span>Công Cụ Phân Tích Cấu Trúc Câu (文の分析)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Bóc Tách & Giải Mã Từng Thành Phần Trong Câu
          </h2>
          <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
            Nhập bất kỳ câu tiếng Nhật nào để tự động bóc tách từ vựng, xác định trợ từ (は, が, を, に, で...), nhận diện cấu trúc ngữ pháp và âm Hán Việt.
          </p>
        </div>
      </div>

      {/* Input Box */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-lg space-y-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
            Nhập câu tiếng Nhật cần phân tích:
          </label>
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
              placeholder="VD: 私は毎日日本語を勉強します。"
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-sm sm:text-base font-japanese text-slate-900 dark:text-white focus:outline-none focus:border-blue-500 transition-colors shadow-inner"
            />
            <button
              onClick={handleAnalyze}
              disabled={isAnalyzing}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-all flex items-center justify-center gap-2 shrink-0"
            >
              <Sparkles className="w-4 h-4" />
              <span>{isAnalyzing ? 'Đang phân tích...' : 'Phân Tích Ngay'}</span>
            </button>
          </div>
        </div>

        {/* Sample Sentences Quick Buttons */}
        <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 mb-2">
            <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
            <span>Câu mẫu gợi ý thử nghiệm:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {SAMPLE_SENTENCES.map((sample, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setInputText(sample.originalSentence);
                  setResult(sample);
                  setSelectedToken(null);
                }}
                className="text-xs px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/30 text-slate-700 dark:text-slate-300 font-medium border border-slate-200 dark:border-slate-700/60 transition-all font-japanese text-left"
              >
                {sample.originalSentence}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Analysis Result Display */}
      {result && (
        <div className="space-y-6">
          {/* Main Sentence Card */}
          <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            {/* Top info */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white">
                  Độ khó {result.difficultyLevel}
                </span>
                <span className="text-xs font-semibold text-slate-400">
                  {result.tokens.length} thành phần từ loại
                </span>
              </div>

              <button
                onClick={() => speakText(result.originalSentence)}
                className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-xs font-bold hover:bg-blue-100 transition-colors shadow-sm"
              >
                <Volume2 className="w-4 h-4" />
                <span>Nghe đọc câu</span>
              </button>
            </div>

            {/* Sentence Interactive Token Flow */}
            <div>
              <div className="text-xs font-semibold text-slate-400 mb-3">
                Click vào từng từ để xem chi tiết bóc tách ngữ pháp:
              </div>
              <div className="flex flex-wrap items-end gap-2 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                {result.tokens.map((token, index) => {
                  const isSelected = selectedToken?.surface === token.surface;
                  return (
                    <button
                      key={index}
                      onClick={() => setSelectedToken(token)}
                      className={`group flex flex-col items-center p-2 rounded-xl transition-all border ${
                        isSelected
                          ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105'
                          : 'bg-white dark:bg-[#111827] border-slate-200 dark:border-slate-800 hover:border-blue-400 hover:shadow-md'
                      }`}
                    >
                      {/* Furigana */}
                      <span className={`text-[10px] font-medium ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                        {token.reading.split(' ')[0]}
                      </span>
                      {/* Surface */}
                      <span className={`text-xl sm:text-2xl font-bold font-japanese ${isSelected ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                        {token.surface}
                      </span>
                      {/* POS badge */}
                      <span className={`mt-1 text-[9px] font-bold px-1.5 py-0.5 rounded-md border ${
                        isSelected ? 'bg-white/20 border-transparent text-white' : posColorMap[token.pos] || 'bg-slate-100 text-slate-600'
                      }`}>
                        {token.posLabel}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vietnamese Translation */}
            <div className="p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20">
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-1">
                Dịch nghĩa tiếng Việt:
              </div>
              <p className="text-base font-bold text-slate-800 dark:text-slate-200">
                {result.vietnameseTranslation}
              </p>
            </div>

            {/* Selected Token Deep Dive */}
            {selectedToken && (
              <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-500/10 via-purple-500/5 to-blue-500/10 border border-indigo-500/30 animate-in fade-in space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-black font-japanese text-indigo-600 dark:text-indigo-400">
                      {selectedToken.surface}
                    </span>
                    <div>
                      <div className="font-bold text-sm text-slate-900 dark:text-white">
                        {selectedToken.reading}
                      </div>
                      {selectedToken.hanViet && (
                        <div className="text-xs font-bold text-amber-500">
                          Hán Việt: {selectedToken.hanViet}
                        </div>
                      )}
                    </div>
                  </div>

                  <span className={`text-xs font-bold px-2.5 py-1 rounded-xl border ${posColorMap[selectedToken.pos]}`}>
                    {selectedToken.posLabel}
                  </span>
                </div>

                <div className="text-xs text-slate-700 dark:text-slate-300 font-medium">
                  <strong>Ý nghĩa:</strong> {selectedToken.meaning}
                </div>

                {selectedToken.grammarNote && (
                  <div className="text-xs text-slate-600 dark:text-slate-400 p-2.5 rounded-xl bg-white/60 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800">
                    <strong className="text-amber-500">Lưu ý ngữ pháp:</strong> {selectedToken.grammarNote}
                  </div>
                )}
              </div>
            )}

            {/* Grammar Points Detected */}
            {result.grammarPoints.length > 0 && (
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Điểm ngữ pháp nhận diện trong câu:
                </div>
                <div className="flex flex-wrap gap-2">
                  {result.grammarPoints.map((gp, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/30 text-xs font-bold flex items-center gap-1.5"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      {gp}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
