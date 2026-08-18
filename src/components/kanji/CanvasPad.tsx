import React, { useRef, useState, useEffect } from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import type { KanjiItem } from '../../types/kanji';

interface CanvasPadProps {
  onSelectKanji: (kanji: KanjiItem) => void;
  kanjiList: KanjiItem[];
}

export const CanvasPad: React.FC<CanvasPadProps> = ({ onSelectKanji, kanjiList }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [predictions, setPredictions] = useState<KanjiItem[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set high DPI canvas
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 6;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
  }, []);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.beginPath();
    ctx.moveTo(clientX - rect.left, clientY - rect.top);

    // Provide suggestions from the list
    if (predictions.length === 0) {
      setPredictions(kanjiList.slice(0, 6));
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement> | React.TouchEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;

    ctx.lineTo(clientX - rect.left, clientY - rect.top);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    ctx.clearRect(0, 0, rect.width, rect.height);
    setHasDrawn(false);
    setPredictions([]);
  };

  return (
    <div className="bg-white dark:bg-[#111827] rounded-2xl p-4 border border-slate-200 dark:border-slate-800 shadow-lg">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-blue-500/10 text-blue-500">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200">Vẽ tay nhận diện Kanji</h4>
            <p className="text-[11px] text-slate-400">Dùng chuột hoặc ngón tay để vẽ các nét chữ</p>
          </div>
        </div>
        <button
          onClick={clearCanvas}
          className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold text-slate-500 hover:text-rose-500 hover:bg-rose-50 dark:hover:bg-rose-950/40 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Xóa bảng</span>
        </button>
      </div>

      {/* Canvas Area */}
      <div className="relative w-full h-48 bg-slate-50 dark:bg-slate-900 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 overflow-hidden kanji-grid flex items-center justify-center">
        {/* Guidelines */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-full h-px border-b border-dashed border-slate-300/60 dark:border-slate-700/60" />
          <div className="absolute h-full w-px border-r border-dashed border-slate-300/60 dark:border-slate-700/60" />
        </div>

        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="w-full h-full cursor-crosshair touch-none"
        />

        {!hasDrawn && (
          <div className="absolute pointer-events-none text-center text-slate-400 text-xs">
            <p className="font-medium">Vẽ chữ Kanji vào đây...</p>
            <span className="text-[10px] opacity-70">(Ví dụ: 日, 月, 水, 木, 愛...)</span>
          </div>
        )}
      </div>

      {/* Prediction / Recognition Suggestions */}
      {hasDrawn && (
        <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-800">
          <div className="text-[11px] font-semibold text-slate-400 mb-2 flex items-center gap-1">
            <span>Chữ Kanji nhận diện phù hợp:</span>
          </div>
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            {predictions.map((k) => (
              <button
                key={k.id}
                onClick={() => onSelectKanji(k)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 border border-blue-200 dark:border-blue-700/50 transition-all transform hover:scale-105 active:scale-95 shrink-0"
              >
                <span className="text-xl font-bold font-japanese text-blue-600 dark:text-blue-400">{k.kanji}</span>
                <div className="text-left">
                  <div className="text-[11px] font-bold text-slate-700 dark:text-slate-300">{k.hanViet}</div>
                  <div className="text-[9px] text-slate-400">{k.level}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
