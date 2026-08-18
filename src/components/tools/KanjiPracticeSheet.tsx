import React, { useState } from 'react';
import { KANJI_DATA } from '../../data/kanjiData';
import type { JLPTLevel } from '../../types/kanji';
import { 
  Printer, 
  FileText, 
  Plus, 
  Trash2
} from 'lucide-react';

export const KanjiPracticeSheet: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel | 'custom'>('N5');
  const [selectedKanjiList, setSelectedKanjiList] = useState<string[]>(['日', '月', '木', '水', '火', '金', '土', '学']);
  const [customInput, setCustomInput] = useState('');
  const [showHanViet, setShowHanViet] = useState(true);
  const [showMeaning, setShowMeaning] = useState(true);
  const gridBoxesCount = 8;

  const handleLevelChange = (lvl: JLPTLevel | 'custom') => {
    setSelectedLevel(lvl);
    if (lvl !== 'custom') {
      const kanjis = KANJI_DATA.filter(k => k.level === lvl).map(k => k.kanji);
      setSelectedKanjiList(kanjis.slice(0, 8));
    }
  };

  const handleAddCustom = () => {
    if (!customInput.trim()) return;
    const chars = customInput.trim().split('').filter(c => c.trim() !== '');
    setSelectedKanjiList(prev => Array.from(new Set([...prev, ...chars])));
    setCustomInput('');
  };

  const handleRemove = (char: string) => {
    setSelectedKanjiList(prev => prev.filter(c => c !== char));
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Header Widget */}
      <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl relative overflow-hidden print:hidden">
        <div className="relative z-10 max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold">
            <FileText className="w-3.5 h-3.5 text-amber-300" />
            <span>Bộ Công Cụ Luyện Viết Chữ Chuẩn Ô Ly (PDF Generator)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
            Tạo & Xuất File Luyện Viết Kanji / Từ Vựng
          </h2>
          <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
            Tùy biến bảng tập viết chữ Hán theo chuẩn ô ly vuông Nhật Bản (Genkouyoushi) có nét mờ hướng dẫn, xuất file PDF hoặc in trực tiếp trên giấy A4.
          </p>
        </div>
      </div>

      {/* Control Panel (Hidden in Print) */}
      <div className="bg-white dark:bg-[#111827] rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 print:hidden">
        <div className="flex flex-wrap items-center justify-between gap-4">
          {/* Level Switcher */}
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400">Chọn nhanh theo cấp:</span>
            {(['N5', 'N4', 'N3', 'N2', 'N1'] as JLPTLevel[]).map(lvl => (
              <button
                key={lvl}
                onClick={() => handleLevelChange(lvl)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedLevel === lvl
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Print / Export Action Button */}
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 active:scale-95 transition-all flex items-center gap-2"
          >
            <Printer className="w-4 h-4" />
            <span>In / Xuất File PDF (A4)</span>
          </button>
        </div>

        {/* Custom Input */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
          <input
            type="text"
            value={customInput}
            onChange={(e) => setCustomInput(e.target.value)}
            placeholder="Nhập chữ Kanji bất kỳ để thêm vào bảng (VD: 愛, 夢, 響...)"
            className="flex-1 px-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white focus:outline-none focus:border-blue-500"
          />
          <button
            onClick={handleAddCustom}
            className="px-4 py-2 rounded-xl bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 text-xs font-bold flex items-center gap-1.5"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Thêm chữ</span>
          </button>
        </div>

        {/* Options Toggles */}
        <div className="flex flex-wrap items-center gap-4 text-xs text-slate-600 dark:text-slate-300 font-medium">
          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showHanViet}
              onChange={(e) => setShowHanViet(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Hiển thị âm Hán Việt</span>
          </label>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={showMeaning}
              onChange={(e) => setShowMeaning(e.target.checked)}
              className="rounded border-slate-300 text-blue-600 focus:ring-blue-500"
            />
            <span>Hiển thị câu chuyện chiết tự gợi nhớ</span>
          </label>
        </div>

        {/* Current Selected Kanji Pills */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2">
          <span className="text-xs font-bold text-slate-400 mr-1">Chữ đang in ({selectedKanjiList.length}):</span>
          {selectedKanjiList.map(char => (
            <span
              key={char}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold text-xs border border-blue-200 dark:border-blue-700/50"
            >
              <span className="font-japanese text-sm">{char}</span>
              <button onClick={() => handleRemove(char)} className="hover:text-rose-500">
                <Trash2 className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* PRINTABLE SHEET CONTAINER (Styled for both Screen & Print A4) */}
      <div className="bg-white text-slate-900 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl print:border-none print:shadow-none print:p-0 print:m-0 space-y-6">
        {/* Printable Header */}
        <div className="text-center border-b-2 border-slate-800 pb-4">
          <div className="text-2xl font-black tracking-wider text-slate-900 uppercase">
            PHIẾU TẬP VIẾT HÁN TỰ (KANJI PRACTICE SHEET)
          </div>
          <div className="flex justify-between items-center text-xs font-semibold text-slate-600 mt-2 px-2">
            <span>Học viện: Nhai Kanji - Xóa Mù Chiết Tự</span>
            <span>Họ và tên: ............................................................</span>
            <span>Ngày: ...... / ...... / 202...</span>
          </div>
        </div>

        {/* Kanji Rows */}
        <div className="space-y-6">
          {selectedKanjiList.map((char, index) => {
            const kanjiMeta = KANJI_DATA.find(k => k.kanji === char);
            return (
              <div key={index} className="space-y-1.5 break-inside-avoid">
                {/* Meta info header */}
                <div className="flex items-center justify-between text-xs font-bold text-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-base text-blue-700 font-japanese font-black">{char}</span>
                    {showHanViet && kanjiMeta && (
                      <span className="text-blue-700 uppercase">({kanjiMeta.hanViet})</span>
                    )}
                    {kanjiMeta && (
                      <span className="text-slate-500 font-normal">
                        - {kanjiMeta.strokes} nét • On: {kanjiMeta.onyomi.join(', ') || '-'} • Kun: {kanjiMeta.kunyomi.join(', ') || '-'}
                      </span>
                    )}
                  </div>
                </div>

                {showMeaning && kanjiMeta && (
                  <div className="text-[11px] text-slate-600 italic">
                    Chiết tự: {kanjiMeta.mnemonic}
                  </div>
                )}

                {/* The Practice Grid Row (Standard Japanese Grid Boxes) */}
                <div className="flex items-center gap-1.5 overflow-x-auto">
                  {/* Master Box with character */}
                  <div className="w-12 h-12 border-2 border-slate-900 flex items-center justify-center relative shrink-0 bg-slate-100">
                    <div className="absolute inset-0 border-t border-dashed border-slate-300 pointer-events-none top-1/2" />
                    <div className="absolute inset-0 border-l border-dashed border-slate-300 pointer-events-none left-1/2" />
                    <span className="text-3xl font-black font-japanese text-slate-900">{char}</span>
                  </div>

                  {/* 2 Trace boxes (faint outline) */}
                  <div className="w-12 h-12 border border-slate-400 flex items-center justify-center relative shrink-0">
                    <div className="absolute inset-0 border-t border-dashed border-slate-300 pointer-events-none top-1/2" />
                    <div className="absolute inset-0 border-l border-dashed border-slate-300 pointer-events-none left-1/2" />
                    <span className="text-3xl font-japanese text-slate-300 select-none">{char}</span>
                  </div>

                  <div className="w-12 h-12 border border-slate-400 flex items-center justify-center relative shrink-0">
                    <div className="absolute inset-0 border-t border-dashed border-slate-300 pointer-events-none top-1/2" />
                    <div className="absolute inset-0 border-l border-dashed border-slate-300 pointer-events-none left-1/2" />
                    <span className="text-3xl font-japanese text-slate-200 select-none">{char}</span>
                  </div>

                  {/* Empty Practice Boxes */}
                  {Array.from({ length: gridBoxesCount - 3 }).map((_, bIdx) => (
                    <div key={bIdx} className="w-12 h-12 border border-slate-400 flex items-center justify-center relative shrink-0">
                      <div className="absolute inset-0 border-t border-dashed border-slate-200 pointer-events-none top-1/2" />
                      <div className="absolute inset-0 border-l border-dashed border-slate-200 pointer-events-none left-1/2" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Printable Footer */}
        <div className="text-center text-[10px] text-slate-500 pt-6 border-t border-slate-300 flex items-center justify-between">
          <span>Nhai Kanji - Hệ thống học tiếng Nhật hiểu sâu bản chất qua Chiết tự & Sơ đồ tư duy</span>
          <span>Trang 1 / 1</span>
        </div>
      </div>
    </div>
  );
};
